package com.knu.server.playbebe.recommend.model;

import com.knu.server.playbebe.review.model.Review;
import com.knu.server.playbebe.visit.model.Visit;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.List;

@DynamicInsert
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "place")
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String curStatus;

    @Column
    private String telephone;

    @Column
    private String postalCode;

    @Column
    private String address;

    @Column
    private String roadNameAddress;

    @Column
    private String establishmentName;

    @Column
    private Double coordinateX;

    @Column
    private Double coordinateY;

    @Column
    private Double latitude;

    @Column
    private Double longitude;

    @Column
    @ColumnDefault("0")
    private int wantToVisit;

    @Column
    @ColumnDefault("0")
    private Double totalRating;

    @OneToMany(mappedBy="place", cascade = CascadeType.ALL)
    private List<Review> messages;

    @OneToMany(mappedBy="place", cascade = CascadeType.ALL)
    private List<Visit> visits;

    //총 별점 계산하기
    public void setTotalRating(Double rating){
        if(this.totalRating == null) {
            this.totalRating = (double) 0;
        }

        this.totalRating = ((this.totalRating * messages.size()) + rating)/(messages.size()+1);
    }

    // 연관관계 편의 메서드
    public void removeVisit(Visit visit) {
        visits.remove(visit);
        wantToVisit--;
    }

    public void addVisit(Visit visit) {
        visits.add(visit);
        wantToVisit++;
    }
}
