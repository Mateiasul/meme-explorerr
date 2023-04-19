"use client";
import { useEffect, useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import { Container, Typography, Button } from "@mui/material";
import Searchbar from "./components/Searchbar";
import { Box } from "@mui/system";
import PageTitle from "./components/PageTitle";
export default function Home() {
  const { Network, Alchemy } = require("alchemy-sdk");
  const [pendingTransactions, setPendingTransactions] = useState([]);
  const [contract, setContract] = useState([]);

  const alchemy = new Alchemy({
    apiKey: process.env.ALCHEMY_KEY,
    network: Network.ETH_MAINNET,
  });

  const handleIncomingTransactions = (tx) => {
    setPendingTransactions((pendingTransactions) => [
      tx,
      ...pendingTransactions,
    ]);

    alchemy.ws.once(tx.hash, (tx) => handleSuccessfullyMinedTransaction(tx));
  };

  const handleSuccessfullyMinedTransaction = (tx) => {
    setPendingTransactions(
      pendingTransactions.filter((x) => {
        return x.hash !== tx.hash;
      })
    );
  };

  useEffect(() => {
    alchemy.ws.on(
      {
        method: "alchemy_pendingTransactions",
        toAddress: [
          "0x000000000000ad05ccc4f10045630fb830b95127",
          "0xa884dc714629ca03570696b3445999d914a217cb",
          "0x8cfe4297458c0a61140c6ff5ac94519857ba8d5f",
          "0x00000000000001ad428e4906ae43d8f9852d0dd6",
        ],
      },
      (tx) => handleIncomingTransactions(tx)
    );
    return () => {
      alchemy.ws.off("alchemy_pendingTransactions");
    };
  }, []);

  return (
    <main>
      <Box
        sx={{
          backgroundImage: `url(/forest.jpg)`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Container maxWidth="xl" flex="align-center">
          <PageTitle />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Searchbar setContract={setContract}></Searchbar>
            <Typography sx={{ fontWeight: "500" }}>
              Pending Transactions{" "}
              <strong>({pendingTransactions.length})</strong>
            </Typography>
          </Box>
          <TransactionsTable
            pendings={pendingTransactions}
            totalPendings={pendingTransactions.length}
          />
        </Container>
      </Box>
    </main>
  );
}
