import {useEffect} from "react";

type Parts = {
    name: string;
    code: string;
    ordered: number;
    warehouse: number;
    price: number;
    count: number;
    needForOrders: number;
};

type SinglePartProps = {
    part: Parts;
    index: number;
};

const SinglePart: React.FC<SinglePartProps> = ({ part, index })=> {

    useEffect(()=>{
        console.log(index)
    },[])
    return (
        <div className={index % 2 === 1 ? "bg-secondary d-flex" : 'bg-primary d-flex' }>
            <div className="col-2">{part.name}</div>
            <div className="col-2">{part.code}</div>
            <div className="col-1">{part.warehouse}</div>
            <div className="col-1">{part.ordered}</div>
            <div className="col-1">{part.price}</div>
            <div className="col-1">2332</div>
            <div className="col-1">3232</div>
            <div className="col-1">222</div>
            <div className="col-1">2222</div>
            <div className="col-1">111</div>
        </div>
    );
};

export default SinglePart;