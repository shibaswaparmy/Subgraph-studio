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

export class NewRegistration extends ethereum.Event {
  get params(): NewRegistration__Params {
    return new NewRegistration__Params(this);
  }
}

export class NewRegistration__Params {
  _event: NewRegistration;

  constructor(event: NewRegistration) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class StateSenderOwnershipTransferred extends ethereum.Event {
  get params(): StateSenderOwnershipTransferred__Params {
    return new StateSenderOwnershipTransferred__Params(this);
  }
}

export class StateSenderOwnershipTransferred__Params {
  _event: StateSenderOwnershipTransferred;

  constructor(event: StateSenderOwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RegistrationUpdated extends ethereum.Event {
  get params(): RegistrationUpdated__Params {
    return new RegistrationUpdated__Params(this);
  }
}

export class RegistrationUpdated__Params {
  _event: RegistrationUpdated;

  constructor(event: RegistrationUpdated) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class StateSynced extends ethereum.Event {
  get params(): StateSynced__Params {
    return new StateSynced__Params(this);
  }
}

export class StateSynced__Params {
  _event: StateSynced;

  constructor(event: StateSynced) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get contractAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get data(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class StateSender extends ethereum.SmartContract {
  static bind(address: Address): StateSender {
    return new StateSender("StateSender", address);
  }

  counter(): BigInt {
    let result = super.call("counter", "counter():(uint256)", []);

    return result[0].toBigInt();
  }

  try_counter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("counter", "counter():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  registrations(param0: Address): Address {
    let result = super.call(
      "registrations",
      "registrations(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_registrations(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "registrations",
      "registrations(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class RegisterCall extends ethereum.Call {
  get inputs(): RegisterCall__Inputs {
    return new RegisterCall__Inputs(this);
  }

  get outputs(): RegisterCall__Outputs {
    return new RegisterCall__Outputs(this);
  }
}

export class RegisterCall__Inputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RegisterCall__Outputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SyncStateCall extends ethereum.Call {
  get inputs(): SyncStateCall__Inputs {
    return new SyncStateCall__Inputs(this);
  }

  get outputs(): SyncStateCall__Outputs {
    return new SyncStateCall__Outputs(this);
  }
}

export class SyncStateCall__Inputs {
  _call: SyncStateCall;

  constructor(call: SyncStateCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SyncStateCall__Outputs {
  _call: SyncStateCall;

  constructor(call: SyncStateCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
