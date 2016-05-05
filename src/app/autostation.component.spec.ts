import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AutostationAppComponent } from '../app/autostation.component';

beforeEachProviders(() => [AutostationAppComponent]);

describe('App: Autostation', () => {
  it('should create the app',
      inject([AutostationAppComponent], (app: AutostationAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'autostation works!\'',
      inject([AutostationAppComponent], (app: AutostationAppComponent) => {
    expect(app.title).toEqual('autostation works!');
  }));
});
