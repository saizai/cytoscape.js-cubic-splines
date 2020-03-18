module.exports = function( coords ){
  let cy = this;

  // your extension impl...
  cy.add({
    group: 'nodes',
    position: coords
  });

  return this; // chainability
};
