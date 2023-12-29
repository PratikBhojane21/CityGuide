package com.smart.controller;

import com.smart.model.city.TouristPlace;
import com.smart.service.TouristPlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/touristplace")
@CrossOrigin("*")
public class TouristPlaceController {
    @Autowired
    private TouristPlaceService touristPlaceService;

    @PostMapping("/")
    public ResponseEntity<?> addTouristPlace(@RequestBody TouristPlace touristPlace){
        TouristPlace touristPlace1 = this.touristPlaceService.addTouristPlace(touristPlace);
        return ResponseEntity.ok(touristPlace1);
    }

    //get
    @GetMapping("/{tid}")
    public TouristPlace getTouristPlace(@PathVariable("tid") Long tid){
        return this.touristPlaceService.getTouristPlace(tid);
    }

    //getAll
    @GetMapping("/")
    public ResponseEntity<?> getTouristPlaces(){
        return ResponseEntity.ok(this.touristPlaceService.getTouristPlaces());
    }

    //update
    @PutMapping("/")
    public TouristPlace updateTouristPlace(@RequestBody TouristPlace touristPlace){
        return this.touristPlaceService.updateTouristPlace(touristPlace);
    }

    //delete
    @DeleteMapping("/{tid}")
    public void deleteTouristPlace(@PathVariable("tid") Long tid){
        this.touristPlaceService.deleteTouristPlace(tid);
    }
}
