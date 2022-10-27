import {
  NewRegistration as NewRegistrationEvent,
  StateSenderOwnershipTransferred as StateSenderOwnershipTransferredEvent,
  RegistrationUpdated as RegistrationUpdatedEvent,
  StateSynced as StateSyncedEvent
} from "../generated/StateSender/StateSender"
import {
  NewRegistration,
  StateSenderOwnershipTransferred,
  RegistrationUpdated,
  StateSynced
} from "../generated/schema"

export function handleNewRegistration(event: NewRegistrationEvent): void {
  let entity = new NewRegistration(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.save()
}

export function handleStateSenderOwnershipTransferred(
  event: StateSenderOwnershipTransferredEvent
): void {
  let entity = new StateSenderOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleRegistrationUpdated(
  event: RegistrationUpdatedEvent
): void {
  let entity = new RegistrationUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.save()
}

export function handleStateSynced(event: StateSyncedEvent): void {
  let entity = new StateSynced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.id = event.params.id
  entity.contractAddress = event.params.contractAddress
  entity.data = event.params.data
  entity.save()
}
