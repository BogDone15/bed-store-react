import styled from 'styled-components';

export const ButtonContainer = styled.button`
padding: 1rem 3rem;
text-transform: uppercase;
letter-spacing: var(--mainSpacing);
font-size: 1rem;
background: var(--primaryColor);
color: var(--mainBlack) !important;
border: 1px solid var(--primaryColor);
transition: var(--mainTransition);
cursor: pointer;
&:hover {
 background: transparent;
 color: var(--primaryColor);
}
`;