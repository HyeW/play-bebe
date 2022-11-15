package com.knu.server.playbebe.weather.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;

@Getter @Setter
@Entity
@NoArgsConstructor
@Table(name = "location")
public class location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String phase_one;

    @Column
    private String phase_two;

    @Column
    private String phase_three;

    @Column(nullable = false)
    private String X;

    @Column(nullable = false)
    private String Y;

    public location(String phase_one, String phase_two, String phase_three, String X, String Y) {
        this.phase_one = phase_one;
        this.phase_two = phase_two;
        this.phase_three = phase_three;
        this.X = X;
        this.Y = Y;
    }

}
