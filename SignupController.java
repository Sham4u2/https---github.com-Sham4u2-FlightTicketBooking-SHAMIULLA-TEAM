package com.example.Ecomerce.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Ecomerce.Model.Signupmodel;
import com.example.Ecomerce.Repostiory.Signuprepostiory;

@RestController
public class SignupController {
	@Autowired
	Signuprepostiory repo;
	@PostMapping("/postdata")
	public String savelog(@RequestBody Signupmodel s){
        String user=s.getUsername();
        Signupmodel s1=repo.findByusername(user);
        if(s1==null)
        {
            repo.save(s);
            return "added";
        }
        else {
            return "Exist user";
        }
    }

}
