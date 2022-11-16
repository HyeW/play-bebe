package com.knu.server.playbebe.weather.respository;
import com.knu.server.playbebe.weather.model.location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.*;
@Repository
public interface LocationRepository extends JpaRepository<location, Long> {
//  Location findByphaseOneAndphaseTwoAndPhaseThree(String phaseOne, String phaseTwo, String phaseThree);
  List<location> findAllByPhaseOneAndPhaseTwo(String phaseOne, String phaseTwo);
}
