import React, { useState } from "react";
import { Stack, VStack } from "@chakra-ui/react";
import { getRecipes } from "../../storage";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { Recipe } from "../../storage/mockData";
import { FilterBar, RecipeFilter } from "./FilterBar";
import { RecipesNoFavorites, RecipesNotFound } from "./NoRecipes";
import { SearchBar } from "../SearchBar";
import { RecipeDetail } from "../RecipeDetail";

const allRecipes = getRecipes();

const Recipes: React.FC = () => {
  // todo: create hook to separate logics from ui
  const [recipes, setRecipes] = useState(() => Object.keys(allRecipes));
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);
  const [filter, setFilter] = useState<RecipeFilter>("ALL");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>(
    undefined
  );

  const toggleFavorite = (favoriteId: string) => {
    setFavoriteRecipes((prev) =>
      prev.includes(favoriteId)
        ? prev.filter((recipeId) => recipeId !== favoriteId)
        : [...prev, favoriteId]
    );
  };

  const onViewRecipe = (item: Recipe) => {
    setSelectedRecipe(item);
  };

  const onFilter = (f: RecipeFilter) => {
    setFilter(f);
  };

  const onSearch = (query?: string) => {
    if (!query) {
      setRecipes(Object.keys(allRecipes));
      return;
    } else {
      const recipesWithFilter = Object.keys(allRecipes).filter((id) =>
        allRecipes[id].name.toLowerCase().includes(query.toLowerCase())
      );

      setRecipes(recipesWithFilter);
    }
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
        <SearchBar onSearch={onSearch} />

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

      {/* Recipe Detail: manage as a dedicated page, routings should be set up */}
      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          isFavorite={favoriteRecipes.includes(selectedRecipe.name)}
          onClose={() => setSelectedRecipe(undefined)}
          onFavorite={toggleFavorite}
        />
      )}
    </VStack>
  );
};

export { Recipes };
