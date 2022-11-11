package com.knu.server.playbebe.recommend.repository;

import com.knu.server.playbebe.recommend.model.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<Place, Long> {
}
