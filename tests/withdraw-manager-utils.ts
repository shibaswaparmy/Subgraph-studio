import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ExitCancelled,
  ExitPeriodUpdate,
  ExitStarted,
  ExitUpdated,
  WithdrawManagerOwnershipTransferred,
  Withdraw
} from "../generated/WithdrawManager/WithdrawManager"

export function createExitCancelledEvent(exitId: BigInt): ExitCancelled {
  let exitCancelledEvent = changetype<ExitCancelled>(newMockEvent())

  exitCancelledEvent.parameters = new Array()

  exitCancelledEvent.parameters.push(
    new ethereum.EventParam("exitId", ethereum.Value.fromUnsignedBigInt(exitId))
  )

  return exitCancelledEvent
}

export function createExitPeriodUpdateEvent(
  oldExitPeriod: BigInt,
  newExitPeriod: BigInt
): ExitPeriodUpdate {
  let exitPeriodUpdateEvent = changetype<ExitPeriodUpdate>(newMockEvent())

  exitPeriodUpdateEvent.parameters = new Array()

  exitPeriodUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "oldExitPeriod",
      ethereum.Value.fromUnsignedBigInt(oldExitPeriod)
    )
  )
  exitPeriodUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "newExitPeriod",
      ethereum.Value.fromUnsignedBigInt(newExitPeriod)
    )
  )

  return exitPeriodUpdateEvent
}

export function createExitStartedEvent(
  exitor: Address,
  exitId: BigInt,
  token: Address,
  amount: BigInt,
  isRegularExit: boolean
): ExitStarted {
  let exitStartedEvent = changetype<ExitStarted>(newMockEvent())

  exitStartedEvent.parameters = new Array()

  exitStartedEvent.parameters.push(
    new ethereum.EventParam("exitor", ethereum.Value.fromAddress(exitor))
  )
  exitStartedEvent.parameters.push(
    new ethereum.EventParam("exitId", ethereum.Value.fromUnsignedBigInt(exitId))
  )
  exitStartedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  exitStartedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  exitStartedEvent.parameters.push(
    new ethereum.EventParam(
      "isRegularExit",
      ethereum.Value.fromBoolean(isRegularExit)
    )
  )

  return exitStartedEvent
}

export function createExitUpdatedEvent(
  exitId: BigInt,
  age: BigInt,
  signer: Address
): ExitUpdated {
  let exitUpdatedEvent = changetype<ExitUpdated>(newMockEvent())

  exitUpdatedEvent.parameters = new Array()

  exitUpdatedEvent.parameters.push(
    new ethereum.EventParam("exitId", ethereum.Value.fromUnsignedBigInt(exitId))
  )
  exitUpdatedEvent.parameters.push(
    new ethereum.EventParam("age", ethereum.Value.fromUnsignedBigInt(age))
  )
  exitUpdatedEvent.parameters.push(
    new ethereum.EventParam("signer", ethereum.Value.fromAddress(signer))
  )

  return exitUpdatedEvent
}

export function createWithdrawManagerOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): WithdrawManagerOwnershipTransferred {
  let withdrawManagerOwnershipTransferredEvent = changetype<
    WithdrawManagerOwnershipTransferred
  >(newMockEvent())

  withdrawManagerOwnershipTransferredEvent.parameters = new Array()

  withdrawManagerOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  withdrawManagerOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return withdrawManagerOwnershipTransferredEvent
}

export function createWithdrawEvent(
  exitId: BigInt,
  user: Address,
  token: Address,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("exitId", ethereum.Value.fromUnsignedBigInt(exitId))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
