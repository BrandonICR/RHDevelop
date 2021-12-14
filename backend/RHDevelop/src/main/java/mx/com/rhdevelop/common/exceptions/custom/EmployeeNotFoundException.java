package mx.com.rhdevelop.common.exceptions.custom;

public class EmployeeNotFoundException extends RuntimeException {
    
  private static final long serialVersionUID = 8925303792177335242L;

  public EmployeeNotFoundException(String message) {
      super(message);
  }

}
