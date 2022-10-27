import {
  ClaimFee as ClaimFeeEvent,
  ClaimRewards as ClaimRewardsEvent,
  ConfirmAuction as ConfirmAuctionEvent,
  DelegatorClaimedRewards as DelegatorClaimedRewardsEvent,
  DelegatorRestaked as DelegatorRestakedEvent,
  DelegatorUnstaked as DelegatorUnstakedEvent,
  DynastyValueChange as DynastyValueChangeEvent,
  Jailed as JailedEvent,
  StakingInfoOwnershipTransferred as StakingInfoOwnershipTransferredEvent,
  ProposerBonusChange as ProposerBonusChangeEvent,
  Restaked as RestakedEvent,
  RewardUpdate as RewardUpdateEvent,
  ShareBurned as ShareBurnedEvent,
  ShareMinted as ShareMintedEvent,
  SignerChange as SignerChangeEvent,
  Slashed as SlashedEvent,
  StakeUpdate as StakeUpdateEvent,
  Staked as StakedEvent,
  StartAuction as StartAuctionEvent,
  ThresholdChange as ThresholdChangeEvent,
  TopUpFee as TopUpFeeEvent,
  UnJailed as UnJailedEvent,
  UnstakeInit as UnstakeInitEvent,
  Unstaked as UnstakedEvent,
  StakingInfoUpdateCommissionRate as StakingInfoUpdateCommissionRateEvent
} from "../generated/StakingInfo/StakingInfo"
import {
  ClaimFee,
  ClaimRewards,
  ConfirmAuction,
  DelegatorClaimedRewards,
  DelegatorRestaked,
  DelegatorUnstaked,
  DynastyValueChange,
  Jailed,
  StakingInfoOwnershipTransferred,
  ProposerBonusChange,
  Restaked,
  RewardUpdate,
  ShareBurned,
  ShareMinted,
  SignerChange,
  Slashed,
  StakeUpdate,
  Staked,
  StartAuction,
  ThresholdChange,
  TopUpFee,
  UnJailed,
  UnstakeInit,
  Unstaked,
  StakingInfoUpdateCommissionRate
} from "../generated/schema"

export function handleClaimFee(event: ClaimFeeEvent): void {
  let entity = new ClaimFee(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.fee = event.params.fee
  entity.save()
}

export function handleClaimRewards(event: ClaimRewardsEvent): void {
  let entity = new ClaimRewards(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.amount = event.params.amount
  entity.totalAmount = event.params.totalAmount
  entity.save()
}

export function handleConfirmAuction(event: ConfirmAuctionEvent): void {
  let entity = new ConfirmAuction(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newValidatorId = event.params.newValidatorId
  entity.oldValidatorId = event.params.oldValidatorId
  entity.amount = event.params.amount
  entity.save()
}

export function handleDelegatorClaimedRewards(
  event: DelegatorClaimedRewardsEvent
): void {
  let entity = new DelegatorClaimedRewards(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.user = event.params.user
  entity.rewards = event.params.rewards
  entity.save()
}

export function handleDelegatorRestaked(event: DelegatorRestakedEvent): void {
  let entity = new DelegatorRestaked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.user = event.params.user
  entity.totalStaked = event.params.totalStaked
  entity.save()
}

export function handleDelegatorUnstaked(event: DelegatorUnstakedEvent): void {
  let entity = new DelegatorUnstaked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.save()
}

export function handleDynastyValueChange(event: DynastyValueChangeEvent): void {
  let entity = new DynastyValueChange(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newDynasty = event.params.newDynasty
  entity.oldDynasty = event.params.oldDynasty
  entity.save()
}

export function handleJailed(event: JailedEvent): void {
  let entity = new Jailed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.exitEpoch = event.params.exitEpoch
  entity.signer = event.params.signer
  entity.save()
}

export function handleStakingInfoOwnershipTransferred(
  event: StakingInfoOwnershipTransferredEvent
): void {
  let entity = new StakingInfoOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleProposerBonusChange(
  event: ProposerBonusChangeEvent
): void {
  let entity = new ProposerBonusChange(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newProposerBonus = event.params.newProposerBonus
  entity.oldProposerBonus = event.params.oldProposerBonus
  entity.save()
}

export function handleRestaked(event: RestakedEvent): void {
  let entity = new Restaked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.amount = event.params.amount
  entity.total = event.params.total
  entity.save()
}

export function handleRewardUpdate(event: RewardUpdateEvent): void {
  let entity = new RewardUpdate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newReward = event.params.newReward
  entity.oldReward = event.params.oldReward
  entity.save()
}

export function handleShareBurned(event: ShareBurnedEvent): void {
  let entity = new ShareBurned(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.tokens = event.params.tokens
  entity.save()
}

export function handleShareMinted(event: ShareMintedEvent): void {
  let entity = new ShareMinted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.tokens = event.params.tokens
  entity.save()
}

export function handleSignerChange(event: SignerChangeEvent): void {
  let entity = new SignerChange(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.nonce = event.params.nonce
  entity.oldSigner = event.params.oldSigner
  entity.newSigner = event.params.newSigner
  entity.signerPubkey = event.params.signerPubkey
  entity.save()
}

export function handleSlashed(event: SlashedEvent): void {
  let entity = new Slashed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.nonce = event.params.nonce
  entity.amount = event.params.amount
  entity.save()
}

export function handleStakeUpdate(event: StakeUpdateEvent): void {
  let entity = new StakeUpdate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.nonce = event.params.nonce
  entity.newAmount = event.params.newAmount
  entity.save()
}

export function handleStaked(event: StakedEvent): void {
  let entity = new Staked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.signer = event.params.signer
  entity.validatorId = event.params.validatorId
  entity.nonce = event.params.nonce
  entity.activationEpoch = event.params.activationEpoch
  entity.amount = event.params.amount
  entity.total = event.params.total
  entity.signerPubkey = event.params.signerPubkey
  entity.save()
}

export function handleStartAuction(event: StartAuctionEvent): void {
  let entity = new StartAuction(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.amount = event.params.amount
  entity.auctionAmount = event.params.auctionAmount
  entity.save()
}

export function handleThresholdChange(event: ThresholdChangeEvent): void {
  let entity = new ThresholdChange(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newThreshold = event.params.newThreshold
  entity.oldThreshold = event.params.oldThreshold
  entity.save()
}

export function handleTopUpFee(event: TopUpFeeEvent): void {
  let entity = new TopUpFee(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.fee = event.params.fee
  entity.save()
}

export function handleUnJailed(event: UnJailedEvent): void {
  let entity = new UnJailed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.signer = event.params.signer
  entity.save()
}

export function handleUnstakeInit(event: UnstakeInitEvent): void {
  let entity = new UnstakeInit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.validatorId = event.params.validatorId
  entity.nonce = event.params.nonce
  entity.deactivationEpoch = event.params.deactivationEpoch
  entity.amount = event.params.amount
  entity.save()
}

export function handleUnstaked(event: UnstakedEvent): void {
  let entity = new Unstaked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.validatorId = event.params.validatorId
  entity.amount = event.params.amount
  entity.total = event.params.total
  entity.save()
}

export function handleStakingInfoUpdateCommissionRate(
  event: StakingInfoUpdateCommissionRateEvent
): void {
  let entity = new StakingInfoUpdateCommissionRate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.validatorId = event.params.validatorId
  entity.newCommissionRate = event.params.newCommissionRate
  entity.oldCommissionRate = event.params.oldCommissionRate
  entity.save()
}
