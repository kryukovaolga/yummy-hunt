import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Header } from "../Header";

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      <Container
        maxW="container.md"
        py={10}
        textAlign="center"
        bgColor="white"
        role="main"
      >
        Yummy Hunt Content
      </Container>
    </Box>
  );
};

export default App;
