import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Header } from "../Header";
import { Recipes } from "../Recipes";

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
        <Recipes />
      </Container>
    </Box>
  );
};

export default App;
