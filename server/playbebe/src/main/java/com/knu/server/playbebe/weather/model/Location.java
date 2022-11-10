package com.knu.server.playbebe.weather.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;

@Getter @Setter
@NoArgsConstructor
@Entity
@Table(name = "location")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String phase_1;

    @Column
    private String phase_2;

    @Column
    private String phase_3;

    @Column(nullable = false)
    private int X;

    @Column(nullable = false)
    private int Y;

    public Location(String phase_1, String phase_2, String phase_3, int X, int Y){
        this.phase_1 = phase_1;
        this.phase_2 = phase_2;
        this.phase_3 = phase_3;
        this.X = X;
        this.Y = Y;
    }
}
