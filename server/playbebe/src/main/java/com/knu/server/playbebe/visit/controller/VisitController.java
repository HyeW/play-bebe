package com.knu.server.playbebe.visit.controller;

import com.knu.server.playbebe.visit.dto.VisitRequestDto;
import com.knu.server.playbebe.visit.service.VisitService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/visit")
@RequiredArgsConstructor
public class VisitController {

    private final VisitService visitService;

    @PostMapping
    public boolean wantToVisit(@RequestBody VisitRequestDto visitRequestDto) {
        return visitService.saveVisit(visitRequestDto);
    }

    @DeleteMapping
    public boolean notWantToVisit(@RequestBody VisitRequestDto visitRequestDto) {
        return visitService.deleteVisit(visitRequestDto);
    }
}
