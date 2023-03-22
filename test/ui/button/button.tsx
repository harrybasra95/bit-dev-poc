import React from 'react';
import { ButtonStyled } from './style';

export type ButtonProps = {
  title?: String;
  primary?: Boolean;
  
};

export function Button({ title, primary }: ButtonProps) {
  return (
    <div>
      <ButtonStyled primary={primary}>
          {title}
      </ButtonStyled>
    </div>
  );
}
