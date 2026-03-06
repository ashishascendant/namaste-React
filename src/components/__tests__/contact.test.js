import { render,screen } from "@testing-library/react"
import Contactus from "../Contactus"
import "@testing-library/jest-dom"

describe("multiple test cases for a part",()=>{
  test("testing for loading of component contact us",()=>{
  render(<Contactus/>)
  const heading = screen.getByRole("heading")
  expect(heading).toBeInTheDocument();
})
})
// when you have multiple test cases you can have them inside the describe works same like test just accumulating the multiple test cases in one place
