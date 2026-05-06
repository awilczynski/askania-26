import logo from "@/assets/logo.png";

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 py-6 md:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="AskAnia" className="h-12 md:h-14 w-auto" />
        </a>
      </div>
    </header>
  );
}
