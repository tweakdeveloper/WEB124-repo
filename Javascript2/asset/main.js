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
  if (band.substring(0, 3) === 'The') {
    return band.substring(4);
  } else if (band.substring(0, 1) === 'A') {
    return band.substring(2);
  } else if (band.substring(0, 2) === 'An') {
    return band.substring(3);
  }

  return band;
}

const bandsWithoutArticles = bands.map(removeArticles);
console.log(bandsWithoutArticles);
