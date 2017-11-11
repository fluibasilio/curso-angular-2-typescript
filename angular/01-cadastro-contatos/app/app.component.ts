import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    log(param: string): void{
        console.log("AppComponent log > ", param);
    }

}