package com.hackathon.hackathonbackend.entity.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.hackathon.hackathonbackend.entity.ImageData;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

import static com.hackathon.hackathonbackend.entity.dto.ProductDTO.*;

@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@JsonTypeName("ProductDTO")
@JsonPropertyOrder({
    TITLE_PROPERTY, PRICE_PROPERTY, QUANTITY_PROPERTY, IMAGES_PROPERTY
})
public class ProductDTO {

    public static final String TITLE_PROPERTY = "title";
    private String title;

    public static final String PRICE_PROPERTY = "price";
    private Integer price;

    public static final String QUANTITY_PROPERTY = "quantity";
    private Integer quantity;

    public static final String IMAGES_PROPERTY = "images";
    private List<ImageDTO> images;

    public static final String DESCRIPTION_PROPERTY = "description";
    private String description;

    @JsonProperty(DESCRIPTION_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public String getDescription() {
        return description;
    }

    @JsonProperty(DESCRIPTION_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setDescription(String description) {
        this.description = description;
    }

    @JsonProperty(IMAGES_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public List<ImageDTO> getImages() {
        return images;
    }

    @JsonProperty(IMAGES_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setImages(List<ImageDTO> images) {
        this.images = images;
    }

    @JsonProperty(TITLE_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public String getTitle() {
        return title;
    }

    @JsonProperty(TITLE_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setTitle(String title) {
        this.title = title;
    }

    @JsonProperty(PRICE_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public Integer getPrice() {
        return price;
    }

    @JsonProperty(PRICE_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setPrice(Integer price) {
        this.price = price;
    }

    @JsonProperty(QUANTITY_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public Integer getQuantity() {
        return quantity;
    }

    @JsonProperty(QUANTITY_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
