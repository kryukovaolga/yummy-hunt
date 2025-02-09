import React, { useState } from "react";
import { Stack, VStack } from "@chakra-ui/react";
import { getRecipes } from "../../storage";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { Recipe } from "../../storage/mockData";

const allRecipes = getRecipes();

const Recipes: React.FC = () => {
  // todo: create hook to separate logics from ui
  const [recipes] = useState(() => Object.keys(allRecipes));
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);

  const toggleFavorite = (favoriteId: string) => {
    setFavoriteRecipes((prev) =>
      prev.includes(favoriteId)
        ? prev.filter((recipeId) => recipeId !== favoriteId)
        : [...prev, favoriteId]
    );
  };

  const onViewRecipe = (item: Recipe) => {
    console.log("view recipe", item);
  };

  return (
    <VStack gap={4} align="flex-start">
      <Stack
        gap="4"
        direction="row"
        wrap="wrap"
        width="100%"
        justify={{ base: "center", lg: "flex-start" }}
      >
        {/* corner case not managed: favorites present but none of them satisfies search */}
        {recipes.map((recipeId: string) => {
          const isFavorite = favoriteRecipes.includes(recipeId);
          const recipe = allRecipes[recipeId];
          return (
            <RecipeCard
              key={recipe.id}
              name={recipe.name}
              description={recipe.description}
              image={recipe.image}
              isFavorite={isFavorite}
              onFavoriteToggle={() => toggleFavorite(recipe.name)}
              onViewRecipe={() => onViewRecipe(recipe)}
            />
          );
        })}
      </Stack>
    </VStack>
  );
};

export { Recipes };
