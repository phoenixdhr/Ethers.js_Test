import "./App.css";
import { useState } from "react";


function App() {

  const [walletAddress, setWalletAddress]= useState("")

  async function requestAccount() {
    if (window.ethereum) {
      console.log("Metamask detectad");
      try {
        const address = await window.ethereum.request({ method: "eth_requestAccounts" });
        
        setWalletAddress(address[0])
        console.log("Conexion exitosa");
      } catch (error) {
        console.log(error);
        console.log("error ta mare");

      }
    }else{
      console.log("No tienes instalado metamask");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestAccount}>CONECT</button>
        <h3>Wallet Addres</h3>
        <h3>{walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
