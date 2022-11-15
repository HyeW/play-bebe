package com.knu.server.playbebe.review.repository;

import com.knu.server.playbebe.review.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findAllByPlace_Id(long placeId);
}
