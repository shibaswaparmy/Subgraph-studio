import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  MetaTransactionExecuted,
  PredicateRegistered,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  RootChainManagerTokenMapped
} from "../generated/RootChainManager/RootChainManager"

export function createMetaTransactionExecutedEvent(
  userAddress: Address,
  relayerAddress: Address,
  functionSignature: Bytes
): MetaTransactionExecuted {
  let metaTransactionExecutedEvent = changetype<MetaTransactionExecuted>(
    newMockEvent()
  )

  metaTransactionExecutedEvent.parameters = new Array()

  metaTransactionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  metaTransactionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "relayerAddress",
      ethereum.Value.fromAddress(relayerAddress)
    )
  )
  metaTransactionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "functionSignature",
      ethereum.Value.fromBytes(functionSignature)
    )
  )

  return metaTransactionExecutedEvent
}

export function createPredicateRegisteredEvent(
  tokenType: Bytes,
  predicateAddress: Address
): PredicateRegistered {
  let predicateRegisteredEvent = changetype<PredicateRegistered>(newMockEvent())

  predicateRegisteredEvent.parameters = new Array()

  predicateRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenType",
      ethereum.Value.fromFixedBytes(tokenType)
    )
  )
  predicateRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "predicateAddress",
      ethereum.Value.fromAddress(predicateAddress)
    )
  )

  return predicateRegisteredEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createRootChainManagerTokenMappedEvent(
  rootToken: Address,
  childToken: Address,
  tokenType: Bytes
): RootChainManagerTokenMapped {
  let rootChainManagerTokenMappedEvent = changetype<
    RootChainManagerTokenMapped
  >(newMockEvent())

  rootChainManagerTokenMappedEvent.parameters = new Array()

  rootChainManagerTokenMappedEvent.parameters.push(
    new ethereum.EventParam("rootToken", ethereum.Value.fromAddress(rootToken))
  )
  rootChainManagerTokenMappedEvent.parameters.push(
    new ethereum.EventParam(
      "childToken",
      ethereum.Value.fromAddress(childToken)
    )
  )
  rootChainManagerTokenMappedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenType",
      ethereum.Value.fromFixedBytes(tokenType)
    )
  )

  return rootChainManagerTokenMappedEvent
}
