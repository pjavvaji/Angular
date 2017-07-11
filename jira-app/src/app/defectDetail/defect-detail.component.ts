import { Component, Input } from '@angular/core';

import { Defect } from 'app/defectUtils/defect.model';

@Component({
    moduleId: module.id,
    selector: 'defect-detail',
    templateUrl: 'defect-detail.component.html'
})

export class DefectDetailComponent {
    @Input() selectedDefect: Defect;
}