package mx.com.rhdevelop.common.exceptions.custom;

public class InternalServerException extends RuntimeException {
    
    private static final long serialVersionUID = 8925303792177335241L;
  
    public InternalServerException(String message) {
        super(message);
    }
  
  }