package com.knu.server.playbebe.review.controller;

import com.knu.server.playbebe.review.dto.ReviewCreateDTO;
import com.knu.server.playbebe.review.dto.ReviewListResDTO;
import com.knu.server.playbebe.review.service.ReviewBasicService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/review")
public class ReviewController {

    private final ReviewBasicService reviewBasicService;

    @GetMapping("")
    public ResponseEntity<?> getLatestReview(){
        ReviewListResDTO list = reviewBasicService.getLatestReview();

        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createReview(@RequestBody ReviewCreateDTO reviewCreateDTO){
        String result = reviewBasicService.insertReview(reviewCreateDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }
}
