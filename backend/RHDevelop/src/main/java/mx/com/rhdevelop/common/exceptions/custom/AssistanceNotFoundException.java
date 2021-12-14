package mx.com.rhdevelop.common.exceptions.custom;

public class AssistanceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 8925303792177335248L;

    public AssistanceNotFoundException(String message) {
        super(message);
    }

}
