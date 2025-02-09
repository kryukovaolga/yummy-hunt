import { useState } from "react";
import { Group, Input, Button } from "@chakra-ui/react";

interface SearchBarProps {
  onSearch: (query?: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm.trim() || undefined);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Group attached w="100%">
      <Input
        placeholder="Search for recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <Button onClick={handleSearch} aria-label="Search">
        Search
      </Button>
    </Group>
  );
};

export { SearchBar };
