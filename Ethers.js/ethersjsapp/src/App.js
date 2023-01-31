import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
const {ethers} = require('ethers');



function App() {
  const walletAddress = "0xAD9FaAB27008227009ACCcd99209a9D6ff0CF3FF"; //deployed contract address
const contractABI =  [
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] 

 useEffect(()=>{
  const writeContract = async()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);      //get provider whih is metamask
    await provider.send("eth_requestAccounts",[]);                            //request an account of metamask 
    const signers = provider.getSigner();                                     //sign transaction uing private key 
    const contract = new ethers.Contract(walletAddress,contractABI,signers);  // interact with contract 
    // await contract.setValue(44);                                              // setting value in contract                                             // setting value in contract
   // await contract.sendEthContract({value:ethers.utils.parseEther("0.01")})    //transfer to our contract address
   await contract.sendEthUser("0x7d74C307e70e279be766B56Cd07b2ED948548783",{value:ethers.utils.parseEther(0.01)}); //transfer to this particular address from our contract
};
  writeContract();
 },[]);



  return (
    <div className="App">

    </div>
  );
}

export default App;
