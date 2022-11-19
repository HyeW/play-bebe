package com.knu.server.playbebe.review.controller;

import com.knu.server.playbebe.review.dto.ReviewCreateDTO;
import com.knu.server.playbebe.review.dto.ReviewListResDTO;
import com.knu.server.playbebe.review.model.Review;
import com.knu.server.playbebe.review.repository.ReviewRepository;
import com.knu.server.playbebe.review.service.ReviewBasicService;
import lombok.RequiredArgsConstructor;
import org.apache.hadoop.yarn.webapp.NotFoundException;
import org.apache.tomcat.util.file.ConfigurationSource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/review")
public class ReviewController {

    private final ReviewBasicService reviewBasicService;
    private final ReviewRepository reviewRepository;

    @GetMapping("/{page}")
    public ResponseEntity<?> getLatestReview(@PathVariable int page) throws IOException {
        ReviewListResDTO list = reviewBasicService.getLatestReview(page);

        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @PostMapping(value = "/create", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> createReview(@RequestPart ReviewCreateDTO request, @RequestPart MultipartFile imgFile) throws IOException {
        String result = reviewBasicService.insertReview(request, imgFile);

        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @GetMapping("/place/{placeId}")
    public ResponseEntity<?> getPlaceReviews(@PathVariable Long placeId) throws IOException {
        ReviewListResDTO list = reviewBasicService.getPlaceReview(placeId);

        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @GetMapping("/image/{reviewId}")
    public ResponseEntity<Resource> getReviewImage(@PathVariable Long reviewId) throws IOException {
        Review review = reviewRepository.findReview(reviewId);
        FileSystemResource resource = null;
        HttpHeaders header = new HttpHeaders();
        Path filePath = null;

        if(review.getImage() == null) {
            header.add("Content-Type", null);
            return new ResponseEntity<Resource>(resource,header,HttpStatus.OK);
        }
            resource = new FileSystemResource(review.getImage().getStorePath());
            if (!resource.exists()) {
                throw new NotFoundException();
            }

            filePath = Paths.get(review.getImage().getStorePath());
            header.add("Content-Type", Files.probeContentType(filePath));

        return new ResponseEntity<Resource>(resource,header,HttpStatus.OK);
    }
    /** 이미지 파일을 안보낼 경우 **/
//    @PostMapping(value = "/create")
//    public ResponseEntity<?> createReview(@RequestPart ReviewCreateDTO request) throws IOException {
//        String result = reviewBasicService.insertReview(request, null);
//
//        return ResponseEntity.status(HttpStatus.CREATED).body(result);
//    }

    /** review id로 review 지우기**/
//    @DeleteMapping("/delete/{id}")
//    @Transactional
//    public ResponseEntity<?> deleteReview(@PathVariable Long id){
//        reviewRepository.deleteReview(id);
//
//        return ResponseEntity.status(HttpStatus.OK).body(null);
//    }

}
