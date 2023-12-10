import {Button, Form, InputGroup} from "react-bootstrap";
import {useRef} from "react";
import {httpRequest} from "../../plugins/httpRequest.ts";

type Parts = {
    name: string;
    code: string;
    place: string;
    quantity: number;
    qrCode: string;
};
type SinglePartProps = {
    part: Parts;
    setAddShow: any
};

const AddPartModal : React.FC<SinglePartProps>  = ({setAddShow, part}) => {

    const takeRef = useRef<HTMLInputElement>(null)


    function AddFunk () {
        setAddShow(0)
        const partForRef = {
            code: part.code,
            quantity: takeRef.current?.value
        }
        httpRequest.postRequest("parts/addPartQuantity", partForRef).then(data => {
            if(data.data.err) {
                return console.log(data.data.message);
            } else {
                console.log(data.data)
            }
        }).catch(error => {
            console.log("Error:", error.message);
        });
    }



    return (
        <div className="card position-absolute takePosition p-3 z-3">
            <p>Part name: {part.name}</p>
            <p>Part code: {part.code}</p>
            <p>Part quantity: {part.quantity}</p>

            <InputGroup>
                <InputGroup.Text id="inputGroup-sizing-default">
                    Quantity
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    ref={takeRef}
                    defaultValue="1"
                />
            </InputGroup>
            <Button onClick={AddFunk}>Add</Button>
        </div>
    );
};

export default AddPartModal;