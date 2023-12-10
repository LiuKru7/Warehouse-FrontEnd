import SinglePart from "./SinglePart.tsx";
import {useEffect, useState} from "react";
import {httpRequest} from "../../plugins/httpRequest.ts";
import {Form, InputGroup} from "react-bootstrap";

const ExpiredParts = () => {
    type Part = {
        name: string,
        code: string,
        qrCode: string,
        place: string,
        quantity: number
    }
    const [allParts, setAllPart] = useState<Part[]>([]);
    const [allParts2, setAllParts2] = useState<Part[]>([]);


    useEffect(() => {
        httpRequest.getRequest("parts/expired")
            .then(data => {
                setAllPart(data.data.parts);

                setAllParts2(data.data.parts)
            })
            .catch(error => {
                console.error("Error fetching all parts:", error.message);
            });
    }, []);

    function searchParts(data: string) {
        const filteredParts = allParts2.filter(part => part.name.toLowerCase().startsWith(data.toLowerCase()));
        setAllPart(filteredParts)
    }


    function sortPlace () {
        const sort = [...allParts].sort((a, b) => {
            if (a.place < b.place) return -1;
            if (a.place > b.place) return 1;
            return 0;
        });
        setAllPart(sort)
    }

    function sortCode () {
        const sort = [...allParts].sort((a, b) => {
            if (a.code < b.code) return -1;
            if (a.code > b.code) return 1;
            return 0;
        });
        setAllPart(sort)
    }


    function sortPartName () {
        const sort = [...allParts].sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
        setAllPart(sort)
    }


    function sortByQuantity  () {
        const sort = [...allParts].sort((a, b) => a.quantity - b.quantity);
        setAllPart(sort)
        console.log("sss")
    }




    return (
        <div className="m-3 bg-secondary w-100 ">
            <div className="grid d-flex justify-content-center border-bottom border-1 border-black align-items-center">
                <div className="col-2 fw-bold d-flex px-2" onClick={sortPartName}>Part name</div>
                <div className="col-2 fw-bold d-flex " onClick={sortCode} >Part code</div>
                <div className="col-1 fw-bold " onClick={sortPlace} >Place</div>
                <div className="col-1 fw-bold " onClick={sortByQuantity} >Quantify</div>
                <div className="col-1 fw-bold ">Price</div>
                <div className="col-1 fw-bold "></div>
                <div className="col-4 d-flex align-items-center">


                    <InputGroup>
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Search
                        </InputGroup.Text>
                        <Form.Control
                            onChange={(e) => searchParts(e.target.value)}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                </div>

            </div>
            {allParts && allParts.map((x,i) => (
                <SinglePart key={i} index={i} part={x} ></SinglePart>
            ))}
        </div>
    );
};

export default ExpiredParts;
