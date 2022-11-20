package com.knu.server.playbebe.detail.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class VisitDto {
    private int visitNum;
    private boolean visitSelected;

    public VisitDto(int visitNum, boolean visitSelected){
        this.visitNum = visitNum;
        this.visitSelected = visitSelected;
    }
}
