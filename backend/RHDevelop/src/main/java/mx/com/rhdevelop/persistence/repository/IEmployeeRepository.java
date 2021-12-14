package mx.com.rhdevelop.persistence.repository;

import org.springframework.data.repository.CrudRepository;

import mx.com.rhdevelop.persistence.model.DatEmployee;

/**
 *
 * @author Brandon Israel Camacho Reyes
 */
public interface IEmployeeRepository extends CrudRepository<DatEmployee, String> {
    
}
