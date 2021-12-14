package mx.com.rhdevelop.persistence.repository;

import org.springframework.data.repository.CrudRepository;

import mx.com.rhdevelop.persistence.model.DatAssistance;

/**
 *
 * @author Brandon Israel Camacho Reyes
 */
public interface IAssistanceRepository extends CrudRepository<DatAssistance, Long>{
    
}
