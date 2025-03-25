import { useState } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="mt-10 flex w-full justify-between px-8">
      <Logo isOpen={isMenuOpen} />
      <MenuButton
        ariaLabel="Click to open menu"
        handleShowMenu={() => setIsMenuOpen(true)}
      />

      {isMenuOpen && (
        <div className="bg-Black fixed inset-0">
          <div>
            <Logo isOpen={isMenuOpen} />
            <MenuButton
              ariaLabel="Click to close menu"
              handleShowMenu={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
