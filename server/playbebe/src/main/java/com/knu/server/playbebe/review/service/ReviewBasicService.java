package com.knu.server.playbebe.review.service;

import com.knu.server.playbebe.auth.model.User;
import com.knu.server.playbebe.auth.repository.UserRepository;
import com.knu.server.playbebe.recommend.model.Place;
import com.knu.server.playbebe.recommend.repository.PlaceRepository;
import com.knu.server.playbebe.review.dto.ReviewBasicResDTO;
import com.knu.server.playbebe.review.dto.ReviewCreateDTO;
import com.knu.server.playbebe.review.dto.ReviewImageDTO;
import com.knu.server.playbebe.review.dto.ReviewListResDTO;
import com.knu.server.playbebe.review.model.Image;
import com.knu.server.playbebe.review.model.Review;
import com.knu.server.playbebe.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.apache.commons.net.util.Base64;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReviewBasicService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final PlaceRepository placeRepository;
    private final FileService fileService;

    @Transactional
    public String insertReview(ReviewCreateDTO reviewCreateDTO, MultipartFile multipartFile) throws IOException {
        User user = userRepository.findByEmail(reviewCreateDTO.getEmail());
        Optional<Place> place = placeRepository.findById(reviewCreateDTO.getPlaceId());
        place.get().setTotalRating(reviewCreateDTO.getRating());

        Image image = null;
        if(multipartFile.getSize() != 0) {
            image = fileService.storeFile(multipartFile);
        }

        Review review = Review.builder()
                .content(reviewCreateDTO.getContent())
                .place(place.get())
                .rating(reviewCreateDTO.getRating())
                .user(user)
                .visitDate(reviewCreateDTO.getVisitDate())
                .image(image)
                .build();

        reviewRepository.saveReview(review);

        return "done";
    }

    public ReviewListResDTO getLatestReview(int page) throws IOException {

        List<Review> reviewList =  reviewRepository.findLatestReviewList(page);
        ReviewListResDTO result = new ReviewListResDTO();

        for(Review r : reviewList){
            ReviewBasicResDTO basicResDTO = createReviewBasicResDTO(r);

            result.getLatestReview().add(basicResDTO);
        }

        return result;
    }

    public ReviewListResDTO getPlaceReview(Long id) throws IOException {
        Optional<Place> place = placeRepository.findById(id);
        List<Review> reviews = place.get().getMessages();
        ReviewListResDTO result = new ReviewListResDTO();

        for(int i = reviews.size() - 1; i >= 0; i--){
            Review r = reviews.get(i);
            ReviewBasicResDTO basicResDTO = createReviewBasicResDTO(r);

            result.getLatestReview().add(basicResDTO);
        }

        return result;
    }

    public ReviewBasicResDTO createReviewBasicResDTO(Review r) throws IOException {
        ReviewImageDTO image = null;

        if(r.getImage() != null) {
            FileSystemResource resource = fileService.findFile(r.getImage().getStorePath());
            if (!resource.exists()) {
                throw new FileNotFoundException();
            }
            InputStream imageStream = new FileInputStream(r.getImage().getStorePath());
            byte[] imageByteArray = IOUtils.toByteArray(imageStream);
            imageByteArray = Base64.encodeBase64(imageByteArray);
            imageStream.close();
            System.out.println(r.getImage().getExtension());
            image = ReviewImageDTO.builder()
                    .imageFile(imageByteArray)
                    .imageExtension(r.getImage().getExtension())
                    .build();
        }
        return new ReviewBasicResDTO(r.getContent(), r.getRating(), r.getVisitDate(), r.getCreatedAt(),
                        r.getUser().getNickname(), r.getPlace().getId(),
                        r.getPlace().getEstablishmentName(), r.getPlace().getAddress(),
                        image);

    }

    public Review getReviewImage(Long id) {
        return reviewRepository.findReview(id);
    }

}
