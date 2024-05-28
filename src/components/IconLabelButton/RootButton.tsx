import { ReactNode } from 'react';
import { RootContainer } from './RootButton_styled';

interface RootProps  {
    children: ReactNode;
    onClick: () => void;
}

export const RootButton = ({children, onClick}: RootProps) => {



  return (
    <RootContainer onClick={onClick}>
        {children}
    </RootContainer>
  )
}
