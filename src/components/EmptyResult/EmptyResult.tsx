import { EmptyState, VStack } from "@chakra-ui/react";

interface EmptyResultProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EmptyResult: React.FC<EmptyResultProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>{icon}</EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>{title}</EmptyState.Title>
          <EmptyState.Description>{description}</EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};

export { EmptyResult };
