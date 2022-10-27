import React, { useEffect, useState } from "react"
import "./styles/App.css"
import twitterLogo from "./assets/twitter-logo.svg"
import { ethers } from "ethers"
import myEpicNft from "./utils/MyEpicNFT.json"

// Constants
// const OPENSEA_LINK = ""
// const TOTAL_MINT_COUNT = 50

// Eu movi o endereço do contrato para cima para ficar fácil acessar
const CONTRACT_ADDRESS = "0xc43DB516FdfA51dC60D8e57a874c6DBC6f7B536B"

const App = () => {
  /*
   * Só uma variável de estado que usamos pra armazenar nossa carteira pública. Não esqueça de importar o useState.
   */
  const [currentAccount, setCurrentAccount] = useState("");
  const [mintedNFT, setMintedNFT] = useState(null);
  const [mintingNFT, setMintingNFT] = useState('');

  const checkIfWalletIsConnected = async () => {
    /*
     * Primeiro tenha certeza que temos acesso a window.ethereum
     */
    const { ethereum } = window
    if (!ethereum) {
      console.log("Certifique-se que você tem metamask instalado!")
      return
    } else {
      console.log("Temos o objeto ethereum!", ethereum)
    }


    let chainId = await ethereum.request({ method: 'eth_chainId' });
    console.log("Conectado à rede " + chainId);
    // String, hex code of the chainId of the Goerli test network
    const goerliChainId = "0x5"; 
    if (chainId !== goerliChainId) {
      alert("Você não está conectado a rede Goerli de teste!");
      return
    }

    /*
     * Checa se estamos autorizados a carteira do usuário.
     */
    const accounts = await ethereum.request({ method: "eth_accounts" })
    /*
     * Usuário pode ter múltiplas carteiras autorizadas, nós podemos pegar a primeira que está lá!
     */
    if (accounts.length !== 0) {
      const account = accounts[0]
      console.log("Encontrou uma conta autorizada:", account)
      setCurrentAccount(account)

      // Setup listener! Isso é para quando o usuário vem no site
      // e já tem a carteira conectada e autorizada
      setupEventListener()
    } else {
      console.log("Nenhuma conta autorizada foi encontrada")
    }
  }
  const connectWallet = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        alert("Baixe o Metamask!")
        return
      }


      let chainId = await ethereum.request({ method: 'eth_chainId' });
      console.log("Conectado à rede " + chainId);
      // String, hex code of the chainId of the Goerli test network
      const goerliChainId = "0x5"; 
      if (chainId !== goerliChainId) {
        alert("Você não está conectado a rede Goerli de teste!");
        return
      }


      /*
       * Método chique para pedir acesso a conta.
       */
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      })
      /*
       * Boom! Isso deve escrever o endereço público uma vez que autorizar o Metamask.
       */
      console.log("Conectado", accounts[0])
      setCurrentAccount(accounts[0])

      // Setup listener! Para quando o usuário vem para o site
      // e conecta a carteira pela primeira vez
      setupEventListener()
    } catch (error) {
      console.log(error)
    }
  }

  // Setup do listener.
  const setupEventListener = async () => {
    // é bem parecido com a função
    try {
      const { ethereum } = window

      if (ethereum) {
        // mesma coisa de novo
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer)

        // Aqui está o tempero mágico.
        // Isso essencialmente captura nosso evento quando o contrato lança
        // Se você está familiar com webhooks, é bem parecido!
        connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
          console.log(from, tokenId.toNumber())
          setMintedNFT({
            from: from,
            tokenId: tokenId.toNumber()
          })
        })

        console.log("Setup event listener!")
      } else {
        console.log("Objeto ethereum não existe!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const askContractToMintNft = async () => {
    try {
      const { ethereum } = window;

      
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer)

        setMintingNFT("Aguardando a confirmação da transação em sua Metamask...")
        let nftTxn = await connectedContract.makeAnEpicNFT()
        setMintingNFT("Cunhando...espere por favor.")
        await nftTxn.wait()
        console.log(`Cunhado, veja a transação: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
      } else {
        console.log("Objeto ethereum não existe!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Métodos para Renderizar
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} id="connect-wallet-button" className="cta-button connect-wallet-button">
      Conectar Carteira
    </button>
  )

  const successfulMintedNFTMessage = (mintedNFT) => (
    <p className="sub-text" style={{padding: "5vh 10vw"}}>
      {`Olá! Já cunhamos o NFT com o id ${mintedNFT.tokenId} para o endereço ${mintedNFT.from}. Pode ser que esteja branco agora. Demora no máximo 10 minutos para aparecer no OpenSea.`} 
      <br/>
      <br/>Aqui está o link da OpenSea: <a 
        href={`https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${mintedNFT.tokenId}`}
        target="_blank"
        rel="noreferrer"
        >
          {`https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${mintedNFT.tokenId}`}
      </a>
      <br/>Aqui está o link da Rarible: <a 
        href={`https://testnet.rarible.com/token/${CONTRACT_ADDRESS}:${mintedNFT.tokenId}`}
        target="_blank"
        rel="noreferrer"
        >
          {`https://testnet.rarible.com/token/${CONTRACT_ADDRESS}:${mintedNFT.tokenId}`}
      </a>
    </p>
  )
  /*
   * Isso roda nossa função quando a página carrega.
   */
  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">Minha Coleção de NFT</p>
          <p className="sub-text">Exclusivos! Maravilhosos! Únicos! Descubra seu NFT hoje.</p>
          {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <button onClick={askContractToMintNft} id="mint-nft-button" className="cta-button connect-wallet-button">
              Cunhar NFT
            </button>
          )}
          {(mintedNFT === null) ?  
            (<p className="sub-text" style={{padding: "5vh 10vw"}}>{mintingNFT}</p>) 
            : 
            (successfulMintedNFTMessage(mintedNFT))
          }
        </div>
        <div className="footer-container">
          <a className="footer-text" href="https://github.com/thiagodeev" target="_blank" rel="noopener noreferrer">
            Feito com ❤️ por @thiagodeev e pela 
          </a>
          
          <a
            className="footer-text"
            href="https://twitter.com/web3dev_"
            target="_blank"
            rel="noreferrer"
            style={{display: 'flex', alignItems: 'center'}}
          ><img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />web3dev_</a>
        </div>
      </div>
    </div>
  )
}

export default App