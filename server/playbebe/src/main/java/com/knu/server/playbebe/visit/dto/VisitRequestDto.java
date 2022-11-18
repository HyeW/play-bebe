package com.knu.server.playbebe.visit.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class VisitRequestDto {

    Long userId;
    Long placeId;
}
