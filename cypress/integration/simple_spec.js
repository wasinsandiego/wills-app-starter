describe('My First Test', function () {
  it('Does not do much!', function () {
    cy.visit(Cypress.env('HOST'))
    expect(true).to.equal(true)
  })
})
