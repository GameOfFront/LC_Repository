package br.com.programadev.webApplication;

import br.com.programadev.webApplication.leveling.Functions;
import br.com.programadev.webApplication.leveling.exercises.Fibonacci;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebApplication {

	public static void main(String[] args) {
		Fibonacci.init();
//		Functions.init();
	}

}
