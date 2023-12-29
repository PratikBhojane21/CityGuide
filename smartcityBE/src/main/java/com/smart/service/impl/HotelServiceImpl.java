package com.smart.service.impl;

import com.smart.model.city.Hotel;
import com.smart.repo.HotelRepository;
import com.smart.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class HotelServiceImpl implements HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    @Override
    public Hotel addHotel(Hotel hotel) {
        return this.hotelRepository.save(hotel);
    }

    @Override
    public Hotel updateHotel(Hotel hotel) {
        return this.hotelRepository.save(hotel);
    }

    @Override
    public Set<Hotel> getHotels() {
        return new LinkedHashSet<>(this.hotelRepository.findAll());
    }

    @Override
    public Hotel getHotel(Long hid) {
        return this.hotelRepository.findById(hid).get();
    }

    @Override
    public void deleteHotel(Long hid) {
        Hotel hotel = new Hotel();
        hotel.setHid(hid);
        this.hotelRepository.delete(hotel);
    }
}
