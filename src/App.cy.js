import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
    cy.get(".inputFields")
    cy.get('#userName').type('elon musk')
    cy.get('#save').click()
    cy.get('#output').should('be.visible').and('contain', 'elon musk')
    cy.get('#apiHit').click()
    cy.get('#apiData').should('be.visible')
  })
  // it( 'select text box',()=>{

  // })
})
