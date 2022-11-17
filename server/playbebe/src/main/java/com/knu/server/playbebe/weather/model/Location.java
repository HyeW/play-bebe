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
    private String phase1;

    @Column
    private String phase2;

    @Column
    private String phase3;

    @Column(nullable = false)
    private String X;

    @Column(nullable = false)
    private String Y;

    public Location(String phase1, String phase2, String phase3, String X, String Y) {
        this.phase1 = phase1;
        this.phase2 = phase2;
        this.phase3 = phase3;
        this.X = X;
        this.Y = Y;
    }

}
