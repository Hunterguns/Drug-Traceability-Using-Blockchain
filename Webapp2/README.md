# Project Title

# Overview

This project aims to develop a robust drug traceability system using blockchain technology and smart contracts. The system provides a secure and transparent means to track and authenticate drugs across the pharmaceutical supply chain, ensuring the safety and quality of pharmaceutical products.

# Features

- Smart Contract Deployment: The system utilizes smart contracts, self-executing programs running on a blockchain network, to automate key processes such as drug code generation, data storage, and authentication.

- Registration of Drugs: Drug manufacturers can register their products by entering relevant details such as batch numbers, manufacturing dates, and prices. This information is encrypted and stored on the blockchain, generating a unique hash value for each drug batch.

- Authentication and Verification: Suppliers and consumers can verify the authenticity and traceability of drugs by entering the hash value printed on the drug packaging. The system retrieves the stored information from the blockchain, allowing stakeholders to validate important details like expiration dates, prices, and manufacturing history.

- Tamper-Proof and Transparent Records: Blockchain technology ensures that drug information stored on the network cannot be tampered with, providing a secure and immutable record of drug transactions across the supply chain.

- Increased Trust and Accountability: The system promotes trust and accountability among manufacturers, suppliers, regulators, and end consumers by offering a reliable means to authenticate drugs and ensure their quality.

# Installation

1. Clone the repository.
2. Install and configure Ganache Testnet or any other testnet
3. Open metamask and login to your account. If you don't have an existing account, create an account and register on metamask or any other crypto-wallet
4. Connect your metamask to the configured testnet.
5. Configure the blockchain network and smart contracts according to your environment.
6. Deploy the smart contract(smart_contract.sol) on the testnet used by using remix or by any other means.
7. Replace the contract address in script.js file with the address of the deployed contract.
8. Replace the ABI in script.js file with the ABI of the deployed contract.
9. Launch the application

# Usage

- Manufacturer:

Register a new drug batch by providing the necessary details.
Receive a unique hash value (drug code) for the registered batch.

- Supplier:

Verify the authenticity of a drug batch by entering its hash value (drug code).
Retrieve the stored information from the blockchain, including batch details and manufacturing history.

- Consumer:

Validate the authenticity and traceability of a drug before consumption.
Enter the drug's hash value (drug code) to access information such as expiration date, price, and manufacturing details.

# License

This project is licensed under the MIT License. Feel free to use and modify it for your purposes.

# Acknowledgements

We would like to thank the open-source community for providing valuable resources and libraries that contributed to the development of this project. Your support and contributions are greatly appreciated.
