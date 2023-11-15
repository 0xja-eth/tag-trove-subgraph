import {
  Buy as BuyEvent,
  Send as SendEvent
} from "../generated/Data2Swap/Data2Swap"
import { Buy, Send } from "../generated/schema"

export function handleBuy(event: BuyEvent): void {
  let entity = new Buy(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity._buyer = event.params._buyer
  entity._cid = event.params._cid
  entity._count = event.params._count
  entity._value = event.params._value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSend(event: SendEvent): void {
  let entity = new Send(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._sender = event.params._sender
  entity._cid = event.params._cid
  entity._title = event.params._title
  entity._content = event.params._content

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
