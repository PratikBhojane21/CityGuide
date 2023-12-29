package com.smart.controller;

import com.smart.model.city.Hotel;
import com.smart.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hotel")
@CrossOrigin("*")
public class HotelController {
    @Autowired
    private HotelService hotelService;

    @PostMapping("/")
    public ResponseEntity<?> addHotel(@RequestBody Hotel hotel){
        Hotel hotel1 = this.hotelService.addHotel(hotel);
        return ResponseEntity.ok(hotel1);
    }

    //get
    @GetMapping("/{hid}")
    public Hotel getHotel(@PathVariable("hid") Long hid){
        return this.hotelService.getHotel(hid);
    }

    //getAll
    @GetMapping("/")
    public ResponseEntity<?> getHotels(){
        return ResponseEntity.ok(this.hotelService.getHotels());
    }

    //update
    @PutMapping("/")
    public Hotel updateHotel(@RequestBody Hotel hotel){
        return this.hotelService.updateHotel(hotel);
    }

    //delete
    @DeleteMapping("/{hid}")
    public void deleteHotel(@PathVariable("hid") Long hid){
        this.hotelService.deleteHotel(hid);
    }
}
