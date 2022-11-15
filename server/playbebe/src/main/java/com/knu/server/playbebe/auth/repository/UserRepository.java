package com.knu.server.playbebe.auth.repository;


import com.knu.server.playbebe.auth.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    public User findByNickname(String nickname);
    public Optional<User> findById(Long id);
    public User findByEmail(String email);
}
