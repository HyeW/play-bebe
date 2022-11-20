package com.knu.server.playbebe.recommend.repository;

import com.knu.server.playbebe.recommend.model.Place;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlaceRepository extends JpaRepository<Place, Long> {
    List<Place> findTop6ByOrderByWantToVisitDesc();

    @Query(
            value = "SELECT * FROM place WHERE cur_status LIKE '영업/정상' ORDER BY ST_Distance_Sphere(Point(:longitude, :latitude), Point(longitude, latitude))",
            nativeQuery = true
    )
    Page<Place> findBySTDistance(Pageable pageable, @Param("latitude") double latitude, @Param("longitude") double longitude);
}
