import getWebsocket from "@/lib/WebsocketManager";
import CarShema from "@/model/car";
import { useEffect, useState } from "react";
import greenCar from "../../assets/greenCar.png"
import redCar from "../../assets/redCar.png"
import CarItem from "./CarItem";
import CarDetails from "./CarDetails";

interface Props{
    cars:number[]
}
const CarSelection: React.FC<Props> = (props) => {
    const [carData,setCarData] = useState<any>({data:new Map()})
    const [seletedData,setSeletedData] =useState<number|undefined>(undefined);

    useEffect(()=>{
        const socket = getWebsocket();
        socket.on('newLog', (car:CarShema) => {
            setCarData((prev: 
            { 
                    data: { set: (arg0: number, arg1: CarShema) => void; }; 
            }) => {
                prev.data.set(car.id, car);
                return { data: prev.data };})
        });
      },[])
  
    return (
    <div className="container h-screen">
        <ul className="flex flex-wrap justify-around">
            {props.cars.map(id=>
carData.data.has(id)?
            <CarItem key={id} id={id} icon={greenCar} selected={id === seletedData} onClick={()=>{setSeletedData(id)} }/>
            :
            <CarItem key={id} id={id} icon={redCar} selected={id === seletedData} onClick={undefined}/>
            )
            }
        </ul>
        <div>
            {seletedData && <CarDetails data={carData.data.get(seletedData)}/>}
        </div>
    </div>
    );
  };
  export default CarSelection;