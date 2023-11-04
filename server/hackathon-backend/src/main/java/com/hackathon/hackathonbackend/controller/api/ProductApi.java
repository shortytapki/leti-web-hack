package com.hackathon.hackathonbackend.controller.api;

import com.hackathon.hackathonbackend.entity.ProductData;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/api/v1/product")
@Tag(
        name = "Продукты",
        description = "ProductApi"
)
@SecurityRequirement(name = "bearerAuth")
public interface ProductApi {

    @GetMapping("/")
    @Operation(
            summary = "Метод для получения всех продукстов",
            operationId = "",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Получение прошло успешно"
                    )
            }
    )
    List<ProductData> getAllProducts();

    @GetMapping("/{id}")
    @Operation(
            summary = "Метод для получения продукта по Id",
            operationId = "",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Получение прошло успешно"
                    )
            }
    )
    ProductData getProductById(@PathVariable Long id);
}
