import { type FC } from 'react'
import * as Icons from '@mui/icons-material'

export type IconNames = keyof typeof Icons
export type IconProps = {
  iconName: IconNames;
  className?: string;
}

const IconComponent: FC<IconProps> = ({
  iconName,
  className
}) => {
  const Icon = Icons[iconName]
  return <Icon className={className} />
}

export default IconComponent;