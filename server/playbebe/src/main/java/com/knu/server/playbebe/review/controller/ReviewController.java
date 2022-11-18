package com.knu.server.playbebe.review.controller;

import com.knu.server.playbebe.review.dto.ReviewCreateDTO;
import com.knu.server.playbebe.review.dto.ReviewListResDTO;
import com.knu.server.playbebe.review.model.Image;
import com.knu.server.playbebe.review.model.Review;
import com.knu.server.playbebe.review.repository.ReviewRepository;
import com.knu.server.playbebe.review.service.FileService;
import com.knu.server.playbebe.review.service.ReviewBasicService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequiredArgsConstructor
@RequestMapping("/review")
public class ReviewController {

    private final ReviewBasicService reviewBasicService;

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
