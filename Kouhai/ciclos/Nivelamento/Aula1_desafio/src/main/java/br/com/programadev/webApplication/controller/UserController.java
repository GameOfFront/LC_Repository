package br.com.programadev.webApplication.controller;

import br.com.programadev.webApplication.model.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping
    public User getUser(){
        User user = new User();
        user.setAge(20);
        user.setName("Fulano");
        return user;
    }

    @PostMapping
    public User postUser(@RequestBody User user){
        return user;
    }
}
