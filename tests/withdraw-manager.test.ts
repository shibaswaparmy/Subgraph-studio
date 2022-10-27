import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ExitCancelled } from "../generated/schema"
import { ExitCancelled as ExitCancelledEvent } from "../generated/WithdrawManager/WithdrawManager"
import { handleExitCancelled } from "../src/withdraw-manager"
import { createExitCancelledEvent } from "./withdraw-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let exitId = BigInt.fromI32(234)
    let newExitCancelledEvent = createExitCancelledEvent(exitId)
    handleExitCancelled(newExitCancelledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExitCancelled created and stored", () => {
    assert.entityCount("ExitCancelled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExitCancelled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "exitId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
