import { render, waitFor } from "@testing-library/react"
import { Joke } from "../Joke"

describe("Render Jokes",()=>{
    test("Render the joke",async()=>{
      const {getByTestId} =  render(<Joke/>)
      const jokeHeadline = getByTestId('jokeHeadline')
      await waitFor(()=>expect(jokeHeadline.innerHTML).toBeTruthy())
    })
})