package com.knu.server.playbebe.weather.respository;
import com.knu.server.playbebe.weather.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.*;
@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
//  Location findByphaseOneAndphaseTwoAndPhaseThree(String phaseOne, String phaseTwo, String phaseThree);
  List<Location> findAllByPhaseOneAndPhaseTwo(String phaseOne, String phaseTwo);
}
