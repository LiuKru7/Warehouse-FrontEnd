import SinglePart from "./SinglePart.tsx";
import {useEffect, useState} from "react";
import {httpRequest} from "../../plugins/httpRequest.ts";

type Parts = {
    name: string;
    code: string;
    ordered: number;
    warehouse: number;
    price: number;
    count: number;
    needForOrders: number;
};

const AllParts = () => {
    const [allPart, setAllPart] = useState()


    useEffect(() => {
        httpRequest.getRequest("allParts")
            .then(data => {
                setAllPart(data.data);
            })
            .catch(error => {
                console.error("Error fetching all parts:", error.message);
            });
    }, []);

    console.log(allPart)

    const allParts: Parts[] = [{
        name: "dalis",
        ordered: 3,
        warehouse: 2,
        price: 222,
        count: 3,
        code: "342423rrfsdgfsda",
        needForOrders: 33,
    },{
        name: "dalis",
        ordered: 3,
        warehouse: 2,
        price: 222,
        count: 3,
        code: "342423rrfsdgfsda",
        needForOrders: 33,
    },{
        name: "dalis",
        ordered: 3,
        warehouse: 2,
        price: 222,
        count: 3,
        code: "342423rrfsdgfsda",
        needForOrders: 33,
    },
        {
            name: "dalis",
            ordered: 3,
            warehouse: 2,
            price: 222,
            count: 3,
            code: "342423rrfsdgfsda",
            needForOrders: 33,
        },
        {
            name: "dalis",
            ordered: 3,
            warehouse: 2,
            price: 222,
            count: 3,
            code: "342423rrfsdgfsda",
            needForOrders: 33,
        },
    ];

    return (
        <div className="m-3 bg-secondary w-100">
            <div className="grid d-flex justify-content-center">
                <div className="col-2">Pavadinimas</div>
                <div className="col-2">Dalies kodas</div>
                <div className="col-1">Likutis sandelyje</div>
                <div className="col-1">Uzsakyta</div>
                <div className="col-1">Kaina</div>
                <div className="col-1">Pilnas kiekis</div>
                <div className="col-1">Reikiamas kiekis</div>
                <div className="col-1">Kaina</div>
                <div className="col-1">Pilnas kiekis</div>
                <div className="col-1">Reikiamas kiekis</div>
            </div>
            {allParts.map((x,i) => (
                <SinglePart key={i} index={i} part={x} ></SinglePart>
            ))}
        </div>
    );
};

export default AllParts;
