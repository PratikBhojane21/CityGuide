package com.smart.service;

import com.smart.model.city.TouristPlace;

import java.util.Set;

public interface TouristPlaceService {
    public TouristPlace addTouristPlace(TouristPlace touristPlace);
    public TouristPlace updateTouristPlace(TouristPlace touristPlace);
    public Set<TouristPlace> getTouristPlaces();
    public TouristPlace getTouristPlace(Long tid);
    public void deleteTouristPlace(Long tid);
}
