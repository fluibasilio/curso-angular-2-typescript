import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        
        <div class="container">
            <h1>My First Angular 2 App!!!</h1>
        </div>
        
        <router-outlet></router-outlet>
        
    `
})

export class AppComponent {}