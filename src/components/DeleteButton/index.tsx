import { Trash } from "@phosphor-icons/react"
import { DeleteButtonContainer } from "./styled"
import { defaultTheme } from "../../styles/themes/default"

interface DeleteButtonProps {
  deleteOrder: () => void
}

export const DeleteButton = ({deleteOrder}: DeleteButtonProps) => {
  return (
    <DeleteButtonContainer onClick={deleteOrder}>
        <Trash size={16} color={defaultTheme["purple-dark"]}/>
        <p>REMOVER</p>
    </DeleteButtonContainer>
  )
}
