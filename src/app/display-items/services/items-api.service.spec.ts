import { TestBed } from '@angular/core/testing';

import { ItemsAPIService } from './items-api.service';

describe('ItemsAPIService', () => {
  let service: ItemsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
