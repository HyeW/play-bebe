package com.knu.server.playbebe.recommend.dto;

import com.knu.server.playbebe.recommend.model.Place;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
public class PlaceSimpleInfoDto implements Comparable<PlaceSimpleInfoDto> {

    private String name;
    private String simpleAddress;
    private double totalRating;
    private int wantToVisit;
    private double distance;

    public PlaceSimpleInfoDto(Place place) {
        this.name = place.getEstablishmentName();
        this.simpleAddress = place.getAddress();
        this.totalRating = place.getTotalRating();
        this.wantToVisit = 0;
        this.distance = 0;
    }

    public PlaceSimpleInfoDto(Place place, double latitude, double longitude) {
        this.name = place.getEstablishmentName();
        this.simpleAddress = place.getAddress();
        this.totalRating = place.getTotalRating();
        this.wantToVisit = 0;
        this.distance = distance(place.getLatitude(), place.getLongitude(), latitude, longitude, "meter");
    }

    @Override
    public int compareTo(PlaceSimpleInfoDto o) {
        return Double.compare(this.distance, o.distance);
    }

    private static double distance(double lat1, double lon1, double lat2, double lon2, String unit) {
        double theta = lon1 - lon2;
        double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));

        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist = dist * 60 * 1.1515;

        if (Objects.equals(unit, "kilometer")) {
            dist = dist * 1.609344;
        }

        if(Objects.equals(unit, "meter")){
            dist = dist * 1609.344;
        }

        return (dist);
    }

    // This function converts decimal degrees to radians
    private static double deg2rad(double deg) {
        return (deg * Math.PI / 180.0);
    }

    // This function converts radians to decimal degrees
    private static double rad2deg(double rad) {
        return (rad * 180 / Math.PI);
    }
}
