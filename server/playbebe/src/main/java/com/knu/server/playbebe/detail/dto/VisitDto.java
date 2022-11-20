package com.knu.server.playbebe.detail.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class VisitDto {
    private int visitNum;
    private boolean isVisit;

    public VisitDto(int visitNum, boolean isVisit){
        this.visitNum = visitNum;
        this.isVisit = isVisit;
    }
}
