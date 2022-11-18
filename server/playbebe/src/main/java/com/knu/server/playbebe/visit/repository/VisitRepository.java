package com.knu.server.playbebe.visit.repository;
import com.knu.server.playbebe.recommend.model.Place;
import com.knu.server.playbebe.visit.model.Visit;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VisitRepository extends JpaRepository<Visit,Long> {
    List<Visit> findAllByPlace_Id(Long placeId);
    Visit findByUserIdAndPlace_Id(Long userId, Long placeId);
}
