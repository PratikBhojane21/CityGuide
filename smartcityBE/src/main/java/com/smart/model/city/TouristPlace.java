package com.smart.model.city;

import javax.persistence.*;

@Entity
@Table(name = "touristplace")
public class TouristPlace {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long tid;

    private String placeName;
    private String placeAddress;
    private String placeWebsite;

    public TouristPlace() {
    }

    public TouristPlace(long tid, String placeName, String placeAddress, String placeWebsite) {
        this.tid = tid;
        this.placeName = placeName;
        this.placeAddress = placeAddress;
        this.placeWebsite = placeWebsite;
    }

    public long getTid() {
        return tid;
    }

    public void setTid(long tid) {
        this.tid = tid;
    }

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public String getPlaceAddress() {
        return placeAddress;
    }

    public void setPlaceAddress(String placeAddress) {
        this.placeAddress = placeAddress;
    }

    public String getPlaceWebsite() {
        return placeWebsite;
    }

    public void setPlaceWebsite(String placeWebsite) {
        this.placeWebsite = placeWebsite;
    }
}
