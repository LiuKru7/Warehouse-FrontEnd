import {Button} from "react-bootstrap";


const RepairOrdersSideBar = () => {
    return (
        <div className="d-flex flex-column gap-3 mt-5">
            <Button>Add New</Button>
            <Button>New</Button>
            <Button>Already Paid</Button>
            <Button>History</Button>
        </div>
    );
};

export default RepairOrdersSideBar;