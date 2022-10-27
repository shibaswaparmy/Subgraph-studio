import {
  StakeManagerOwnershipTransferred as StakeManagerOwnershipTransferredEvent,
  RootChainChanged as RootChainChangedEvent
} from "../generated/StakeManager/StakeManager"
import {
  StakeManagerOwnershipTransferred,
  RootChainChanged
} from "../generated/schema"

export function handleStakeManagerOwnershipTransferred(
  event: StakeManagerOwnershipTransferredEvent
): void {
  let entity = new StakeManagerOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleRootChainChanged(event: RootChainChangedEvent): void {
  let entity = new RootChainChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousRootChain = event.params.previousRootChain
  entity.newRootChain = event.params.newRootChain
  entity.save()
}
