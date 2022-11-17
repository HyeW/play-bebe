package com.knu.server.playbebe.review.model;

import com.knu.server.playbebe.auth.model.User;
import com.knu.server.playbebe.recommend.model.Place;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Review extends TimeStamped{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String content;

    @Column
    private Double rating;

    @Column
    private LocalDate visitDate;

    @Column
    @Embedded
    private Image image;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id")
    private Place place;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public Review(String content, Double rating, LocalDate visitDate, Place place, User user, Image image) {
        this.content = content;
        this.rating = rating;
        this.visitDate = visitDate;
        this.place = place;
        setPlace(place);
        this.image = image;
        this.user = user;
    }

    //연관관계 편의 메서드
    public void setPlace(Place place){
        place.getMessages().add(this);
    }

}
