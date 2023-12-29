package com.smart.repo;

import com.smart.model.city.School;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface SchoolRepository extends JpaRepository<School, Long> {

}
