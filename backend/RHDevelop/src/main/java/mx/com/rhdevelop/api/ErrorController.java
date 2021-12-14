package mx.com.rhdevelop.api;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import mx.com.rhdevelop.common.ResponseCodeEnum;
import mx.com.rhdevelop.common.exceptions.custom.AssistanceNotFoundException;
import mx.com.rhdevelop.common.exceptions.custom.BadRequestException;
import mx.com.rhdevelop.common.exceptions.custom.EmployeeNotFoundException;
import mx.com.rhdevelop.common.exceptions.custom.InternalServerException;
import mx.com.rhdevelop.common.response.GenericResponse;

@ControllerAdvice
public class ErrorController {

    @ExceptionHandler({Exception.class, InternalServerException.class})
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public GenericResponse resolveUncontrolledException(HttpServletRequest request, Exception exception){
        return new GenericResponse(ResponseCodeEnum.INTERNAL_ERROR.getCode(), ResponseCodeEnum.INTERNAL_ERROR.getMessage(), exception.getMessage());
    }

    @ExceptionHandler(EmployeeNotFoundException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ResponseBody
    public GenericResponse resolveEmployeeNotFoundException(HttpServletRequest request, EmployeeNotFoundException exception){
        return new GenericResponse(ResponseCodeEnum.EMPLOYEE_NOT_FOUND.getCode(), ResponseCodeEnum.EMPLOYEE_NOT_FOUND.getMessage(), exception.getMessage());
    }

    @ExceptionHandler(AssistanceNotFoundException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ResponseBody
    public GenericResponse resolveAssistanceNotFoundException(HttpServletRequest request, AssistanceNotFoundException exception){
        return new GenericResponse(ResponseCodeEnum.ASSISTANCE_NOT_FOUND.getCode(), ResponseCodeEnum.ASSISTANCE_NOT_FOUND.getMessage(), exception.getMessage());
    }

    @ExceptionHandler(BadRequestException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ResponseBody
    public GenericResponse resolveBadRequestException(HttpServletRequest request, BadRequestException exception){
        return new GenericResponse(ResponseCodeEnum.INTERNAL_ERROR.getCode(), ResponseCodeEnum.INTERNAL_ERROR.getMessage(), exception.getMessage());
    }

    
}
