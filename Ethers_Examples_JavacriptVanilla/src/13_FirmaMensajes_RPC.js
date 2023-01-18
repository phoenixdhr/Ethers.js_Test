const ethers = require("ethers");
const keccak256 = require("keccak256")

require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.API);

const account1 = "0x64604f15280eA4576Fc86CC8a5300635b32f3Ab0";
const account2 = "0xed6C0B634a8C5Cb78f6a59eC4992D4CB1E837180";

const walletSEED = ethers.Wallet.fromMnemonic(process.env.KEY);

const wallet = walletSEED.connect(provider);
// const wallet = new ethers.Wallet(process.env.KEY,provider)

async function firma() {

    // obtenemos el hash del mensaje "pepe"
    const mensaje = "pepe"
    const hash1_pepe =keccak256(mensaje)
    console.log("hash1=> ",hash1_pepe)
    // Hash pepe en string "0x5d533775be30959f4e2d96c968120ecf6c1f1036d20bc316b593721385f1c1e3"
    // la funcion keccak256 retorna una cadena de bytes del hash
    // <Buffer 5d 53 37 75 be 30 95 9f 4e 2d 96 c9 68 12 0e cf 6c 1f 10 36 d2 0b c3 16 b5 93 72 13 85 f1 c1 e3>
    
    // Firmamos el hash de pepe, sin ninguna conversion, ya que es el type que se usa
    // en la funcion .signMessage(hash)
    const signature_pepe = await wallet.signMessage(hash1_pepe);
    console.log("firma pepe ",signature_pepe);
    //0x4485b9b34138ba8a2d02ea462f502b5e7ba321f4854e1467088d680fe738632271d8ce22dab4eba6d259ce934c03b56afc03bf3ef15bb6464f05507407dee0501c
    
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    // En cambio que tenemos el hash en string, entonces 
    // el hash debe convertirse en un Array (or TypedArray)
    // const mensaje = "fernando"
    // hash1_fernando= "0x660f1b5240d4f6cd25fadb899340caccd19255fbfd713ada1bb6b450950ad1b7"
    // This string is 66 characters long

    const hash1_fernando = "0x660f1b5240d4f6cd25fadb899340caccd19255fbfd713ada1bb6b450950ad1b7"
    // El hash tiene formato de string, por ello debe ser convertido a un array de bytes con: .arrayify() 

    const hash1_fernando_Bytes = ethers.utils.arrayify(hash1_fernando);
    // This array representation is 32 bytes long
    // Uint8Array [ 102,  15,  27,  82,  64, 212, 246, 205, 37, 250, 219, 137, 147, 64, 202, 204, 209, 146,  85, 251, 253, 113,  58, 218, 27, 182, 180,  80, 149,  10, 209, 183 ]
    console.log("hash1 fernando en bytes => ",hash1_fernando_Bytes)
    
    // To sign a hash, you most often want to sign the bytes
    const signature_fernando = await wallet.signMessage(hash1_fernando_Bytes);
    console.log("signature_fernando=> ",signature_fernando);
    // 0x0ed49e9065625dc6b72b181eb21f0cac23a83c330634a319ed87dbc83414b28b349c2eebfd262562f55b782feff0891b3feec9caa3c34f38ee795e230d6ac3741c

// Las firmas se pueden verificar con ECDSA, una libreria de Openzeppelin
}

firma()