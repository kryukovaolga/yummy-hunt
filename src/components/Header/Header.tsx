import { Heading, Image, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import logoUrl from "./../../assets/logo.svg";

const logoAltText = "Yummy Hunt Logo";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      bg="colorPalette.500"
      color="white"
      py={4}
      px={6}
      justify="center"
      w="100%"
      direction="row"
      align="center"
      gap="4"
    >
      <Image
        src={logoUrl}
        alt={logoAltText}
        boxSize="60px"
        animation={`${spin} 4s linear infinite`}
        fill="orange.500"
      />

      <Heading
        as="h1"
        size="3xl"
        hideBelow="md" // hide below the `md` breakpoint
      >
        Yummy Hunt
      </Heading>
    </Flex>
  );
};

export { Header };
