import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { NewHeaderBlock } from "../generated/schema"
import { NewHeaderBlock as NewHeaderBlockEvent } from "../generated/RootChain/RootChain"
import { handleNewHeaderBlock } from "../src/root-chain"
import { createNewHeaderBlockEvent } from "./root-chain-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let proposer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let headerBlockId = BigInt.fromI32(234)
    let reward = BigInt.fromI32(234)
    let start = BigInt.fromI32(234)
    let end = BigInt.fromI32(234)
    let root = Bytes.fromI32(1234567890)
    let newNewHeaderBlockEvent = createNewHeaderBlockEvent(
      proposer,
      headerBlockId,
      reward,
      start,
      end,
      root
    )
    handleNewHeaderBlock(newNewHeaderBlockEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NewHeaderBlock created and stored", () => {
    assert.entityCount("NewHeaderBlock", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NewHeaderBlock",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proposer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NewHeaderBlock",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "headerBlockId",
      "234"
    )
    assert.fieldEquals(
      "NewHeaderBlock",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "reward",
      "234"
    )
    assert.fieldEquals(
      "NewHeaderBlock",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "start",
      "234"
    )
    assert.fieldEquals(
      "NewHeaderBlock",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "end",
      "234"
    )
    assert.fieldEquals(
      "NewHeaderBlock",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "root",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
