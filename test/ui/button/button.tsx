import React from 'react';
import { ButtonStyled } from './style';

export type ButtonProps = {
  title?: String;
  primary?: Boolean;
  onClick?: Function
  
};

export function Button({ title, primary, onClick }: ButtonProps) {
  return (
    <div>
      <ButtonStyled onClick={onClick} primary={primary}>
          {title}
      </ButtonStyled>
    </div>
  );
}
