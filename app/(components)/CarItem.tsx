import Image from "@/node_modules/next/image";

interface Props{
    icon:any
    id: number
    onClick: any
    selected: boolean
}

const CarItem: React.FC<Props> = (props) => {
    return (
        <div className={props.selected?"bg-slate-700 bg-opacity-70 rounded": undefined}>
        <label className=" cursor-pointer label p-10">
            <Image
                onClick={props.onClick}
                src={props.icon}
                width={100}
                height={100}
                alt="Car"
            />
            <input type="radio" name="cars" className="hidden" checked  readOnly/>
        </label>
        <h3 className=" text-center">{props.id}</h3>
        </div>);
}

export default CarItem