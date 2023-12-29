package com.smart;

import com.smart.model.Type;
import com.smart.model.User;
import com.smart.model.UserType;
import com.smart.service.UserService;
import com.smart.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.*;

@SpringBootApplication
public class SmartcityApplication implements CommandLineRunner {
	@Autowired
	private UserService userService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {

		SpringApplication.run(SmartcityApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		User user = new User();
		user.setFirstName("Pratik");
		user.setLastName("Bhojane");
		user.setEmail("admin@gmail.com");
		user.setPassword(this.bCryptPasswordEncoder.encode("admin"));
		user.setPhone("9067736275");
		user.setLocation("pune");
//
		Type role1 = new Type();
		role1.setUtId(12);
		role1.setType("admin");

		Type role2= new Type();
		role2.setUtId(22);
		role2.setType("tourist");

		Set<UserType> userTypeSet = new HashSet<>();
		UserType userType = new UserType();
		userType.setType(role1);
		userType.setUser(user);
		userTypeSet.add(userType);

		User user1 = this.userService.createUser(user, userTypeSet);
		System.out.println(user1.getEmail());
		System.out.println("started");
	}
}
