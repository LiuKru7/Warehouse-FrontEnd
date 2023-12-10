import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import TakePartModal from "./TakePartModal.tsx";
import AddPartModal from "./AddPartModal.tsx";
import {useNavigate} from "react-router-dom";
import { useStore } from "../../store.tsx"; // Path to your store file



type Parts = {
    name: string;
    code: string;
    place: string;
    quantity: number;
    qrCode: string;
};

type SinglePartProps = {
    part: Parts;
    index: number;
};


const SinglePart: React.FC<SinglePartProps> = ({ part, index }) => {
    const setPartCode = useStore((state) => state.setPartCode);


    const [takeShow, setTakeShow] = useState(0)
    const [addShow, setAddShow] = useState(0)
    const nav = useNavigate()
    useEffect(()=>{
        console.log(index)
    },[])

    const handleQRCodeClick = () => {
        setPartCode(part.code);  // Update the store with part.code
        nav("/singlePart/" + part.code);
    }



    return (

        <div className={index % 2 === 1 ? "bg-secondary d-flex py-1 position-relative" : 'bg-primary d-flex py-1 position-relative' }>
            <div className="col-2 px-2 d-flex align-items-center">{part.name}</div>
            <div className="col-2 d-flex align-items-center">{part.code}</div>
            <div className="col-1 d-flex align-items-center">{part.place}</div>
            <div className="col-1 d-flex align-items-center">{part.quantity}</div>
            <div className="col-1 d-flex align-items-center">100$</div>
            <div className="col-1 d-flex align-items-center position-relative">
                {part.qrCode && <div className="cursor-pointer" onClick={handleQRCodeClick}>INFO</div>}
            </div>
            <div className="col-1 d-flex align-items-center">

            </div>
            <div className="col-1 d-flex align-items-center position-relative"></div>
            <div className="col-1 d-flex align-items-center">{part.quantity>0 && <Button onClick={()=> {setTakeShow(1)}} className="bg-success p-1 px-3">Take</Button>}
            </div>


            <div className="col-1 d-flex align-items-center"><Button className="bg-success p-1 px-3" onClick={()=>setAddShow(1)}>Add</Button></div>
            {takeShow===1 && <TakePartModal setTakeShow={setTakeShow} part={part}></TakePartModal> }
            {addShow===1 && <AddPartModal part={part} setAddShow={setAddShow}></AddPartModal> }
        </div>
    );
};

export default SinglePart;