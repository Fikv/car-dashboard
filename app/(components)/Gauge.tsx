import { ReactNode } from "react";

interface Props{
    title: string,
    children: ReactNode
}

const Gauge: React.FC<Props> = (props) => {
    return (
        <div className="m-10">
        {props.children}
        <h3 className=" text-center">{props.title}</h3>
        </div>);

}
export default Gauge;