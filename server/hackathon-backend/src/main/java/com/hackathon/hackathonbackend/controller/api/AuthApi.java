package com.hackathon.hackathonbackend.controller.api;

import com.hackathon.hackathonbackend.entity.dto.UserDTO;
import com.hackathon.hackathonbackend.request.LoginRequest;
import com.hackathon.hackathonbackend.request.RegisterRequest;
import com.hackathon.hackathonbackend.response.LoginResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Tag(
        name = "Регистрация и аутентификация",
        description = "AuthApi"
)
@RequestMapping("/api/v1/auth")
public interface AuthApi {

    @Operation(
            summary = "Метод для регистрации пользователя",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Успешная регистрация",
                            content = {
                                    @Content(
                                            mediaType = MediaType.APPLICATION_JSON_VALUE,
                                            schema = @Schema(implementation = RegisterRequest.class)
                                    )
                            }

                    ),

            }
    )
    @PostMapping("/register")
    ResponseEntity<UserDTO> register(@RequestBody RegisterRequest request);

    @Operation(
            summary = "Метод для аутентификации пользователя",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Успешная аутентификация",
                            content = {
                                    @Content(
                                            mediaType = MediaType.APPLICATION_JSON_VALUE,
                                            schema = @Schema(implementation = LoginRequest.class)
                                    )
                            }

                    ),

            }
    )
    @PostMapping("/login")
    ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request);
}
