import Link from "@/node_modules/next/link";
import React from "react";

const Drawer= ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <div className="drawer drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {children}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button hidden ">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
      <li><Link href={"/history"}>History </Link></li>
      <li><Link href={"/"}>Live Data</Link></li>
    </ul>
  </div>
</div>
  );
};

export default Drawer;
