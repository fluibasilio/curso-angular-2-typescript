import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {

  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Fernando Luigi Basilio'`, async(() => {
    expect(app.title).toEqual('Fernando Luigi Basilio');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Fernando Luigi Basilio!');
  }));

  describe('AppComponent:search', () => {

    it('deve retornar array com 3 elementos', () => {
      expect(app.search()).toEqual(['nike', 'adidas', 'rebook']);
    });

    it('deve retornar array com o elemento adidas', () => {
      expect(app.search('adi')).toEqual(['adidas']);
    });

  });


});
