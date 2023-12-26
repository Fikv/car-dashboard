import CarShema from "@/model/car";
import Image from "@/node_modules/next/image";
import GaugeChart from 'react-gauge-chart';
import battery from "../../assets/battery.png"
import Gauge from "./Gauge";

interface Props{
    data:CarShema
}

const CarDetails: React.FC<Props> = (props) => {
    return (
        <div className="card p-20">
        <h1 className="text-center">{props.data.logDate}</h1>
        <div className="flex justify-center">
        <Gauge title="Motor Left">
            <GaugeChart id="motor-left" 
            nrOfLevels={30}
            formatTextValue={(value: string) => ((parseInt(value)-50)*2).toFixed()+'%'}
            percent={(props.data.motorLeft+100)/200}
            animate={false} 
            />
        </Gauge>
        <div className="m-10 min-w-fit">
            <Image
                src={battery}
                width={100}
                height={100}
                alt="Battery"
            />
            <h3 className=" text-center">{props.data.batteryStatus.toFixed() + "%"}</h3>
        </div>
        <Gauge title="Motor Right">
            <GaugeChart id="motor-left" 
            nrOfLevels={30}
            formatTextValue={(value: string) => ((parseInt(value)-50)*2).toFixed()+'%'}
            percent={(props.data.motorRight+100)/200} 
            animate={false}
            />
        </Gauge>
        </div>
        </div>);
}

export default CarDetails;