import { ElementType } from "react"
import { defaultTheme } from "../../styles/themes/default"

interface IconProps {
    icon: ElementType
}

export const IconButton = ({icon: Icon}: IconProps) => {
  return (
    <Icon size={16} color={defaultTheme["purple-dark"]}/>
  )
}
