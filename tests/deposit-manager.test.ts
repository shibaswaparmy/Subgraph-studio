import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { MaxErc20DepositUpdate } from "../generated/schema"
import { MaxErc20DepositUpdate as MaxErc20DepositUpdateEvent } from "../generated/DepositManager/DepositManager"
import { handleMaxErc20DepositUpdate } from "../src/deposit-manager"
import { createMaxErc20DepositUpdateEvent } from "./deposit-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let oldLimit = BigInt.fromI32(234)
    let newLimit = BigInt.fromI32(234)
    let newMaxErc20DepositUpdateEvent = createMaxErc20DepositUpdateEvent(
      oldLimit,
      newLimit
    )
    handleMaxErc20DepositUpdate(newMaxErc20DepositUpdateEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MaxErc20DepositUpdate created and stored", () => {
    assert.entityCount("MaxErc20DepositUpdate", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MaxErc20DepositUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "oldLimit",
      "234"
    )
    assert.fieldEquals(
      "MaxErc20DepositUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newLimit",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
