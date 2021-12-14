import React, { useState } from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { Button, Card, CardBody, Col, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import ConfirmModal from './ConfirmComponent';
import AssistanceForm from './PassAssistanceForm';

function Assistance(props) {
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
    const [employeeSelected, setEmployeeSelected] = useState({});
    const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);

    const toggleModalConfirm = () => { setIsOpenModalConfirm(!isOpenModalConfirm); };
    const toggleModalEdit = () => { setIsOpenModalEdit(!isOpenModalEdit); };

    var listEmployees = "";

    if (props.employees.employees.length !== 0) {
        listEmployees = props.employees.employees.map(employee => {
            return (
                <div key={employee.idPassemployee}>
                    <Row className="mt-3 mt-md-0 mb-md-3">
                        <div className="col-3">
                            {employee.idEmployeeNumber}
                        </div>
                        <div className="col-2">
                            {employee.schedule}
                        </div>
                        <div className="col-3">
                            {employee.date}
                        </div>
                        <div className="col-2">
                            {employee.hour}
                        </div>
                        <div className="col-1">
                            <Button type="button" color="danger" onClick={() => { setEmployeeSelected(employee); toggleModalConfirm(); }}><span className="fa fa-trash"></span></Button>
                        </div>
                        <div className="col-1">
                            <Button type="button" color="warning" onClick={() => { setEmployeeSelected(employee); toggleModalEdit(); }}><span className="fa fa-pencil"></span></Button>
                        </div>
                    </Row>
                    <hr />
                </div>
            );
        });
    } else
        listEmployees = (<h4 style={{ color: 'gray', fontWeight: 'bold' }}>Employees Not Found</h4>);

    return (
        <div className="container mt-2 mt-md-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12">
                            <AssistanceForm postPassEmployee={props.postPassEmployee} />
                        </div>
                        <div className="col-12 mt-2 mt-md-5">
                            <FetchEmployeeForm fetchPassEmployee={props.fetchPassEmployee}></FetchEmployeeForm>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <Row className="mt-3 mt-md-0 mb-md-3">
                        <div className="col-3 h5">Employee</div>
                        <div className="col-2 h5">Schedule</div>
                        <div className="col-3 h5">Date</div>
                        <div className="col-2 h5">Hour</div>
                        <div className="col-2"></div>
                    </Row>
                    <hr />
                    {listEmployees}
                </div>
            </div>
            <ModalEdit editPassEmployees={props.editPassEmployees} isOpenModalEdit={isOpenModalEdit}
                toggleModalEdit={toggleModalEdit} employeeSelected={employeeSelected}></ModalEdit>
            <ConfirmModal isOpenModalConfirm={isOpenModalConfirm} toggleModalConfirm={toggleModalConfirm}
                message={"Are you sure you want to delete the employee?"}
                accept={() => { props.deletePassEmployees(employeeSelected); toggleModalConfirm(); }}
                cancel={toggleModalConfirm}></ConfirmModal>
        </div>
    );
}

function FetchEmployeeForm(props) {
    const handleSubmit = (values) => {
        props.fetchPassEmployee(values);
    };
    return (
        <>
            <h4 style={{ color: 'gray' }}>Fetch Employee</h4>
            <Card body outline color="info">
                <CardBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <Row className="form-group align-items-center">
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="idEmployeeNumber"> Employee Number: </Label>
                                    <Control.text model=".idEmployeeNumber" id="idEmployeeNumber"
                                        placeholder="Employee Number"
                                        className="form-control"
                                    ></Control.text>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="schedule"> Schedule: </Label>
                                    <Control.select model=".schedule" id="schedule"
                                        className="form-control"
                                    >
                                        <option value="all" defaultValue="selected">All</option>
                                        <option value="entry">Entry</option>
                                        <option value="mealtime">Mealtime</option>
                                        <option value="exit">Exit</option>
                                    </Control.select>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="form-group align-items-center">
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="date"> Date: </Label>
                                    <Control model=".date"
                                        id="date"
                                        className="form-control"
                                        required
                                        type="date"
                                    ></Control>
                                </FormGroup>
                            </Col>
                            <Col md={6} className="align-self-center">
                                <Button type="submit" color="primary">Fetch</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </CardBody>
            </Card>
        </>
    );
}

function ModalEdit(props) {
    const handleSubmitEdit = (values) => {
        props.editPassEmployees(props.employeeSelected, values);
    };
    return (
        <Modal isOpen={props.isOpenModalEdit} toggle={props.toggleModalEdit}>
            <ModalHeader toggle={props.toggleModalEdit}>Edit Employee!</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => handleSubmitEdit(values)}>
                    <FormGroup>
                        <Label htmlFor="idEmployeeNumber"> Employee Number: </Label>
                        <Control.text model=".idEmployeeNumber" id="idEmployeeNumber"
                            placeholder="Employee Number"
                            className="form-control"
                            disabled={{ valid: true }}
                            defaultValue={props.employeeSelected.idEmployeeNumber}
                        ></Control.text>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="schedule"> Schedule: </Label>
                        <Control.select model=".schedule" id="schedule"
                            className="form-control"
                            defaultValue={props.employeeSelected.schedule}
                        >
                            <option value="entry" defaultValue="selected">Entry</option>
                            <option value="mealtime">Mealtime</option>
                            <option value="exit">Exit</option>
                        </Control.select>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="date"> Date: </Label>
                        <Control model=".date"
                            id="date"
                            className="form-control"
                            defaultValue={props.employeeSelected.date}
                            type="date"
                        ></Control>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hour"> Hour: </Label>
                        <Control model=".hour"
                            id="hour"
                            className="form-control"
                            defaultValue={props.employeeSelected.hour}
                            component={propsComponent => (<Input
                                type="time"
                                {...propsComponent}
                            />)}
                        ></Control>
                    </FormGroup>
                    <Button type="submit" color="primary">Edit</Button>
                </LocalForm>
            </ModalBody>
        </Modal>
    );
}

export default Assistance;