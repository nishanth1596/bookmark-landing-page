import { useState } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import NavBar from "./NavBar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="mt-10 flex w-full justify-between px-8">
      <Logo isOpen={isMenuOpen} />
      <MenuButton
        ariaLabel="Click to open menu"
        handleShowMenu={() => setIsMenuOpen(true)}
        isMenuOpen={isMenuOpen}
      />

      {isMenuOpen && (
        <div className="bg-Black fixed inset-0 flex h-screen flex-col">
          <div className="mx-8 mt-10 flex justify-between">
            <Logo isOpen={isMenuOpen} />
            <MenuButton
              ariaLabel="Click to close menu"
              handleShowMenu={() => setIsMenuOpen(false)}
              isMenuOpen={isMenuOpen}
            />
          </div>
          <NavBar />
        </div>
      )}
    </header>
  );
}

export default Header;
