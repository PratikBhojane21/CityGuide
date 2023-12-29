package com.smart.service.impl;

import com.smart.model.city.TouristPlace;
import com.smart.repo.TouristPlaceRepository;
import com.smart.service.TouristPlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class TouristPlaceServiceImpl implements TouristPlaceService {
    @Autowired
    private TouristPlaceRepository touristPlaceRepository;
    @Override
    public TouristPlace addTouristPlace(TouristPlace touristPlace) {
        return this.touristPlaceRepository.save(touristPlace);
    }

    @Override
    public TouristPlace updateTouristPlace(TouristPlace touristPlace) {
        return this.touristPlaceRepository.save(touristPlace);
    }

    @Override
    public Set<TouristPlace> getTouristPlaces() {
        return new LinkedHashSet<>(this.touristPlaceRepository.findAll());
    }

    @Override
    public TouristPlace getTouristPlace(Long tid) {
        return this.touristPlaceRepository.findById(tid).get();
    }

    @Override
    public void deleteTouristPlace(Long tid) {
        TouristPlace touristPlace = new TouristPlace();
        touristPlace.setTid(tid);
        this.touristPlaceRepository.delete(touristPlace);
    }
}
