import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AddDefectComponent } from 'app/newDefect/add-defect.component';

import { Defect } from 'app/defectUtils/defect.model';
import { DefectService} from 'app/defectUtils/defect.service';

@Component({
    moduleId: module.id,
    selector: 'defect-list',
    templateUrl: 'defect-list.component.html',
    styleUrls: ['../defectUtils/defect.component.css'],
})

export class DefectListComponent implements OnInit {
    defects: Defect[];
    selectedDefect: Defect;

    constructor(private defectService: DefectService, private dialog: MdDialog) { }

    ngOnInit() {
        this.getDefects();
     }

     getDefects(): void {
         //this.defectService.getDefectsSlowly().then(defects => this.defects = defects);
         this.defectService.getDefects()
            .subscribe(
                defects => this.defects = defects,
                err => {
                    // Log errors if any
                    console.log(err);
                });
     }

     onSelect(defect: Defect) {
         this.selectedDefect = defect;
     }

     addDefectPopup() {
        let dialogRef = this.dialog.open(AddDefectComponent, {
            height: '400px',
            width: '600px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            if(result !== 'CANCEL') {
                console.log('Saving', result);
                result.id = 0;
                this.defectService.addDefect(result).subscribe((data) => this.getDefects());
            }
        });
     }
}