package com.hackathon.hackathonbackend.service;

import com.hackathon.hackathonbackend.entity.UserData;
import com.hackathon.hackathonbackend.entity.dto.UserDTO;
import com.hackathon.hackathonbackend.mapper.UserMapper;
import com.hackathon.hackathonbackend.repository.UserRepository;
import com.hackathon.hackathonbackend.request.LoginRequest;
import com.hackathon.hackathonbackend.request.RegisterRequest;
import com.hackathon.hackathonbackend.response.LoginResponse;
import com.hackathon.hackathonbackend.security.UserDetailsImpl;
import com.hackathon.hackathonbackend.security.sevice.JwtService;
import com.hackathon.hackathonbackend.service.api.AuthServiceApi;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthServiceApi {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserMapper userMapper;

    @Override
    @Transactional
    public UserDTO register(@NonNull RegisterRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new EntityNotFoundException();
        }

        var user = UserData.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .email(request.getEmail())
                .build();

        userRepository.save(user);

        return userMapper.mapFromUserData(user);
    }

    @Override
    @Transactional
    public LoginResponse login(@NonNull LoginRequest request) {
        UserData user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new EntityNotFoundException("User with username " + request.getUsername() + " not found"));

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        String jwtToken = jwtService.generateToken(new UserDetailsImpl(user));

        return LoginResponse.builder()
                .token(jwtToken)
                .username(user.getUsername())
                .build();
    }
}
