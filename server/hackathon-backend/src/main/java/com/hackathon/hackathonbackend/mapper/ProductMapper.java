package com.hackathon.hackathonbackend.mapper;

import com.hackathon.hackathonbackend.entity.ProductData;
import com.hackathon.hackathonbackend.entity.dto.ProductDTO;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper extends ModelMapper {

    public ProductDTO mapFromProductData(ProductData productData) {
        return map(productData, ProductDTO.class);
    }
}
