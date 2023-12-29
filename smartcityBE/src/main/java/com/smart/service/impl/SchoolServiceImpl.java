package com.smart.service.impl;

import com.smart.model.city.School;
import com.smart.repo.SchoolRepository;
import com.smart.service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class SchoolServiceImpl implements SchoolService {

    @Autowired
    private SchoolRepository schoolRepository;
    public School addSchool(School school){
        return this.schoolRepository.save(school);
    }

    @Override
    public School updateSchool(School school) {
        return this.schoolRepository.save(school);
    }

    @Override
    public Set<School> getSchools() {
        return new LinkedHashSet<>(this.schoolRepository.findAll());
    }

    @Override
    public School getSchool(Long sid) {
        return this.schoolRepository.findById(sid).get();
    }

    @Override
    public void deleteSchool(Long sid) {
        School school = new School();
        school.setSid(sid);
        this.schoolRepository.delete(school);
    }
}
