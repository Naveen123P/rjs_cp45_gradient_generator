import {Component} from 'react'
import {
  GradientContainer,
  Heading,
  Para,
  List,
  FlexDiv,
  StyledInput,
  StyledDiv,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

const dummyState = {
  direction: gradientDirectionsList[0].value,
  color1: '#8ae323',
  color2: '#014f7b',
}

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    activeDirection: gradientDirectionsList[0].directionId,
    inputColor1: '#8ae323',
    inputColor2: '#014f7b',
  }

  changeDirection = (id, value) => {
    dummyState.direction = value
    this.setState({activeDirection: id})
  }

  onChangeColor1 = event => {
    dummyState.color1 = event.target.value
    this.setState({inputColor1: event.target.value})
  }

  onChangeColor2 = event => {
    dummyState.color2 = event.target.value
    this.setState({inputColor2: event.target.value})
  }

  generateGradient = () => {
    this.setState({...dummyState})
  }

  render() {
    const {
      direction,
      color1,
      color2,
      activeDirection,
      inputColor1,
      inputColor2,
    } = this.state
    return (
      <GradientContainer
        data-testid="gradientGenerator"
        direction={`to ${direction}`}
        color1={color1}
        color2={color2}
      >
        <Heading fontWeight="bold">Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <List>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              values={eachItem}
              changeDirection={this.changeDirection}
              isActiveDirection={activeDirection === eachItem.directionId}
            />
          ))}
        </List>
        <Para>Pick the Colors</Para>
        <FlexDiv>
          <StyledDiv>
            <Para>{inputColor1}</Para>
            <StyledInput
              type="color"
              value={inputColor1}
              onChange={this.onChangeColor1}
            />
          </StyledDiv>
          <StyledDiv>
            <Para>{inputColor2}</Para>
            <StyledInput
              type="color"
              value={inputColor2}
              onChange={this.onChangeColor2}
            />
          </StyledDiv>
        </FlexDiv>
        <GenerateButton type="button" onClick={this.generateGradient}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
