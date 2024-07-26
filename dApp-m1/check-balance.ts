import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

let publicKey;
try {
  publicKey = new PublicKey("CpSf51RdsEE42PszXRQZTpjPh7QAb15uJrDF3bFvr2W3");
} catch (error) {
  throw new Error("Invalid public key.");
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);

// To check other's balance we can pass their public key asan argument in cmd
// npx esrun check-balance.ts (some wallet address)

// const suppliedPublicKey = process.argv[2];
// if (!suppliedPublicKey) {
//   throw new Error("Provide a public key to check the balance of!");
// }
