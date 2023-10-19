import {Button} from "react-bootstrap";
import * as React from "react";

type setShowProps = {
    setShow: (value: "All" | "Expired" | "Add" | "Take" | null) => void;
}

const WareHouseSideBar: React.FC<setShowProps> = ({setShow}) => {
    return (
            <div className="d-flex flex-column gap-3 mt-5">
                <Button onClick={()=>setShow("All")}>All Parts</Button>
                <Button onClick={()=>setShow("Expired")}>Expired Parts</Button>
                <Button onClick={()=>setShow("Add")} className="bg-success border-success">Add Parts</Button>
                <Button onClick={()=>setShow("Take")} className="bg-danger border-danger">Take Parts</Button>
            </div>
    );
};

export default WareHouseSideBar;