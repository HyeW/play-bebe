package com.knu.server.playbebe.visit.service;

import com.knu.server.playbebe.auth.model.User;
import com.knu.server.playbebe.auth.repository.UserRepository;
import com.knu.server.playbebe.recommend.model.Place;
import com.knu.server.playbebe.recommend.repository.PlaceRepository;
import com.knu.server.playbebe.visit.dto.VisitDto;
import com.knu.server.playbebe.visit.dto.VisitRequestDto;
import com.knu.server.playbebe.visit.model.Visit;
import com.knu.server.playbebe.visit.repository.VisitRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class VisitService {

    private final VisitRepository visitRepository;
    private final PlaceRepository placeRepository;
    private final UserRepository userRepository;

    public boolean saveVisit(VisitRequestDto visitRequestDto) {
        Optional<Place> curPlace = placeRepository.findById(visitRequestDto.getPlaceId());
        Optional<User> curUser = userRepository.findById(visitRequestDto.getUserId());
        if (curPlace.isEmpty() || curUser.isEmpty()) return false;

        VisitDto visitDto = new VisitDto(curPlace.get(), curUser.get());
        Visit visit = new Visit(visitDto);
        visitRepository.save(visit);

        return true;
    }

    public boolean deleteVisit(Long userId, Long placeId) {
        boolean existPlace = placeRepository.existsById(placeId);
        boolean existUser = userRepository.existsById(userId);
        if (!existPlace || !existUser) return false;

        Visit curVisit = visitRepository.findByUserIdAndPlace_Id(userId, placeId);
        Optional<Place> curPlace = placeRepository.findById(curVisit.getPlace().getId());
        curPlace.ifPresent(place -> place.removeVisit(curVisit));
        visitRepository.delete(curVisit);
        return true;
    }
}
