// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
`
export const Para = styled.p`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0px;
`
export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`
export const FlexDiv = styled.div`
  display: flex;
`
export const StyledInput = styled.input`
  padding: 0px;
  margin: 0px;
  height: 3rem;
  width: 6rem;
  background-color: transparent;
  border: none;
`
export const StyledDiv = styled.div`
  position: relative;
`
export const GenerateButton = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  border: none;
  font-weight: bolder;
  padding: auto;
  border-radius: 10px;
  height: 3rem;
  width: 9rem;
  font-size: large;
  margin-top: 20px;
`
