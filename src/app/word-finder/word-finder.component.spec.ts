import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WordFinderComponent } from "./word-finder.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SharedModule } from "src/shared/shared.module";

describe("WordFinderComponent", () => {
  let component: WordFinderComponent;
  let fixture: ComponentFixture<WordFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      declarations: [WordFinderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
