package com.smart.service;

import com.smart.model.city.Hotel;
import com.smart.model.city.School;

import java.util.Set;

public interface HotelService {
    public Hotel addHotel(Hotel hotel);
    public Hotel updateHotel(Hotel hotel);
    public Set<Hotel> getHotels();
    public Hotel getHotel(Long hid);
    public void deleteHotel(Long hid);
}
