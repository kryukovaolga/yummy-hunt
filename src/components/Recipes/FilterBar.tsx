import { Button, HStack } from "@chakra-ui/react";
import React from "react";

export type RecipeFilter = "ALL" | "FAVORITES";

const FilterBar: React.FC<{
  filter: RecipeFilter;
  onFilter: (filter: RecipeFilter) => void;
}> = ({ filter, onFilter }) => {
  return (
    <HStack
      wrap="wrap"
      gap="4"
      justify={{ base: "flex start", md: "space-between", lg: "flex-start" }}
      w="100%"
    >
      <Button
        variant={filter === "ALL" ? "solid" : "outline"}
        w={{ base: "100%", md: "48%", lg: "120px" }}
        onClick={() => onFilter("ALL")}
      >
        All
      </Button>
      <Button
        onClick={() => onFilter("FAVORITES")}
        variant={filter === "FAVORITES" ? "solid" : "outline"}
        w={{ base: "100%", md: "48%", lg: "120px" }}
      >
        Favorites
      </Button>
    </HStack>
  );
};

export { FilterBar };
