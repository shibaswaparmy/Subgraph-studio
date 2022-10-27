import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  MaxErc20DepositUpdate,
  NewDepositBlock,
  DepositManagerOwnershipTransferred
} from "../generated/DepositManager/DepositManager"

export function createMaxErc20DepositUpdateEvent(
  oldLimit: BigInt,
  newLimit: BigInt
): MaxErc20DepositUpdate {
  let maxErc20DepositUpdateEvent = changetype<MaxErc20DepositUpdate>(
    newMockEvent()
  )

  maxErc20DepositUpdateEvent.parameters = new Array()

  maxErc20DepositUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "oldLimit",
      ethereum.Value.fromUnsignedBigInt(oldLimit)
    )
  )
  maxErc20DepositUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "newLimit",
      ethereum.Value.fromUnsignedBigInt(newLimit)
    )
  )

  return maxErc20DepositUpdateEvent
}

export function createNewDepositBlockEvent(
  owner: Address,
  token: Address,
  amountOrNFTId: BigInt,
  depositBlockId: BigInt
): NewDepositBlock {
  let newDepositBlockEvent = changetype<NewDepositBlock>(newMockEvent())

  newDepositBlockEvent.parameters = new Array()

  newDepositBlockEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  newDepositBlockEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  newDepositBlockEvent.parameters.push(
    new ethereum.EventParam(
      "amountOrNFTId",
      ethereum.Value.fromUnsignedBigInt(amountOrNFTId)
    )
  )
  newDepositBlockEvent.parameters.push(
    new ethereum.EventParam(
      "depositBlockId",
      ethereum.Value.fromUnsignedBigInt(depositBlockId)
    )
  )

  return newDepositBlockEvent
}

export function createDepositManagerOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): DepositManagerOwnershipTransferred {
  let depositManagerOwnershipTransferredEvent = changetype<
    DepositManagerOwnershipTransferred
  >(newMockEvent())

  depositManagerOwnershipTransferredEvent.parameters = new Array()

  depositManagerOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  depositManagerOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return depositManagerOwnershipTransferredEvent
}
