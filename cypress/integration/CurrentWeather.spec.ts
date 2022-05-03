describe("Current Weather Page", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");

    cy.intercept("GET", "/geo/1.0/direct*", { fixture: "positions.json" }).as(
      "getPositions"
    );

    cy.intercept("GET", "/data/2.5/weather?units=metric*", {
      fixture: "CurrentWeather/current_weather-cel.json",
    }).as("getCurrentWeatherCelsius");

    cy.intercept("GET", "/data/2.5/weather?units=imperial*", {
      fixture: "CurrentWeather/current_weather-imp.json",
    }).as("getCurrentWeatherFahrenheit");
  });

  it("should find the app", () => {
    cy.get("#root").should("be.visible").contains("React Weather");
  });

  describe("Page Funcionality", () => {
    it("should be able to do a search", () => {
      cy.get("input").type("São José do Rio Preto");

      cy.wait("@getPositions");

      cy.get("#cities-menu").should("be.visible");
      cy.get("#cities-menu").children().should("be.visible");

      cy.get("[data-cy='place0']").click();

      cy.wait("@getCurrentWeatherCelsius");

      cy.get("[data-cy='currentWeatherCard']").should("be.visible");
    });

    it("should be able to change unit types", () => {
      cy.get("input").type("São José do Rio Preto");

      cy.wait("@getPositions");

      cy.get("[data-cy='place0']").click();

      cy.wait("@getCurrentWeatherCelsius");

      cy.get("[data-cy='fab']").click();

      cy.get("[data-cy='imperial']").click();

      cy.wait("@getCurrentWeatherFahrenheit");

      cy.get("[data-cy='currentWeatherCard']").contains("ºF");
    });

    it("should be able to change change by clicking dropdown", () => {
      cy.get("input").type("São José do Rio Preto");

      cy.wait("@getPositions");

      cy.get("[data-cy='place0']").click();

      cy.wait("@getCurrentWeatherCelsius");

      cy.get("[data-cy='placesDropdown']").click();

      cy.get("[data-cy='place2']").click();

      cy.wait("@getCurrentWeatherCelsius");

      cy.get("[data-cy='currentWeatherCard']").contains("Minas Gerais");
    });
  });
});

export {};
