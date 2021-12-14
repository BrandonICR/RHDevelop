import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import { getDate } from '../functions/basicsFunctions';
import { endpoint_employee, endpoint_assistance } from '../shared/baseURL';
import currentDate from '../shared/info';

export const postAddEmployee = (employee) => (_) => {
    const newEmployee = { ...employee };
    return axios.post(endpoint_employee, newEmployee)
        .then(
            response => {
                if (response.status === 200) {
                    alert("Employee added successfully");
                    return response.data;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => {
                throw new Error(error.message);
            }
        ).catch(
            error => {
                alert("Error adding employee\nError: " + error.message);
            }
        );
};

export const addPassEmployee = (employee) => ({
    type: ActionTypes.ADD_PASSEMPLOYEE,
    payload: employee
});

export const postPassEmployee = (employee) => (dispatch) => {
    const newPassEmployee = { ...employee };
    if (newPassEmployee.schedule === undefined)
        newPassEmployee.schedule = "entry";
    [newPassEmployee.date, newPassEmployee.hour] = getDate();
    newPassEmployee.date = currentDate;
    newPassEmployee.idPassemployee = 0;
    return axios.post(endpoint_assistance, newPassEmployee)
        .then(
            response => {
                if (response.status === 200) {
                    alert("Checked Assistance");
                    return dispatch(addPassEmployee(response.data));
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, _ => {
                alert("The employee don't exist...");
            }
        ).catch(
            error => {
                alert("Error adding employee\nError: " + error.message);
            }
        );
};

export const addPassEmployees = (employees) => ({
    type: ActionTypes.ADD_PASSEMPLOYEES,
    payload: employees
});

export const fetchPassEmployee = (dataEmployee) => (dispatch) => {
    var characterEmployee = { ...dataEmployee };

    if (characterEmployee.idEmployeeNumber === undefined || characterEmployee.idEmployeeNumber === null)
        characterEmployee.idEmployeeNumber = "";

    if (characterEmployee.schedule === undefined || characterEmployee.schedule === null)
        characterEmployee.schedule = "all";

    return axios.get(endpoint_assistance, {
        params: characterEmployee
    })
        .then(
            response => {
                if (response.status === 200) {
                    return dispatch(addPassEmployees({ employees: response.data, date: characterEmployee.date }));
                } else {
                    var errormsg = new Error("Error " + response.status + ": " + response.statusText);
                    errormsg.response = response;
                    throw errormsg;
                }
            }, _ => {
                dispatch(addPassEmployees({ employees: [], date: characterEmployee.date }));
            }
        ).catch(
            error => {
                alert("Fetch Error...\nError: " + error.message);
            }
        );
};

export const deletePassEmployee = (employe) => ({
    type: ActionTypes.DELETE_PASSEMPLOYEES,
    payload: employe
});

export const deletePassEmployees = (employee) => (dispatch) => {
    const oldEmployee = { ...employee };
    return axios.delete(endpoint_assistance, {
        params: {
            id: oldEmployee.idPassemployee
        }
    })
        .then(
            response => {
                if (response.status === 200) {
                    return dispatch(deletePassEmployee(oldEmployee));
                } else {
                    var errormsg = new Error("Error " + response.status + ": " + response.statusText);
                    errormsg.response = response;
                    throw errormsg;
                }
            }, _ => {
                alert("Could not be removed");
            }
        ).catch(
            error => {
                alert("Fetch Error...\nError: " + error.message);
            }
        );
};

export const editPassEmployee = (employee) => ({
    type: ActionTypes.EDIT_PASSEMPLOYEES,
    payload: employee
});

export const editPassEmployees = (employee, editEmployee) => (dispatch) => {
    const oldEmployee = { ...employee };
    const newEmployee = { ...editEmployee };
    newEmployee.idPassemployee = oldEmployee.idPassemployee;
    return axios.put(endpoint_assistance, newEmployee)
        .then(
            response => {
                if (response.status === 200) {
                    dispatch(editPassEmployee({ oldEmployee: oldEmployee, newEmployee: response.data }))
                } else {
                    var errormsg = new Error("Error " + response.status + ": " + response.statusText);
                    errormsg.response = response;
                    throw errormsg;
                }
            }, _ => {
                alert("Could not be removed");
            }
        ).catch(
            error => {
                alert("Fetch Error...\nError: " + error.message);
            }
        );
};
