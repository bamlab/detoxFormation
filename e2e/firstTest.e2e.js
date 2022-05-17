describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('has a Home page', async () => {
    await expect(element(by.text('Home Page'))).toBeVisible();
  });

  it('has a Profile page', async () => {
    await expect(element(by.text('Profile Page'))).not.toBeVisible();

    await element(by.id('profile-id')).tap();

    await expect(element(by.text('Profile Page'))).toBeVisible();
  });

  it('has a Help page with a Help button', async () => {
    await expect(element(by.text('Help Page'))).not.toBeVisible();

    await element(by.text('Go to help page')).tap();

    await expect(element(by.text('Help Page'))).toBeVisible();
    await expect(element(by.text('Help text'))).not.toBeVisible();

    await element(by.text('HelpButton')).tap();

    await expect(element(by.text('Help text'))).toBeVisible();
  });

  it('has a Count page which counts views', async () => {
    await element(by.text('Go to count page')).tap();

    await expect(element(by.text('The page views count is: 1'))).toBeVisible();

    await element(by.text('Go to Profile')).tap();
    await element(by.text('Go back')).tap();

    await expect(element(by.text('The page views count is: 2'))).toBeVisible();
  });
});
