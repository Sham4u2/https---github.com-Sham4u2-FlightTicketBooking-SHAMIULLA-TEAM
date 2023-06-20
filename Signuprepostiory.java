package com.example.Ecomerce.Repostiory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Ecomerce.Model.Signupmodel;

public interface Signuprepostiory extends JpaRepository<Signupmodel,Long>{

	

	Signupmodel findByusername(String user);

}
