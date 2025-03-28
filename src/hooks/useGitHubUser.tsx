// src/hooks/useGitHubUser.tsx
import { useState } from "react";
import { User } from "@/@types/user-interface";
import { fetchGitHubUser } from "@/http/services/githubService";

export const useGitHubUser = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!searchValue) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchGitHubUser(searchValue);
      setUser(data);
      setNotFound(false);
    } catch (err: any) {
      if (err.message === "Usuário não encontrado") {
        setNotFound(true);
      } else {
        setError(err.message || "Erro inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    searchValue,
    setSearchValue,
    user,
    error,
    notFound,
    loading,
    handleSearch,
  };
};
