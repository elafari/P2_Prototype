import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss']
})
export class PatientsComponent {

    route: string = 'patients';
    patients: FirebaseListObservable<any>;
    
    constructor(private angularFire: AngularFire) {
        this.patients = angularFire.database.list('patients', {
            query: {
                orderByKey: true
            }
        });
        console.log('this.patients', this.patients);
    }

    showPatient(patientKey: string) {
        alert('New Route: ' + this.route + '/' + patientKey);
    }

    getMostRecentCase(patientKey: string) {
        debugger;
        /*this.patients.forEach(function(val, idx, array) {
            debugger;
        });*/
        this.patients.map(function(patient) {
            debugger;
        });

        return 'tbd';
    }

    addPatient(newName: string) {
        this.patients.push({name: newName});
    }

    updatePatient(key: string, newText: string) {
        this.patients.update(key, {name: newText});
    }

    deletePatient(key: string) {
        this.patients.remove(key);
    }

    deletePatientAll() {
        //this.patients.remove();
    }
}
