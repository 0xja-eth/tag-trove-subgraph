import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { Buy, Send } from "../generated/Data2Swap/Data2Swap"

export function createBuyEvent(
  _buyer: Address,
  _cid: BigInt,
  _count: BigInt,
  _value: BigInt
): Buy {
  let buyEvent = changetype<Buy>(newMockEvent())

  buyEvent.parameters = new Array()

  buyEvent.parameters.push(
    new ethereum.EventParam("_buyer", ethereum.Value.fromAddress(_buyer))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("_cid", ethereum.Value.fromUnsignedBigInt(_cid))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("_count", ethereum.Value.fromUnsignedBigInt(_count))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return buyEvent
}

export function createSendEvent(
  _sender: Address,
  _cid: BigInt,
  _title: string,
  _content: string
): Send {
  let sendEvent = changetype<Send>(newMockEvent())

  sendEvent.parameters = new Array()

  sendEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  sendEvent.parameters.push(
    new ethereum.EventParam("_cid", ethereum.Value.fromUnsignedBigInt(_cid))
  )
  sendEvent.parameters.push(
    new ethereum.EventParam("_title", ethereum.Value.fromString(_title))
  )
  sendEvent.parameters.push(
    new ethereum.EventParam("_content", ethereum.Value.fromString(_content))
  )

  return sendEvent
}
