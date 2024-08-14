// Write your code here
import {ListItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {values, changeDirection, isActiveDirection} = props
  const {directionId, value, displayText} = values

  const onClickDirection = () => {
    changeDirection(directionId, value)
  }

  console.log(isActiveDirection)
  return (
    <>
      <ListItem>
        <CustomButton
          type="button"
          active={isActiveDirection}
          onClick={onClickDirection}
        >
          {displayText}
        </CustomButton>
      </ListItem>
    </>
  )
}

export default GradientDirectionItem
