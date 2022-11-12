package com.knu.server.playbebe.auth.controller;

import com.knu.server.playbebe.auth.dto.UserJoinDto;
import com.knu.server.playbebe.auth.dto.UserJoinResDto;
import com.knu.server.playbebe.auth.repository.UserRepository;
import com.knu.server.playbebe.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;
    private final UserService userService;

    @PostMapping("/join")
    public ResponseEntity<?> join (@RequestBody UserJoinDto userJoinDto){
        UserJoinResDto dup = userService.verifyDup(userJoinDto);
        if(dup.getEmailDup() != false || dup.getNicknameDup() != false){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(dup);
        }

        String result = userService.saveUser(userJoinDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(null);
    }

}
