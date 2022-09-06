/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Raffle, RaffleInterface } from "../../contracts/Raffle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vrfCoordinatorV2",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "entranceFee",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "gasLane",
        type: "bytes32",
      },
      {
        internalType: "uint64",
        name: "subcriptionId",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    inputs: [],
    name: "Raffle__NotEnoughETHEntered",
    type: "error",
  },
  {
    inputs: [],
    name: "Raffle__NotOpen",
    type: "error",
  },
  {
    inputs: [],
    name: "Raffle__TransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numPlayers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "raffleState",
        type: "uint256",
      },
    ],
    name: "Raffle__UpkeepNotNeeded",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "RaffleEnter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    name: "RaffleWinnerPicked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "RequestedRaffleWinner",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enterRaffle",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntranceFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getInterval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestTimeStamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfPlayers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getPlayer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRaffleState",
    outputs: [
      {
        internalType: "enum Raffle.RaffleState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecentWinner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRequestConfirmations",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101606040523480156200001257600080fd5b5060405162001851380380620018518339818101604052810190620000389190620001ad565b858073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050508460a081815250508573ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508360e081815250508267ffffffffffffffff166101008167ffffffffffffffff1660c01b815250508163ffffffff166101208163ffffffff1660e01b815250506000600260146101000a81548160ff02191690836001811115620001195762000118620002b5565b5b0217905550426001819055508061014081815250505050505050506200036b565b6000815190506200014b81620002e9565b92915050565b600081519050620001628162000303565b92915050565b60008151905062000179816200031d565b92915050565b600081519050620001908162000337565b92915050565b600081519050620001a78162000351565b92915050565b60008060008060008060c08789031215620001cd57620001cc620002e4565b5b6000620001dd89828a016200013a565b9650506020620001f089828a0162000168565b95505060406200020389828a0162000151565b94505060606200021689828a0162000196565b93505060806200022989828a016200017f565b92505060a06200023c89828a0162000168565b9150509295509295509295565b6000620002568262000267565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600080fd5b620002f48162000249565b81146200030057600080fd5b50565b6200030e816200025d565b81146200031a57600080fd5b50565b620003288162000287565b81146200033457600080fd5b50565b620003428162000291565b81146200034e57600080fd5b50565b6200035c81620002a1565b81146200036857600080fd5b50565b60805160601c60a05160c05160601c60e0516101005160c01c6101205160e01c6101405161146a620003e7600039600081816107f30152610861015260006106a60152600061068301526000610662015260006106260152600081816102fa01526103f7015260008181610337015261038b015261146a6000f3fe6080604052600436106100c25760003560e01c8063473f1ddc1161007f5780636e04ff0d116100595780636e04ff0d1461022557806391ad27b414610263578063e55ae4e81461028e578063fd6673f5146102cb576100c2565b8063473f1ddc146101a457806353a2c19a146101cf5780635f1b0fd8146101fa576100c2565b806309bc33a7146100c7578063115cbaf5146100f25780631fe543e31461011d5780632cfcc53914610146578063320229eb146101505780634585e33b1461017b575b600080fd5b3480156100d357600080fd5b506100dc6102f6565b6040516100e99190611070565b60405180910390f35b3480156100fe57600080fd5b5061010761031e565b604051610114919061103a565b60405180910390f35b34801561012957600080fd5b50610144600480360381019061013f9190610e2e565b610335565b005b61014e6103f5565b005b34801561015c57600080fd5b50610165610564565b6040516101729190611070565b60405180910390f35b34801561018757600080fd5b506101a2600480360381019061019d9190610d3e565b61056e565b005b3480156101b057600080fd5b506101b961076e565b6040516101c69190610f73565b60405180910390f35b3480156101db57600080fd5b506101e4610798565b6040516101f19190611070565b60405180910390f35b34801561020657600080fd5b5061020f6107a7565b60405161021c9190611055565b60405180910390f35b34801561023157600080fd5b5061024c60048036038101906102479190610d8b565b6107b0565b60405161025a929190610fb7565b60405180910390f35b34801561026f57600080fd5b5061027861085d565b6040516102859190611070565b60405180910390f35b34801561029a57600080fd5b506102b560048036038101906102b09190610dd4565b610885565b6040516102c29190610f73565b60405180910390f35b3480156102d757600080fd5b506102e06108cc565b6040516102ed9190611070565b60405180910390f35b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600260149054906101000a900460ff16905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103e757337f00000000000000000000000000000000000000000000000000000000000000006040517f1cf993f40000000000000000000000000000000000000000000000000000000081526004016103de929190610f8e565b60405180910390fd5b6103f182826108d8565b5050565b7f000000000000000000000000000000000000000000000000000000000000000034101561044f576040517fbd4e069500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060018111156104635761046261134a565b5b600260149054906101000a900460ff1660018111156104855761048461134a565b5b146104bc576040517f1425571c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f0805e1d667bddb8a95f0f09880cf94f403fb596ce79928d9f29b74203ba284d460405160405180910390a2565b6000600154905090565b6000610588604051806020016040528060008152506107b0565b509050806105f75747600080549050600260149054906101000a900460ff1660018111156105b9576105b861134a565b5b6040517f584327aa0000000000000000000000000000000000000000000000000000000081526004016105ee9392919061108b565b60405180910390fd5b6001600260146101000a81548160ff0219169083600181111561061d5761061c61134a565b5b021790555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635d3b1d307f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000060037f000000000000000000000000000000000000000000000000000000000000000060016040518663ffffffff1660e01b81526004016106e7959493929190610fe7565b602060405180830381600087803b15801561070157600080fd5b505af1158015610715573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107399190610e01565b9050807fcd6e45c8998311cab7e9d4385596cac867e20a0587194b954fa3a731c93ce78b60405160405180910390a250505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600163ffffffff16905090565b60006003905090565b600060606000600260149054906101000a900460ff1660018111156107d8576107d761134a565b5b600060018111156107ec576107eb61134a565b5b14905060007f000000000000000000000000000000000000000000000000000000000000000060015442610820919061116b565b119050600080600080549050119050600080471190508380156108405750825b80156108495750815b80156108525750805b955050505050915091565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b600080828154811061089a57610899611379565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008080549050905090565b60008080549050826000815181106108f3576108f2611379565b5b602002602001015161090591906112bb565b9050600080828154811061091c5761091b611379565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600260146101000a81548160ff021916908360018111156109b0576109af61134a565b5b0217905550600067ffffffffffffffff8111156109d0576109cf6113a8565b5b6040519080825280602002602001820160405280156109fe5781602001602082028036833780820191505090505b5060009080519060200190610a14929190610b09565b504260018190555060008173ffffffffffffffffffffffffffffffffffffffff1647604051610a4290610f5e565b60006040518083038185875af1925050503d8060008114610a7f576040519150601f19603f3d011682016040523d82523d6000602084013e610a84565b606091505b5050905080610abf576040517fa1d04b3900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff167ff7ba90128c58206af15e5981c98c83a29bc536a92b9a3e43b8062497c2f2844360405160405180910390a25050505050565b828054828255906000526020600020908101928215610b82579160200282015b82811115610b815782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610b29565b5b509050610b8f9190610b93565b5090565b5b80821115610bac576000816000905550600101610b94565b5090565b6000610bc3610bbe846110e7565b6110c2565b90508083825260208201905082856020860282011115610be657610be56113e1565b5b60005b85811015610c165781610bfc8882610d14565b845260208401935060208301925050600181019050610be9565b5050509392505050565b6000610c33610c2e84611113565b6110c2565b905082815260208101848484011115610c4f57610c4e6113e6565b5b610c5a848285611248565b509392505050565b600082601f830112610c7757610c766113dc565b5b8135610c87848260208601610bb0565b91505092915050565b60008083601f840112610ca657610ca56113dc565b5b8235905067ffffffffffffffff811115610cc357610cc26113d7565b5b602083019150836001820283011115610cdf57610cde6113e1565b5b9250929050565b600082601f830112610cfb57610cfa6113dc565b5b8135610d0b848260208601610c20565b91505092915050565b600081359050610d238161141d565b92915050565b600081519050610d388161141d565b92915050565b60008060208385031215610d5557610d546113f0565b5b600083013567ffffffffffffffff811115610d7357610d726113eb565b5b610d7f85828601610c90565b92509250509250929050565b600060208284031215610da157610da06113f0565b5b600082013567ffffffffffffffff811115610dbf57610dbe6113eb565b5b610dcb84828501610ce6565b91505092915050565b600060208284031215610dea57610de96113f0565b5b6000610df884828501610d14565b91505092915050565b600060208284031215610e1757610e166113f0565b5b6000610e2584828501610d29565b91505092915050565b60008060408385031215610e4557610e446113f0565b5b6000610e5385828601610d14565b925050602083013567ffffffffffffffff811115610e7457610e736113eb565b5b610e8085828601610c62565b9150509250929050565b610e938161119f565b82525050565b610ea2816111b1565b82525050565b610eb1816111bd565b82525050565b6000610ec282611144565b610ecc818561114f565b9350610edc818560208601611257565b610ee5816113f5565b840191505092915050565b610ef981611236565b82525050565b6000610f0c600083611160565b9150610f1782611406565b600082019050919050565b610f2b816111da565b82525050565b610f3a81611208565b82525050565b610f4981611212565b82525050565b610f5881611222565b82525050565b6000610f6982610eff565b9150819050919050565b6000602082019050610f886000830184610e8a565b92915050565b6000604082019050610fa36000830185610e8a565b610fb06020830184610e8a565b9392505050565b6000604082019050610fcc6000830185610e99565b8181036020830152610fde8184610eb7565b90509392505050565b600060a082019050610ffc6000830188610ea8565b6110096020830187610f4f565b6110166040830186610f22565b6110236060830185610f40565b6110306080830184610f40565b9695505050505050565b600060208201905061104f6000830184610ef0565b92915050565b600060208201905061106a6000830184610f22565b92915050565b60006020820190506110856000830184610f31565b92915050565b60006060820190506110a06000830186610f31565b6110ad6020830185610f31565b6110ba6040830184610f31565b949350505050565b60006110cc6110dd565b90506110d8828261128a565b919050565b6000604051905090565b600067ffffffffffffffff821115611102576111016113a8565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561112e5761112d6113a8565b5b611137826113f5565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600061117682611208565b915061118183611208565b925082821015611194576111936112ec565b5b828203905092915050565b60006111aa826111e8565b9050919050565b60008115159050919050565b6000819050919050565b60008190506111d582611409565b919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b6000611241826111c7565b9050919050565b82818337600083830152505050565b60005b8381101561127557808201518184015260208101905061125a565b83811115611284576000848401525b50505050565b611293826113f5565b810181811067ffffffffffffffff821117156112b2576112b16113a8565b5b80604052505050565b60006112c682611208565b91506112d183611208565b9250826112e1576112e061131b565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b50565b6002811061141a5761141961134a565b5b50565b61142681611208565b811461143157600080fd5b5056fea2646970667358221220d5e4a34ffd0552d91030efec48cac532705791c4e0b66eab7c53fb6688d6b96164736f6c63430008070033";

type RaffleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RaffleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Raffle__factory extends ContractFactory {
  constructor(...args: RaffleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    vrfCoordinatorV2: PromiseOrValue<string>,
    entranceFee: PromiseOrValue<BigNumberish>,
    gasLane: PromiseOrValue<BytesLike>,
    subcriptionId: PromiseOrValue<BigNumberish>,
    callbackGasLimit: PromiseOrValue<BigNumberish>,
    interval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Raffle> {
    return super.deploy(
      vrfCoordinatorV2,
      entranceFee,
      gasLane,
      subcriptionId,
      callbackGasLimit,
      interval,
      overrides || {}
    ) as Promise<Raffle>;
  }
  override getDeployTransaction(
    vrfCoordinatorV2: PromiseOrValue<string>,
    entranceFee: PromiseOrValue<BigNumberish>,
    gasLane: PromiseOrValue<BytesLike>,
    subcriptionId: PromiseOrValue<BigNumberish>,
    callbackGasLimit: PromiseOrValue<BigNumberish>,
    interval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      vrfCoordinatorV2,
      entranceFee,
      gasLane,
      subcriptionId,
      callbackGasLimit,
      interval,
      overrides || {}
    );
  }
  override attach(address: string): Raffle {
    return super.attach(address) as Raffle;
  }
  override connect(signer: Signer): Raffle__factory {
    return super.connect(signer) as Raffle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RaffleInterface {
    return new utils.Interface(_abi) as RaffleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Raffle {
    return new Contract(address, _abi, signerOrProvider) as Raffle;
  }
}
