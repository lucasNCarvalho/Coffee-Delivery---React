import { useState } from "react";
import { IncrementButtonContainer } from "./styled"



export const IncrementButton = () => {

  const [increment, SetIncrement] = useState(1);

  function incrementAdd() {

    SetIncrement(increment => increment += 1)
  }

  function decrement() {
    if (increment > 0) {
      SetIncrement(increment => increment -= 1)
    }
  }

  return (
    <IncrementButtonContainer >
      <span onClick={decrement}>&minus;</span>
      <p>{increment}</p>
      <span onClick={incrementAdd}>+</span>
    </IncrementButtonContainer >
  )
}
