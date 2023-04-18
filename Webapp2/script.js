// (function () {
//   connectMetamask().then(function () {
//     connectContract();
//   });
// })();

let account;
var contract;
var drugCode;

function onLoadFunction() {
  console.log("Onload");
  connectMetamask().then(function () {
    connectContract();
  });
}

function testfunc() {
  console.log(account);
}

// document.getElementById("checkConnect").onclick = function connectcheck() {
//   alert("The button clicked by JavaScript onClick function");
// };

function checkConnect() {
  //   alert("The button clicked by JavaScript onClick function");
  //   console.log("Checking....");
  connectMetamask().then(function () {
    connectContract();
  });
  //   connectContract();
}

const connectMetamask = async () => {
  if (window.ethereum !== "undefined") {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    account = accounts[0];
    // document.getElementById("accountArea").innerHTML = account;
    console.log("Connected Metamask");
  }
};

const connectContract = async () => {
  //ABI of contract deployed
  const ABI = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_brandName",
          type: "string",
        },
        {
          internalType: "string",
          name: "_drugName",
          type: "string",
        },
        {
          internalType: "string",
          name: "_dateOfManufacture",
          type: "string",
        },
        {
          internalType: "string",
          name: "_expiryDate",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
      ],
      name: "createDrug",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "contractAddress",
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
          internalType: "uint256",
          name: "_drugCode",
          type: "uint256",
        },
      ],
      name: "doesDrugExist",
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
      name: "drugcode",
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
          name: "",
          type: "uint256",
        },
      ],
      name: "drugInfo",
      outputs: [
        {
          internalType: "string",
          name: "brandName",
          type: "string",
        },
        {
          internalType: "string",
          name: "drugName",
          type: "string",
        },
        {
          internalType: "string",
          name: "dateOfManufacture",
          type: "string",
        },
        {
          internalType: "string",
          name: "expiryDate",
          type: "string",
        },
        {
          internalType: "address",
          name: "manufacturerAddress",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "price",
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
          name: "",
          type: "uint256",
        },
      ],
      name: "drugManufacturer",
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
      name: "owner",
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
          internalType: "uint256",
          name: "_drugcode",
          type: "uint256",
        },
      ],
      name: "retrieveDrug",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
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
      name: "showDrugCode",
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
  ];
  //Address of contract deployed
  const Address = "0x3dC5461c4B44bC1cD64bE7793b4f53773F4b136b";
  // const contract = web3.eth.Contract(ABI);
  // const contractInstance = contract.at(Address);
  window.web3 = await new Web3(window.ethereum);
  contract = await new window.web3.eth.Contract(ABI, Address);
  //   document.getElementById("contractArea").innerHTML =
  //     "connected to smart contract";
  console.log("Connected Smart Contract");
};

const readContract = async () => {
  console.log("Read Contract starting");
  const data = await window.contract.methods.showDrugCode().call();
  console.log("Read Contract 1");
  drugCode = parseInt(data);
  console.log("Read Contract 2");
  document.getElementById("result_supplier").innerHTML = data;
  console.log("Read Contract 3");
  console.log(drugCode);
  console.log("Read Contract ends");
};

const getDrugDetails = async () => {
  // console.log(document.getElementById("drugCode").value);
  // console.log(parseInt(document.getElementById("drugCode").value));
  var drugCode = parseInt(document.getElementById("drugCode").value);
  console.log(drugCode);

  await window.contract.methods
    .retrieveDrug(drugCode)
    .call({ from: account })
    .then((resulttt) => {
      console.log(resulttt);
      const { 0: r1, 1: r2, 2: r3, 3: r4, 4: r5, 5: r6 } = resulttt;
      console.log("r1" + r1);
      console.log("r2" + r2);
      console.log("r3" + r3);
      console.log("r4" + r4);
      console.log("r5" + r5);
      console.log("r6" + r6);
      // var price = r6.toString();
      // document.getElementById("result").innerHTML =
      //   r1 + "," + r2 + "," + r3 + "," + r4 + "," + r5 + "," + r6;
      document.getElementById("brandName_result_consumer").innerHTML =
        "Brand: " + r1;
      console.log("r1 set");
      document.getElementById("drugName_result_consumer").innerHTML =
        "Drug :" + r2;
      console.log("r2 set");
      document.getElementById("dom_result_consumer").innerHTML =
        "Date Of Manufacture: " + r3;
      console.log("r3 set");
      document.getElementById("doe_result_consumer").innerHTML =
        "Date Of Expiry: " + r4;
      console.log("r4 set");
      document.getElementById("manAddress_result_consumer").innerHTML =
        "Manufacturers Address:" + r5;
      console.log("r5 set");
      document.getElementById("price_result_consumer").innerHTML =
        "Price:" + r6;
      console.log("r6 set");
    });
  document.getElementsByClassName("result-container")[0].style.display =
    "block";
  // document.getElementById("brandName_result_consumer").style.display = "block";
  // document.getElementById("").style.display = "block";
  // document.getElementById("").style.display = "block";
  // document.getElementById("").style.display = "block";
  // document.getElementById("").style.display = "block";
  // document.getElementById("").style.display = "block";
};

const submitDrugDetails = async () => {
  var inp1 = document.getElementById("brandName_input").value;
  var inp2 = document.getElementById("drugName_input").value;
  var inp3 = document.getElementById("dateOfManufacture_input").value;
  var inp4 = document.getElementById("dateOfExpiry_input").value;
  var inp5 = document.getElementById("price_input").value;

  await window.contract.methods
    .createDrug(inp1, inp2, inp3, inp4, inp5)
    .send({ from: account })
    .then((cdrug) => {
      console.log(cdrug);
    });

  const data = await window.contract.methods.showDrugCode().call();
  drugCode = parseInt(data);
  document.getElementById("result_manufacturer").innerHTML =
    "Drug Code :" + parseInt(data);
  console.log(drugCode);
  document.getElementsByClassName("result-container")[0].style.display =
    "block";
  // document.getElementById("sendstatus").innerHTML = "SUCCESS";
};

function submitManufacturerForm() {
  console.log("Clicked Submit");
}

function submitSupplierForm() {
  console.log("Clicked Submit");
}

function submitConsumerForm() {
  console.log("Clicked Submit");
}
