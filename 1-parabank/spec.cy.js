context('creating unical username', () => {
  // Function to generate a random string
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const registrationData = {
    firstName: 'testowe_imię',
    lastName: 'testowe_nazwisko',
    street: 'testowa',
    city: 'testowe miasto',
    state: 'testowy state',
    zipCode: '11-111',
    phoneNumber: '555-555-555',
    ssn: 'ssn',
    username: 'test_user_' + generateRandomString(5), 
    password: 'Test123!'
  };

  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  })

  it('register new user', () => {
    cy.contains('Register').click()
    cy.get('input[name="customer.firstName"]').type(registrationData.firstName)
    cy.get('input[name="customer.lastName"]').type(registrationData.lastName)
    cy.get('input[name="customer.address.street"]').type(registrationData.street)
    cy.get('input[name="customer.address.city"]').type(registrationData.city)
    cy.get('input[name="customer.address.state"]').type(registrationData.state)
    cy.get('input[name="customer.address.zipCode"]').type(registrationData.zipCode)
    cy.get('input[name="customer.phoneNumber"]').type(registrationData.phoneNumber)
    cy.get('input[name="customer.ssn"]').type(registrationData.ssn)
    cy.get('input[name="customer.username"]').type(registrationData.username)
    cy.get('input[name="customer.password"]').type(registrationData.password)
    cy.get('input[name="repeatedPassword"]').type(registrationData.password)
    cy.get('input[type="submit"][value="Register"].button').click()
    cy.get('h1.title').contains('Welcome');
  })

  it('login user', () => {
    cy.get('input[name="username"]').type(registrationData.username)
    cy.get('input[name="password"]').type(registrationData.password)
    cy.contains('Log In').click()
    cy.get('h1.title').contains('Welcome');
  })
})

