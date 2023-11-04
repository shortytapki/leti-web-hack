package com.hackathon.hackathonbackend.repository;

import com.hackathon.hackathonbackend.entity.ProductData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<ProductData, Long> {
}
