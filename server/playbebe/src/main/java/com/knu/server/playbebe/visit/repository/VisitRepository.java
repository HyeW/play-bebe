package com.knu.server.playbebe.visit.repository;

import com.knu.server.playbebe.visit.model.Visit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitRepository extends JpaRepository<Visit,Long> {
}
