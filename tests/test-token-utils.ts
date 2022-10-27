import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  TestTokenApproval,
  MinterAdded,
  MinterRemoved,
  TestTokenTransfer
} from "../generated/TestToken/TestToken"

export function createTestTokenApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): TestTokenApproval {
  let testTokenApprovalEvent = changetype<TestTokenApproval>(newMockEvent())

  testTokenApprovalEvent.parameters = new Array()

  testTokenApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  testTokenApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  testTokenApprovalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return testTokenApprovalEvent
}

export function createMinterAddedEvent(account: Address): MinterAdded {
  let minterAddedEvent = changetype<MinterAdded>(newMockEvent())

  minterAddedEvent.parameters = new Array()

  minterAddedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return minterAddedEvent
}

export function createMinterRemovedEvent(account: Address): MinterRemoved {
  let minterRemovedEvent = changetype<MinterRemoved>(newMockEvent())

  minterRemovedEvent.parameters = new Array()

  minterRemovedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return minterRemovedEvent
}

export function createTestTokenTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): TestTokenTransfer {
  let testTokenTransferEvent = changetype<TestTokenTransfer>(newMockEvent())

  testTokenTransferEvent.parameters = new Array()

  testTokenTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  testTokenTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  testTokenTransferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return testTokenTransferEvent
}
