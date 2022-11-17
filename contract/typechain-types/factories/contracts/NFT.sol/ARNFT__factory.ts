/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ARNFT, ARNFTInterface } from "../../../contracts/NFT.sol/ARNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "awardItem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600581526020017f41524e46540000000000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f41524e465400000000000000000000000000000000000000000000000000000081525081600090816200008f919062000324565b508060019081620000a1919062000324565b5050506200040b565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012c57607f821691505b602082108103620001425762000141620000e4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200016d565b620001b886836200016d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000205620001ff620001f984620001d0565b620001da565b620001d0565b9050919050565b6000819050919050565b6200022183620001e4565b6200023962000230826200020c565b8484546200017a565b825550505050565b600090565b6200025062000241565b6200025d81848462000216565b505050565b5b8181101562000285576200027960008262000246565b60018101905062000263565b5050565b601f821115620002d4576200029e8162000148565b620002a9846200015d565b81016020851015620002b9578190505b620002d1620002c8856200015d565b83018262000262565b50505b505050565b600082821c905092915050565b6000620002f960001984600802620002d9565b1980831691505092915050565b6000620003148383620002e6565b9150826002028217905092915050565b6200032f82620000aa565b67ffffffffffffffff8111156200034b576200034a620000b5565b5b62000357825462000113565b6200036482828562000289565b600060209050601f8311600181146200039c576000841562000387578287015190505b62000393858262000306565b86555062000403565b601f198416620003ac8662000148565b60005b82811015620003d657848901518255600182019150602085019450602081019050620003af565b86831015620003f65784890151620003f2601f891682620002e6565b8355505b6001600288020188555050505b505050505050565b612a36806200041b6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063b88d4fde11610066578063b88d4fde1461025b578063c87b56dd14610277578063cf378343146102a7578063e985e9c5146102d7576100ea565b806370a08231146101f157806395d89b4114610221578063a22cb4651461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b610109600480360381019061010491906117b5565b610307565b60405161011691906117fd565b60405180910390f35b6101276103e9565b60405161013491906118a8565b60405180910390f35b61015760048036038101906101529190611900565b61047b565b604051610164919061196e565b60405180910390f35b610187600480360381019061018291906119b5565b6104c1565b005b6101a3600480360381019061019e91906119f5565b6105d8565b005b6101bf60048036038101906101ba91906119f5565b610638565b005b6101db60048036038101906101d69190611900565b610658565b6040516101e8919061196e565b60405180910390f35b61020b60048036038101906102069190611a48565b610709565b6040516102189190611a84565b60405180910390f35b6102296107c0565b60405161023691906118a8565b60405180910390f35b61025960048036038101906102549190611acb565b610852565b005b61027560048036038101906102709190611c40565b610868565b005b610291600480360381019061028c9190611900565b6108ca565b60405161029e91906118a8565b60405180910390f35b6102c160048036038101906102bc9190611d64565b6109dc565b6040516102ce9190611a84565b60405180910390f35b6102f160048036038101906102ec9190611dc0565b610a13565b6040516102fe91906117fd565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e257506103e182610aa7565b5b9050919050565b6060600080546103f890611e2f565b80601f016020809104026020016040519081016040528092919081815260200182805461042490611e2f565b80156104715780601f1061044657610100808354040283529160200191610471565b820191906000526020600020905b81548152906001019060200180831161045457829003601f168201915b5050505050905090565b600061048682610b11565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104cc82610658565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361053c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053390611ed2565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661055b610b5c565b73ffffffffffffffffffffffffffffffffffffffff16148061058a575061058981610584610b5c565b610a13565b5b6105c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c090611f64565b60405180910390fd5b6105d38383610b64565b505050565b6105e96105e3610b5c565b82610c1d565b610628576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061f90611ff6565b60405180910390fd5b610633838383610cb2565b505050565b61065383838360405180602001604052806000815250610868565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610700576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f790612062565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610779576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610770906120f4565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107cf90611e2f565b80601f01602080910402602001604051908101604052809291908181526020018280546107fb90611e2f565b80156108485780601f1061081d57610100808354040283529160200191610848565b820191906000526020600020905b81548152906001019060200180831161082b57829003601f168201915b5050505050905090565b61086461085d610b5c565b8383610f18565b5050565b610879610873610b5c565b83610c1d565b6108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af90611ff6565b60405180910390fd5b6108c484848484611084565b50505050565b60606108d582610b11565b60006006600084815260200190815260200160002080546108f590611e2f565b80601f016020809104026020016040519081016040528092919081815260200182805461092190611e2f565b801561096e5780601f106109435761010080835404028352916020019161096e565b820191906000526020600020905b81548152906001019060200180831161095157829003601f168201915b50505050509050600061097f6110e0565b905060008151036109945781925050506109d7565b6000825111156109c95780826040516020016109b1929190612150565b604051602081830303815290604052925050506109d7565b6109d2846110f7565b925050505b919050565b6000806109e9600761115f565b90506109f5848261116d565b6109ff8184611346565b610a0960076113b3565b8091505092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610b1a816113c9565b610b59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5090612062565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610bd783610658565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c2983610658565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c6b5750610c6a8185610a13565b5b80610ca957508373ffffffffffffffffffffffffffffffffffffffff16610c918461047b565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610cd282610658565b73ffffffffffffffffffffffffffffffffffffffff1614610d28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1f906121e6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8e90612278565b60405180910390fd5b610da2838383611435565b610dad600082610b64565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dfd91906122c7565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e5491906122fb565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610f1383838361143a565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7d9061237b565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161107791906117fd565b60405180910390a3505050565b61108f848484610cb2565b61109b8484848461143f565b6110da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d19061240d565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061110282610b11565b600061110c6110e0565b9050600081511161112c5760405180602001604052806000815250611157565b80611136846115c6565b604051602001611147929190612150565b6040516020818303038152906040525b915050919050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d390612479565b60405180910390fd5b6111e5816113c9565b15611225576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121c906124e5565b60405180910390fd5b61123160008383611435565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461128191906122fb565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46113426000838361143a565b5050565b61134f826113c9565b61138e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138590612577565b60405180910390fd5b806006600084815260200190815260200160002090816113ae9190612743565b505050565b6001816000016000828254019250508190555050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006114608473ffffffffffffffffffffffffffffffffffffffff16611726565b156115b9578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611489610b5c565b8786866040518563ffffffff1660e01b81526004016114ab949392919061286a565b6020604051808303816000875af19250505080156114e757506040513d601f19601f820116820180604052508101906114e491906128cb565b60015b611569573d8060008114611517576040519150601f19603f3d011682016040523d82523d6000602084013e61151c565b606091505b506000815103611561576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115589061240d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506115be565b600190505b949350505050565b60606000820361160d576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611721565b600082905060005b6000821461163f578080611628906128f8565b915050600a82611638919061296f565b9150611615565b60008167ffffffffffffffff81111561165b5761165a611b15565b5b6040519080825280601f01601f19166020018201604052801561168d5781602001600182028036833780820191505090505b5090505b6000851461171a576001826116a691906122c7565b9150600a856116b591906129a0565b60306116c191906122fb565b60f81b8183815181106116d7576116d66129d1565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611713919061296f565b9450611691565b8093505050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6117928161175d565b811461179d57600080fd5b50565b6000813590506117af81611789565b92915050565b6000602082840312156117cb576117ca611753565b5b60006117d9848285016117a0565b91505092915050565b60008115159050919050565b6117f7816117e2565b82525050565b600060208201905061181260008301846117ee565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611852578082015181840152602081019050611837565b60008484015250505050565b6000601f19601f8301169050919050565b600061187a82611818565b6118848185611823565b9350611894818560208601611834565b61189d8161185e565b840191505092915050565b600060208201905081810360008301526118c2818461186f565b905092915050565b6000819050919050565b6118dd816118ca565b81146118e857600080fd5b50565b6000813590506118fa816118d4565b92915050565b60006020828403121561191657611915611753565b5b6000611924848285016118eb565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006119588261192d565b9050919050565b6119688161194d565b82525050565b6000602082019050611983600083018461195f565b92915050565b6119928161194d565b811461199d57600080fd5b50565b6000813590506119af81611989565b92915050565b600080604083850312156119cc576119cb611753565b5b60006119da858286016119a0565b92505060206119eb858286016118eb565b9150509250929050565b600080600060608486031215611a0e57611a0d611753565b5b6000611a1c868287016119a0565b9350506020611a2d868287016119a0565b9250506040611a3e868287016118eb565b9150509250925092565b600060208284031215611a5e57611a5d611753565b5b6000611a6c848285016119a0565b91505092915050565b611a7e816118ca565b82525050565b6000602082019050611a996000830184611a75565b92915050565b611aa8816117e2565b8114611ab357600080fd5b50565b600081359050611ac581611a9f565b92915050565b60008060408385031215611ae257611ae1611753565b5b6000611af0858286016119a0565b9250506020611b0185828601611ab6565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611b4d8261185e565b810181811067ffffffffffffffff82111715611b6c57611b6b611b15565b5b80604052505050565b6000611b7f611749565b9050611b8b8282611b44565b919050565b600067ffffffffffffffff821115611bab57611baa611b15565b5b611bb48261185e565b9050602081019050919050565b82818337600083830152505050565b6000611be3611bde84611b90565b611b75565b905082815260208101848484011115611bff57611bfe611b10565b5b611c0a848285611bc1565b509392505050565b600082601f830112611c2757611c26611b0b565b5b8135611c37848260208601611bd0565b91505092915050565b60008060008060808587031215611c5a57611c59611753565b5b6000611c68878288016119a0565b9450506020611c79878288016119a0565b9350506040611c8a878288016118eb565b925050606085013567ffffffffffffffff811115611cab57611caa611758565b5b611cb787828801611c12565b91505092959194509250565b600067ffffffffffffffff821115611cde57611cdd611b15565b5b611ce78261185e565b9050602081019050919050565b6000611d07611d0284611cc3565b611b75565b905082815260208101848484011115611d2357611d22611b10565b5b611d2e848285611bc1565b509392505050565b600082601f830112611d4b57611d4a611b0b565b5b8135611d5b848260208601611cf4565b91505092915050565b60008060408385031215611d7b57611d7a611753565b5b6000611d89858286016119a0565b925050602083013567ffffffffffffffff811115611daa57611da9611758565b5b611db685828601611d36565b9150509250929050565b60008060408385031215611dd757611dd6611753565b5b6000611de5858286016119a0565b9250506020611df6858286016119a0565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611e4757607f821691505b602082108103611e5a57611e59611e00565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ebc602183611823565b9150611ec782611e60565b604082019050919050565b60006020820190508181036000830152611eeb81611eaf565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000611f4e603e83611823565b9150611f5982611ef2565b604082019050919050565b60006020820190508181036000830152611f7d81611f41565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000611fe0602e83611823565b9150611feb82611f84565b604082019050919050565b6000602082019050818103600083015261200f81611fd3565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061204c601883611823565b915061205782612016565b602082019050919050565b6000602082019050818103600083015261207b8161203f565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006120de602983611823565b91506120e982612082565b604082019050919050565b6000602082019050818103600083015261210d816120d1565b9050919050565b600081905092915050565b600061212a82611818565b6121348185612114565b9350612144818560208601611834565b80840191505092915050565b600061215c828561211f565b9150612168828461211f565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006121d0602583611823565b91506121db82612174565b604082019050919050565b600060208201905081810360008301526121ff816121c3565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612262602483611823565b915061226d82612206565b604082019050919050565b6000602082019050818103600083015261229181612255565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006122d2826118ca565b91506122dd836118ca565b92508282039050818111156122f5576122f4612298565b5b92915050565b6000612306826118ca565b9150612311836118ca565b925082820190508082111561232957612328612298565b5b92915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612365601983611823565b91506123708261232f565b602082019050919050565b6000602082019050818103600083015261239481612358565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006123f7603283611823565b91506124028261239b565b604082019050919050565b60006020820190508181036000830152612426816123ea565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612463602083611823565b915061246e8261242d565b602082019050919050565b6000602082019050818103600083015261249281612456565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006124cf601c83611823565b91506124da82612499565b602082019050919050565b600060208201905081810360008301526124fe816124c2565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612561602e83611823565b915061256c82612505565b604082019050919050565b6000602082019050818103600083015261259081612554565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026125f97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826125bc565b61260386836125bc565b95508019841693508086168417925050509392505050565b6000819050919050565b600061264061263b612636846118ca565b61261b565b6118ca565b9050919050565b6000819050919050565b61265a83612625565b61266e61266682612647565b8484546125c9565b825550505050565b600090565b612683612676565b61268e818484612651565b505050565b5b818110156126b2576126a760008261267b565b600181019050612694565b5050565b601f8211156126f7576126c881612597565b6126d1846125ac565b810160208510156126e0578190505b6126f46126ec856125ac565b830182612693565b50505b505050565b600082821c905092915050565b600061271a600019846008026126fc565b1980831691505092915050565b60006127338383612709565b9150826002028217905092915050565b61274c82611818565b67ffffffffffffffff81111561276557612764611b15565b5b61276f8254611e2f565b61277a8282856126b6565b600060209050601f8311600181146127ad576000841561279b578287015190505b6127a58582612727565b86555061280d565b601f1984166127bb86612597565b60005b828110156127e3578489015182556001820191506020850194506020810190506127be565b8683101561280057848901516127fc601f891682612709565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b600061283c82612815565b6128468185612820565b9350612856818560208601611834565b61285f8161185e565b840191505092915050565b600060808201905061287f600083018761195f565b61288c602083018661195f565b6128996040830185611a75565b81810360608301526128ab8184612831565b905095945050505050565b6000815190506128c581611789565b92915050565b6000602082840312156128e1576128e0611753565b5b60006128ef848285016128b6565b91505092915050565b6000612903826118ca565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361293557612934612298565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061297a826118ca565b9150612985836118ca565b92508261299557612994612940565b5b828204905092915050565b60006129ab826118ca565b91506129b6836118ca565b9250826129c6576129c5612940565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212202847d3a28cfb10c265c513b516f50cf503a30d96d9289dd9873a96a6e1f0ae9864736f6c63430008110033";

type ARNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ARNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ARNFT__factory extends ContractFactory {
  constructor(...args: ARNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ARNFT> {
    return super.deploy(overrides || {}) as Promise<ARNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ARNFT {
    return super.attach(address) as ARNFT;
  }
  override connect(signer: Signer): ARNFT__factory {
    return super.connect(signer) as ARNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ARNFTInterface {
    return new utils.Interface(_abi) as ARNFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ARNFT {
    return new Contract(address, _abi, signerOrProvider) as ARNFT;
  }
}
