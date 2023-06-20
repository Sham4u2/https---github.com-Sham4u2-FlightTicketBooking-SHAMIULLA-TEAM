package com.example.Ecomerce.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Ecomerce.Model.Signupmodel;
import com.example.Ecomerce.Repostiory.Signuprepostiory;

@RestController
public class LoginController {
	@Autowired
	Signuprepostiory r;
	@PostMapping("/checkdata/{username}/{password}")
	public String checkdata(@PathVariable String username,@PathVariable String password) {
		Signupmodel s=r.findByusername(username);
		 if(s==null){
	            return "Username not found";
	        }
	        else{
	            if(s.getPassword().equals(password)){
	                return "Success";
	            }
	            else{
	                return "Invalid password";
	            }
	        }
	}

}
