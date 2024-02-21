import { UserButton } from "@clerk/nextjs";
import React from "react";

const Layout = () => {
  return (
    <main className="root">
      <div className="root-container">
        <div className="wrapper">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </main>
  );
};

export default Layout;
