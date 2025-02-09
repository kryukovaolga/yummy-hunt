import { FaBowlRice } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { EmptyResult } from "../EmptyResult";

const RecipesNotFound: React.FC = () => {
  return (
    <EmptyResult
      icon={<FaBowlRice color="teal" />}
      title="Oops! No Yummy Finds!"
      description="Looks like your search came up empty. Try something else—your next favorite dish is waiting!"
    />
  );
};

const RecipesNoFavorites: React.FC = () => {
  return (
    <EmptyResult
      icon={<FaHeart color="red" />}
      title="Your Favorites Are Feeling Lonely!"
      description="You haven’t saved any recipes yet. Find something delicious and give it some love!!"
    />
  );
};

export { RecipesNotFound, RecipesNoFavorites };
