package com.knu.server.playbebe.review.controller;

import com.knu.server.playbebe.review.dto.ReviewCreateDTO;
import com.knu.server.playbebe.review.dto.ReviewListResDTO;
import com.knu.server.playbebe.review.model.Image;
import com.knu.server.playbebe.review.model.Review;
import com.knu.server.playbebe.review.service.FileService;
import com.knu.server.playbebe.review.service.ReviewBasicService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
    private final FileService fileService;

    @GetMapping("")
    public ResponseEntity<?> getLatestReview(){
        ReviewListResDTO list = reviewBasicService.getLatestReview();

        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> createReview(@RequestPart ReviewCreateDTO request) throws IOException {
        String result = reviewBasicService.insertReview(request, null);

        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    /** 리뷰에 이미지를 삽입할 때 함수 **/
//    @PostMapping(value = "/create", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
//    public ResponseEntity<?> createReview(@RequestPart ReviewCreateDTO request, @RequestPart MultipartFile imgFile) throws IOException {
//        String result = reviewBasicService.insertReview(request, imgFile);
//        System.out.println("content type: "+imgFile.getContentType());
//
//        return ResponseEntity.status(HttpStatus.CREATED).body(result);
//    }

//    @GetMapping("/getreview/{reviewId}")
//    public ResponseEntity<?> getReview(@PathVariable("reviewId") Long id) throws IOException {
//        try{
//            Review review = reviewBasicService.getReview(id);
//            FileSystemResource resource = fileService.findFile(review.getImage().getStorePath());
//            if(!resource.exists()){
//                throw new FileNotFoundException();
//            };
//            HttpHeaders header = new HttpHeaders();
//            Path filePath = Paths.get(review.getImage().getOriginalFilename());
//            header.add("Content-Type", Files.probeContentType(filePath));
//            ReviewImageDTO reviewImageDTO = new ReviewImageDTO();
//            reviewImageDTO.setImage(resource);
//            return new ResponseEntity<Resource>(resource, header, HttpStatus.OK);
//        }
//        catch (Exception e){
//            throw new FileNotFoundException();
//        }
//    }
}
