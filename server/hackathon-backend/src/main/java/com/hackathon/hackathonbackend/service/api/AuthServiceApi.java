package com.hackathon.hackathonbackend.service.api;

import com.hackathon.hackathonbackend.entity.dto.UserDTO;
import com.hackathon.hackathonbackend.request.LoginRequest;
import com.hackathon.hackathonbackend.request.RegisterRequest;
import com.hackathon.hackathonbackend.response.LoginResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;

public interface AuthServiceApi {

    UserDTO register(@NonNull RegisterRequest request);

    LoginResponse login(@NonNull LoginRequest request);
}
