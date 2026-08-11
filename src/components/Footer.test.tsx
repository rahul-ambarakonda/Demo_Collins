import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Footer from './Footer';

function describe(name: string, callback: () => void) {
  console.log(`\nRunning Test Suite: ${name}`);
  callback();
}

function it(name: string, callback: () => void) {
  try {
    callback();
    console.log(`  ✓ ${name}`);
  } catch (error: any) {
    console.error(`  ✗ ${name}`);
    console.error(`    Error: ${error.message}`);
  }
}

describe('Footer Component', () => {
  it('should render the copyright notice with the current year', () => {
    const htmlString = ReactDOMServer.renderToString(
      React.createElement(Footer, null)
    );

    const currentYear = new Date().getFullYear();
    const expectedCopyrightText = `Home Appliances. All rights reserved.`;

    // Check for the presence of the year and the copyright text within a p tag.
    // The &copy; symbol might be rendered as &#xA9; or ©.
    // We'll check for the most stable parts.
    if (htmlString.includes(String(currentYear)) && htmlString.includes(expectedCopyrightText)) {
      // Assertion passed for footer copyright
    } else {
      throw new Error(`Footer copyright not found or incorrect. Expected to find year "${currentYear}" and text "${expectedCopyrightText}".`);
    }
  });
});
