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
@Table(name="dat_assistance")
public class DatAssistance implements Serializable {
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="\"id_passemployee\"")
    private Long idPassemployee;
    private String idEmployeeNumber;
    private String schedule;
    private String date;
    private String hour;
    
}
