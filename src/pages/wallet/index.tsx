/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";

import { Button, Container, Nav, Navbar, NavDropdown, DropdownButton, Dropdown, Modal } from 'react-bootstrap';
// @ts-ignore
import { useRouter } from "next/dist/client/router";
import Popup from "../components/PopUp";
import { ChainId } from "@shibarium/core-sdk";
import Web3 from "web3";
import CommonModal , {CommonModalNew} from "../components/CommonModel";
import InnerHeader from "../../pages/inner-header";
// @ts-ignore
import Link from 'next/link'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import Sidebar from "../layout/sidebar"
import Web3Status from "app/components/Web3Status";
import { useActiveWeb3React } from "app/services/web3";
import { useMoralis } from "react-moralis";
import { useEthBalance } from "../../hooks/useEthBalance";
import { useTokenBalance, getTokenBalance } from '../../hooks/useTokenBalance';
import { BONE_ID, ENV_CONFIGS } from '../../config/constant';
import { BONE } from "../../web3/contractAddresses";
import ERC20 from "../../ABI/ERC20Abi.json";
import fromExponential from "from-exponential";
import { useAppDispatch } from "../../state/hooks"
import { addTransaction, finalizeTransaction } from "../../state/transactions/actions"
import QrModal from "../components/QrModal";
import { getBoneUSDValue, getWalletTokenList } from "../../services/apis/validator/index";
import NumberFormat from 'react-number-format';
import { useSearchFilter } from "app/hooks/useSearchFilter";

const sendInitialState = {
  step0: true,
  step1: false,
  step2: false,
  step3: false,
  showTokens: false
}

export default function Wallet() {

  const router = useRouter()
  const { chainId = 1, account, library } = useActiveWeb3React();
  const availBalance = chainId === ChainId.SHIBARIUM ? useEthBalance() : useTokenBalance(ENV_CONFIGS[chainId].BONE);
  const lib: any = library
  const web3: any = new Web3(lib?.provider)
  const dispatch = useAppDispatch()

  const [senderAddress, setSenderAdress] = useState('');
  const [userQrCode, setUserQrCode] = useState(false)
  const [isValidAddress, setIsValidAddress] = useState(false)
  const [sendAmount, setSendAmount] = useState('')
  const [senderModal, setSenderModal] = useState(false)
  const [verifyAmount, setVerifyAmount] = useState(false)
  const [transactionHash, setTransactionHash] = useState('')
  const [boneUSDValue, setBoneUSDValue] = useState(0);
  const [showSendModal, setSendModal] = useState(sendInitialState);
  const [menuState, setMenuState] = useState(false);
  const [tokenList, setTokenList] = useState<any>([]);
  const [tokenFilteredList, setTokenFilteredList] = useState<any>([]);
  const [tokenModalList, setTokenModalList] = useState<any>([]);
  const [selectedToken, setSelectedToken] = useState<any>({})
  const [searchKey, setSearchKey] = useState<string>('');
  const [modalKeyword, setmodalKeyword] = useState<string>('');

  const searchResult = useSearchFilter(tokenList, searchKey.trim());

  useEffect(() => {
    if(tokenFilteredList.length) {
     let obj = tokenFilteredList.filter((x:any) => x.parentSymbol === 'BONE').map((y:any) => y)[0] 
     setSelectedToken(obj) 
    }
  },[tokenFilteredList])

  console.log(selectedToken)

  const varifyAccount = (address: any) => {
    let result = Web3.utils.isAddress(address)
    setIsValidAddress(result)
    return result
  }

  const getTokensList = () => {
    getWalletTokenList('pos').then(res => {
      let list = res.data.data.tokenList
      list.forEach(async (x: any) => {
        x.balance = await getTokenBalance(lib, account, x.parentContract)
      })
      setTokenList((pre:any[]) => ([...pre, ...list]))
      setTokenFilteredList((pre:any[]) => ([...pre, ...list]))
      setTokenModalList((pre:any[]) => ([...pre, ...list]))
    })
    getWalletTokenList('plasma').then(async (res: any) => {
      let list = res.data.data.tokenList
      list.forEach(async (x: any) => {
        x.balance = await getTokenBalance(lib, account, x.parentContract)
      })
      setTokenList((pre:any[]) => ([...pre, ...list]))
      setTokenFilteredList((pre:any[]) => ([...pre, ...list]))
      setTokenModalList((pre:any[]) => ([...pre, ...list]))

    })
  }


  console.log(tokenList)

  useEffect(() => {
    if (account) {
      getBoneUSDValue(BONE_ID).then(res => {
        setBoneUSDValue(res.data.data.price);
      })
      getTokensList()
    }

  }, [account])




  const handleChange = (e: any) => {
    setSenderAdress(e.target.value)
    const isValid = varifyAccount(e.target.value)
    console.log(isValid)
  }


  const handleMenuState = () => {
    console.log("called click")
    setMenuState(false)
  }

  const handleSend = () => {
    console.log("called handleSend")
    if (isValidAddress && sendAmount) {
      setSendModal({
        step0: false,
        step1: false,
        step2: true,
        step3: false,
        showTokens:false
      })
    }
  }

  const handleSearchList = (key:any, type : any ='main') => {
    if(type === 'modal'){
      setmodalKeyword(key)
    } else {
      setSearchKey(key)          
    }
    if(key.length){
      let newData = tokenList.filter((name: any) => {
        return Object.values(name)
              .join(" ")
              .toLowerCase()
              .includes(key.toLowerCase());
        });
        if(type === 'modal'){
          setTokenModalList(newData)
        } else {
          setTokenFilteredList(newData)          
        }
    } else {
      if(type === 'modal'){
        setTokenModalList(tokenList)
      } else {
        setTokenFilteredList(tokenList)         
      }
    }
    
  }

  const submitTransaction = () => {
    let user: any = account;
    let amount = web3.utils.toBN(fromExponential(+sendAmount * Math.pow(10, 18)));
    let instance = new web3.eth.Contract(ERC20, selectedToken.parentContract);
    instance.methods.transfer(senderAddress, amount).send({ from: user })
      .on('transactionHash', (res: any) => {
        console.log(res, "hash")
        setTransactionHash(res)
        setSendModal({
          step0: false,
          step1: false,
          step2: false,
          step3: true,
          showTokens:false
        })
        dispatch(
          addTransaction({
            hash: res,
            from: user,
            chainId,
            summary: `${res}`,
          })
        )
      }).on('receipt', (res: any) => {
        console.log(res, "response")
        dispatch(
          finalizeTransaction({
            hash: res.transactionHash,
            chainId,
            receipt: {
              to: res.to,
              from: res.from,
              contractAddress: res.contractAddress,
              transactionIndex: res.transactionIndex,
              blockHash: res.blockHash,
              transactionHash: res.transactionHash,
              blockNumber: res.blockNumber,
              status: 1
            }
          })
        )
        setTokenFilteredList([])
        setTokenList([])
        getTokensList()
      }).on('error', (err: any) => {
        console.log(err, "error")
        if (err.code === 4001) {
          setSenderModal(false)
          setSendModal(sendInitialState)
        }
      })
  }


  // transactionCounts()

  const handleCloseModal = () => {
    setSenderModal(false)
    setVerifyAmount(false)
    setSendAmount('');
    setSenderAdress('')
    setSendModal(sendInitialState)
  }

  const handledropDown = (x: any) => {
    console.log(x)
    setSelectedToken(x)
  }

  const handleSendAmount = () => {
    if(sendAmount > selectedToken.balance){
      return true
    } else if (!sendAmount){
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <main className="main-content">
        <Sidebar handleMenuState={handleMenuState} menuState={menuState} />

        {/* QR modal starts */}
        {account && <QrModal
          title={'My QR Code'}
          show={userQrCode}
          setShow={setUserQrCode}
          address={account}
        />}
        {/* QR modal ends */}
        <div className="">
          <CommonModalNew
            title={showSendModal.step0 ? "Transferring funds" : showSendModal.step1 ? "Send" : showSendModal.step2 ? "Confirm Send" : showSendModal.showTokens ? 'Select Token' : "Submitted"}
            show={senderModal}
            setShow={handleCloseModal}
            externalCls="dark-modal-100"
          >
            {/* step 1 */}
            <>
              {/* transferring funds popop start */}

              {showSendModal.step0 && <div className="cmn_modal">
                <p className="mb-0">Sending funds to exchanges:</p>
                <div className="exchng_msg_box">
                  <p>Exchanges supported from Shibarium network</p>
                  <p className="sprdt_txt">Supported Excanges</p>
                </div>
                <p className="alert_msg">
                  <div className="image-wrap d-inline-block me-2">
                    <img className="img-fluid" src="../../images/i-info-icon.png" width={16} />
                  </div>
                  Sending funds to unsupported exchanges will lead to permanent loss of funds.</p>
                <div className="pop_btns_area row form-control">
                  <div className="col-6">
                    <button className='btn blue-btn w-100' onClick={() => {
                      setSenderModal(false);
                      setSendModal(sendInitialState)
                    }}>Cancel</button>
                  </div>
                  <div className="col-6">
                    <button className='btn primary-btn w-100'
                      onClick={() => setSendModal({
                        step0: false,
                        step1: true,
                        step2: false,
                        step3: false,
                        showTokens:false
                      })}>Continue</button>
                  </div>
                </div>
                <p className="pop_btm_txt text-center">If you want to send funds between chains visit <a href="#" >Shibarium Bridge</a></p>
              </div>}

              {/* transferring funds popop ends */}

              {/* send popop start */}
              {showSendModal.step1 &&
                <div className="cmn_modal">
                  {/* <h4 className="pop_main_h text-center">Send</h4>  */}
                  <form className="mr-top-50">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control cmn_inpt_fld"
                        value={senderAddress}
                        onChange={(e) => handleChange(e)}
                        placeholder="Receiver address" />
                      <div className="error-msg">
                        {!isValidAddress && senderAddress && <label className="mb-0">Enter a valid reciver address on Shibarium Mainnet</label>}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="position-relative">
                        <div className="float-input">
                          <input
                            type="number"
                            className="form-control cmn_inpt_fld"
                            placeholder="0.00"
                            value={sendAmount}
                            onChange={(e) => setSendAmount(e.target.value)}
                          />

                          <div className="coin-dd float-dd" onClick={() => setSendModal({
                             step0: false,
                             step1: false,
                             step2: false,
                             step3: false,
                             showTokens: true
                          })}>
                            <div id="div-autoclose-true" className="btn-dd">
                              <div className="drop-flex">
                                <div className="drop-chev">
                                  <img className="img-fluid" src="../../images/chev-drop.png" alt="chev-ico" />
                                </div>
                                {selectedToken ?  <div className="drop-ico">
                                  <img className="img-fluid" src="../../images/shiba-round-icon.png" alt="icon" width={24} />
                                    <span>{selectedToken.parentName ? selectedToken.parentName : "Select Token"}</span>
                                </div> :
                                 <div className="drop-text">
                                  <span>Select Token</span>
                                </div> }
                                
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="error-msg">
                          {sendAmount && +sendAmount > selectedToken.balance && !selectedToken ? <label className="mb-0">Select token</label> : sendAmount && +sendAmount > selectedToken.balance ||  selectedToken.balance <= 0 ?
                            <label className="mb-0">Insufficient balance</label> : null}
                        </div>
                      </div>
                      <p className="inpt_fld_hlpr_txt">
                        <span><NumberFormat thousandSeparator displayType={"text"} prefix='$ ' value={((selectedToken.balance || 0) * boneUSDValue).toFixed(2)} /></span>
                        <b>Balance: {selectedToken.balance ? selectedToken.balance.toFixed(4) : '00.00'} {selectedToken.parentSymbol ? selectedToken.parentSymbol : ""}</b>
                      </p>
                    </div>
                    <div className="pop_btns_area mr-top-50 row sep-space">
                      <div className="col-6">
                        <button
                          className='btn blue-btn w-100'
                          onClick={() => setSendModal({ step0: true, step1: false, step2: false, step3: false, showTokens:false })}
                        >Back</button>
                      </div>
                      <div className="col-6 active-btn">
                        <button
                          disabled={isValidAddress && +sendAmount < selectedToken.balance && selectedToken.balance > 0 ? false : true}
                          onClick={() => handleSend()}
                          className='btn primary-btn w-100'
                        >Send</button>
                      </div>
                    </div>

                  </form>
                  <p className="pop_btm_txt text-center">If you want to send funds between chains visit <a href="#" >Shibarium Bridge</a></p>
                </div>}
              {/* send popop ends */}

              {/* confirm send popop start */}
              {showSendModal.step2 &&
                <div className="cmn_modal">
                  <div className="cnfrm_box dark-bg mt-0">
                    <div className="top_overview col-12">
                      <span><img src="../../images/shib-borderd-icon.png" /></span>
                      <h6>{sendAmount} BONE</h6>
                      <p><NumberFormat thousandSeparator displayType={"text"} prefix='$ ' value={((+sendAmount || 0) * boneUSDValue).toFixed(2)} /></p>
                    </div>
                    <div className="add_detail col-12">
                      <p><b>RECEIVER:</b></p>
                      <p>{senderAddress}</p>
                    </div>
                  </div>
                  <div className="cnfrm_check_box">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={() => setVerifyAmount(!verifyAmount)}
                        // @ts-ignore
                        value={verifyAmount}
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        I’m not sending funds to an <a href="#">unsupported excange</a> or incorrect address
                      </label>
                    </div>


                  </div>
                  <div className="pop_btns_area row sep-space">
                    <div className="col-6">
                      <button className='btn blue-btn w-100'
                        onClick={() => {setSendModal({
                          step0: false,
                          step1: true,
                          step2: false,
                          step3: false,
                          showTokens:false
                        })
                        setVerifyAmount(false)
                      }}
                      >Back</button>
                    </div>
                    <div className="col-6 active-btn">
                      <button className='btn primary-btn w-100'
                        disabled={verifyAmount ? false : true}
                        onClick={() => submitTransaction()}
                      >Send</button>
                    </div>
                  </div>

                  <p className="pop_btm_txt text-center">If you want to send funds between chains visit <a href="#" >Shibarium Bridge</a></p>
                </div>}
              {/* confirm send popop ends */}

              {/* submitted popop start */}
              {showSendModal.step3 &&
                <div className="cmn_modal">
                  <div className="cnfrm_box dark-bg mt-0">
                    <div className="top_overview col-12">
                      <span><img src="../../images/shib-borderd-icon.png" /></span>
                      <h6>{sendAmount} BONE</h6>
                      <p><NumberFormat thousandSeparator displayType={"text"} prefix='$ ' value={((+sendAmount || 0) * boneUSDValue).toFixed(2)} /></p>
                    </div>
                    <div className="add_detail col-12">
                      <p><b>TRANSACTION SUBMITTED TO:</b></p>
                      <p>{transactionHash}</p>
                    </div>
                  </div>
                  <div className="cnfrm_check_box text-center">
                    Check your wallet activity to see the status of the transaction
                  </div>
                  <div className="pop_btns_area row form-control">
                    <div className="col-12">
                      <button
                        className='btn primary-btn w-100'
                        onClick={() => handleCloseModal()}
                      >Close</button>
                    </div>
                  </div>
                </div>}
              {/* submitted popop ends */}

              {/* Select token popop starts */}
             {showSendModal.showTokens && <div className="popmodal-body tokn-popup">
                  <div className="pop-block">
                    <div className="pop-top">
                    <div className="sec-search">
                      <div className="position-relative search-row">
                        <input
                         type="text" 
                         value={modalKeyword}
                         className="w-100" 
                         placeholder="Search token or token address" 
                         onChange={(e) => handleSearchList(e.target.value, 'modal')}
                         />
                        <div className="search-icon"><img width="20" height="21" className="img-fluid" src="../../images/search.png" alt="" /></div>
                      </div>
                    </div>
                    <div className="token-sec">
                      <div className="info-grid">
                        <p onClick={() => {
                          setSendModal({
                             step0: false,
                             step1: true,
                             step2: false,
                             step3: false,
                             showTokens: false
                        })
                        setmodalKeyword('')
                        }}>Back</p>
                        <div>
                          <p>Token List</p>
                        </div>
                        <div className="token-btn-sec">
                          <button type="button" className="btn primary-btn w-100">Manage Tokens</button>
                        </div>
                      </div>
                    </div>
                    <div className="token-listwrap">
                        {tokenModalList ? tokenModalList.map((x:any) => 
                          <div className="tokn-row" onClick={() => {
                            setSelectedToken(x);
                            setSendModal({
                              step0: false,
                              step1: true,
                              step2: false,
                              step3: false,
                              showTokens: false
                         })
                            }}>
                          <div className="cryoto-box">
                            <img className="img-fluid" src="../../images/shib-borderd-icon.png" alt="" />
                          </div>
                          <div className="tkn-grid">
                            <div>
                              <h6 className="fw-bold">{x.parentSymbol}</h6>
                              <p>{x.parentName}</p>
                            </div>
                            <div>
                              <h6 className="fw-bold">{x.balance ? (x.balance).toFixed(4) : '00.00'}</h6>
                            </div>
                          </div>
                        </div>
                        ) : null }
                       {!tokenModalList.length && modalKeyword ? <p>no record found</p> : null }
                      </div>
                    </div>
                    
                  </div>
                </div>}
                {/* Select token popop ends */}

            </>
           
          </CommonModalNew>

        

        </div>
        <section className="assets-section">
          <div className="cmn_dashbord_main_outr">
            <InnerHeader />
            {/* assets section start */}
            <div className="assets_outr">
              <h2>My Balance</h2>
              <div className="assets_top_area bal-row">
                <div className="bal-col">
                  <div className="main_net_amnt t_a_clm">
                    <h1><NumberFormat thousandSeparator displayType={"text"} prefix='$ ' value={((availBalance || 0) * boneUSDValue).toFixed(2)} /></h1>
                    <p>shibarium mainnet</p>
                  </div>
                </div>
                <div className="bal-col">
                  <div className="btns_area t_a_clm h-100">
                    <button type="button"
                      onClick={() => setUserQrCode(true)}
                      className="btn grey-btn w-100 d-flex align-items-center justify-content-center">
                      <span className="me-2"><img className="btn-img" src="../../images/recive-icon.png" alt="recive" /></span>
                      Receive
                    </button>

                    <button onClick={() => setSenderModal(true)} className="btn grey-btn w-100 d-flex align-items-center justify-content-center">
                      <span className="me-2">
                        <img className="btn-img" src="../../images/send-icon.png" alt="recive" />
                      </span>Send</button>
                  </div>
                </div>
                <div className="bal-col">
                  <div className="lrg_btns_area t_a_clm">
                    <a href="#" className="btn white-btn w-100 d-block">Move funds from Ethereum to Shibarium</a>
                    <Link href="/how-it-works"><a className="btn white-btn w-100 d-block">How Shibarium works</a></Link>
                  </div>
                </div>
              </div>
              <div className="assets_btm_area">
                <h2>Assets on Shibarium</h2>
                <div className="cmn_dasdrd_table">
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th colSpan={2}>Name</th>
                          <th>Balance</th>
                          <th>Actions</th>
                          <th colSpan={2} className="text-end">
                            <input
                            value={searchKey}
                            onChange={(e) => handleSearchList(e.target.value)}
                            type="search" 
                            placeholder="Search" 
                            />
                            </th>
                        </tr>
                      </thead>
                      <tbody>
                       {
                       tokenFilteredList.length ? tokenFilteredList.map((x:any) =>
                       <tr>
                          <td colSpan={2}><span><img src="../../images/shiba-round-icon.png" /></span><b>{x.parentSymbol}</b> - {x.parentName}</td>
                          <td>{(x.balance || 0).toFixed(4)} - <NumberFormat thousandSeparator displayType={"text"} prefix='$ ' value={((x.balance || 0) * boneUSDValue).toFixed(2)} /></td>
                          <td><a href="#">Deposit</a></td>
                          <td><a href="#">Withdraw</a></td>
                          <td><a href="#">Send</a></td>
                        </tr>
                        ) : null }
                      {
                       searchKey.length && !tokenFilteredList.length && 
                       <tr><p>No record found</p></tr>
                      }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* assets section end */}

          </div>
        </section>
      </main>
    </>
  );
}
