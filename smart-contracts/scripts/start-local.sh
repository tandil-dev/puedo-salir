#!/bin/sh

mnemonic=`cat .secret`
echo ${mnemonic}
ganache-cli -m "${mnemonic}" -i 88 &
yarn run deploy:local