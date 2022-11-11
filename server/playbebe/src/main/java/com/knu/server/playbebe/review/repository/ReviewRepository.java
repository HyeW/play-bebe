package com.knu.server.playbebe.review.repository;

import com.knu.server.playbebe.review.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
