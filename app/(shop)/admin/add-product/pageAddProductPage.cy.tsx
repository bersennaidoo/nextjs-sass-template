import React from 'react'
import AddProductPage from './page'

describe('<AddProductPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddProductPage />)
  })
})