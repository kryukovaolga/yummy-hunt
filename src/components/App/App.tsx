import { Box, Container } from "@chakra-ui/react";
import React from "react";

const App: React.FC = () => {
  return (
    <Box>
      <header>Yummy Hunt</header>
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
