package com.knu.server.playbebe.visit.service;

import com.knu.server.playbebe.recommend.model.Place;
import com.knu.server.playbebe.recommend.repository.PlaceRepository;
import com.knu.server.playbebe.visit.model.Visit;
import com.knu.server.playbebe.visit.repository.VisitRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class SchedulerService {

    private final VisitRepository visitRepository;
    private final PlaceRepository placeRepository;

    @Scheduled(cron = "0 0 0 * * *") // 매일 오전 5시 정각
    public void deleteExpiredVisit(){
        List<Visit> visits = visitRepository.findAll();

        for (Visit visit : visits) {
            Optional<Place> curPlace = placeRepository.findById(visit.getPlace().getId());
            if (curPlace.isEmpty()) continue;
            curPlace.get().removeVisit(visit);
            visitRepository.delete(visit);
        }
    }
}
