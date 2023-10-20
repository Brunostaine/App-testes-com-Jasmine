import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title)
      .withContext('titulo precisa ser igual a "Simple component"')
      .toEqual("Simple component");

    const nativeElementText = nativeElement.querySelector(
      '[data-testid=title]'
    )?.textContent;

    expect(nativeElementText).toEqual('Simple component');
  });
});
