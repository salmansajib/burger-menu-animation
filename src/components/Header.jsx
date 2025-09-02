import BurgerMenu from "./BurgerMenu";

function Header({ isOpen, setIsOpen }) {
  return (
    <div className="w-full h-[80px] bg-zinc-950 text-gray-50 px-6">
      <div className="w-full h-full mx-auto flex items-center justify-between">
        <p className="text-3xl font-bold">Menu</p>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Header;
