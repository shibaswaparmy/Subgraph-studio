import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes } from "@graphprotocol/graph-ts"
import { MetaTransactionExecuted } from "../generated/schema"
import { MetaTransactionExecuted as MetaTransactionExecutedEvent } from "../generated/RootChainManager/RootChainManager"
import { handleMetaTransactionExecuted } from "../src/root-chain-manager"
import { createMetaTransactionExecutedEvent } from "./root-chain-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let userAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let relayerAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let functionSignature = Bytes.fromI32(1234567890)
    let newMetaTransactionExecutedEvent = createMetaTransactionExecutedEvent(
      userAddress,
      relayerAddress,
      functionSignature
    )
    handleMetaTransactionExecuted(newMetaTransactionExecutedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MetaTransactionExecuted created and stored", () => {
    assert.entityCount("MetaTransactionExecuted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MetaTransactionExecuted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "userAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MetaTransactionExecuted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "relayerAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MetaTransactionExecuted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "functionSignature",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
