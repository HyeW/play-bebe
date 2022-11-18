package com.knu.server.playbebe.visit.controller;

import com.knu.server.playbebe.visit.dto.VisitRequestDto;
import com.knu.server.playbebe.visit.service.VisitService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/visit")
@RequiredArgsConstructor
public class VisitController {

    private final VisitService visitService;

    @PostMapping
    public boolean wantToVisit(@RequestBody VisitRequestDto visitRequestDto) {
        return visitService.visitRegister(visitRequestDto);
    }
}
