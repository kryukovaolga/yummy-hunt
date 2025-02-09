import {
  Box,
  DataList,
  Text,
  Heading,
  Image,
  VStack,
  Flex,
  Skeleton,
  Button,
  IconButton,
  DrawerCloseTrigger,
  DrawerContext,
} from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
} from "@/components/ui/drawer";
import { Recipe } from "../../storage/mockData";
import { FaHeart } from "react-icons/fa6";

interface RecipeDetailProps {
  recipe: Recipe;
  isFavorite: boolean;
  onFavorite: (id: string) => void;
  onClose: () => void;
}

/* todo: split in smaller components for redability*/
const RecipeDetail: React.FC<RecipeDetailProps> = ({
  recipe,
  isFavorite,
  onClose,
  onFavorite,
}) => {
  return (
    <DrawerRoot
      open={Boolean(recipe)}
      onOpenChange={onClose}
      size={{
        base: "full",
        md: "lg",
        lg: "xl",
      }}
    >
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerContext>
          {(store) => (
            <>
              <DrawerHeader>
                <Flex w="100%" justify="space-between">
                  <IconButton
                    aria-label={isFavorite ? "Unsave Recipe" : "Save Recipe"}
                    variant="outline"
                    onClick={() => onFavorite(recipe.id)}
                    fontSize="lg"
                  >
                    <FaHeart color={isFavorite ? "red" : "gray"} />
                  </IconButton>
                  <Button size="md" onClick={() => store.setOpen(false)}>
                    Close
                  </Button>
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                <VStack gap="4">
                  <Flex
                    w="100%"
                    gap="4"
                    flexDirection={{ base: "column", lg: "row" }}
                    justify={{ base: "flex-start", lg: "space-between" }}
                  >
                    <VStack align="start">
                      <Flex w="100%" justify="space-between">
                        <Heading size="2xl" color="teal.500">
                          {recipe.name}
                        </Heading>
                        <Heading size="xl" color="orange.500">
                          {recipe.preparationTime} min
                        </Heading>
                      </Flex>
                      <Text>{recipe.description}</Text>
                    </VStack>
                    {/* todo: manage onError image */}
                    <Image
                      height="160px"
                      width={{
                        base: "100%",
                        lg: "48%",
                      }}
                      alt={`${recipe.name} recipe image`}
                      src={recipe.image}
                    />
                  </Flex>

                  <Box
                    bg="orange.100"
                    bgColor="orange.100"
                    w="100%"
                    p="4"
                    shadow="md"
                  >
                    <Heading size="lg">INGREDIENTS</Heading>
                    <DataList.Root
                      display="grid"
                      orientation="horizontal"
                      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
                      mt="2"
                    >
                      {recipe.ingredients.map((item) => (
                        <DataList.Item key={item.label}>
                          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
                          <DataList.ItemValue>
                            {item.quantity} {item.quantityUnit}
                          </DataList.ItemValue>
                        </DataList.Item>
                      ))}
                    </DataList.Root>
                  </Box>
                  <Box w="100%" p="4" shadow="md">
                    <Heading size="lg">PREPARATION</Heading>
                    <Skeleton height="300px" />
                  </Box>
                </VStack>
              </DrawerBody>
            </>
          )}
        </DrawerContext>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export { RecipeDetail };
