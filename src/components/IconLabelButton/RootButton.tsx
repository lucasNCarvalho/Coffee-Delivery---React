import { ReactNode } from 'react';
import { RootContainer } from './RootButton_styled';

interface RootProps  {
    children: ReactNode;
}

export const RootButton = ({children}: RootProps) => {
  return (
    <RootContainer>
        {children}
    </RootContainer>
  )
}
