import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  DelegatorUnstakeWithId,
  RewardParams,
  ShareBurnedWithId,
  UpdateCommissionRate
} from "../generated/EventsHub/EventsHub"

export function createDelegatorUnstakeWithIdEvent(
  validatorId: BigInt,
  user: Address,
  amount: BigInt,
  nonce: BigInt
): DelegatorUnstakeWithId {
  let delegatorUnstakeWithIdEvent = changetype<DelegatorUnstakeWithId>(
    newMockEvent()
  )

  delegatorUnstakeWithIdEvent.parameters = new Array()

  delegatorUnstakeWithIdEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  delegatorUnstakeWithIdEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  delegatorUnstakeWithIdEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  delegatorUnstakeWithIdEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return delegatorUnstakeWithIdEvent
}

export function createRewardParamsEvent(
  rewardDecreasePerCheckpoint: BigInt,
  maxRewardedCheckpoints: BigInt,
  checkpointRewardDelta: BigInt
): RewardParams {
  let rewardParamsEvent = changetype<RewardParams>(newMockEvent())

  rewardParamsEvent.parameters = new Array()

  rewardParamsEvent.parameters.push(
    new ethereum.EventParam(
      "rewardDecreasePerCheckpoint",
      ethereum.Value.fromUnsignedBigInt(rewardDecreasePerCheckpoint)
    )
  )
  rewardParamsEvent.parameters.push(
    new ethereum.EventParam(
      "maxRewardedCheckpoints",
      ethereum.Value.fromUnsignedBigInt(maxRewardedCheckpoints)
    )
  )
  rewardParamsEvent.parameters.push(
    new ethereum.EventParam(
      "checkpointRewardDelta",
      ethereum.Value.fromUnsignedBigInt(checkpointRewardDelta)
    )
  )

  return rewardParamsEvent
}

export function createShareBurnedWithIdEvent(
  validatorId: BigInt,
  user: Address,
  amount: BigInt,
  tokens: BigInt,
  nonce: BigInt
): ShareBurnedWithId {
  let shareBurnedWithIdEvent = changetype<ShareBurnedWithId>(newMockEvent())

  shareBurnedWithIdEvent.parameters = new Array()

  shareBurnedWithIdEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  shareBurnedWithIdEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  shareBurnedWithIdEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  shareBurnedWithIdEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )
  shareBurnedWithIdEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return shareBurnedWithIdEvent
}

export function createUpdateCommissionRateEvent(
  validatorId: BigInt,
  newCommissionRate: BigInt,
  oldCommissionRate: BigInt
): UpdateCommissionRate {
  let updateCommissionRateEvent = changetype<UpdateCommissionRate>(
    newMockEvent()
  )

  updateCommissionRateEvent.parameters = new Array()

  updateCommissionRateEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  updateCommissionRateEvent.parameters.push(
    new ethereum.EventParam(
      "newCommissionRate",
      ethereum.Value.fromUnsignedBigInt(newCommissionRate)
    )
  )
  updateCommissionRateEvent.parameters.push(
    new ethereum.EventParam(
      "oldCommissionRate",
      ethereum.Value.fromUnsignedBigInt(oldCommissionRate)
    )
  )

  return updateCommissionRateEvent
}
