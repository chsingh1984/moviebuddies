import { TestBed } from '@angular/core/testing';

import { MoviedbserviceService } from './moviedbservice.service';

describe('MoviedbserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviedbserviceService = TestBed.get(MoviedbserviceService);
    expect(service).toBeTruthy();
  });
});
