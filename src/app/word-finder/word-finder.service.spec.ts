import { TestBed } from '@angular/core/testing';

import { WordFinderService } from './word-finder.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('WordFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [      
      HttpClientTestingModule
    ],
  }));

  it('should be created', () => {
    const service: WordFinderService = TestBed.get(WordFinderService);
    expect(service).toBeTruthy();
  });
});
