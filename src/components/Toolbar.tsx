import {ReactElement} from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const Toolbar = (): ReactElement => {
    const nav = useNavigate()

    return (
       <div className="d-flex justify-content-around">

           <div className="d-flex gap-3">
               <Button onClick={()=>{nav("/aboutUs")}}>About Us</Button>
               <Button onClick={()=>{nav("/warehouse")}}>Warehouse</Button>
               <Button onClick={()=>{nav("/repair")}}>Repair Shock Orders</Button>
               <Button onClick={()=>{nav("/orders")}}>New Shock Orders</Button>
           </div>
           <div>
               <Button onClick={()=>{nav("/repair")}}>Login</Button>
           </div>
       </div>
    );
};

export default Toolbar;