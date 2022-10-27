import {
  NewHeaderBlock as NewHeaderBlockEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ResetHeaderBlock as ResetHeaderBlockEvent
} from "../generated/RootChain/RootChain"
import {
  NewHeaderBlock,
  OwnershipTransferred,
  ResetHeaderBlock
} from "../generated/schema"

export function handleNewHeaderBlock(event: NewHeaderBlockEvent): void {
  let entity = new NewHeaderBlock(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.proposer = event.params.proposer
  entity.headerBlockId = event.params.headerBlockId
  entity.reward = event.params.reward
  entity.start = event.params.start
  entity.end = event.params.end
  entity.root = event.params.root
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleResetHeaderBlock(event: ResetHeaderBlockEvent): void {
  let entity = new ResetHeaderBlock(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.proposer = event.params.proposer
  entity.headerBlockId = event.params.headerBlockId
  entity.save()
}
