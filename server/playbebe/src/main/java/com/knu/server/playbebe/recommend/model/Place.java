package com.knu.server.playbebe.recommend.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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
}
