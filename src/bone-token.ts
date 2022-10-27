import {
  BoneTokenApproval as BoneTokenApprovalEvent,
  DelegateChanged as DelegateChangedEvent,
  DelegateVotesChanged as DelegateVotesChangedEvent,
  BoneTokenOwnershipTransferred as BoneTokenOwnershipTransferredEvent,
  BoneTokenTransfer as BoneTokenTransferEvent
} from "../generated/BoneToken/BoneToken"
import {
  BoneTokenApproval,
  DelegateChanged,
  DelegateVotesChanged,
  BoneTokenOwnershipTransferred,
  BoneTokenTransfer
} from "../generated/schema"

export function handleBoneTokenApproval(event: BoneTokenApprovalEvent): void {
  let entity = new BoneTokenApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleDelegateChanged(event: DelegateChangedEvent): void {
  let entity = new DelegateChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.delegator = event.params.delegator
  entity.fromDelegate = event.params.fromDelegate
  entity.toDelegate = event.params.toDelegate
  entity.save()
}

export function handleDelegateVotesChanged(
  event: DelegateVotesChangedEvent
): void {
  let entity = new DelegateVotesChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.delegate = event.params.delegate
  entity.previousBalance = event.params.previousBalance
  entity.newBalance = event.params.newBalance
  entity.save()
}

export function handleBoneTokenOwnershipTransferred(
  event: BoneTokenOwnershipTransferredEvent
): void {
  let entity = new BoneTokenOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleBoneTokenTransfer(event: BoneTokenTransferEvent): void {
  let entity = new BoneTokenTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
