package com.hackathon.hackathonbackend.service.api;

import com.hackathon.hackathonbackend.entity.Cart;
import com.hackathon.hackathonbackend.entity.ProductData;

import java.util.List;

public interface ProductService {

    List<ProductData> getAllProducts();
    ProductData getProductById(Long id);
    Cart addToCart(Long id, Cart cart);
    Cart removeFromCart(Long id, Cart cart);
    Cart updateQuantity(Long id, Cart cart);
}
