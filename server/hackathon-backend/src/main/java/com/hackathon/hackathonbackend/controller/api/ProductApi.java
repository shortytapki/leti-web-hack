package com.hackathon.hackathonbackend.controller.api;

import com.hackathon.hackathonbackend.entity.Cart;
import com.hackathon.hackathonbackend.entity.ProductData;
import com.hackathon.hackathonbackend.service.api.ProductService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/add-to-cart/{id}")
    Cart addToCart(@PathVariable Long id, @RequestBody Cart cart);

    @PostMapping("/remove-from-cart/{id}")
    Cart removeFromCart(@PathVariable Long id, @RequestBody Cart cart);

    @PostMapping("/update-quantity/{id}")
    Cart updateQuantity(@PathVariable Long id, @RequestBody Cart cart);
}
