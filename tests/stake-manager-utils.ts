import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  StakeManagerOwnershipTransferred,
  RootChainChanged
} from "../generated/StakeManager/StakeManager"

export function createStakeManagerOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): StakeManagerOwnershipTransferred {
  let stakeManagerOwnershipTransferredEvent = changetype<
    StakeManagerOwnershipTransferred
  >(newMockEvent())

  stakeManagerOwnershipTransferredEvent.parameters = new Array()

  stakeManagerOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  stakeManagerOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return stakeManagerOwnershipTransferredEvent
}

export function createRootChainChangedEvent(
  previousRootChain: Address,
  newRootChain: Address
): RootChainChanged {
  let rootChainChangedEvent = changetype<RootChainChanged>(newMockEvent())

  rootChainChangedEvent.parameters = new Array()

  rootChainChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousRootChain",
      ethereum.Value.fromAddress(previousRootChain)
    )
  )
  rootChainChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newRootChain",
      ethereum.Value.fromAddress(newRootChain)
    )
  )

  return rootChainChangedEvent
}
