/// <reference types="cypress" />
import React from 'react'
import { StatusSection } from './StatusSection'
import '../../App.css'

describe('StatusSection', () => {
  it('changes modes', () => {
   cy.mount(
       <div className='innercontainer'>
         <StatusSection />
       </div>
   )

    cy.get('.status__action-mistakes-mode input').should('not.be.checked')
    cy.get('.status__action-mistakes-mode').click()
    cy.get('.status__action-mistakes-mode input').should('be.checked')

    cy.get('.status__action-fast-mode input').should('not.be.checked')
    cy.get('.status__action-fast-mode').click()
    cy.get('.status__action-fast-mode input')
        .should('be.checked')
        .wait(1000, { log: false })  })
    cy.screenshot()
    cy.viewport(290,500)
    cy.screenshot()
})
