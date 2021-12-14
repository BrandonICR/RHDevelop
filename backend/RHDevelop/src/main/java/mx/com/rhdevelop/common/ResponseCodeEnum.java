package mx.com.rhdevelop.common;

public enum ResponseCodeEnum {

    OK("RH01", "Procesamiento Correcto"),
    INTERNAL_ERROR("RH02", "Error interno, favor de contactarse con el administrador del sistema"),
    BAD_REQUEST("RH03", "La peticion contiene valores erroneos"),
    EMPLOYEE_NOT_FOUND("RH04", "El empleado no fue encontrado"),
    ASSISTANCE_NOT_FOUND("RH05", "La asistencia no fue encontrado")
    ;

    private String responseCode;
    private String responseMessage;

    private ResponseCodeEnum(String responseCode, String responseMessage) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
    }

    public String getCode() {
        return this.responseCode;
    }

    public String getMessage() {
        return this.responseMessage;
    }

}
