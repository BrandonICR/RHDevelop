import React, { useState } from 'react';
import { Form, Control, Errors } from 'react-redux-form';
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Label, Row } from 'reactstrap';
import ConfirmModal from './ConfirmComponent';

const equalLength = (len) => (val) => !(val) || (val.length === len);
const isNumber = (val) => !isNaN(Number(val));

function AddEmployee(props) {
    const [employeeData, setEmployeeData] = useState({});
    const [isOpenModal, setIsOpenModal] = useState(false);

    const toggle = () => { setIsOpenModal(!isOpenModal) };

    return (
        <div className="container mt-2 mt-md-5 p-0">
            <div className="row justify-content-center p-0">
                <div className="col-12 col-md-6 m-0">
                    <img src="/assets/images/employee.jpg" className="img-fluid" alt="Employee" />
                </div>
                <div className="col-12 col-md-6 mt-2 mt-md-0 p-0">
                    <AddEmployeeForm setEmployeeData={setEmployeeData} toggle={toggle}></AddEmployeeForm>
                </div>
            </div>
            <ConfirmModal isOpenModalConfirm={isOpenModal} toggleModalConfirm={toggle}
                message={"Are you sure you want to add the employee?"}
                accept={() => { props.postAddEmployee(employeeData); props.resetAddEmployeeForm(); toggle(); }}
                cancel={toggle}></ConfirmModal>
        </div>
    );
}

function AddEmployeeForm(props) {
    const handleSubmit = (val) => {
        props.setEmployeeData(val);
        props.toggle();
    };
    return (
        <Card body outline color="success">
            <CardHeader tag="h5" className="text-center">¡Add Employee!</CardHeader>
            <CardBody>
                <Form onSubmit={val => handleSubmit(val)}>
                    <Row className="form-group align-items-center">
                        <Label htmlFor="idEmployeeNumber" md={3}>Employee Number:</Label>
                        <Col md={9}>
                            <Control.text model=".idEmployeeNumber" id="idEmployeeNumber" name="idEmployeeNumber"
                                placeholder="Employee Number"
                                className="form-control"
                                required
                                validators={{
                                    isNumber: isNumber,
                                    equalLength: equalLength(10)
                                }}
                            ></Control.text>
                            <Errors model=".idEmployeeNumber" className="text-danger" show="touched"
                                messages={{
                                    isNumber: "Must be a Number. ",
                                    equalLength: "Length must be 10. "
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group align-items-center">
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="name">Name:</Label>
                                <Control.text model=".name" id="name" name="name"
                                    placeholder="Name"
                                    className="form-control"
                                    required
                                ></Control.text>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="lastNameP">Last Name P:</Label>
                                <Control.text model=".lastnamep" id="lastNameP" name="lastnamep"
                                    placeholder="Father's Last Name"
                                    className="form-control"
                                    required
                                ></Control.text>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="lastNameM">Last Name M:</Label>
                                <Control.text model=".lastnamem" id="lastNameM" name="lastnamem"
                                    placeholder="Mother's Last Name"
                                    className="form-control"
                                    required
                                ></Control.text>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="form-group align-items-center">
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="position">Position:</Label>
                                <Control.text model=".position" id="position" name="position"
                                    placeholder="Position"
                                    className="form-control"
                                    required
                                ></Control.text>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="area">Area:</Label>
                                <Control.text model=".area" id="area" name="area"
                                    placeholder="Area"
                                    className="form-control"
                                    required
                                ></Control.text>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="immediateBoss">Immediate Boss:</Label>
                                <Control.text model=".immediateboss" id="immediateBoss" name="immediateboss"
                                    placeholder="Immediate Boss"
                                    className="form-control"
                                    required
                                ></Control.text>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button type="submit" color="primary" >Send</Button>
                </Form>
            </CardBody>
        </Card>
    );
}

export default AddEmployee;