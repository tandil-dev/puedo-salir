const contract = {
  "contractName": "PuedoSalir",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_message",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "_status",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "NewMessage",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "NewStatus",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "message",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "status",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_status",
          "type": "bool"
        }
      ],
      "name": "setStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "setMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.4+commit.1dca32f3\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_message\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"message\",\"type\":\"string\"}],\"name\":\"NewMessage\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"NewStatus\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"message\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_message\",\"type\":\"string\"}],\"name\":\"setMessage\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"setStatus\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"status\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"isOwner()\":{\"details\":\"Returns true if the caller is the current owner.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/loki/dev/blockchain/tandil/puedo-salir/smart-contracts/contracts/PuedoSalir.sol\":\"PuedoSalir\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/loki/dev/blockchain/tandil/puedo-salir/smart-contracts/contracts/Context.sol\":{\"keccak256\":\"0x562a4cf2831aa7ca2c7983651a99fac95d9b0a07491506faa61bf4a847d32c12\",\"urls\":[\"bzz-raw://2354a784b762920612a01b1138c43f2f152f553879b0015f19cca0ec14175a3f\",\"dweb:/ipfs/Qmc9dAkxveEzQm3e9LwTijmfhYTUmWxnojsWV4GpufMPNF\"]},\"/home/loki/dev/blockchain/tandil/puedo-salir/smart-contracts/contracts/Ownable.sol\":{\"keccak256\":\"0x82fc671e0ef0e85515ddff7a406fd73bb804d299671cee222ad07665cb67a981\",\"urls\":[\"bzz-raw://08088977d26fac46332e09e276f88468ca8847cec0eb03762f8bf98d67b124c4\",\"dweb:/ipfs/QmZ5yi3pU9FvH1fNK4rzAcbHyag1oFXVoAgye9j2RK9n9W\"]},\"/home/loki/dev/blockchain/tandil/puedo-salir/smart-contracts/contracts/PuedoSalir.sol\":{\"keccak256\":\"0x6d85c567ddff3cf10607261f6b26249111caaa7f0687ddd8994445046240b949\",\"urls\":[\"bzz-raw://8434b0beebc073b8e83a094404f96867f157f019c9f76fcce19b4326180e60ce\",\"dweb:/ipfs/Qma5biehmhMDiFnWL4ZCBXwuUufiM1uatz7yJrfJPfooqD\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b5060405162000d1a38038062000d1a8339818101604052604081101561003557600080fd5b810190808051604051939291908464010000000082111561005557600080fd5b8382019150602082018581111561006b57600080fd5b825186600182028301116401000000008211171561008857600080fd5b8083526020830192505050908051906020019080838360005b838110156100bc5780820151818401526020810190506100a1565b50505050905090810190601f1680156100e95780820380516001836020036101000a031916815260200191505b5060405260200180519060200190929190505050600061010d6102ba60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35080600060146101000a81548160ff02191690831515021790555081600190805190602001906101db9291906102c2565b507f476e04c786e60f629af918e59f7b2d948f3b488bf1258cab1bf3a4351521b46f826040518080602001828103825283818151815260200191508051906020019080838360005b8381101561023e578082015181840152602081019050610223565b50505050905090810190601f16801561026b5780820380516001836020036101000a031916815260200191505b509250505060405180910390a17faa074df5e156d5f22d3f5eca3c3e450f0411c272b6bcd92f07bbddc2158319ed81604051808215151515815260200191505060405180910390a15050610367565b600033905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061030357805160ff1916838001178555610331565b82800160010185558215610331579182015b82811115610330578251825591602001919060010190610315565b5b50905061033e9190610342565b5090565b61036491905b80821115610360576000816000905550600101610348565b5090565b90565b6109a380620003776000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146101a45780638f32d59b146101ee578063e21f37ce14610210578063f2fde38b1461029357610088565b8063200d2ed21461008d578063368b8772146100af5780635c40f6f41461016a578063715018a61461019a575b600080fd5b6100956102d7565b604051808215151515815260200191505060405180910390f35b610168600480360360208110156100c557600080fd5b81019080803590602001906401000000008111156100e257600080fd5b8201836020820111156100f457600080fd5b8035906020019184600183028401116401000000008311171561011657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506102ea565b005b6101986004803603602081101561018057600080fd5b810190808035151590602001909291905050506103a0565b005b6101a2610472565b005b6101ac6105ab565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101f66105d4565b604051808215151515815260200191505060405180910390f35b610218610632565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561025857808201518184015260208101905061023d565b50505050905090810190601f1680156102855780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102d5600480360360208110156102a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106d0565b005b600060149054906101000a900460ff1681565b80600190805190602001906103009291906108a2565b507f476e04c786e60f629af918e59f7b2d948f3b488bf1258cab1bf3a4351521b46f816040518080602001828103825283818151815260200191508051906020019080838360005b83811015610363578082015181840152602081019050610348565b50505050905090810190601f1680156103905780820380516001836020036101000a031916815260200191505b509250505060405180910390a150565b6103a86105d4565b61041a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600060146101000a81548160ff0219169083151502179055507faa074df5e156d5f22d3f5eca3c3e450f0411c272b6bcd92f07bbddc2158319ed81604051808215151515815260200191505060405180910390a150565b61047a6105d4565b6104ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610616610756565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106c85780601f1061069d576101008083540402835291602001916106c8565b820191906000526020600020905b8154815290600101906020018083116106ab57829003601f168201915b505050505081565b6106d86105d4565b61074a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6107538161075e565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806109486026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108e357805160ff1916838001178555610911565b82800160010185558215610911579182015b828111156109105782518255916020019190600101906108f5565b5b50905061091e9190610922565b5090565b61094491905b80821115610940576000816000905550600101610928565b5090565b9056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220e061c7abb73772d225c83450318971a468afe4a6f35b6f4287abc5993eec945c64736f6c63430006040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146101a45780638f32d59b146101ee578063e21f37ce14610210578063f2fde38b1461029357610088565b8063200d2ed21461008d578063368b8772146100af5780635c40f6f41461016a578063715018a61461019a575b600080fd5b6100956102d7565b604051808215151515815260200191505060405180910390f35b610168600480360360208110156100c557600080fd5b81019080803590602001906401000000008111156100e257600080fd5b8201836020820111156100f457600080fd5b8035906020019184600183028401116401000000008311171561011657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506102ea565b005b6101986004803603602081101561018057600080fd5b810190808035151590602001909291905050506103a0565b005b6101a2610472565b005b6101ac6105ab565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101f66105d4565b604051808215151515815260200191505060405180910390f35b610218610632565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561025857808201518184015260208101905061023d565b50505050905090810190601f1680156102855780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102d5600480360360208110156102a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106d0565b005b600060149054906101000a900460ff1681565b80600190805190602001906103009291906108a2565b507f476e04c786e60f629af918e59f7b2d948f3b488bf1258cab1bf3a4351521b46f816040518080602001828103825283818151815260200191508051906020019080838360005b83811015610363578082015181840152602081019050610348565b50505050905090810190601f1680156103905780820380516001836020036101000a031916815260200191505b509250505060405180910390a150565b6103a86105d4565b61041a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600060146101000a81548160ff0219169083151502179055507faa074df5e156d5f22d3f5eca3c3e450f0411c272b6bcd92f07bbddc2158319ed81604051808215151515815260200191505060405180910390a150565b61047a6105d4565b6104ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610616610756565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106c85780601f1061069d576101008083540402835291602001916106c8565b820191906000526020600020905b8154815290600101906020018083116106ab57829003601f168201915b505050505081565b6106d86105d4565b61074a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6107538161075e565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806109486026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108e357805160ff1916838001178555610911565b82800160010185558215610911579182015b828111156109105782518255916020019190600101906108f5565b5b50905061091e9190610922565b5090565b61094491905b80821115610940576000816000905550600101610928565b5090565b9056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220e061c7abb73772d225c83450318971a468afe4a6f35b6f4287abc5993eec945c64736f6c63430006040033",
  "sourceMap": "49:602:3:-:0;;;211:186;5:9:-1;2:2;;;27:1;24;17:12;2:2;211:186:3;;;;;;;;;;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;211:186:3;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;211:186:3;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;211:186:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;692:17:2;712:12;:10;;;:12;;:::i;:::-;692:32;;743:9;734:6;;:18;;;;;;;;;;;;;;;;;;800:9;767:43;;796:1;767:43;;;;;;;;;;;;658:159;287:7:3;278:6;;:16;;;;;;;;;;;;;;;;;;314:8;304:7;:18;;;;;;;;;;;;:::i;:::-;;337:20;348:8;337:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;337:20:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;372:18;382:7;372:18;;;;;;;;;;;;;;;;;;;;;;211:186;;49:602;;787:96:0;832:15;866:10;859:17;;787:96;:::o;49:602:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "49:602:3:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;49:602:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;86:18:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;527:121;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;527:121:3;;;;;;;;;;27:11:-1;14;11:28;8:2;;;52:1;49;42:12;8:2;527:121:3;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;527:121:3;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;527:121:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;527:121:3;;;;;;;;;;;;;;;:::i;:::-;;403:118;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;403:118:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;1678:137:2;;;:::i;:::-;;893:77;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1244:92;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;110:21:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;110:21:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1964:107:2;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;1964:107:2;;;;;;;;;;;;;;;;;;;:::i;:::-;;86:18:3;;;;;;;;;;;;;:::o;527:121::-;598:8;588:7;:18;;;;;;;;;;;;:::i;:::-;;621:20;632:8;621:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;621:20:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;527:121;:::o;403:118::-;1097:9:2;:7;:9::i;:::-;1089:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;474:7:3::1;465:6;;:16;;;;;;;;;;;;;;;;;;496:18;506:7;496:18;;;;;;;;;;;;;;;;;;;;;;403:118:::0;:::o;1678:137:2:-;1097:9;:7;:9::i;:::-;1089:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1776:1:::1;1739:40;;1760:6;::::0;::::1;;;;;;;;;1739:40;;;;;;;;;;;;1806:1;1789:6:::0;::::1;:19;;;;;;;;;;;;;;;;;;1678:137::o:0;893:77::-;931:7;957:6;;;;;;;;;;;950:13;;893:77;:::o;1244:92::-;1284:4;1323:6;;;;;;;;;;;1307:22;;:12;:10;:12::i;:::-;:22;;;1300:29;;1244:92;:::o;110:21:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1964:107:2:-;1097:9;:7;:9::i;:::-;1089:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2036:28:::1;2055:8;2036:18;:28::i;:::-;1964:107:::0;:::o;787:96:0:-;832:15;866:10;859:17;;787:96;:::o;2172:225:2:-;2265:1;2245:22;;:8;:22;;;;2237:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2354:8;2325:38;;2346:6;;;;;;;;;;;2325:38;;;;;;;;;;;;2382:8;2373:6;;:17;;;;;;;;;;;;;;;;;;2172:225;:::o;49:602:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.6.4;\n\nimport \"./Ownable.sol\";\n\ncontract PuedoSalir is Ownable {\n    bool public status;\n    string public message;\n\n    event NewStatus(bool status);\n    event NewMessage(string message);\n\n    constructor(string memory _message, bool _status) public {\n        status = _status;\n        message = _message;\n        emit NewMessage(_message);\n        emit NewStatus(_status);\n    }\n\n    function setStatus(bool _status) external onlyOwner {\n        status = _status;\n        emit NewStatus(_status);\n    }\n\n    function setMessage(string memory _message) public {\n        message = _message;\n        emit NewMessage(_message);\n    }\n\n}\n",
  "sourcePath": "/home/loki/dev/blockchain/tandil/puedo-salir/smart-contracts/contracts/PuedoSalir.sol",
  "ast": {
    "absolutePath": "/home/loki/dev/blockchain/tandil/puedo-salir/smart-contracts/contracts/PuedoSalir.sol",
    "exportedSymbols": {
      "PuedoSalir": [
        265
      ]
    },
    "id": 266,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 195,
        "literals": [
          "solidity",
          "0.6",
          ".4"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:3"
      },
      {
        "absolutePath": "/home/loki/dev/blockchain/tandil/puedo-salir/smart-contracts/contracts/Ownable.sol",
        "file": "./Ownable.sol",
        "id": 196,
        "nodeType": "ImportDirective",
        "scope": 266,
        "sourceUnit": 194,
        "src": "24:23:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 197,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 193,
              "src": "72:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$193",
                "typeString": "contract Ownable"
              }
            },
            "id": 198,
            "nodeType": "InheritanceSpecifier",
            "src": "72:7:3"
          }
        ],
        "contractDependencies": [
          26,
          193
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 265,
        "linearizedBaseContracts": [
          265,
          193,
          26
        ],
        "name": "PuedoSalir",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "200d2ed2",
            "id": 200,
            "name": "status",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 265,
            "src": "86:18:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 199,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "86:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "e21f37ce",
            "id": 202,
            "name": "message",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 265,
            "src": "110:21:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 201,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "110:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 206,
            "name": "NewStatus",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 204,
                  "indexed": false,
                  "name": "status",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 206,
                  "src": "154:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 203,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "154:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "153:13:3"
            },
            "src": "138:29:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 210,
            "name": "NewMessage",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 208,
                  "indexed": false,
                  "name": "message",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 210,
                  "src": "189:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 207,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "189:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "188:16:3"
            },
            "src": "172:33:3"
          },
          {
            "body": {
              "id": 233,
              "nodeType": "Block",
              "src": "268:129:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 217,
                      "name": "status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 200,
                      "src": "278:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 218,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 214,
                      "src": "287:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "278:16:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 220,
                  "nodeType": "ExpressionStatement",
                  "src": "278:16:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 223,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 221,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 202,
                      "src": "304:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 222,
                      "name": "_message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 212,
                      "src": "314:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "304:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 224,
                  "nodeType": "ExpressionStatement",
                  "src": "304:18:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 226,
                        "name": "_message",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 212,
                        "src": "348:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 225,
                      "name": "NewMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 210,
                      "src": "337:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 227,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "337:20:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 228,
                  "nodeType": "EmitStatement",
                  "src": "332:25:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 230,
                        "name": "_status",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 214,
                        "src": "382:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 229,
                      "name": "NewStatus",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 206,
                      "src": "372:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "372:18:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 232,
                  "nodeType": "EmitStatement",
                  "src": "367:23:3"
                }
              ]
            },
            "documentation": null,
            "id": 234,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 215,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 212,
                  "name": "_message",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 234,
                  "src": "223:22:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 211,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 214,
                  "name": "_status",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 234,
                  "src": "247:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 213,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "247:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "222:38:3"
            },
            "returnParameters": {
              "id": 216,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "268:0:3"
            },
            "scope": 265,
            "src": "211:186:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 249,
              "nodeType": "Block",
              "src": "455:66:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 243,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 241,
                      "name": "status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 200,
                      "src": "465:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 242,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 236,
                      "src": "474:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "465:16:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 244,
                  "nodeType": "ExpressionStatement",
                  "src": "465:16:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 246,
                        "name": "_status",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 236,
                        "src": "506:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 245,
                      "name": "NewStatus",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 206,
                      "src": "496:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "496:18:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 248,
                  "nodeType": "EmitStatement",
                  "src": "491:23:3"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "5c40f6f4",
            "id": 250,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 239,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 238,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 119,
                  "src": "445:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "445:9:3"
              }
            ],
            "name": "setStatus",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 236,
                  "name": "_status",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 250,
                  "src": "422:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 235,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "422:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "421:14:3"
            },
            "returnParameters": {
              "id": 240,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "455:0:3"
            },
            "scope": 265,
            "src": "403:118:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 263,
              "nodeType": "Block",
              "src": "578:70:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 255,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 202,
                      "src": "588:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 256,
                      "name": "_message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 252,
                      "src": "598:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "588:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 258,
                  "nodeType": "ExpressionStatement",
                  "src": "588:18:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 260,
                        "name": "_message",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 252,
                        "src": "632:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 259,
                      "name": "NewMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 210,
                      "src": "621:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 261,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "621:20:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 262,
                  "nodeType": "EmitStatement",
                  "src": "616:25:3"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "368b8772",
            "id": 264,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setMessage",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 252,
                  "name": "_message",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 264,
                  "src": "547:22:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 251,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "547:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "546:24:3"
            },
            "returnParameters": {
              "id": 254,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "578:0:3"
            },
            "scope": 265,
            "src": "527:121:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 266,
        "src": "49:602:3"
      }
    ],
    "src": "0:652:3"
  },
  "legacyAST": {
    "absolutePath": "/home/loki/dev/blockchain/tandil/puedo-salir/smart-contracts/contracts/PuedoSalir.sol",
    "exportedSymbols": {
      "PuedoSalir": [
        265
      ]
    },
    "id": 266,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 195,
        "literals": [
          "solidity",
          "0.6",
          ".4"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:3"
      },
      {
        "absolutePath": "/home/loki/dev/blockchain/tandil/puedo-salir/smart-contracts/contracts/Ownable.sol",
        "file": "./Ownable.sol",
        "id": 196,
        "nodeType": "ImportDirective",
        "scope": 266,
        "sourceUnit": 194,
        "src": "24:23:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 197,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 193,
              "src": "72:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$193",
                "typeString": "contract Ownable"
              }
            },
            "id": 198,
            "nodeType": "InheritanceSpecifier",
            "src": "72:7:3"
          }
        ],
        "contractDependencies": [
          26,
          193
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 265,
        "linearizedBaseContracts": [
          265,
          193,
          26
        ],
        "name": "PuedoSalir",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "200d2ed2",
            "id": 200,
            "name": "status",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 265,
            "src": "86:18:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 199,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "86:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "e21f37ce",
            "id": 202,
            "name": "message",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 265,
            "src": "110:21:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 201,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "110:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 206,
            "name": "NewStatus",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 204,
                  "indexed": false,
                  "name": "status",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 206,
                  "src": "154:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 203,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "154:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "153:13:3"
            },
            "src": "138:29:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 210,
            "name": "NewMessage",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 208,
                  "indexed": false,
                  "name": "message",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 210,
                  "src": "189:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 207,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "189:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "188:16:3"
            },
            "src": "172:33:3"
          },
          {
            "body": {
              "id": 233,
              "nodeType": "Block",
              "src": "268:129:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 217,
                      "name": "status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 200,
                      "src": "278:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 218,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 214,
                      "src": "287:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "278:16:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 220,
                  "nodeType": "ExpressionStatement",
                  "src": "278:16:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 223,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 221,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 202,
                      "src": "304:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 222,
                      "name": "_message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 212,
                      "src": "314:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "304:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 224,
                  "nodeType": "ExpressionStatement",
                  "src": "304:18:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 226,
                        "name": "_message",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 212,
                        "src": "348:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 225,
                      "name": "NewMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 210,
                      "src": "337:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 227,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "337:20:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 228,
                  "nodeType": "EmitStatement",
                  "src": "332:25:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 230,
                        "name": "_status",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 214,
                        "src": "382:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 229,
                      "name": "NewStatus",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 206,
                      "src": "372:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "372:18:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 232,
                  "nodeType": "EmitStatement",
                  "src": "367:23:3"
                }
              ]
            },
            "documentation": null,
            "id": 234,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 215,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 212,
                  "name": "_message",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 234,
                  "src": "223:22:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 211,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 214,
                  "name": "_status",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 234,
                  "src": "247:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 213,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "247:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "222:38:3"
            },
            "returnParameters": {
              "id": 216,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "268:0:3"
            },
            "scope": 265,
            "src": "211:186:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 249,
              "nodeType": "Block",
              "src": "455:66:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 243,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 241,
                      "name": "status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 200,
                      "src": "465:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 242,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 236,
                      "src": "474:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "465:16:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 244,
                  "nodeType": "ExpressionStatement",
                  "src": "465:16:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 246,
                        "name": "_status",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 236,
                        "src": "506:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 245,
                      "name": "NewStatus",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 206,
                      "src": "496:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "496:18:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 248,
                  "nodeType": "EmitStatement",
                  "src": "491:23:3"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "5c40f6f4",
            "id": 250,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 239,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 238,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 119,
                  "src": "445:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "445:9:3"
              }
            ],
            "name": "setStatus",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 236,
                  "name": "_status",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 250,
                  "src": "422:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 235,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "422:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "421:14:3"
            },
            "returnParameters": {
              "id": 240,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "455:0:3"
            },
            "scope": 265,
            "src": "403:118:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 263,
              "nodeType": "Block",
              "src": "578:70:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 255,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 202,
                      "src": "588:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 256,
                      "name": "_message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 252,
                      "src": "598:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "588:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 258,
                  "nodeType": "ExpressionStatement",
                  "src": "588:18:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 260,
                        "name": "_message",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 252,
                        "src": "632:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 259,
                      "name": "NewMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 210,
                      "src": "621:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 261,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "621:20:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 262,
                  "nodeType": "EmitStatement",
                  "src": "616:25:3"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "368b8772",
            "id": 264,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setMessage",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 252,
                  "name": "_message",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 264,
                  "src": "547:22:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 251,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "547:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "546:24:3"
            },
            "returnParameters": {
              "id": 254,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "578:0:3"
            },
            "scope": 265,
            "src": "527:121:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 266,
        "src": "49:602:3"
      }
    ],
    "src": "0:652:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.4+commit.1dca32f3.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {
        "0x476e04c786e60f629af918e59f7b2d948f3b488bf1258cab1bf3a4351521b46f": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "name": "NewMessage",
          "type": "event"
        },
        "0xaa074df5e156d5f22d3f5eca3c3e450f0411c272b6bcd92f07bbddc2158319ed": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bool",
              "name": "status",
              "type": "bool"
            }
          ],
          "name": "NewStatus",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xBC9DaeDa7DFaf57DF3a67fC962BF29Ff59968c62",
      "transactionHash": "0x317e4db7d89134cdbb36a201989658ea292bcace35ac23bc19511a9fa532d4cb"
    },
    "1585251802317": {
      "events": {
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        "0xb6b9255ef41b64a179028fa358d210c528409790c6daf4907f41fcba571e1112": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "name": "newMessage",
          "type": "event"
        },
        "0xb33b618411c5dc466f7470f8df0ecfce8df3ef7b87f2a4b4887a3af3dd533561": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bool",
              "name": "status",
              "type": "bool"
            }
          ],
          "name": "newStatus",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xc624BAc03f82Cb49985284CAdE4473190570913F",
      "transactionHash": "0x719a647e045fe3f2c335ba7390384c7184c97ec1ce028f13a514453f6f2082a3"
    }
  },
  "schemaVersion": "3.0.23",
  "updatedAt": "2020-03-28T00:09:22.349Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "isOwner()": {
        "details": "Returns true if the caller is the current owner."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
};

export const abi = contract.abi;