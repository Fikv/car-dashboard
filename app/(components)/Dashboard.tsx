'use client'
import { createCarLog } from "@/lib/DumyDataGenerator";
import CarShema from "@/model/car";
import React from "react";
import {io} from "socket.io-client"

interface Props {
  title:string
  logs:CarShema[]
}
const Dashboard: React.FC<Props> = (props) => {

  const addCarchandler = ()=>{
      const car:CarShema = createCarLog();
      const socket  = io("http://35.185.80.147:4000");
      socket.emit("addCarLog",car);
  }

  return (
    <div className="container">
    <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>ID</th>
        <th>Battery</th>
        <th>Motor Left</th>
        <th>Motor Right</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
    {props.logs.map((car,id) => <tr key={id}>
        <th>{id}</th>
         <td>{car.id}</td>
        <td>{`${car.batteryStatus.toFixed()}%`}</td>
        <td>{`${car.motorLeft.toFixed()}%`}</td>
        <td>{`${car.motorRight.toFixed()}%`}</td>
        <td>{car.logDate}</td>
      </tr>)}
    </tbody>
  </table>
</div>
</div>
  );
};

export default Dashboard;
