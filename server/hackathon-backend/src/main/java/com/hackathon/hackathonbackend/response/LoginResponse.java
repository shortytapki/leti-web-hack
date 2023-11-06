package com.hackathon.hackathonbackend.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonTypeName;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import static com.hackathon.hackathonbackend.response.LoginResponse.*;


@ToString
@EqualsAndHashCode
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonTypeName("LoginResponse")
@JsonPropertyOrder({
    TOKEN_PROPERTY, USERNAME_PROPERTY
})
public class LoginResponse {

    public static final String TOKEN_PROPERTY = "token";
    private String token;

    public static final String USERNAME_PROPERTY = "username";
    private String username;

    @JsonProperty(USERNAME_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public String getUsername() {
        return username;
    }

    @JsonProperty(USERNAME_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setUsername(String username) {
        this.username = username;
    }

    @JsonProperty(TOKEN_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    @Schema(example = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY5MTMxOTAyMiwiZXhwIjoxNjkxNDA1NDIyfQ.XPTaedO6GOPibL9YSHRBsRSlzk7exGhPNT93a5KWd0o")
    public String getToken() {
        return token;
    }

    @JsonProperty(TOKEN_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setToken(String token) {
        this.token = token;
    }
}
