package mx.com.rhdevelop.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mx.com.rhdevelop.persistence.model.DatAssistance;
import mx.com.rhdevelop.persistence.repository.IAssistanceRepository;
import mx.com.rhdevelop.service.AssistanceService;

/**
 *
 * @author Brandon Israel Camacho Reyes
 */
@Service
public class AssistanceServiceImpl implements AssistanceService{
    
    @Autowired
    private IAssistanceRepository assistanceDao;

    @Override
    @Transactional(readOnly = true)
    public List<DatAssistance> listAssistance() {
        return (List<DatAssistance>)assistanceDao.findAll();
    }

    @Override
    @Transactional
    public DatAssistance saveAssistance(DatAssistance assistance) {
        Long idAssis = assistanceDao.save(assistance).getIdPassemployee();
        return assistanceDao.findById(idAssis).orElse(null);
    }

    @Override
    @Transactional
    public DatAssistance deleteAssistance(Long id) {
        assistanceDao.deleteById(id);
        return assistanceDao.findById(id).orElse(null);
    }
    
    @Override
    @Transactional(readOnly = true)
    public List<DatAssistance> findAssistances(String idEmployeeNumber, String schedule, String date) {
        List<DatAssistance> assistanceList = new ArrayList<>();
        assistanceDao.findAll().forEach(assistanceObj -> {
            if((idEmployeeNumber.isBlank() || idEmployeeNumber.equals(assistanceObj.getIdEmployeeNumber()))
                    && (schedule.equals("all") || schedule.equals(assistanceObj.getSchedule()))
                    && date.equals(assistanceObj.getDate()))
                assistanceList.add(assistanceObj);
        });
        return assistanceList;
    }
    
}
