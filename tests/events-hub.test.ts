import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { DelegatorUnstakeWithId } from "../generated/schema"
import { DelegatorUnstakeWithId as DelegatorUnstakeWithIdEvent } from "../generated/EventsHub/EventsHub"
import { handleDelegatorUnstakeWithId } from "../src/events-hub"
import { createDelegatorUnstakeWithIdEvent } from "./events-hub-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let validatorId = BigInt.fromI32(234)
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let amount = BigInt.fromI32(234)
    let nonce = BigInt.fromI32(234)
    let newDelegatorUnstakeWithIdEvent = createDelegatorUnstakeWithIdEvent(
      validatorId,
      user,
      amount,
      nonce
    )
    handleDelegatorUnstakeWithId(newDelegatorUnstakeWithIdEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DelegatorUnstakeWithId created and stored", () => {
    assert.entityCount("DelegatorUnstakeWithId", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DelegatorUnstakeWithId",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "validatorId",
      "234"
    )
    assert.fieldEquals(
      "DelegatorUnstakeWithId",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DelegatorUnstakeWithId",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "DelegatorUnstakeWithId",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nonce",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
