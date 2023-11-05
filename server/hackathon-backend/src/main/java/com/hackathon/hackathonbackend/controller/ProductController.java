package com.hackathon.hackathonbackend.controller;

import com.hackathon.hackathonbackend.controller.api.ProductApi;
import com.hackathon.hackathonbackend.entity.dto.ProductDTO;
import com.hackathon.hackathonbackend.mapper.ProductMapper;
import com.hackathon.hackathonbackend.service.api.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
@RequiredArgsConstructor
public class ProductController implements ProductApi {

    private final ProductService productService;
    private final ProductMapper productMapper;

    @Override
    public List<ProductDTO> getAllProducts() {
        return productService.getAllProducts().stream().map(productMapper::mapFromProductData).toList();
    }

    @Override
    public ProductDTO getProductById(Long id) {
        return productMapper.mapFromProductData(productService.getProductById(id));
    }
}
