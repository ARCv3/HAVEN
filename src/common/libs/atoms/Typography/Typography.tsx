import { memo, forwardRef } from 'react';
import {
  styled,
  Typography as MuiTypography,
  type TypographyProps as MuiTypographyProps,
  Skeleton,
} from '@mui/material';

const MinWidthSkeleton = styled(Skeleton)`
  min-width: 5rem;
`;

export interface TypographyProps extends MuiTypographyProps {
  loading?: boolean;
}

const Typography = memo(
  forwardRef<HTMLElement, TypographyProps>(function Typography({ loading, children, ...props }: TypographyProps, ref) {
    return (
      <MuiTypography {...props} ref={ref}>
        {loading ? <MinWidthSkeleton variant="rounded" /> : children}
      </MuiTypography>
    );
  }),
);

export default Typography;
