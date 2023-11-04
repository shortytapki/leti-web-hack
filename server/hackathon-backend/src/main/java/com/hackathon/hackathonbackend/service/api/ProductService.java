package com.hackathon.hackathonbackend.service.api;

import com.hackathon.hackathonbackend.entity.ProductData;

import java.util.List;

public interface ProductService {

    List<ProductData> getAllProducts();
    ProductData getProductById(Long id);
}
