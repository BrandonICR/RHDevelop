import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Assistance from './AssistanceComponent';
import AddEmployee from './AddEmployeeComponent';
import { actions } from 'react-redux-form';
import { postAddEmployee, postPassEmployee, fetchPassEmployee, deletePassEmployees, editPassEmployees } from '../redux/ActionCreators';
import api_data_passEmployee from '../shared/initialFetchEmployee';
import '../App.css';

const mapStateToProps = state => {
    return {
        employees: state.employees
    };
};

const mapDispatchToProps = (dispatch) => ({
    postPassEmployee: (employee) => { dispatch(postPassEmployee(employee)) },
    fetchPassEmployee: (dataEmployee) => { dispatch(fetchPassEmployee(dataEmployee)) },
    resetAddEmployeeForm: () => { dispatch(actions.reset("addEmployee")) },
    postAddEmployee: (employee) => { dispatch(postAddEmployee(employee)) },
    deletePassEmployees: (employee) => { dispatch(deletePassEmployees(employee)) },
    editPassEmployees: (employee, editEmployee) => { dispatch(editPassEmployees(employee, editEmployee)) }
});

class Main extends Component {

    componentDidMount() {
        this.props.fetchPassEmployee(api_data_passEmployee);
    }

    render() {

        const assistance = () => {
            return (<Assistance employees={this.props.employees}
                fetchPassEmployee={this.props.fetchPassEmployee}
                postPassEmployee={this.props.postPassEmployee}
                deletePassEmployees={this.props.deletePassEmployees}
                editPassEmployees={this.props.editPassEmployees}
            />);
        };

        const addEmployee = () => {
            return (<AddEmployee postAddEmployee={this.props.postAddEmployee}
                resetAddEmployeeForm={this.props.resetAddEmployeeForm} />
            );
        };

        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/assistance" component={assistance} />
                    <Route exact path="/addEmployee" component={addEmployee} />
                    <Redirect exact to="/assistance" />
                </Switch>
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
