import React, { FunctionComponent } from 'react';
import Image from "./Image";
import HeaderActions from "./HeaderActions";
import {Link} from "react-router-dom";

interface IHeaderProps {}

const Header = ({} : IHeaderProps) => {

  return (
      <header className="w-full h-[71px] bg-transparentblack sticky top-0 flex z-[100] ">
          <nav className="max-w-[1752px] w-full mx-auto flex flex-col lg:flex-row items-center lg:space-between lg:px-16">
              <div className="w-full flex items-center space-x-10 justify-center lg:justify-start"></div>
                  <Link to="/favourites">
                      <h2 className="text-iconcolor font-bold">Favourites</h2>
                  </Link>
             <HeaderActions/>
          </nav>
      </header>
  );
};

export default Header;
