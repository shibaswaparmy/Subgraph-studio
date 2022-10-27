import {
  TestTokenApproval as TestTokenApprovalEvent,
  MinterAdded as MinterAddedEvent,
  MinterRemoved as MinterRemovedEvent,
  TestTokenTransfer as TestTokenTransferEvent
} from "../generated/TestToken/TestToken"
import {
  TestTokenApproval,
  MinterAdded,
  MinterRemoved,
  TestTokenTransfer
} from "../generated/schema"

export function handleTestTokenApproval(event: TestTokenApprovalEvent): void {
  let entity = new TestTokenApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleMinterAdded(event: MinterAddedEvent): void {
  let entity = new MinterAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}

export function handleMinterRemoved(event: MinterRemovedEvent): void {
  let entity = new MinterRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}

export function handleTestTokenTransfer(event: TestTokenTransferEvent): void {
  let entity = new TestTokenTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
