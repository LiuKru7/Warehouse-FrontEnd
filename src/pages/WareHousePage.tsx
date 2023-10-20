import WareHouseSideBar from "../components/warehouseComponenets/WareHouseSideBar.tsx";
import AllParts from "../components/warehouseComponenets/AllParts.tsx";
import { useState } from "react";
import AddParts from "../components/warehouseComponenets/AddParts.tsx";

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
            </div>
        </div>
    );
};

export default WareHousePage;
