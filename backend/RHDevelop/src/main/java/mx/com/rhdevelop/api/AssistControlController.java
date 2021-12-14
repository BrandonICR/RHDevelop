package mx.com.rhdevelop.api;

import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import mx.com.rhdevelop.common.Enpoints;
import mx.com.rhdevelop.common.exceptions.custom.AssistanceNotFoundException;
import mx.com.rhdevelop.common.exceptions.custom.EmployeeNotFoundException;
import mx.com.rhdevelop.common.exceptions.custom.InternalServerException;
import mx.com.rhdevelop.persistence.model.DatAssistance;
import mx.com.rhdevelop.persistence.model.DatEmployee;
import mx.com.rhdevelop.service.AssistanceService;
import mx.com.rhdevelop.service.EmployeeService;

/**
 *
 * @author Brandon Israel Camacho Reyes
 */
@RestController(value = Enpoints.CONTROLLER_ASSIST_CONTROL)
@Slf4j
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class AssistControlController {

    @Autowired
    private AssistanceService assistanceService;

    @Autowired
    private EmployeeService employeeService;

    @GetMapping(Enpoints.ENDPOINT_ASSISTANCE)
    public List<DatAssistance> findPassEmployee(@RequestParam Map<String, String> assistance) {
        log.info("Inicio de procesamiento findPassEmployee");
        List<DatAssistance> assistanceList = assistanceService.findAssistances(assistance.getOrDefault("idEmployeeNumber", ""),
                assistance.getOrDefault("schedule", ""), assistance.getOrDefault("date", ""));
        if (assistanceList.isEmpty())
            throw new EmployeeNotFoundException("Empleado con datos con los valores de busqueda no encontrado");
        log.info("Retornando respuesta exitosa de findPassEmployee");
        return assistanceList;
    }

    @PostMapping(Enpoints.ENDPOINT_ASSISTANCE)
    public DatAssistance createPassAssistance(@RequestBody DatAssistance assistance) {
        log.info("Inicio de procesamiento createPassAssistance");
        DatAssistance newAssistance = assistanceService.saveAssistance(assistance);
        if (Objects.isNull(newAssistance))
            throw new InternalServerException("Error al crear la asistencia");
        log.info("Retornando respuesta exitosa de createPassAssistance");
        return newAssistance;
    }

    @PutMapping(Enpoints.ENDPOINT_ASSISTANCE)
    public DatAssistance updatePassAssistance(@RequestBody DatAssistance assistance) {
        log.info("Inicio de procesamiento updatePassAssistance");
        DatAssistance newAssistance = assistanceService.saveAssistance(assistance);
        if (Objects.isNull(newAssistance))
            throw new AssistanceNotFoundException(String.format("Asistencia con id %d no encontrada", assistance.getIdPassemployee()));
        log.info("Retornando respuesta exitosa de updatePassAssistance");
        return newAssistance;
    }

    @DeleteMapping(Enpoints.ENDPOINT_ASSISTANCE)
    public DatAssistance deletePassAssistance(@RequestParam("id") Long id) {
        log.info("Inicio de procesamiento deletePassAssistance");
        DatAssistance newAssistance = assistanceService.deleteAssistance(id);
        log.info("Retornando respuesta exitosa de deletePassAssistance");
        return newAssistance;
    }

    @PostMapping(Enpoints.ENDPOINT_EMPLOYEE)
    public DatEmployee createEmployee(@RequestBody DatEmployee employee) {
        log.info("Inicio de procesamiento createEmployee");
        DatEmployee newEmployee = employeeService.saveEmployee(employee);
        if (Objects.isNull(newEmployee))
            throw new InternalServerException("Error al crear el empleado");
        log.info("Retornando respuesta exitosa de createEmployee");
        return newEmployee;
    }

}
