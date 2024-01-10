"use client"
import { createCarLog } from "@/lib/DumyDataGenerator";
import {io} from "socket.io-client"
import CarShema from "@/model/car";
import Link from "@/node_modules/next/link";
const Navbar: React.FC = () => {
    const addCarChandler = ()=>{
        addCar();
        setInterval(addCar,5_000);
    }

    const addCar= ()=>{
        const car:CarShema = createCarLog();
        const socket  = io("http://35.185.80.147:4000");    
        socket.emit("addCarLog",JSON.stringify(car));
    }

    return <div className="navbar bg-base-100">
    <div className="navbar-start">
      <Link href={"/"} className="btn btn-ghost text-xl">Dashboard</Link>
    </div>
    <div className="navbar-center lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><Link href={"/history"}>History </Link></li>
      <li><Link href={"/"}>Live Data</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
      <button onClick={addCarChandler} className="btn btn-ghost text-xl">Generate Data</button>
    </div>
  </div>

}

export default Navbar;