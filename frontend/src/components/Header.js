import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <Image src={logo} width={181} height={58} alt="Picture of the author" />
      <div className="header__links">
        <Link href="/" className="header__link">
          Dashboard
        </Link>
        {/* <Link href="/profile" className="header__link">
          Profile
        </Link> */}
        <Link href="/docs" className="header__link">
          API Docs
        </Link>
      </div>
    </header>
  );
};

export default Header;
