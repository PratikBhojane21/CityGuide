package com.smart.helper;

public class UserFoundException extends Exception{
    public UserFoundException(){
        super("User with this emailId is already there");
    }
    public UserFoundException(String msg){super(msg);}
}
