export const fetchGitHubUser = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error(
      response.status === 404
        ? "Usuário não encontrado"
        : "Erro ao buscar usuário. Tente novamente mais tarde."
    );
  }
  return response.json();
};
