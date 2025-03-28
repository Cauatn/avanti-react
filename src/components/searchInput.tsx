import { useGitHubUser } from "@/hooks/useGitHubUser";
import { Search } from "lucide-react";

function SearchInput() {
  const { searchValue, setSearchValue, loading, handleSearch } =
    useGitHubUser();

  return (
    <>
      <input
        type="text"
        placeholder="Digite o nome do usuário"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="flex-1 px-4 py-2 rounded-l outline-none bg-white"
      />
      <button
        onClick={handleSearch}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition-colors flex items-center justify-center"
      >
        <Search size={20} />
      </button>
    </>
  );
}

export { SearchInput };
