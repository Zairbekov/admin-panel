import { TablesModule } from './user.module';

describe('TablesModule', () => {
  let tablesModule: TablesModule;

  beforeEach(() => {
    tablesModule = new TablesModule();
  });

  it('should create an instance', () => {
    expect(tablesModule).toBeTruthy();
  });
});
