import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  ContractMapUpdated,
  PredicateAdded,
  PredicateRemoved,
  ProofValidatorAdded,
  ProofValidatorRemoved,
  TokenMapped
} from "../generated/Registry/Registry"

export function createContractMapUpdatedEvent(
  key: Bytes,
  previousContract: Address,
  newContract: Address
): ContractMapUpdated {
  let contractMapUpdatedEvent = changetype<ContractMapUpdated>(newMockEvent())

  contractMapUpdatedEvent.parameters = new Array()

  contractMapUpdatedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  contractMapUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "previousContract",
      ethereum.Value.fromAddress(previousContract)
    )
  )
  contractMapUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newContract",
      ethereum.Value.fromAddress(newContract)
    )
  )

  return contractMapUpdatedEvent
}

export function createPredicateAddedEvent(
  predicate: Address,
  from: Address
): PredicateAdded {
  let predicateAddedEvent = changetype<PredicateAdded>(newMockEvent())

  predicateAddedEvent.parameters = new Array()

  predicateAddedEvent.parameters.push(
    new ethereum.EventParam("predicate", ethereum.Value.fromAddress(predicate))
  )
  predicateAddedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )

  return predicateAddedEvent
}

export function createPredicateRemovedEvent(
  predicate: Address,
  from: Address
): PredicateRemoved {
  let predicateRemovedEvent = changetype<PredicateRemoved>(newMockEvent())

  predicateRemovedEvent.parameters = new Array()

  predicateRemovedEvent.parameters.push(
    new ethereum.EventParam("predicate", ethereum.Value.fromAddress(predicate))
  )
  predicateRemovedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )

  return predicateRemovedEvent
}

export function createProofValidatorAddedEvent(
  validator: Address,
  from: Address
): ProofValidatorAdded {
  let proofValidatorAddedEvent = changetype<ProofValidatorAdded>(newMockEvent())

  proofValidatorAddedEvent.parameters = new Array()

  proofValidatorAddedEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  proofValidatorAddedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )

  return proofValidatorAddedEvent
}

export function createProofValidatorRemovedEvent(
  validator: Address,
  from: Address
): ProofValidatorRemoved {
  let proofValidatorRemovedEvent = changetype<ProofValidatorRemoved>(
    newMockEvent()
  )

  proofValidatorRemovedEvent.parameters = new Array()

  proofValidatorRemovedEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  proofValidatorRemovedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )

  return proofValidatorRemovedEvent
}

export function createTokenMappedEvent(
  rootToken: Address,
  childToken: Address
): TokenMapped {
  let tokenMappedEvent = changetype<TokenMapped>(newMockEvent())

  tokenMappedEvent.parameters = new Array()

  tokenMappedEvent.parameters.push(
    new ethereum.EventParam("rootToken", ethereum.Value.fromAddress(rootToken))
  )
  tokenMappedEvent.parameters.push(
    new ethereum.EventParam(
      "childToken",
      ethereum.Value.fromAddress(childToken)
    )
  )

  return tokenMappedEvent
}
