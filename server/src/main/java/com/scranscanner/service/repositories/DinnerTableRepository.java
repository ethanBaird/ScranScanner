package com.scranscanner.service.repositories;

import com.scranscanner.service.models.DinnerTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DinnerTableRepository extends JpaRepository<DinnerTable, Long> {
}
