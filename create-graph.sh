graph init --product subgraph-studio \
  --start-block 2301431 \
  --from-contract 0xE77F33c3b19d564c3B3463657596bEE1fc7E4C69 \
  --network scroll-sepolia --abi ../Data2Swap.json \
  data2-cash-scroll ../data2-cash-data2-swap/

graph init --product subgraph-studio \
  --start-block 2301431 \
  --from-contract 0x26755Cf06C352b776c0Dc5Fc510b54aff966b7b8 \
  --network scroll-sepolia --abi ../ZKProfile.json \
  data2-cash-scroll ../data2-cash-zk-profile/
