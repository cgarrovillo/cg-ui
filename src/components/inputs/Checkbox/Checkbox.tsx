import { Checkbox as MCheckbox, CheckboxProps as MCheckboxProps, FormControlLabel, FormGroup } from '@mui/material'

type CheckboxProps = {
  label: string
}

const Checkbox = ({ label, ...props }: CheckboxProps & MCheckboxProps) => {
  if (label)
    return (
      <FormGroup>
        <FormControlLabel control={<MCheckbox {...props} />} label={label} />
      </FormGroup>
    )

  return <MCheckbox {...props} />
}

export default Checkbox
