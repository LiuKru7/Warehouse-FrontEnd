import WareHouseSideBar from "../components/warehouseComponenets/WareHouseSideBar.tsx";
import AllParts from "../components/warehouseComponenets/AllParts.tsx";
import { useState } from "react";
import AddParts from "../components/warehouseComponenets/AddParts.tsx";
import ExpiredParts from "../components/warehouseComponenets/ExpiredParts.tsx";

const WareHousePage = () => {
    const [show, setShow] = useState<"All" | "Expired" | "Add" | "Take" | null>(null);
    return (
        <div className="d-flex">
            <div className="d-flex">
                <WareHouseSideBar setShow={setShow}></WareHouseSideBar>
            </div>
            <div className="d-flex flex-grow-1">
                {show === "All" && <AllParts></AllParts>}
                {show === "Add" && <AddParts></AddParts>}
                {show === "Expired" && <ExpiredParts></ExpiredParts>}
            </div>
        </div>
    );
};

export default WareHousePage;
