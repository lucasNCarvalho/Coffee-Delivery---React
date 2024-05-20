interface ContentProps {
    text: string;
}

export const ContentButton = ({text}: ContentProps) => {
  return (
    <div>{text}</div>
  )
}
