/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.com.rhdevelop.service;

import java.util.List;

import mx.com.rhdevelop.persistence.model.DatEmployee;

/**
 *
 * @author Brandon Israel Camacho Reyes
 */
public interface EmployeeService {
    public List<DatEmployee> listEmployee();
    public DatEmployee saveEmployee(DatEmployee employee);
    public void deleteEmployee(DatEmployee employee);
    public DatEmployee findEmployee(DatEmployee employee);
}
