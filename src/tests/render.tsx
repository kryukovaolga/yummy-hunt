import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { render as rtlRender } from "@testing-library/react";

export function render(ui: React.ReactNode) {
  return rtlRender(<>{ui}</>, {
    wrapper: (props: React.PropsWithChildren) => (
      <ChakraProvider value={defaultSystem}>{props.children}</ChakraProvider>
    ),
  });
}
