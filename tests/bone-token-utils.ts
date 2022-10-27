import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BoneTokenApproval,
  DelegateChanged,
  DelegateVotesChanged,
  BoneTokenOwnershipTransferred,
  BoneTokenTransfer
} from "../generated/BoneToken/BoneToken"

export function createBoneTokenApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): BoneTokenApproval {
  let boneTokenApprovalEvent = changetype<BoneTokenApproval>(newMockEvent())

  boneTokenApprovalEvent.parameters = new Array()

  boneTokenApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  boneTokenApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  boneTokenApprovalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return boneTokenApprovalEvent
}

export function createDelegateChangedEvent(
  delegator: Address,
  fromDelegate: Address,
  toDelegate: Address
): DelegateChanged {
  let delegateChangedEvent = changetype<DelegateChanged>(newMockEvent())

  delegateChangedEvent.parameters = new Array()

  delegateChangedEvent.parameters.push(
    new ethereum.EventParam("delegator", ethereum.Value.fromAddress(delegator))
  )
  delegateChangedEvent.parameters.push(
    new ethereum.EventParam(
      "fromDelegate",
      ethereum.Value.fromAddress(fromDelegate)
    )
  )
  delegateChangedEvent.parameters.push(
    new ethereum.EventParam(
      "toDelegate",
      ethereum.Value.fromAddress(toDelegate)
    )
  )

  return delegateChangedEvent
}

export function createDelegateVotesChangedEvent(
  delegate: Address,
  previousBalance: BigInt,
  newBalance: BigInt
): DelegateVotesChanged {
  let delegateVotesChangedEvent = changetype<DelegateVotesChanged>(
    newMockEvent()
  )

  delegateVotesChangedEvent.parameters = new Array()

  delegateVotesChangedEvent.parameters.push(
    new ethereum.EventParam("delegate", ethereum.Value.fromAddress(delegate))
  )
  delegateVotesChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousBalance",
      ethereum.Value.fromUnsignedBigInt(previousBalance)
    )
  )
  delegateVotesChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newBalance",
      ethereum.Value.fromUnsignedBigInt(newBalance)
    )
  )

  return delegateVotesChangedEvent
}

export function createBoneTokenOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): BoneTokenOwnershipTransferred {
  let boneTokenOwnershipTransferredEvent = changetype<
    BoneTokenOwnershipTransferred
  >(newMockEvent())

  boneTokenOwnershipTransferredEvent.parameters = new Array()

  boneTokenOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  boneTokenOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return boneTokenOwnershipTransferredEvent
}

export function createBoneTokenTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): BoneTokenTransfer {
  let boneTokenTransferEvent = changetype<BoneTokenTransfer>(newMockEvent())

  boneTokenTransferEvent.parameters = new Array()

  boneTokenTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  boneTokenTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  boneTokenTransferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return boneTokenTransferEvent
}
