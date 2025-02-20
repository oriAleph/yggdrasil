import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Yggdrasil</h1>
      <p className="mb-8 text-center max-w-lg">Dive in!</p>
      <ThemeSwitcher />
    </div>
  );
}
