package mx.com.rhdevelop.common.exceptions.custom;

public class BadRequestException extends RuntimeException {

    private static final long serialVersionUID = 8925303792177335249L;

    public BadRequestException(String message) {
        super(message);
    }

}
