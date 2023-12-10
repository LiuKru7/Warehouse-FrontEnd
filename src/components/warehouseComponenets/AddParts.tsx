import {InputGroup, Form, Button} from "react-bootstrap";
import {useRef, useState} from "react";
import {httpRequest} from "../../plugins/httpRequest.ts";

const AddParts = () => {

    const nameRef = useRef<HTMLInputElement>(null)
    const codeRef = useRef<HTMLInputElement>(null)
    const quantityRef = useRef<HTMLInputElement>(null)
    const [place, setPlace] = useState('w1');

    function addParts () {
        const partForRef = {
            name: nameRef.current?.value,
            code: codeRef.current?.value,
            quantity: quantityRef.current?.value,
            place: place
        }
        console.log(partForRef)
        httpRequest.postRequest("parts/add", partForRef).then(data => {
            if(data.data.err) {
                return console.log(data.data.message);
            } else {
                console.log("Part added successfully!");
                nameRef.current!.value = ""
                codeRef.current!.value = ""
                quantityRef.current!.value = ""
            }
        }).catch(error => {
            console.log("Error:", error.message);
        });
    }

    return (
        <div className="d-flex flex-column p-5">
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Part name
                </InputGroup.Text>
                <Form.Control
                    ref={nameRef}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Part Code
                </InputGroup.Text>
                <Form.Control
                    ref={codeRef}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Place
                </InputGroup.Text>
                <Form.Select
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                >
                    <option value="w1">w1</option>
                    <option value="w2">w2</option>
                    <option value="w3">w3</option>
                </Form.Select>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Quantity
                </InputGroup.Text>
                <Form.Control
                    type="number"
                    ref={quantityRef}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <Button onClick={addParts}>ADD</Button>
        </div>
    );
};

export default AddParts;