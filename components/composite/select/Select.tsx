import { default as ReactSelect } from 'react-select'

const Select = ({
  onChange,
  options
}: {
  onChange: (typeObj: null | Object) => {}
  options: Array<Object>
}) => {
  return (
    <div>
      <ReactSelect onChange={onChange} options={options} />
    </div>
  )
}

export default Select
