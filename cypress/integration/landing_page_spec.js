describe('Visiting Landing Page flow', () => {
  it('should see a header, empty form, and list of reservations', () => {
    cy.intercept('http://localhost:3001/api/v1/reservations',
    [
      {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
      },
      {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
      },
      {
        "id": 3,
        "name": "Pam",
        "date": "1/21",
        "time": "6:00",
        "number": 4
      },
      {
        "id": 4,
        "name": "Khalid",
        "date": "5/9",
        "time": "7:30",
        "number": 7
      },
      {
        "id": 5,
        "name": "Will",
        "date": "5/15",
        "time": "6:30",
        "number": 2
      },
      {
        "id": 6,
        "name": "Eric",
        "date": "5/30",
        "time": "6:00",
        "number": 8
      },
      {
        "id": 7,
        "name": "Robbie",
        "date": "6/5",
        "time": "5:30",
        "number": 2
      },
      {
        "id": 8,
        "name": "Travis",
        "date": "6/8",
        "time": "7:00",
        "number": 12
      },
      {
        "id": 9,
        "name": "Brittany",
        "date": "9/9",
        "time": "7:30",
        "number": 3
      }
    ]
  );

    cy.visit('http://localhost:3000')
      .contains('Turing Cafe Reservations')
      .get('form').children().should('have.length', 5)
      .get('.resy-container').children('.resy-card').should('have.length', 9)
      .get('.resy-card').children().should('have.length', 45)
      .get('.resy-card').contains('Christie')
      .get('.resy-card').contains('Brittany')
  });
});
