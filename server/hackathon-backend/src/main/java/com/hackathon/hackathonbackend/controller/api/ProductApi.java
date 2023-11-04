package com.hackathon.hackathonbackend.controller.api;

import com.hackathon.hackathonbackend.entity.ProductData;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/api/v1/product")
@Tag(
        name = "Продукты",
        description = "ProductApi"
)
@SecurityRequirement(name = "bearerAuth")
public interface ProductApi {

    @GetMapping("/")
    List<ProductData> getAllProducts();

    @GetMapping("/{id}")
    ProductData getProductById(@PathVariable Long id);
}
