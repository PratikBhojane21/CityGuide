package com.smart.repo;

import com.smart.model.city.TouristPlace;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TouristPlaceRepository extends JpaRepository<TouristPlace, Long> {
}
