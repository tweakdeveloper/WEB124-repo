const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

/**
 * Removes articles from a band name
 * @param {string} band band name to remove articles from
 * @returns {string} the band name with articles removed
 */
function removeArticles(band) {
  if (band.substring(0, 4) === 'The ') {
    return band.substring(4);
  } else if (band.substring(0, 2) === 'A ') {
    return band.substring(2);
  } else if (band.substring(0, 3) === 'An ') {
    return band.substring(3);
  }

  return band;
}

/**
 * Reinserts articles into a band name
 * @param {string} band band name to reinsert the article
 * @returns {string} the band name with the article reinserted (if applicable)
 */
function returnArticles(band) {
  for (const originalBand of bands) {
    if (originalBand.endsWith(band)) {
      return originalBand;
    }
  }

  // we shouldn't end up here; every band with an article removed should have a
  // corresponding original band name.
  return '???';
}

const sortedBands = bands.map(removeArticles).sort().map(returnArticles);
console.log(sortedBands);
