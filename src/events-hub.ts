import {
  DelegatorUnstakeWithId as DelegatorUnstakeWithIdEvent,
  RewardParams as RewardParamsEvent,
  ShareBurnedWithId as ShareBurnedWithIdEvent,
  EventsHubUpdateCommissionRate as EventsHubUpdateCommissionRateEvent
} from "../generated/EventsHub/EventsHub"
import {
  DelegatorUnstakeWithId,
  RewardParams,
  ShareBurnedWithId,
  EventsHubUpdateCommissionRate
} from "../generated/schema"

export function handleDelegatorUnstakeWithId(
  event: DelegatorUnstakeWithIdEvent
): void {
  let entity = new DelegatorUnstakeWithId(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.nonce = event.params.nonce
  entity.save()
}

export function handleRewardParams(event: RewardParamsEvent): void {
  let entity = new RewardParams(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.rewardDecreasePerCheckpoint = event.params.rewardDecreasePerCheckpoint
  entity.maxRewardedCheckpoints = event.params.maxRewardedCheckpoints
  entity.checkpointRewardDelta = event.params.checkpointRewardDelta
  entity.save()
}

export function handleShareBurnedWithId(event: ShareBurnedWithIdEvent): void {
  let entity = new ShareBurnedWithId(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.tokens = event.params.tokens
  entity.nonce = event.params.nonce
  entity.save()
}

export function handleEventsHubUpdateCommissionRate(
  event: EventsHubUpdateCommissionRateEvent
): void {
  let entity = new EventsHubUpdateCommissionRate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.newCommissionRate = event.params.newCommissionRate
  entity.oldCommissionRate = event.params.oldCommissionRate
  entity.save()
}
