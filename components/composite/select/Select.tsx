import { default as ReactSelect } from 'react-select'
import { OptionTypeBase } from 'react-select'

const Select = ({
  onChange,
  options
}: {
  onChange: (typeObj: null | OptionTypeBase) => void
  options: Array<Object>
}) => {
  return (
    <div>
      <ReactSelect onChange={onChange} options={options} />
    </div>
  )
}

export default Select
