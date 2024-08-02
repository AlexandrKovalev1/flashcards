import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

type Props = {
  checked?: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
}

export const Checkbox = ({ checked, disabled, id, label, onChange }: Props) => {
  return (
    <Typography as={'label'} className={`${s.label} ${disabled && s.disabled}`} variant={'body2'}>
      <div className={s.buttonWrapper}>
        <CheckboxRadix.Root
          checked={checked}
          className={s.checkboxRoot}
          defaultChecked
          disabled={disabled}
          id={id}
          onCheckedChange={onChange}
        >
          <CheckboxRadix.Indicator className={s.checkboxIndicator}>
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      {label}
    </Typography>
  )
}
