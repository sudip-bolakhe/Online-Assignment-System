package com.sushmita.onlineassignmentsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.sushmita.onlineassignmentsystem"})
public class OnlineAssignmentSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineAssignmentSystemApplication.class, args);
	}

}
