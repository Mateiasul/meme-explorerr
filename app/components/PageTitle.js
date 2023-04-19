import * as React from "react";
import { Container, Typography } from "@mui/material";

export default function PageTitle() {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          mb: 5,
          textAlign: "center",
          letterSpacing: 10,
          paddingTop: 10,
          fontWeight: 800,
        }}
      >
        BlackForest
      </Typography>
      <Typography
        variant="h4"
        sx={{
          mb: 5,
          textAlign: "center",
          letterSpacing: 10,
          marginTop: -5,
        }}
      >
        Memepool Explorer
      </Typography>
    </Container>
  );
}
