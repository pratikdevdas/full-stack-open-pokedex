describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://127.0.0.1:5001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})