package com.hackathon.hackathonbackend.entity.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonTypeName;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import static com.hackathon.hackathonbackend.entity.dto.UserDTO.*;

@ToString
@EqualsAndHashCode
@AllArgsConstructor
@Builder
@NoArgsConstructor
@JsonTypeName("UserDTO")
@JsonPropertyOrder({
    USERNAME_PROPERTY, EMAIL_PROPERTY
})
public class UserDTO {
    public static final String USERNAME_PROPERTY = "username";
    private String username;

    public static final String EMAIL_PROPERTY = "email";
    private String email;

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

    @JsonProperty(EMAIL_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    @Schema(example = "email@email.com")
    public String getEmail() {
        return email;
    }

    @JsonProperty(EMAIL_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setEmail(String email) {
        this.email = email;
    }
}
