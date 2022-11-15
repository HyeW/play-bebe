package com.knu.server.playbebe.auth.service;

import com.knu.server.playbebe.auth.dto.UserJoinDto;
import com.knu.server.playbebe.auth.dto.UserJoinResDto;
import com.knu.server.playbebe.auth.model.User;
import com.knu.server.playbebe.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserJoinResDto verifyDup(UserJoinDto userJoinDto){
        UserJoinResDto res = new UserJoinResDto(false, false);

        User emailUser= userRepository.findByEmail(userJoinDto.getEmail());
        if(emailUser != null)
            res.setEmailDup(true);

        User nickNameUser = userRepository.findByNickname(userJoinDto.getNickname());
        if(nickNameUser != null)
            res.setNicknameDup(true);

        return res;
    }

    @Transactional
    public String saveUser(UserJoinDto userJoinDto){
        System.out.println("save ½ÇÇà");
        String bCryptPassword = bCryptPasswordEncoder.encode(userJoinDto.getPassword());
        userJoinDto.setPassword(bCryptPassword);
        User user = new User(userJoinDto);
        userRepository.save(user);

        return "done";
    }

}
