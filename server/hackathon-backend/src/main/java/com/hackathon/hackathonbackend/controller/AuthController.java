package com.hackathon.hackathonbackend.controller;

import com.hackathon.hackathonbackend.controller.api.AuthApi;
import com.hackathon.hackathonbackend.entity.dto.UserDTO;
import com.hackathon.hackathonbackend.request.LoginRequest;
import com.hackathon.hackathonbackend.request.RegisterRequest;
import com.hackathon.hackathonbackend.response.LoginResponse;
import com.hackathon.hackathonbackend.service.AuthServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class AuthController implements AuthApi {

    private final AuthServiceImpl authService;

    public ResponseEntity<UserDTO> register(RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    public ResponseEntity<LoginResponse> login(LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

}
