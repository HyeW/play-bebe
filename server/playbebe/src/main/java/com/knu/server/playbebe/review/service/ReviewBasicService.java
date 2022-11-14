package com.knu.server.playbebe.review.service;

import com.knu.server.playbebe.auth.model.User;
import com.knu.server.playbebe.auth.repository.UserRepository;
import com.knu.server.playbebe.recommend.model.Place;
import com.knu.server.playbebe.recommend.repository.PlaceRepository;
import com.knu.server.playbebe.review.dto.ReviewBasicResDTO;
import com.knu.server.playbebe.review.dto.ReviewCreateDTO;
import com.knu.server.playbebe.review.dto.ReviewListResDTO;
import com.knu.server.playbebe.review.model.Review;
import com.knu.server.playbebe.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewBasicService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final PlaceRepository placeRepository;

    @Transactional
    public String insertReview(ReviewCreateDTO reviewCreateDTO){
        User user = userRepository.findByEmail(reviewCreateDTO.getEmail());
        Optional<Place> place = placeRepository.findById(reviewCreateDTO.getPlaceId());

        Review review = Review.builder()
                .content(reviewCreateDTO.getContent())
                .place(place.get())
                .rating(reviewCreateDTO.getRating())
                .user(user)
                .visitDate(reviewCreateDTO.getVisitDate())
                .build();

        reviewRepository.saveReview(review);

        return "done";
    }

    @Transactional
    public ReviewListResDTO getLatestReview(){

        List<Review> reviewList =  reviewRepository.findLatestReview();
        ReviewListResDTO result = new ReviewListResDTO();

        for(Review r : reviewList){
            ReviewBasicResDTO basicResDTO =
                    new ReviewBasicResDTO(r.getContent(), r.getRating(),r.getVisitDate(), r.getCreatedAt(),
                            r.getUser().getNickname(), r.getPlace().getId(), r.getPlace().getEstablishmentName());

            result.getLatestReview().add(basicResDTO);
        }

        return result;
    }
}