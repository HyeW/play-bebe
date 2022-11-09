package com.knu.server.playbebe.weather.respository;
import com.knu.server.playbebe.weather.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Long> {
}
