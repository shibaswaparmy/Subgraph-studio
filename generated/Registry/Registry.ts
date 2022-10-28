// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ContractMapUpdated extends ethereum.Event {
  get params(): ContractMapUpdated__Params {
    return new ContractMapUpdated__Params(this);
  }
}

export class ContractMapUpdated__Params {
  _event: ContractMapUpdated;

  constructor(event: ContractMapUpdated) {
    this._event = event;
  }

  get key(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newContract(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class PredicateAdded extends ethereum.Event {
  get params(): PredicateAdded__Params {
    return new PredicateAdded__Params(this);
  }
}

export class PredicateAdded__Params {
  _event: PredicateAdded;

  constructor(event: PredicateAdded) {
    this._event = event;
  }

  get predicate(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PredicateRemoved extends ethereum.Event {
  get params(): PredicateRemoved__Params {
    return new PredicateRemoved__Params(this);
  }
}

export class PredicateRemoved__Params {
  _event: PredicateRemoved;

  constructor(event: PredicateRemoved) {
    this._event = event;
  }

  get predicate(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProofValidatorAdded extends ethereum.Event {
  get params(): ProofValidatorAdded__Params {
    return new ProofValidatorAdded__Params(this);
  }
}

export class ProofValidatorAdded__Params {
  _event: ProofValidatorAdded;

  constructor(event: ProofValidatorAdded) {
    this._event = event;
  }

  get validator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProofValidatorRemoved extends ethereum.Event {
  get params(): ProofValidatorRemoved__Params {
    return new ProofValidatorRemoved__Params(this);
  }
}

export class ProofValidatorRemoved__Params {
  _event: ProofValidatorRemoved;

  constructor(event: ProofValidatorRemoved) {
    this._event = event;
  }

  get validator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenMapped extends ethereum.Event {
  get params(): TokenMapped__Params {
    return new TokenMapped__Params(this);
  }
}

export class TokenMapped__Params {
  _event: TokenMapped;

  constructor(event: TokenMapped) {
    this._event = event;
  }

  get rootToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get childToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Registry__getChildChainAndStateSenderResult {
  value0: Address;
  value1: Address;

  constructor(value0: Address, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }

  getValue0(): Address {
    return this.value0;
  }

  getValue1(): Address {
    return this.value1;
  }
}

export class Registry extends ethereum.SmartContract {
  static bind(address: Address): Registry {
    return new Registry("Registry", address);
  }

  childToRootToken(param0: Address): Address {
    let result = super.call(
      "childToRootToken",
      "childToRootToken(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_childToRootToken(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "childToRootToken",
      "childToRootToken(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  contractMap(param0: Bytes): Address {
    let result = super.call("contractMap", "contractMap(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toAddress();
  }

  try_contractMap(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "contractMap",
      "contractMap(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  erc20Predicate(): Address {
    let result = super.call("erc20Predicate", "erc20Predicate():(address)", []);

    return result[0].toAddress();
  }

  try_erc20Predicate(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "erc20Predicate",
      "erc20Predicate():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  erc721Predicate(): Address {
    let result = super.call(
      "erc721Predicate",
      "erc721Predicate():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_erc721Predicate(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "erc721Predicate",
      "erc721Predicate():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  governance(): Address {
    let result = super.call("governance", "governance():(address)", []);

    return result[0].toAddress();
  }

  try_governance(): ethereum.CallResult<Address> {
    let result = super.tryCall("governance", "governance():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isERC721(param0: Address): boolean {
    let result = super.call("isERC721", "isERC721(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isERC721(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isERC721", "isERC721(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  predicates(param0: Address): i32 {
    let result = super.call("predicates", "predicates(address):(uint8)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toI32();
  }

  try_predicates(param0: Address): ethereum.CallResult<i32> {
    let result = super.tryCall("predicates", "predicates(address):(uint8)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  proofValidatorContracts(param0: Address): boolean {
    let result = super.call(
      "proofValidatorContracts",
      "proofValidatorContracts(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_proofValidatorContracts(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "proofValidatorContracts",
      "proofValidatorContracts(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  rootToChildToken(param0: Address): Address {
    let result = super.call(
      "rootToChildToken",
      "rootToChildToken(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_rootToChildToken(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "rootToChildToken",
      "rootToChildToken(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getValidatorShareAddress(): Address {
    let result = super.call(
      "getValidatorShareAddress",
      "getValidatorShareAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getValidatorShareAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getValidatorShareAddress",
      "getValidatorShareAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getWethTokenAddress(): Address {
    let result = super.call(
      "getWethTokenAddress",
      "getWethTokenAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getWethTokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getWethTokenAddress",
      "getWethTokenAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getDepositManagerAddress(): Address {
    let result = super.call(
      "getDepositManagerAddress",
      "getDepositManagerAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getDepositManagerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getDepositManagerAddress",
      "getDepositManagerAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getStakeManagerAddress(): Address {
    let result = super.call(
      "getStakeManagerAddress",
      "getStakeManagerAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getStakeManagerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getStakeManagerAddress",
      "getStakeManagerAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSlashingManagerAddress(): Address {
    let result = super.call(
      "getSlashingManagerAddress",
      "getSlashingManagerAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getSlashingManagerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSlashingManagerAddress",
      "getSlashingManagerAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getWithdrawManagerAddress(): Address {
    let result = super.call(
      "getWithdrawManagerAddress",
      "getWithdrawManagerAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getWithdrawManagerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getWithdrawManagerAddress",
      "getWithdrawManagerAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getChildChainAndStateSender(): Registry__getChildChainAndStateSenderResult {
    let result = super.call(
      "getChildChainAndStateSender",
      "getChildChainAndStateSender():(address,address)",
      []
    );

    return new Registry__getChildChainAndStateSenderResult(
      result[0].toAddress(),
      result[1].toAddress()
    );
  }

  try_getChildChainAndStateSender(): ethereum.CallResult<
    Registry__getChildChainAndStateSenderResult
  > {
    let result = super.tryCall(
      "getChildChainAndStateSender",
      "getChildChainAndStateSender():(address,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Registry__getChildChainAndStateSenderResult(
        value[0].toAddress(),
        value[1].toAddress()
      )
    );
  }

  isTokenMapped(_token: Address): boolean {
    let result = super.call("isTokenMapped", "isTokenMapped(address):(bool)", [
      ethereum.Value.fromAddress(_token)
    ]);

    return result[0].toBoolean();
  }

  try_isTokenMapped(_token: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTokenMapped",
      "isTokenMapped(address):(bool)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isTokenMappedAndIsErc721(_token: Address): boolean {
    let result = super.call(
      "isTokenMappedAndIsErc721",
      "isTokenMappedAndIsErc721(address):(bool)",
      [ethereum.Value.fromAddress(_token)]
    );

    return result[0].toBoolean();
  }

  try_isTokenMappedAndIsErc721(_token: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTokenMappedAndIsErc721",
      "isTokenMappedAndIsErc721(address):(bool)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isTokenMappedAndGetPredicate(_token: Address): Address {
    let result = super.call(
      "isTokenMappedAndGetPredicate",
      "isTokenMappedAndGetPredicate(address):(address)",
      [ethereum.Value.fromAddress(_token)]
    );

    return result[0].toAddress();
  }

  try_isTokenMappedAndGetPredicate(
    _token: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "isTokenMappedAndGetPredicate",
      "isTokenMappedAndGetPredicate(address):(address)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isChildTokenErc721(childToken: Address): boolean {
    let result = super.call(
      "isChildTokenErc721",
      "isChildTokenErc721(address):(bool)",
      [ethereum.Value.fromAddress(childToken)]
    );

    return result[0].toBoolean();
  }

  try_isChildTokenErc721(childToken: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isChildTokenErc721",
      "isChildTokenErc721(address):(bool)",
      [ethereum.Value.fromAddress(childToken)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _governance(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class UpdateContractMapCall extends ethereum.Call {
  get inputs(): UpdateContractMapCall__Inputs {
    return new UpdateContractMapCall__Inputs(this);
  }

  get outputs(): UpdateContractMapCall__Outputs {
    return new UpdateContractMapCall__Outputs(this);
  }
}

export class UpdateContractMapCall__Inputs {
  _call: UpdateContractMapCall;

  constructor(call: UpdateContractMapCall) {
    this._call = call;
  }

  get _key(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _address(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateContractMapCall__Outputs {
  _call: UpdateContractMapCall;

  constructor(call: UpdateContractMapCall) {
    this._call = call;
  }
}

export class MapTokenCall extends ethereum.Call {
  get inputs(): MapTokenCall__Inputs {
    return new MapTokenCall__Inputs(this);
  }

  get outputs(): MapTokenCall__Outputs {
    return new MapTokenCall__Outputs(this);
  }
}

export class MapTokenCall__Inputs {
  _call: MapTokenCall;

  constructor(call: MapTokenCall) {
    this._call = call;
  }

  get _rootToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _childToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _isERC721(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class MapTokenCall__Outputs {
  _call: MapTokenCall;

  constructor(call: MapTokenCall) {
    this._call = call;
  }
}

export class AddErc20PredicateCall extends ethereum.Call {
  get inputs(): AddErc20PredicateCall__Inputs {
    return new AddErc20PredicateCall__Inputs(this);
  }

  get outputs(): AddErc20PredicateCall__Outputs {
    return new AddErc20PredicateCall__Outputs(this);
  }
}

export class AddErc20PredicateCall__Inputs {
  _call: AddErc20PredicateCall;

  constructor(call: AddErc20PredicateCall) {
    this._call = call;
  }

  get predicate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddErc20PredicateCall__Outputs {
  _call: AddErc20PredicateCall;

  constructor(call: AddErc20PredicateCall) {
    this._call = call;
  }
}

export class AddErc721PredicateCall extends ethereum.Call {
  get inputs(): AddErc721PredicateCall__Inputs {
    return new AddErc721PredicateCall__Inputs(this);
  }

  get outputs(): AddErc721PredicateCall__Outputs {
    return new AddErc721PredicateCall__Outputs(this);
  }
}

export class AddErc721PredicateCall__Inputs {
  _call: AddErc721PredicateCall;

  constructor(call: AddErc721PredicateCall) {
    this._call = call;
  }

  get predicate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddErc721PredicateCall__Outputs {
  _call: AddErc721PredicateCall;

  constructor(call: AddErc721PredicateCall) {
    this._call = call;
  }
}

export class AddPredicateCall extends ethereum.Call {
  get inputs(): AddPredicateCall__Inputs {
    return new AddPredicateCall__Inputs(this);
  }

  get outputs(): AddPredicateCall__Outputs {
    return new AddPredicateCall__Outputs(this);
  }
}

export class AddPredicateCall__Inputs {
  _call: AddPredicateCall;

  constructor(call: AddPredicateCall) {
    this._call = call;
  }

  get predicate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _type(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class AddPredicateCall__Outputs {
  _call: AddPredicateCall;

  constructor(call: AddPredicateCall) {
    this._call = call;
  }
}

export class RemovePredicateCall extends ethereum.Call {
  get inputs(): RemovePredicateCall__Inputs {
    return new RemovePredicateCall__Inputs(this);
  }

  get outputs(): RemovePredicateCall__Outputs {
    return new RemovePredicateCall__Outputs(this);
  }
}

export class RemovePredicateCall__Inputs {
  _call: RemovePredicateCall;

  constructor(call: RemovePredicateCall) {
    this._call = call;
  }

  get predicate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemovePredicateCall__Outputs {
  _call: RemovePredicateCall;

  constructor(call: RemovePredicateCall) {
    this._call = call;
  }
}
