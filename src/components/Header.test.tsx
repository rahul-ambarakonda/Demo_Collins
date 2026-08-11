import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Header from './Header';

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

describe('Header Component', () => {
  it('should render the title "Home Appliances" correctly', () => {
    const htmlString = ReactDOMServer.renderToString(
      React.createElement(Header, null)
    );

    const expectedTitleContent = 'Home Appliances';

    // Check for the presence of the h1 tag and its content
    if (htmlString.includes(`<h1 class=\"text-2xl font-bold\">${expectedTitleContent}</h1>`)) {
      // Assertion passed for header title
    } else {
      throw new Error(`Header title not found or incorrect. Expected to find "${expectedTitleContent}" within an h1 tag.`);
    }
  });
});
