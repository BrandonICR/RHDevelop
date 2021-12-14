import * as ActionTypes from './ActionTypes';
import currentDate from '../shared/info';

export const PassEmployees = (action, state = {
    date:currentDate,
    employees: []
}) => {
    switch (action.type) {
        case ActionTypes.ADD_PASSEMPLOYEES:
            return { ...state, employees: action.payload.employees, date: action.payload.date };
        case ActionTypes.ADD_PASSEMPLOYEE:
            return { ...state, employees: ((action.payload.date !== state.date)?state.employees:state.employees.concat(action.payload)) };
        case ActionTypes.DELETE_PASSEMPLOYEES:
            const newState = state.employees.filter(employee => !equalsEmployees(employee, action.payload));
            return { ...state, employees: newState };
        case ActionTypes.EDIT_PASSEMPLOYEES:
            var nState = [];
            state.employees.forEach(employee => {
                if (equalsEmployees(employee, action.payload.oldEmployee))
                    nState.push(action.payload.newEmployee);
                else
                    nState.push(employee);
            });
            return { ...state, employees: nState };
        default:
            return state;
    }
};

function equalsEmployees(employee, newEmployee) {
    return (employee.idEmployeeNumber === newEmployee.idEmployeeNumber &&
        employee.date === newEmployee.date && employee.schedule === newEmployee.schedule && employee.hour === newEmployee.hour);
}