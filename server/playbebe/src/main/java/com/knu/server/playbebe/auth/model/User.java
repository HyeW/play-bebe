package com.knu.server.playbebe.auth.model;

import com.knu.server.playbebe.auth.dto.UserJoinDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String email;

    @Column(unique = true)
    private String password;

    @Column(unique = true)
    private String nickname;

    @Column
    private String roles; //ROLE_USER, ROLE_ADMIN

    //role이 하나의 유저당 2개이상 들고 있을때 필요한 함수
    public List<String> getRoleList(){
        if(this.roles.length() > 0){
            return Arrays.asList(this.roles.split(","));
        }
        return new ArrayList<>();
    }

    @Builder
    public User(String email,String password, String nickname, String role) {
        this.id = null;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.roles = role != null ? role : "ROLE_USER";
    }

    @Builder
    public User(UserJoinDto userJoinDto) {
        this.nickname = userJoinDto.getNickname();
        this.email = userJoinDto.getEmail();
        this.password = userJoinDto.getPassword();
        this.roles = "ROLE_USER";
    }

}
