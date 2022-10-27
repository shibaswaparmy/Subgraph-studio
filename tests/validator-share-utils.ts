import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ValidatorShareApproval,
  ValidatorShareOwnershipTransferred,
  ValidatorShareTransfer
} from "../generated/ValidatorShare/ValidatorShare"

export function createValidatorShareApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): ValidatorShareApproval {
  let validatorShareApprovalEvent = changetype<ValidatorShareApproval>(
    newMockEvent()
  )

  validatorShareApprovalEvent.parameters = new Array()

  validatorShareApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  validatorShareApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  validatorShareApprovalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return validatorShareApprovalEvent
}

export function createValidatorShareOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): ValidatorShareOwnershipTransferred {
  let validatorShareOwnershipTransferredEvent = changetype<
    ValidatorShareOwnershipTransferred
  >(newMockEvent())

  validatorShareOwnershipTransferredEvent.parameters = new Array()

  validatorShareOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  validatorShareOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return validatorShareOwnershipTransferredEvent
}

export function createValidatorShareTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): ValidatorShareTransfer {
  let validatorShareTransferEvent = changetype<ValidatorShareTransfer>(
    newMockEvent()
  )

  validatorShareTransferEvent.parameters = new Array()

  validatorShareTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  validatorShareTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  validatorShareTransferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return validatorShareTransferEvent
}
