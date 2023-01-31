const {ethers} = require('ethers');

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/56a9257b193c45ee859e48f46d60e6bd');//using infura API 
                                                                                         // connect with ethereum blockchain
const queryBlockchain = async ()=>{
    const block = await provider.getBlockNumber(); //fetch current block numberof the ethereum blockchain
    console.log("current block number is :",block);

    const balance = await provider.getBalance("0xE874eFaC6e59720aD67031E580a67314181A0Db4"); //getbalance of a random address
    console.log("Balance of this address is : ",balance); //but balance is shown in random hex 

    const balanceEther =ethers.utils.formatEther(balance);//to conert it ib ethers we will write it as 
    console.log("-------------------------",balanceEther);

    const balance_in_wei = ethers.utils.parseEther("1.0");
    console.log("-------------------------",balance_in_wei);

}

queryBlockchain();
