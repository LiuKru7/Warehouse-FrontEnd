import {useEffect, useState} from "react";
import {httpRequest} from "../plugins/httpRequest.ts";
import { useStore } from "../store";

type Part = {
    code: string,
    name: string,
    quantity:number,
    place: string,
    qrCode: string
}
type History = {
    info: string,
    quantity: number,
    date: string
}


const SinglePart: React.FC = () => {
    const partCode = useStore((state) => state.partCode);
    const [history, setHistory] = useState<History[]>([]);
    const [part, setPart] = useState<Part | null>(null);
    useEffect(() => {
        httpRequest.getRequest("parts/"+partCode)
            .then(data => {
                setPart(data.data)
            })
        httpRequest.getRequest("parts/history/"+partCode)
            .then(data => {
                setHistory(data.data.history)
            })

    }, [partCode]);

    function formatDate(isoDateStr: string): string {
        const date = new Date(isoDateStr);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        return `${year} - ${month} - ${day} | ${hours}:${minutes}`;
    }



    return  (
        <div className="text-white">

            <div className="d-flex">
                <div>
                    {part && <div className="row fs-4 pt-5">
                        <div className="col-4">Part name: {part.name}</div>
                        <div className="col-4">Part code: {part.code}</div>
                        <div className="col-2">Part quantity: {part.quantity}</div>
                        <div className="col-2">Part place: {part.place}</div>
                    </div>}
                    {history && history.map((x,i)=>
                        <div key={i} className="d-flex row">
                            <div className="col-1">{x.info}</div>
                            <div className="col-1">{x.quantity}</div>
                            <div className="col-5">{formatDate(x.date)}</div>
                        </div>
                    )}
                </div>
                <div>
                    {part && <img src={part.qrCode} alt=""/> }
                </div>
            </div>
        </div>
    );
}
export default SinglePart;
