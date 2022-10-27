import {
  MetaTransactionExecuted as MetaTransactionExecutedEvent,
  PredicateRegistered as PredicateRegisteredEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  TokenMapped as TokenMappedEvent
} from "../generated/RootChainManager/RootChainManager"
import {
  MetaTransactionExecuted,
  PredicateRegistered,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TokenMapped
} from "../generated/schema"

export function handleMetaTransactionExecuted(
  event: MetaTransactionExecutedEvent
): void {
  let entity = new MetaTransactionExecuted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.userAddress = event.params.userAddress
  entity.relayerAddress = event.params.relayerAddress
  entity.functionSignature = event.params.functionSignature
  entity.save()
}

export function handlePredicateRegistered(
  event: PredicateRegisteredEvent
): void {
  let entity = new PredicateRegistered(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenType = event.params.tokenType
  entity.predicateAddress = event.params.predicateAddress
  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleTokenMapped(event: TokenMappedEvent): void {
  let entity = new TokenMapped(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.rootToken = event.params.rootToken
  entity.childToken = event.params.childToken
  entity.tokenType = event.params.tokenType
  entity.save()
}
