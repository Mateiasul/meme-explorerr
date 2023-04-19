import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { hexToNumberString } from "web3-utils";
import Paper from "@mui/material/Paper";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function TransactionsTable({ pendings, totalPendings }) {
  const { Utils } = require("alchemy-sdk");

  return (
    <Grid2 item xs={8}>
      <Paper
        elevation={12}
        sx={{ p: 2, display: "flex", flexDirection: "column" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>hash</TableCell>
              <TableCell>from</TableCell>
              <TableCell>prio</TableCell>
              <TableCell>max base fee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendings.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{i}</TableCell>
                <TableCell>{row.hash}</TableCell>
                <TableCell>{row.from}</TableCell>
                <TableCell>
                  {row?.maxPriorityFeePerGas &&
                    Utils.formatUnits(
                      hexToNumberString(row?.maxPriorityFeePerGas),
                      "gwei"
                    )}
                </TableCell>
                <TableCell>
                  {row?.maxPriorityFeePerGas &&
                    Utils.formatUnits(
                      hexToNumberString(row?.maxFeePerGas),
                      "gwei"
                    )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Grid2>
  );
}
