package com.smart.helper;

public class UserNotFoundException extends Exception{
    public UserNotFoundException(){
        super("User with this emailId not found in database");
    }
    public UserNotFoundException(String msg){super(msg);}
}
