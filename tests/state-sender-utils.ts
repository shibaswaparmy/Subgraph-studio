import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  NewRegistration,
  StateSenderOwnershipTransferred,
  RegistrationUpdated,
  StateSynced
} from "../generated/StateSender/StateSender"

export function createNewRegistrationEvent(
  user: Address,
  sender: Address,
  receiver: Address
): NewRegistration {
  let newRegistrationEvent = changetype<NewRegistration>(newMockEvent())

  newRegistrationEvent.parameters = new Array()

  newRegistrationEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  newRegistrationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  newRegistrationEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return newRegistrationEvent
}

export function createStateSenderOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): StateSenderOwnershipTransferred {
  let stateSenderOwnershipTransferredEvent = changetype<
    StateSenderOwnershipTransferred
  >(newMockEvent())

  stateSenderOwnershipTransferredEvent.parameters = new Array()

  stateSenderOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  stateSenderOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return stateSenderOwnershipTransferredEvent
}

export function createRegistrationUpdatedEvent(
  user: Address,
  sender: Address,
  receiver: Address
): RegistrationUpdated {
  let registrationUpdatedEvent = changetype<RegistrationUpdated>(newMockEvent())

  registrationUpdatedEvent.parameters = new Array()

  registrationUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  registrationUpdatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  registrationUpdatedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return registrationUpdatedEvent
}

export function createStateSyncedEvent(
  id: BigInt,
  contractAddress: Address,
  data: Bytes
): StateSynced {
  let stateSyncedEvent = changetype<StateSynced>(newMockEvent())

  stateSyncedEvent.parameters = new Array()

  stateSyncedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  stateSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  stateSyncedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return stateSyncedEvent
}
