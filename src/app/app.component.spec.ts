import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { WordFinderComponent } from "./word-finder/word-finder.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SharedModule } from "src/shared/shared.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      declarations: [AppComponent, WordFinderComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'WordFinderApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("WordFinderApp");
  });
});
