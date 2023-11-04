package com.hackathon.hackathonbackend.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonTypeName;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import static com.hackathon.hackathonbackend.request.LoginRequest.*;


@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@JsonTypeName("LoginRequest")
@JsonPropertyOrder({
        USERNAME_PROPERTY, PASSWORD_PROPERTY
})
public class LoginRequest {

    public static final String USERNAME_PROPERTY = "username";
    private String username;

    public static final String PASSWORD_PROPERTY = "password";
    private String password;

    @JsonProperty(USERNAME_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    @Schema(example = "username")
    public String getUsername() {
        return username;
    }

    @JsonProperty(USERNAME_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setUsername(String username) {
        this.username = username;
    }

    @JsonProperty(PASSWORD_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    @Schema(example = "password")
    public String getPassword() {
        return password;
    }

    @JsonProperty(PASSWORD_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setPassword(String password) {
        this.password = password;
    }
}
