import React from 'react';
import { InputStyled, LabelStyled } from './style';

export type InputProps = {
  placeholder?: string;
  title?: string;
  name: string;
  onChange?:Function
};

export function Input({ placeholder, title, name, onChange }: InputProps) {
  return (
    <div>
      <LabelStyled htmlFor={name}>{title}</LabelStyled>

      <InputStyled onChange={onChange} name={name} placeholder={placeholder} />
    </div>
  );
}
