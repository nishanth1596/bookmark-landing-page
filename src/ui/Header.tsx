import { useState } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import NavBar from "./NavBar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="mt-10 flex w-full justify-between px-8 lg:mt-12 lg:items-center lg:px-12 xl:px-0">
      <Logo variant="header" isOpen={isMenuOpen} />
      <MenuButton
        ariaLabel="Click to open menu"
        handleShowMenu={() => setIsMenuOpen(true)}
        isMenuOpen={isMenuOpen}
      />

      <NavBar variant="header" islargeScreen={true} />

      {isMenuOpen && (
        <div className="bg-Black fixed inset-0 flex h-screen flex-col lg:hidden">
          <div className="mx-8 mt-10 flex justify-between">
            <Logo variant="header" isOpen={isMenuOpen} />
            <MenuButton
              ariaLabel="Click to close menu"
              handleShowMenu={() => setIsMenuOpen(false)}
              isMenuOpen={isMenuOpen}
            />
          </div>
          <NavBar variant="header" islargeScreen={false} />
        </div>
      )}
    </header>
  );
}

export default Header;
