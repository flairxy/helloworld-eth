var contractABI = [
  {
    constant: true,
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];
var contractAddress = "0x41d110CDD90eE6A162504224E8CF4BCfc9f20824";
var web3 = new Web3("http://127.0.0.1:9545");
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener("DOMContentLoaded", () => {
  helloWorld.methods
    .hello()
    .call()
    .then((res) => {
      document.getElementById("hello").innerHTML = res;
    });
});
