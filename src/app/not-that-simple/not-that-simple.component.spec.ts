import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotThatSimpleComponent } from './not-that-simple.component';
import { By } from '@angular/platform-browser';

describe('NotThatSimpleComponent', () => {
  let fixture: ComponentFixture<NotThatSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });

    fixture = TestBed.createComponent(NotThatSimpleComponent);
  });

  it('Quando clicar no botao renderiza uma label atraves de input', () => {
    const onClick = jasmine.createSpy('onClick');

    fixture.componentInstance.label = 'fake label';

    fixture.detectChanges();

    const buttonText = fixture.nativeElement.querySelector(
      '[data-testid=button]'
    )?.textContent;

    expect(buttonText).toEqual('fake label');
  });

  it('Quando clicar no botao emite um evento', () => {
    const myEventSpy = jasmine.createSpy('myEvent');

    fixture.componentInstance.myEventEmitter.subscribe(myEventSpy);

    fixture.debugElement
      .query(By.css('[data-testid=button]'))
      .triggerEventHandler('click');

    expect(myEventSpy).toHaveBeenCalled();
  });
});
