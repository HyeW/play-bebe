package com.knu.server.playbebe.visit.dto;

import com.knu.server.playbebe.auth.model.User;
import com.knu.server.playbebe.recommend.model.Place;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class VisitDto {

    Place place;
    User user;

    public VisitDto(Place place, User user) {
        this.place = place;
        this.user = user;
    }
}
