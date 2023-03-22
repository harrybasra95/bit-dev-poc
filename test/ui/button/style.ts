import styled from 'styled-components';

export const ButtonStyled = styled.button`
     padding:10px;
     margin:10px;
     border-radius: 5px;
     border: 1px solid grey;
     ${(props)=>props.primary && (
          `
               background-color: orangered;
               color: white;
               border: 1px solid orangered;
          `
     )}
`;