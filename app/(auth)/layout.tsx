import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-center bg-purple-100 w-full min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
