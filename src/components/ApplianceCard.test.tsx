import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ApplianceCard from './ApplianceCard';

// A very simple "describe" and "it" to simulate a test structure without a framework
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
    // In a real test runner, you might re-throw or exit with a non-zero code.
  }
}

// Call the test suite
describe('ApplianceCard Component', () => {
  it('should render appliance details correctly', () => {
    const testAppliance = {
      id: '1',
      name: 'Test Fridge',
      description: 'A very cool test fridge.',
      imageUrl: '/images/test-fridge.jpg',
    };

    // Use ReactDOMServer to render the component to a static HTML string.
    // This allows us to check the rendered output without a full browser environment
    // or a more comprehensive testing library.
    const htmlString = ReactDOMServer.renderToString(
      React.createElement(ApplianceCard, { appliance: testAppliance })
    );

    const expectedImgSrc = `src=\"${testAppliance.imageUrl}\"`;
    const expectedImgAlt = `alt=\"${testAppliance.name}\"`;
    const expectedName = `<h3>${testAppliance.name}</h3>`;
    const expectedDescription = `<p class=\"text-gray-700 text-base leading-relaxed px-2\">${testAppliance.description}</p>`; // Include full class name if strict

    if (htmlString.includes(expectedImgSrc) && htmlString.includes(expectedImgAlt)) {
      // Assertion passed for image attributes
    } else {
      throw new Error(`Image src or alt not found. Expected "${expectedImgSrc}", "${expectedImgAlt}".`);
    }

    if (htmlString.includes(expectedName)) {
      // Assertion passed for appliance name
    } else {
      throw new Error(`Appliance name not found. Expected "${expectedName}".`);
    }

    if (htmlString.includes(expectedDescription)) {
      // Assertion passed for appliance description
    } else {
      throw new Error(`Appliance description not found. Expected "${expectedDescription}".`);
    }
  });
});
