package com.smart.service;

import com.smart.model.city.School;

import java.util.Set;

public interface SchoolService {
    public School addSchool(School school);
    public School updateSchool(School school);
    public Set<School> getSchools();
    public School getSchool(Long sid);
    public void deleteSchool(Long sid);
}
