package com.hackathon.hackathonbackend.service;

import com.hackathon.hackathonbackend.entity.Cart;
import com.hackathon.hackathonbackend.entity.ProductData;
import com.hackathon.hackathonbackend.entity.dto.ProductDTO;
import com.hackathon.hackathonbackend.mapper.ProductMapper;
import com.hackathon.hackathonbackend.repository.ProductRepository;
import com.hackathon.hackathonbackend.service.api.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    @Override
    @Transactional
    public List<ProductData> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    @Transactional
    public ProductData getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Cart addToCart(Long id, Cart cart) {
        ProductData product = getProductById(id);
        cart.addProduct(product);
        return cart;
    }

    @Override
    @Transactional
    public Cart removeFromCart(Long id, Cart cart) {
        cart.removeProductById(id);
        return cart;
    }

    @Override
    @Transactional
    public Cart updateQuantity(Long id, Cart cart) {
        cart.updateProductQuantityById(id);
        return cart;
    }
}
