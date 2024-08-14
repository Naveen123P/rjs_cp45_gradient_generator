// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  flex-grow: 1;
`
export const CustomButton = styled.button`
  height: 2.5rem;
  width: 9rem;
  color: #014f7b;
  font-weight: bold;
  border-radius: 5px;
  background-color: #ffffff;
  padding: auto;
  border: none;
  margin: 4px;
  opacity: ${props => (props.active ? 1 : 0.5)};
`
