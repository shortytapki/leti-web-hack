package com.hackathon.hackathonbackend.entity.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import static com.hackathon.hackathonbackend.entity.dto.ImageDTO.*;

@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@JsonTypeName("ImageDTO")
@JsonPropertyOrder({
        URL_PROPERTY
})
public class ImageDTO {

    public static final String URL_PROPERTY = "url";
    private String url;

    @JsonProperty(URL_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public String getUrl() {
        return url;
    }

    @JsonProperty(URL_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setUrl(String url) {
        this.url = url;
    }
}
