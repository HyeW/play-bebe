package com.knu.server.playbebe.weather.respository;
import com.knu.server.playbebe.weather.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
  List<Location> findAllByPhase1AndPhase2(String phase1, String phase2);
}
