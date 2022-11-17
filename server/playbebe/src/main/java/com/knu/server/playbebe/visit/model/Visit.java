package com.knu.server.playbebe.visit.model;


import com.knu.server.playbebe.auth.model.User;
import com.knu.server.playbebe.recommend.model.Place;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
@NoArgsConstructor
@Table(name="visit")
public class Visit extends TimeStamped {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn
    private Place place;

    @ManyToOne
    @JoinColumn
    private User user;

    // 연관관계 편의 메서드
    public void setPlace(Place place) {
        if (this.place != null) {
            this.place.removeVisit(this);
        }
        this.place = place;
        place.addVisit(this);
    }
}