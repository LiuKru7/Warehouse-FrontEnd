import OrdersSideBar from "../components/ordersComponents/OrdersSideBar.tsx";
import {useEffect} from "react";
import {httpRequest} from "../plugins/httpRequest.ts";

const OrdersPage = () => {
    useEffect(() => {
        const data = {
            code: "121413513512",
            clientName: "Algimantas",
            clientPhone: "+37064449222",
            type: "moto",
            arrivedDate: new Date(),
            clientComment: "sudas"
        }
        httpRequest.postRequest('shocks/add',data)
            .then(data => {
                console.log(data)
            })
    }, []);

    return (
        <div className="d-flex">
            <OrdersSideBar></OrdersSideBar>
        </div>
    );
};

export default OrdersPage;