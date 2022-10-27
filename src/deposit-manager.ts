import {
  MaxErc20DepositUpdate as MaxErc20DepositUpdateEvent,
  NewDepositBlock as NewDepositBlockEvent,
  DepositManagerOwnershipTransferred as DepositManagerOwnershipTransferredEvent
} from "../generated/DepositManager/DepositManager"
import {
  MaxErc20DepositUpdate,
  NewDepositBlock,
  DepositManagerOwnershipTransferred
} from "../generated/schema"

export function handleMaxErc20DepositUpdate(
  event: MaxErc20DepositUpdateEvent
): void {
  let entity = new MaxErc20DepositUpdate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldLimit = event.params.oldLimit
  entity.newLimit = event.params.newLimit
  entity.save()
}

export function handleNewDepositBlock(event: NewDepositBlockEvent): void {
  let entity = new NewDepositBlock(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.token = event.params.token
  entity.amountOrNFTId = event.params.amountOrNFTId
  entity.depositBlockId = event.params.depositBlockId
  entity.save()
}

export function handleDepositManagerOwnershipTransferred(
  event: DepositManagerOwnershipTransferredEvent
): void {
  let entity = new DepositManagerOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
