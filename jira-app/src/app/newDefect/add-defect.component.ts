import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';

import { DefectListComponent } from 'app/defectList/defect-list.component';
import { Defect } from 'app/defectUtils/defect.model';

@Component({
    moduleId: module.id,
    templateUrl: 'add-defect.component.html'
})

export class AddDefectComponent {
    defect = new Defect();
    categories = [
        {value: 'issue', viewValue: 'Issue'},
        {value: 'story', viewValue: 'Story'},
        {value: 'improvement', viewValue: 'Improvement'}
    ];
    constructor(public dialogRef: MdDialogRef<DefectListComponent>) {}
}