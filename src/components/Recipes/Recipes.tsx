import React, { useState } from "react";
import { Stack, VStack } from "@chakra-ui/react";
import { getRecipes } from "../../storage";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { Recipe } from "../../storage/mockData";
import { FilterBar, RecipeFilter } from "./FilterBar";
import { RecipesNoFavorites, RecipesNotFound } from "./NoRecipes";

const allRecipes = getRecipes();

const Recipes: React.FC = () => {
  // todo: create hook to separate logics from ui
  const [recipes] = useState(() => Object.keys(allRecipes));
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);
  const [filter, setFilter] = useState<RecipeFilter>("ALL");

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

  const onFilter = (f: RecipeFilter) => {
    setFilter(f);
  };

  const data =
    filter === "FAVORITES"
      ? favoriteRecipes.filter((item) => recipes.includes(item))
      : recipes;

  return (
    <VStack gap={4} align="flex-start">
      <Stack
        gap="4"
        direction="row"
        wrap="wrap"
        width="100%"
        justify={{ base: "center", lg: "flex-start" }}
      >
        <FilterBar filter={filter} onFilter={onFilter} />

        {/* todo: move no recipes into a dedicated component */}
        {filter === "ALL" && data.length === 0 && <RecipesNotFound />}
        {filter === "FAVORITES" && favoriteRecipes.length === 0 && (
          <RecipesNoFavorites />
        )}
        {filter === "FAVORITES" &&
          favoriteRecipes.length > 0 &&
          data.length === 0 && <RecipesNotFound />}

        {data.map((recipeId: string) => {
          const isFavorite = favoriteRecipes.includes(recipeId);
          const recipe = allRecipes[recipeId];
          return (
            <RecipeCard
              key={recipe.id}
              name={recipe.name}
              description={recipe.description}
              image={recipe.image}
              isFavorite={isFavorite}
              onFavoriteToggle={() => toggleFavorite(recipe.id)}
              onViewRecipe={() => onViewRecipe(recipe)}
            />
          );
        })}
      </Stack>
    </VStack>
  );
};

export { Recipes };
