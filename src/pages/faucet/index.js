/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Nav} from "react-bootstrap";
import DogTab from './dogTabfirst';
import DogTabfirst from './dogTabsecond';
import Footer from "../../pages/footer/index"
import  CommonModal from "../components/CommonModel";
import Header from "../layout/header";
import StakingHeader from '../staking-header'


export default function faucet() {
  const [isTopdoG, setIsTopdoG] = useState(true);
  const [isPuppyDog, setIsPuppyDog] = useState(false);

  const handleTopdoG = () => {
      // console.log("handleTopdoG");
    setIsTopdoG(true);
    setIsPuppyDog(false);
  };
  const handlePuppyDog = () => {
      // console.log("handlePuppyDog");
    setIsTopdoG(false);
    setIsPuppyDog(true);
  };

  // console.log("isTopdoG",isTopdoG);
  // console.log("isPuppyDog",isPuppyDog);
  return (
    <>
     <main className="main-content val_account_outr cmn-input-bg dark-bg-800 full-vh top-space">
          <Header />
          {/* <StakingHeader /> */}
    {/* Form section start */}
        <div className="container">

              <div className='swap-card cus-card-800'>
                  <div className="swp-header">
                      <div className='swp-left-col mb-3 mb-lg-3 mb-xl-4'>
                          <h3 className=''>
                              Get Test Tokens
                          </h3>       
                          <p className='grey-txt'>This faucet transfers TestToken on Matic testnets and parent chain. Confirms details before submitting.</p>
                      </div>
                  </div>

                  <div className="fau_tabs_area">
                    <div className="tab-sec botom-spcing">
                      <ul className="tab-links">
                        <li><a className="tb-link tab-active" href="javascript:void(0);">Topdog</a></li>
                        <li><a className="tb-link" href="javascript:void(0);">Puppydog</a></li>
                      </ul>
                    </div>
                    <div className="tab-content-sec h-100">
                        <div className="faucet-form">
                              <div className="form-section">
                                <div className="">
                                  <div className=" "> 
                                    <form>
                                      <div className="form-field dark-input botom-spc">
                                        <div className="cus-sel ms-0 position-relative">
                                          <select class="form-select" >
                                            <option selected>Select Token</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                          <i className="arrow-down"></i>
                                        </div>
                                      </div>
                                      <div className="botom-spc">                         
                                        <div className="form-group">
                                            <div className="form-field dark-input">
                                                <div className="mid-chain w-100 position-relative">
                                                    <input className="w-100" type="text" placeholder="Insert a custom value" />
                                                    <a href="javascript:void(0);" className="orange-btn">Paste</a>
                                                </div> 
                                            </div> 
                                        </div>
                                      </div>
                                      <div>
                                        <button type="button" className="btn primary-btn w-100">Submit</button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            
                        </div>
                    </div>
                  </div>
              </div>
        </div> 
      {/* Form section end */}
      </main> 
    </>
  );

  
}