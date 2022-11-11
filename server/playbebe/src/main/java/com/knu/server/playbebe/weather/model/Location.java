package com.knu.server.playbebe.weather.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;

@Getter @Setter
@Entity
@NoArgsConstructor
@Table(name = "location")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String phaseOne;

    @Column
    private String phaseTwo;

    @Column
    private String phaseThree;

    @Column(nullable = false)
    private String X;

    @Column(nullable = false)
    private String Y;

    public Location(String phaseOne, String phaseTwo, String phaseThree, String X, String Y) {
        this.phaseOne = phaseOne;
        this.phaseTwo = phaseTwo;
        this.phaseThree = phaseThree;
        this.X = X;
        this.Y = Y;
    }

}
