import React from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Button, Col, FormGroup, Label, Row } from 'reactstrap';

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
const equalLength = (len) => (val) => !(val) || (val.length === len);

function AssistanceForm(props) {

    const handleSubmit = (values) => {
        props.postPassEmployee(values);
    };

    return (
        <>
            <h4 style={{ color: 'gray' }}>Pass Assistance!</h4>
            <LocalForm onSubmit={(values) => handleSubmit(values)}>
                <Row className="form-group position-static">
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor="idEmployeeNumber"> Employee Number: </Label>
                            <Control.text model=".idEmployeeNumber" id="idEmployeeNumber"
                                placeholder="Employee Number"
                                className="form-control"
                                required
                                validators={{
                                    required: required,
                                    isNumber:isNumber,
                                    length: equalLength(10)
                                }}
                            />
                            <Errors model=".idEmployeeNumber" className="text-danger" show="touched"
                                messages={{
                                    isNumber: "Must be a Number",
                                    length: "Length must be 10"
                                }}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor="schedule"> Schedule: </Label>
                            <Control.select model=".schedule" id="idEmployeeNumber"
                                className="form-control"
                            >
                                <option value="entry" defaultValue="selected">Entry</option>
                                <option value="mealtime">Mealtime</option>
                                <option value="exit">Exit</option>
                            </Control.select>
                        </FormGroup>
                    </Col>
                    <Col md={4} className="pt-md-3">
                        <Button type="submit" color="primary">Send</Button>
                    </Col>
                </Row>
            </LocalForm>
        </>
    );
}

export default AssistanceForm;