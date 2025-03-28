import Github from "./assets/github.png";
import { useGitHubUser } from "./hooks/useGitHubUser";
import { SearchInput } from "./components/searchInput";
import { NotFoundMessage } from "./components/not-found";

function App() {
  const { user, error, notFound } = useGitHubUser();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="max-w-6xl max-h-[537px] w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center space-x-4 mb-7">
          <img src={Github} className="size-12" alt="Logo Github" />
          <h1 className="text-4xl text-white font-base">
            Perfil <strong className="font-semibold">GitHub</strong>
          </h1>
        </div>
        <div className="flex w-full max-w-md">
          <SearchInput />
        </div>

        {/* Mensagem de erro específico ao não encontrar */}
        {notFound && <NotFoundMessage />}

        {/* Mensagem de erro genérica */}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Dados do usuário */}
        {user && !notFound && (
          <div className="mt-8 p-6 rounded shadow-lg w-full max-w-md text-center text-white bg-[#D9D9D9] flex flex-row">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="w-48 h-48 rounded-full mx-auto mb-4 border-2 border-blue-500"
            />
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-semibold text-blue-600">
                {user.name}
              </h2>
              <p className="text-black mt-2 text-base">
                {user.bio || "Sem biografia disponível."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
