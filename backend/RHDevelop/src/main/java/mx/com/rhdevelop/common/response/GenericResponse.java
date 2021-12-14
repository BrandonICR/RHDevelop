package mx.com.rhdevelop.common.response;

import java.time.ZonedDateTime;

import lombok.Data;

@Data
public class GenericResponse {
    
    private String responseCode;
    private String responseMessage;
    private String detailMessage;
    private ZonedDateTime zonedDateTime;

    public GenericResponse() {}

    public GenericResponse(String responseCode, String responseMessage) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.zonedDateTime = ZonedDateTime.now();
    }

    public GenericResponse(String responseCode, String responseMessage, String detailMessage) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.detailMessage = detailMessage;
        this.zonedDateTime = ZonedDateTime.now();
    }

}
