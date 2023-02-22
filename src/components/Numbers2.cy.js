/// <reference types="cypress" />

import React from 'react'
import { Numbers } from './Numbers'
import '../App.css'
import { SudokuContext } from '../context/SudokuContext'

describe('Numbers', () => {
  it('shows numbers ', () => {
    cy.mount(
      <div className="innercontainer">
        <section className="status">
          <Numbers />
        </section>
      </div>,
    )
    cy.get('.status__number').should('have.length', 9)
  })
  it('shows numbers ', () => {
    cy.mount(
      <div className="innercontainer">
        <section className="status">
          <Numbers onClickNumber={cy.stub().as('click')} />
        </section>
      </div>,
    )
    cy.contains('.status__number', '1').click()
    cy.get('@click').should('be.calledTwice')
  })
  it('shows the select numbers ', () => {
    cy.mount(
      <SudokuContext.Provider value={{ numberSelected: '8' }}>
        <div className="innercontainer">
          <section className="status">
            <Numbers onClickNumber={cy.stub().as('click')} />
          </section>
        </div>
      </SudokuContext.Provider>,
    )
    cy.contains('.status__number', '8').should(
      'have.class',
      'status__number--selected',
    )
  })
})
