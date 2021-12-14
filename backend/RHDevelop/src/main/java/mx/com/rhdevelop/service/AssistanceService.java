/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.com.rhdevelop.service;

import java.util.List;

import mx.com.rhdevelop.persistence.model.DatAssistance;

/**
 *
 * @author Brandon Israel Camacho Reyes
 */
public interface AssistanceService {
    public List<DatAssistance> listAssistance();
    public DatAssistance saveAssistance(DatAssistance assistance);
    public DatAssistance deleteAssistance(Long id);
    public List<DatAssistance> findAssistances(String idEmployeeNumber, String schedule, String date);
}
