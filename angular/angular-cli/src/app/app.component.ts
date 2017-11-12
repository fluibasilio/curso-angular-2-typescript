import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Fernando Luigi Basilio';
  marcas: string[] = ['nike', 'adidas', 'rebook'];
  message: string = 'Mensagem inicial';

  search(term?: string): string[] {
    if (!term) return this.marcas;
    return this.marcas.filter(marca => marca.indexOf(term) > -1);
  }

  onChangeMessage():void {
    this.message = 'Segunda mensagem';
  }

}
