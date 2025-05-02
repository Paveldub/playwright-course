import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

test.describe('Form layout page', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText(/forms/i).click();
    await page.getByText(/form layouts/i).click();
  })

  test('input fields', async ({ page }) => {
    const usingTheGridEmailInput = page.locator("nb-card", { hasText: /using the grid/i }).getByRole('textbox', { name: /email/i });

    await usingTheGridEmailInput.fill('test@gmail.com');
  })

  test('radio buttons', async ({ page }) => {
    const usingTheGridForm = page.locator("nb-card", { hasText: /using the grid/i });

    // await usingTheGridForm.getByLabel(/option 1/i).check({ force: true });
    // await usingTheGridForm.getByRole('radio', { name: "option 1" }).check({ force: true });
    // const isStatus = await usingTheGridForm.getByLabel(/option 1/i).isChecked();

    // expect(isStatus).toBeTruthy();
    await usingTheGridForm.getByLabel(/option 2/i).check({ force: true });

    expect(await usingTheGridForm.getByLabel(/option 1/i).isChecked()).toBeFalsy()
    expect(await usingTheGridForm.getByLabel(/option 2/i).isChecked()).toBeTruthy()
  })
})


test.describe('checkboxes', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText(/modal and overlays/i).click();
        await page.getByText(/toastr/i).click();
    })
})