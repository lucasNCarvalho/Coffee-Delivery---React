
import { IncrementButtonContainer } from "./styled"

interface IncrementButtonProps {
  quantity: number,
  incrementAdd: () => void,
  decrement: () => void
}


export const IncrementButton = ({quantity, incrementAdd, decrement}: IncrementButtonProps ) => {

  return (
    <IncrementButtonContainer >
      <span onClick={decrement}>&minus;</span>
      <p>{quantity}</p>
      <span onClick={incrementAdd}>+</span>
    </IncrementButtonContainer >
  )
}
