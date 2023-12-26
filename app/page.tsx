"use client"
import getWebsocket from "@/lib/WebsocketManager";
import { useEffect, useState } from "react";
import CarSelection from "./(components)/CarSelection";


export default function Page() {
  const [ids,setIds] = useState<number[]>([])
    useEffect(()=>{
      const socket = getWebsocket();
      socket.emit("getCarIdList",(response:any)=>{
        setIds(response.carIdList);  
      });},[])
    return <CarSelection cars={ids}/>;
  }