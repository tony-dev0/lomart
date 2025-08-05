const Header = () => {
  return (
    <div className="py-4 lg:py-6 px-4 border-b border-[#E2E2E4]">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center gap-4">
        <img
          src="/logo.svg"
          alt="Logo"
          className="h-8 lg:h-9 w-auto flex-shrink-0"
        />

        <div className="relative hidden md:flex items-center flex-1 max-w-[620px] mx-4">
          <img
            src="/menu serch.png"
            alt="Menu Search"
            className="absolute left-3 z-10 h-6 w-6 lg:h-[35px] lg:w-[35px]"
          />
          <input
            type="text"
            placeholder="Search for product..."
            className="pl-12 lg:pl-20 pr-10 lg:pr-12 py-2 lg:py-2.5 border border-[#E2E2E4] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#05A845] w-full text-sm lg:text-base"
          />
          <div className="absolute right-2 bg-[#05A845] rounded-[5px] w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center">
            <img
              src="/search.png"
              alt="Search Icon"
              className="h-3 w-3 lg:h-4 lg:w-4"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 lg:gap-4 flex-shrink-0">
          <img
            src="/user.png"
            alt="User Icon"
            className="h-4 w-4 lg:h-5 lg:w-5"
          />
          <img
            src="/wishlist.png"
            alt="Heart Icon"
            className="h-4 w-4 lg:h-5 lg:w-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
