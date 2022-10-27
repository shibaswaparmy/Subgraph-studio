import {
  ExitCancelled as ExitCancelledEvent,
  ExitPeriodUpdate as ExitPeriodUpdateEvent,
  ExitStarted as ExitStartedEvent,
  ExitUpdated as ExitUpdatedEvent,
  WithdrawManagerOwnershipTransferred as WithdrawManagerOwnershipTransferredEvent,
  Withdraw as WithdrawEvent
} from "../generated/WithdrawManager/WithdrawManager"
import {
  ExitCancelled,
  ExitPeriodUpdate,
  ExitStarted,
  ExitUpdated,
  WithdrawManagerOwnershipTransferred,
  Withdraw
} from "../generated/schema"

export function handleExitCancelled(event: ExitCancelledEvent): void {
  let entity = new ExitCancelled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.exitId = event.params.exitId
  entity.save()
}

export function handleExitPeriodUpdate(event: ExitPeriodUpdateEvent): void {
  let entity = new ExitPeriodUpdate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldExitPeriod = event.params.oldExitPeriod
  entity.newExitPeriod = event.params.newExitPeriod
  entity.save()
}

export function handleExitStarted(event: ExitStartedEvent): void {
  let entity = new ExitStarted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.exitor = event.params.exitor
  entity.exitId = event.params.exitId
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.isRegularExit = event.params.isRegularExit
  entity.save()
}

export function handleExitUpdated(event: ExitUpdatedEvent): void {
  let entity = new ExitUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.exitId = event.params.exitId
  entity.age = event.params.age
  entity.signer = event.params.signer
  entity.save()
}

export function handleWithdrawManagerOwnershipTransferred(
  event: WithdrawManagerOwnershipTransferredEvent
): void {
  let entity = new WithdrawManagerOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.exitId = event.params.exitId
  entity.user = event.params.user
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}
