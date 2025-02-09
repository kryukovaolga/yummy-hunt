import {
  Card,
  Image,
  Button,
  IconButton,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa6";

interface RecipeCardProps {
  name: string;
  description: string;
  image: string;
  onFavoriteToggle: () => void;
  onViewRecipe: () => void;
  isFavorite: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  name,
  description,
  image,
  onFavoriteToggle,
  onViewRecipe,
  isFavorite,
}) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Card.Root
      maxW={{
        base: "sm",
        md: "lg",
        lg: "xl",
      }}
      overflow="hidden"
      lg={{ flexDirection: "row" }}
      variant="elevated"
    >
      {/* todo: manage onError image, e.g. create component for recipe image */}

      {isMobile && <Image src={image} alt={name} />}

      {!isMobile && (
        <Image
          objectFit={"cover"}
          maxW="200px"
          maxH="200px"
          src={image}
          alt={name}
        />
      )}

      <Box>
        <Card.Body gap="2">
          <Card.Title>{name}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Body>

        <Card.Footer gap="2" justifyContent="flex-end">
          <IconButton
            aria-label={isFavorite ? "Unsave Recipe" : "Save Recipe"}
            variant={"outline"}
            onClick={onFavoriteToggle}
            fontSize="lg"
            mb={{ base: 2, md: 0 }}
          >
            <FaHeart color={isFavorite ? "red" : "gray"} />
          </IconButton>

          <Button
            variant="solid"
            onClick={onViewRecipe}
            mb={{ base: 2, md: 0 }}
          >
            View
          </Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};

export { RecipeCard };
