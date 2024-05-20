import { Trash } from "@phosphor-icons/react"
import { DeleteButtonContainer } from "./styled"
import { defaultTheme } from "../../styles/themes/default"

export const DeleteButton = () => {
  return (
    <DeleteButtonContainer>
        <Trash size={16} color={defaultTheme["purple-dark"]}/>
        <p>REMOVER</p>
    </DeleteButtonContainer>
  )
}
