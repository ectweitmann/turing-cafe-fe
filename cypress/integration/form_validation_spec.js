describe('Inputting form data flow', () => {
  beforeEach(() => {
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
  })

  it('should update input values as form is filled out', () => {
    cy.visit('http://localhost:3000')
      .get('input[name="name"]').type('Ethan').should('have.value', 'Ethan')
      .get('input[name="date"]').type('04/13').should('have.value', '04/13')
      .get('input[name="time"]').type('5:00pm').should('have.value', '5:00pm')
      .get('input[name="number"]').type('2').should('have.value', '2')
  });

  it('should update display with new reservation once form is submitted', () => {
    cy.visit('http://localhost:3000')
      .get('input[name="name"]').type('Ethan')
      .get('input[name="date"]').type('04/13')
      .get('input[name="time"]').type('5:00pm')
      .get('input[name="number"]').type('2')
      .get('.submit-button').click();
    cy.get('.resy-card').contains('Ethan')
    cy.get('.resy-card').contains('04/13')
    cy.get('.resy-card').contains('5:00pm')
  });
});
