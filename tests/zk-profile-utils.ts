import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  Transfer,
  ZKProof
} from "../generated/ZKProfile/ZKProfile"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createZKProofEvent(
  _to: Address,
  _a: BigInt[],
  _b: BigInt[],
  _c: BigInt[],
  _dest: BigInt,
  _pubKey1: BigInt,
  _pubKey2: BigInt,
  _tagId: BigInt,
  _nullifier: BigInt
): ZKProof {
  let zkProofEvent = changetype<ZKProof>(newMockEvent())

  zkProofEvent.parameters = new Array()

  zkProofEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  zkProofEvent.parameters.push(new ethereum.EventParam("_a",
    ethereum.Value.fromArray(_a.map(v => ethereum.Value.fromUnsignedBigInt(v)))
  ))
  zkProofEvent.parameters.push(new ethereum.EventParam("_b",
    ethereum.Value.fromArray(_b.map(v => ethereum.Value.fromUnsignedBigInt(v)))
  ))
  zkProofEvent.parameters.push(new ethereum.EventParam("_c",
    ethereum.Value.fromArray(_c.map(v => ethereum.Value.fromUnsignedBigInt(v)))
  ))
  // zkProofEvent.parameters.push(
  //   new ethereum.EventParam("_c", ethereum.Value.fromUnsignedBigInt(_c))
  // )
  zkProofEvent.parameters.push(new ethereum.EventParam("_dest",
    ethereum.Value.fromUnsignedBigInt(_dest)
  ))
  zkProofEvent.parameters.push(new ethereum.EventParam("_pubKey1",
    ethereum.Value.fromUnsignedBigInt(_pubKey1)
  ))
  zkProofEvent.parameters.push(new ethereum.EventParam("_pubKey2",
    ethereum.Value.fromUnsignedBigInt(_pubKey2)
  ))
  zkProofEvent.parameters.push(new ethereum.EventParam("_tagId",
    ethereum.Value.fromUnsignedBigInt(_tagId)
  ))
  zkProofEvent.parameters.push(new ethereum.EventParam("_nullifier",
    ethereum.Value.fromUnsignedBigInt(_nullifier)
  ))
  // zkProofEvent.parameters.push(
  //   new ethereum.EventParam("_input", ethereum.Value.fromUnsignedBigInt(_input))
  // )

  return zkProofEvent
}
