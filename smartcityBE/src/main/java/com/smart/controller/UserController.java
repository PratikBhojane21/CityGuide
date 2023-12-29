package com.smart.controller;

import com.smart.helper.UserFoundException;
import com.smart.model.Type;
import com.smart.model.User;
import com.smart.model.UserType;
import com.smart.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.Role;
import java.util.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    //creating user
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {

        //encoding password with bcryptpasswordencoder
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

        Set<UserType> roles = new HashSet<>();
        Type role = new Type();
        role.setUtId(21);
        role.setType("student");

        UserType userType = new UserType();
        userType.setUser(user);
        userType.setType(role);

        roles.add(userType);
        return this.userService.createUser(user, roles);
    }

    @GetMapping("/{email}")
    public User getUser(@PathVariable("email") String email){
        return this.userService.getUser(email);
    }

    //delete user by id
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") long id){
        this.userService.deleteUser(id);
    }

//    @ExceptionHandler(UserFoundException.class)
//    public ResponseEntity<?> exceptionHandler(UserFoundException ex){ return ResponseEntity;}


}
