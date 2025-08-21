// PAGE AUTH
export default function AuthPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem("module", "true");
          window.location.reload();
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Usuario"
          className="border px-2 py-1 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border px-2 py-1 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
