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
    setTakeShow: any
};

const TakePartModal : React.FC<SinglePartProps>  = ({setTakeShow, part}) => {
    const takeRef = useRef<HTMLInputElement>(null)

    function takeFunk () {
        setTakeShow(0);

        // Convert the value from the ref to a number
        const takenQuantity = takeRef.current ? Number(takeRef.current.value) : 0;

        const partForRef = {
            code: part.code,
            quantity: takenQuantity
        };
        console.log(partForRef);

        httpRequest.postRequest("parts/takePartQuantity", partForRef).then(data => {
            if(data.data.err) {
                return console.log(data.data.message);
            } else {
                console.log(data.data);
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
            <Button onClick={takeFunk}>Take</Button>
        </div>
    );
};

export default TakePartModal;