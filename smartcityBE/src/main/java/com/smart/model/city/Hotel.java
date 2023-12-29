package com.smart.model.city;

import javax.persistence.*;

@Entity
@Table(name = "hotel")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long hid;
    private String hotelName;
    private String hotelAddress;
    private String hotelLink;

    public Hotel() {
    }

    public Hotel(long hid, String hotelName, String hotelAddress, String hotelLink) {
        this.hid = hid;
        this.hotelName = hotelName;
        this.hotelAddress = hotelAddress;
        this.hotelLink = hotelLink;
    }

    public long getHid() {
        return hid;
    }

    public void setHid(long hid) {
        this.hid = hid;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getHotelAddress() {
        return hotelAddress;
    }

    public void setHotelAddress(String hotelAddress) {
        this.hotelAddress = hotelAddress;
    }

    public String getHotelLink() {
        return hotelLink;
    }

    public void setHotelLink(String hotelLink) {
        this.hotelLink = hotelLink;
    }
}
