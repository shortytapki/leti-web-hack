package com.hackathon.hackathonbackend.security.sevice;

import com.hackathon.hackathonbackend.entity.UserData;
import com.hackathon.hackathonbackend.repository.UserRepository;
import com.hackathon.hackathonbackend.security.UserDetailsImpl;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetailsImpl loadUserByUsername(String username) {
        UserData user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with username " + username + " not found"));

        return new UserDetailsImpl(user);
    }
}
