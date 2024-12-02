---
title: "Golang SQLC"
description: "An sql compiler for golang"
date: "2024-12-02"
published: true
banner: "/golang/sqlc.png"
categories: 
    - Golang
    - Backend
---

## Table of content

# Golang SQLC


The issue of hygiene was very evident. Food was prepared with poor sanitation practices. 
They had problems with washing their hands and vegetables properly. 
Every time I bought food from the mami market, I would get food poisoning. 
I tried different food vendors, but nothing changed. It wasn’t just me; everyone who wasn’t used to the environment experienced the same thing. Excessive use of ‘white maggi’ contributed to the countless bouts of food poisoning. Ohhhh how the Hausas love their maggi! They would cook food with an excess of seasoning cubes and ‘Ajinomoto’. 

```js
function main()  {
    return "Hello man"
}
```

## Version 2 of me



![](https://www.youtube.com/watch?v=fA8QK69zwlw)

[![IMAGE ALT TEXT](http://img.youtube.com/watch?v=tyDan_pFUHE/0.jpg)](https://www.youtube.com/watch?v=tyDan_pFUHE "Video Title")


[![CI status](https://github.com/paradigmxyz/reth/workflows/ci/badge.svg)][gh-ci]
[![Telegram Chat][tg-badge]][tg-url]

[gh-ci]: https://github.com/paradigmxyz/reth/actions/workflows/rust.yml
[tg-badge]: https://img.shields.io/badge/chat-telegram-blue


<iframe width="auto" height="440" 
src="https://www.youtube.com/embed/fA8QK69zwlw">
</iframe>

## What is Artemis?

Artemis is a framework for writing MEV bots in Rust. It's designed to be simple, modular, and fast. 

At its core, Artemis is architected as an event processing pipeline. The library is made up of three main components: 

1. *Collectors*: *Collectors* take in external events (such as pending txs, new blocks, marketplace orders, etc. ) and turn them into an internal *event* representation. 
2. *Strategies*: *Strategies* contain the core logic required for each MEV opportunity. They take in *events* as inputs, and compute whether any opportunities are available (for example, a strategy might listen to a stream of marketplace orders to see if there are any cross-exchange arbs). *Strategies* produce *actions*.
3. *Executors*: *Executors* process *actions*, and are responsible for executing them in different domains (for example, submitting txs, posting off-chain orders, etc.).

## Strategies 

The following strategies have been implemented: 

- [Opensea/Sudoswap NFT Arbitrage](/crates/strategies/opensea-sudo-arb/): A strategy implementing atomic, cross-market NFT arbitrage between Seaport and Sudoswap.

## Build, Test and Run

First, make sure the following are installed: 
1. [Anvil](https://github.com/foundry-rs/foundry/tree/master/crates/anvil#installing-from-source)

In order to build, first clone the github repo: 

```sh
git clone https://github.com/paradigmxyz/artemis
cd artemis
```

Next, run tests with cargo: 

```sh
cargo test --all
```



### Version 3 of me


In order to run the opensea sudoswap arbitrage strategy, you can run the following command: 

```sh
cargo run -- --wss <INFURA_OR_ALCHEMY_KEY> --opensea-api-key <OPENSEA_API_KEY> --private-key <PRIVATE_KEY> --arb-contract-address <ARB_CONTRACT_ADDRESS> --bid-percentage <BID_PERCENTAGE>
```

where `ARB_CONTRACT_ADDRESS` is the address to which you deploy the [arb contract](/crates/strategies/opensea-sudo-arb/contracts/src/SudoOpenseaArb.sol).


## Acknowledgements

- [subway](https://github.com/libevm/subway)
- [subway-rs](https://github.com/refcell/subway-rs)
- [cfmms-rs](https://github.com/0xKitsune/cfmms-rs)
- [rusty-sando](https://github.com/mouseless-eth/rusty-sando)
- [bundle-generator](https://github.com/Alcibiades-Capital/mev_bundle_generator/blob/master/Cargo.toml)
- [ethers-rs](https://github.com/gakonst/ethers-rs)
- [ethers-flashbots](https://github.com/onbjerg/ethers-flashbots)



[tg-url]: https://t.me/artemis_devs