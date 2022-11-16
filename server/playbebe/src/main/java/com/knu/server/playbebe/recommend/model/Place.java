package com.knu.server.playbebe.recommend.model;

import com.knu.server.playbebe.review.model.Review;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

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
    private Double latitude;

    @Column
    private Double longitude;

    @Column
    private Double totalRating;

    @OneToMany(mappedBy="place", cascade = CascadeType.ALL)
    private List<Review> messages;

    //총 별점 계산하기
    public void setTotalRating(int rating){
        if(this.totalRating == null) {
            this.totalRating = Double.valueOf(0);
        }

        this.totalRating = ((this.totalRating * messages.size()) + rating)/(messages.size()+1);
    }
}
