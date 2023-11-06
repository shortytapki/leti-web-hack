package com.hackathon.hackathonbackend.entity.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.*;

import static com.hackathon.hackathonbackend.entity.dto.ProductDTO.*;

@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@JsonTypeName("ProductDTO")
@Builder
@JsonPropertyOrder({
    TITLE_PROPERTY, PRICE_PROPERTY, QUANTITY_PROPERTY, IMAGE_PROPERTY
})
public class ProductDTO {

    public static final String TITLE_PROPERTY = "title";
    private String title;

    public static final String PRICE_PROPERTY = "price";
    private Integer price;

    public static final String QUANTITY_PROPERTY = "quantity";
    private Integer quantity;

    public static final String IMAGE_PROPERTY = "image";
    private String image;

    public static final String DESCRIPTION_PROPERTY = "description";
    private String description;

    public static final String CATEGORY_PROPERTY = "category";
    private Integer category;

    @JsonProperty(CATEGORY_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public Integer getCategory() {
        return category;
    }

    @JsonProperty(CATEGORY_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setCategory(Integer category) {
        this.category = category;
    }

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

    @JsonProperty(IMAGE_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public String getImage() {
        return image;
    }

    @JsonProperty(IMAGE_PROPERTY)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setImage(String image) {
        this.image = image;
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
