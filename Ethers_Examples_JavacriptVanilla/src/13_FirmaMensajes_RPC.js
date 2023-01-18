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
    // Uint8Array [ 221, 242, 82, 173, 27, 226, 200, 155, 105, 194, 176, 104, 252, 55, 141, 170, 149, 43, 167, 241, 99, 196, 161, 22, 40, 245, 90, 77, 245, 35, 179, 239 ]
    console.log("hash1 fernando en bytes => ",hash1_fernando_Bytes)
    
    // To sign a hash, you most often want to sign the bytes
    const signature_fernando = await wallet.signMessage(hash1_fernando_Bytes);
    // '0x7b03d0690027e3dd74513772db259a994837631922c82e4d0e3ce995e163adf26a94e7dd7cac9f6bb2c3f8e409b4bdf158baef5f510356f7bf418d38b4ee0fb71b'
    console.log("signature_fernando=> ",signature_fernando);

// Las firmas se pueden verificar con ECDSA, una libreria de Openzeppelin
}

firma()