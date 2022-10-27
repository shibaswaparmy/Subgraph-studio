import { GovernanceOwnershipTransferred as GovernanceOwnershipTransferredEvent } from "../generated/Governance/Governance"
import { GovernanceOwnershipTransferred } from "../generated/schema"

export function handleGovernanceOwnershipTransferred(
  event: GovernanceOwnershipTransferredEvent
): void {
  let entity = new GovernanceOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
