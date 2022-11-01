package com.knu.server.playbebe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude= DataSourceAutoConfiguration.class)
public class PlaybebeApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlaybebeApplication.class, args);
	}

}
