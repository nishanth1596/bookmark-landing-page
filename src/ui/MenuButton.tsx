// import burgerMenuIcon from "../assets/images/icon-hamburger.svg";

type MenuButtonProps = {
  handleShowMenu: () => void;
  ariaLabel: string;
  isMenuOpen: boolean;
};

function MenuButton({
  handleShowMenu,
  ariaLabel,
  isMenuOpen,
}: MenuButtonProps) {
  return (
    <button
      onClick={handleShowMenu}
      className="cursor-pointer"
      aria-label={ariaLabel}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
        <path
          fill={isMenuOpen ? "#242A45" : "#fff"}
          fill-rule="evenodd"
          d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
        />
      </svg>
    </button>
  );
}

export default MenuButton;
