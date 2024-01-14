import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

import jane from "../../public/images/janedough.jpg";

const profile = () => {
  return (
    <>
      <Header />
      <main className="profile">
        <h1 className="profile__title">Profile</h1>
        <div className="profile__avatar">
          <Image src={jane}></Image>
        </div>
      </main>
    </>
  );
};

export default profile;
