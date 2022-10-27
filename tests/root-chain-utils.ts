import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  NewHeaderBlock,
  OwnershipTransferred,
  ResetHeaderBlock
} from "../generated/RootChain/RootChain"

export function createNewHeaderBlockEvent(
  proposer: Address,
  headerBlockId: BigInt,
  reward: BigInt,
  start: BigInt,
  end: BigInt,
  root: Bytes
): NewHeaderBlock {
  let newHeaderBlockEvent = changetype<NewHeaderBlock>(newMockEvent())

  newHeaderBlockEvent.parameters = new Array()

  newHeaderBlockEvent.parameters.push(
    new ethereum.EventParam("proposer", ethereum.Value.fromAddress(proposer))
  )
  newHeaderBlockEvent.parameters.push(
    new ethereum.EventParam(
      "headerBlockId",
      ethereum.Value.fromUnsignedBigInt(headerBlockId)
    )
  )
  newHeaderBlockEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  newHeaderBlockEvent.parameters.push(
    new ethereum.EventParam("start", ethereum.Value.fromUnsignedBigInt(start))
  )
  newHeaderBlockEvent.parameters.push(
    new ethereum.EventParam("end", ethereum.Value.fromUnsignedBigInt(end))
  )
  newHeaderBlockEvent.parameters.push(
    new ethereum.EventParam("root", ethereum.Value.fromFixedBytes(root))
  )

  return newHeaderBlockEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createResetHeaderBlockEvent(
  proposer: Address,
  headerBlockId: BigInt
): ResetHeaderBlock {
  let resetHeaderBlockEvent = changetype<ResetHeaderBlock>(newMockEvent())

  resetHeaderBlockEvent.parameters = new Array()

  resetHeaderBlockEvent.parameters.push(
    new ethereum.EventParam("proposer", ethereum.Value.fromAddress(proposer))
  )
  resetHeaderBlockEvent.parameters.push(
    new ethereum.EventParam(
      "headerBlockId",
      ethereum.Value.fromUnsignedBigInt(headerBlockId)
    )
  )

  return resetHeaderBlockEvent
}
