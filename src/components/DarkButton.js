import styled from "styled-components";

export const DarkButtonContainer = styled.button `
  text-transform: capitalize;
  font-size: 1.2rem;
  background: transparent;
  border: 0.05rem solid var(--mainOrange);
  border-color: ${props => props.cart? "var(--mainCayenne)" : "var(--mainOrange)"};
  color: ${props => props.cart? "var(--mainCayenne)" : "var(--mainOrange)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &: hover {
    background: ${props => props.cart ? "var(--mainCayenne)" : "var(--mainOrange)"};
    color: ${props => props.cart ? "var(--mainWhite)" : "var(--mainWhite)"};
  }
  &: focus {
    outline: none;
  }
`
