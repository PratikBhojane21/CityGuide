package com.smart.controller;

import com.smart.model.city.School;
import com.smart.service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/school")
@CrossOrigin("*")
public class SchoolController {
    @Autowired
    private SchoolService schoolService;

    @PostMapping("/")
    public ResponseEntity<?> addSchool(@RequestBody School school){
        School school1 = this.schoolService.addSchool(school);
        return ResponseEntity.ok(school1);
    }

    //get
    @GetMapping("/{sId}")
    public School getSchool(@PathVariable("sId") Long sid){
        return this.schoolService.getSchool(sid);
    }

    //getAll
    @GetMapping("/")
    public ResponseEntity<?> getSchools(){
        return ResponseEntity.ok(this.schoolService.getSchools());
    }

    //update
    @PutMapping("/")
    public School updateSchool(@RequestBody School school){
        return this.schoolService.updateSchool(school);
    }

    //delete
    @DeleteMapping("/{sId}")
    public void deleteSchool(@PathVariable("sId") Long sId){
        this.schoolService.deleteSchool(sId);
    }
}
