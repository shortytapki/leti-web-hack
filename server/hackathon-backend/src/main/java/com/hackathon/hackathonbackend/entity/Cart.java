package com.hackathon.hackathonbackend.entity;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class Cart {

    private Map<Long, CartItem> items;

    public Cart() {
        this.items = new HashMap<>();
    }

    public void addProduct(ProductData product) {
        if (items.containsKey(product.getId())) {
            CartItem cartItem = items.get(product.getId());
            cartItem.setQuantity(cartItem.getQuantity() + 1);
        } else {
            CartItem cartItem = new CartItem(product);
            items.put(product.getId(), cartItem);
        }
    }

    public void removeProductById(Long id) {
        items.remove(id);
    }

    public void updateProductQuantityById(Long id) {
        CartItem cartItem = items.get(id);
        cartItem.setQuantity(cartItem.getQuantity() + 1);
    }
}
