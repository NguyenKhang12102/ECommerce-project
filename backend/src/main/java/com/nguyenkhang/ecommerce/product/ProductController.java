package com.nguyenkhang.ecommerce.product;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductController {

	@GetMapping
	public List<Product> getProducts() {
		return List.of(
				new Product(1L, "Basic T-Shirt", "Cotton t-shirt for everyday wear", new BigDecimal("19.99"), "https://picsum.photos/seed/shirt/600/400"),
				new Product(2L, "Sneakers", "Comfortable shoes for casual outfits", new BigDecimal("59.90"), "https://picsum.photos/seed/shoes/600/400"),
				new Product(3L, "Backpack", "Lightweight backpack with laptop compartment", new BigDecimal("39.50"), "https://picsum.photos/seed/bag/600/400")
		);
	}
}
