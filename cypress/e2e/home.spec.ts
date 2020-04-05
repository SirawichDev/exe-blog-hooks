context("Root", () => {
  beforeEach(() => {
    visitRootPage()
  })
describe('Header', () => {

  it("Text Header of Homepage should correct", () => {
    rootEleGet().find("strong")
      .should("have.text", "- Welcome To My Home -")
  })
})

  describe("Type Buttons", () => {
    it("should have 3 buttons", () => {
      rootEleGet().get("[cy-test=type-menu-test]").find("div")
        .should(($div) => {
          expect($div).to.have.length(3)
        })
    })
    it("can click to All type", () => {
      rootEleGet().get("[cy-test=all-click-test]").click({ force: true }).wait(1000).find("span").should("have.text", "All")
    })
    it("can click to blog type", () => {
      rootEleGet().get("[cy-test=blog-click-test]").click({ force: true }).wait(1000).find("span").should("have.text", "Blog")
    })
    it("can click to LiftStyle type", () => {
      rootEleGet().get("[cy-test=lifeStyle-click-test]").click({ force: true }).find("span").should("have.text", "Life Style")
    })
  })
})


const visitRootPage = () => {
  cy.visit("/")
}

const rootEleGet = () => {
  return cy.get("#___gatsby")
}