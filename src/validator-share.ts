import {
  ValidatorShareApproval as ValidatorShareApprovalEvent,
  ValidatorShareOwnershipTransferred as ValidatorShareOwnershipTransferredEvent,
  ValidatorShareTransfer as ValidatorShareTransferEvent
} from "../generated/ValidatorShare/ValidatorShare"
import {
  ValidatorShareApproval,
  ValidatorShareOwnershipTransferred,
  ValidatorShareTransfer
} from "../generated/schema"

export function handleValidatorShareApproval(
  event: ValidatorShareApprovalEvent
): void {
  let entity = new ValidatorShareApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleValidatorShareOwnershipTransferred(
  event: ValidatorShareOwnershipTransferredEvent
): void {
  let entity = new ValidatorShareOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleValidatorShareTransfer(
  event: ValidatorShareTransferEvent
): void {
  let entity = new ValidatorShareTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
