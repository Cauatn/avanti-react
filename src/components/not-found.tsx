function NotFoundMessage() {
  return (
    <div className="mt-8 p-6 rounded shadow-lg w-full max-w-md text-center text-white bg-[#D9D9D9] flex flex-row">
      <p className="text-red-500 mt-4">
        Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente.
      </p>
    </div>
  );
}

export { NotFoundMessage };
