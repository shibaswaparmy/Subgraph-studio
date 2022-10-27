import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { GovernanceOwnershipTransferred } from "../generated/Governance/Governance"

export function createGovernanceOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): GovernanceOwnershipTransferred {
  let governanceOwnershipTransferredEvent = changetype<
    GovernanceOwnershipTransferred
  >(newMockEvent())

  governanceOwnershipTransferredEvent.parameters = new Array()

  governanceOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  governanceOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return governanceOwnershipTransferredEvent
}
