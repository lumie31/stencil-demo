import { newE2EPage } from '@stencil/core/testing';

describe('web3-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<web3-accordion></web3-accordion>');
    const element = await page.find('web3-accordion');
    expect(element).toHaveClass('hydrated');
  });

  it('expands and collapses on click', async () => {
    const page = await newE2EPage();

    await page.setContent('<web3-accordion-accordion></web3-accordion-accordion>');
    const accordion = await page.find('web3-accordion');
    const button = await accordion.find('.accordion-button');

    // Click to expand
    await button.click();
    expect(accordion).toHaveClass('expanded');

    // Click to collapse
    await button.click();
    expect(accordion).not.toHaveClass('expanded');
  });
});
