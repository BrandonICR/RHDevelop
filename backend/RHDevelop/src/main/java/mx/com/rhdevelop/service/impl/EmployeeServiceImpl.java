/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.com.rhdevelop.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mx.com.rhdevelop.persistence.model.DatEmployee;
import mx.com.rhdevelop.persistence.repository.IEmployeeRepository;
import mx.com.rhdevelop.service.EmployeeService;

/**
 *
 * @author Brandon Israel Camacho Reyes
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {
    
    @Autowired
    private IEmployeeRepository employeeDao;

    @Override
    @Transactional(readOnly = true)
    public List<DatEmployee> listEmployee() {
        return (List<DatEmployee>)employeeDao.findAll();
    }

    @Override
    @Transactional
    public DatEmployee saveEmployee(DatEmployee employee) {
        employeeDao.save(employee);
        return employee;
    }

    @Override
    @Transactional
    public void deleteEmployee(DatEmployee employee) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    @Transactional(readOnly = true)
    public DatEmployee findEmployee(DatEmployee employee) {
        throw new UnsupportedOperationException("Not supported yet.");
    }
    
}
