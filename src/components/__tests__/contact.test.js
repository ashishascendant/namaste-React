import { render,screen } from "@testing-library/react"
import Contactus from "../Contactus"
import "@testing-library/jest-dom"

test("testing for loading of component contact us",()=>{
  render(<Contactus/>)
  const heading = screen.getByRole("heading")
  expect(heading).toBeInTheDocument();
})