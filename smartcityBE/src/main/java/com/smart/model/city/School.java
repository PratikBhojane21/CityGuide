package com.smart.model.city;

import javax.persistence.*;

@Entity
@Table(name = "school")
public class School {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long sid;

    private String schoolName;
    private String universityName;
    private String sAddress;
    private String sWebsite;

    public School() {
    }

    public School(long sid, String schoolName, String universityName, String sAddress, String sWebsite) {
        this.sid = sid;
        this.schoolName = schoolName;
        this.universityName = universityName;
        this.sAddress = sAddress;
        this.sWebsite = sWebsite;
    }

    public long getSid() {
        return sid;
    }

    public void setSid(long sid) {
        this.sid = sid;
    }

    public String getSchoolName() {
        return schoolName;
    }

    public void setSchoolName(String schoolName) {
        this.schoolName = schoolName;
    }

    public String getUniversityName() {
        return universityName;
    }

    public void setUniversityName(String universityName) {
        this.universityName = universityName;
    }

    public String getsAddress() {
        return sAddress;
    }

    public void setsAddress(String sAddress) {
        this.sAddress = sAddress;
    }

    public String getsWebsite() {
        return sWebsite;
    }

    public void setsWebsite(String sWebsite) {
        this.sWebsite = sWebsite;
    }
}
