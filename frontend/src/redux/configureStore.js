import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { InitialEmployee } from './forms';
import { PassEmployees } from './employeesReducer';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    return createStore(
        combineReducers({
            employees: PassEmployees,
            ...createForms({
                addEmployee: InitialEmployee
            })
        }),
        applyMiddleware(thunk)
    );
};
