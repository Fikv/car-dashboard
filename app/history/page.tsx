"use client"
import getWebsocket from "@/lib/WebsocketManager";
import CarShema from "@/model/car";
import { useEffect, useState } from "react";
import Dashboard from "../(components)/Dashboard";

  
export default function Home() {
  const[cars,setCars] = useState<CarShema[]>([])
  useEffect(()=>{
    const socket = getWebsocket();
    socket.emit("getAllCars",(response:any)=>{
      setCars(response.cars);  
    });
  },[])

    return <Dashboard logs={cars}/>
  }
  