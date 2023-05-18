 /// <reference types="cypress" />
it("shows mainpage",() =>
   {
  cy.visit("http://137.184.245.177:3000/")
});

it("shows map",() =>
   {
 cy.visit("http://137.184.245.177:3000/map.html/")
});

it("shows visited",() =>
   {
 cy.visit("http://137.184.245.177:3000/visited.html/")
});
it("shows login",() =>
   {
 cy.visit("http://137.184.245.177:3000/login.html/")
});
it("shows data",() =>
   {
 cy.visit("http://137.184.245.177:3000/data.html/")
});
