import { InputContainer, StyledInput } from './Input.styles'

const Input = ({
  label,
  onChange,
  value
}: {
  label?: string
  onChange: () => {}
  value: string
}) => {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <StyledInput onChange={onChange} value={value} />
    </InputContainer>
  )
}

export default Input
