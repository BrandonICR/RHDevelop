/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.com.rhdevelop.persistence.model;

import java.io.Serializable;
import javax.persistence.*;
import lombok.Data;

/**
 *
 * @author Brandon Israel Camacho Reyes
 */
@Data
@Entity
@Table(name="dat_employee")
public class DatEmployee implements Serializable {
    private static final long serialVersionUID = 1L;
    
    @Id
    @Column(name="\"id_EmployeeNumber\"")
    private String idEmployeeNumber;
    private String name;
    private String lastnamep;
    private String lastnamem;
    private String position;
    private String area;
    private String immediateboss;
}
