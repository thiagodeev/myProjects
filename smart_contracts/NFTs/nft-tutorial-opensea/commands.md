npm init -y

npm install @openzeppelin/contracts && npm install dotenv --save && npm install --save-dev hardhat @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan ethers@^5.0.0 node-fetch@2

npx hardhat

mkdir contracts && mkdir scripts

npx hardhat compile

npx hardhat run scripts/deploy.js --network goerli 