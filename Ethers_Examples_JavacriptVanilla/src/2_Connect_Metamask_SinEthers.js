const boton = document.getElementById("boton2");

boton.addEventListener("click", async () => {

    const address = ethereum.request({ method: 'eth_requestAccounts' })
    await console.log("address => ", address[0]);

});