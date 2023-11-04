package com.hackathon.hackathonbackend.entity;

import lombok.Data;

@Data
public class CartItem {

    private ProductData product;
    private int quantity;

    public CartItem(ProductData product) {
        this.product = product;
        this.quantity = 1;
    }
}
