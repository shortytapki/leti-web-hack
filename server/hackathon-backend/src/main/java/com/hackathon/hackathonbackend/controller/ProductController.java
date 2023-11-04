package com.hackathon.hackathonbackend.controller;

import com.hackathon.hackathonbackend.controller.api.ProductApi;
import com.hackathon.hackathonbackend.entity.ProductData;
import com.hackathon.hackathonbackend.service.api.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class ProductController implements ProductApi {

    private final ProductService productService;

    @Override
    public List<ProductData> getAllProducts() {
        return productService.getAllProducts();
    }

    @Override
    public ProductData getProductById(Long id) {
        return productService.getProductById(id);
    }
}
