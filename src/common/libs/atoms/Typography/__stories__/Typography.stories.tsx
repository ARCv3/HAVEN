import { Stack } from '@mui/material';
import Typography from '../Typography';

export default {
  title: 'Typography',
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
  },
};

export const Default = () => (
  <Stack gap={2}>
    <Typography variant="h1">Heading 1 - 2.563rem / 41px</Typography>
    <Typography variant="h2">Heading 2 - 2.25rem / 36px</Typography>
    <Typography variant="h3">Heading 3 - 2rem / 32px</Typography>
    <Typography variant="h4">Heading 4 - 1.8125rem / 29px</Typography>
    <Typography variant="h5">Heading 5 - 1.625rem / 26px</Typography>

    <Typography variant="subtitle1">Subtitle 1 - 1.4375rem / 23px</Typography>
    <Typography variant="subtitle1-bold">Subtitle 1 Bold - 1.4375rem / 23px</Typography>

    <Typography variant="subtitle2">Subtitle 2 - 1.25rem / 20px</Typography>
    <Typography variant="subtitle2-bold">Subtitle 2 Bold - 1.25rem / 20px</Typography>

    <Typography variant="subtitle3">Subtitle 3 - 1.125rem / 18px</Typography>
    <Typography variant="subtitle3-bold">Subtitle 3 Bold - 1.125rem / 18px</Typography>

    <Typography variant="body1">Body 1 Regular - 1rem / 16px</Typography>
    <Typography variant="body1-bold">Body 1 Bold - 1rem / 16px</Typography>
    <Typography variant="body1-link">Body 1 Link - 1rem / 16px</Typography>
    <Typography variant="body1-link-bold">Body 1 Link Bold - 1rem / 16px</Typography>

    <Typography variant="body2">Body 2 Regular - 0.875rem / 14px</Typography>
    <Typography variant="body2-bold">Body 2 Bold - 0.875rem / 14px</Typography>
    <Typography variant="body2-link">Body 2 Link - 0.875rem / 14px</Typography>
    <Typography variant="body2-link-bold">Body 2 Link Bold - 0.875rem / 14px</Typography>

    <Typography variant="body3">Body 3 Regular - 0.75rem / 12px</Typography>
    <Typography variant="body3-bold">Body 3 Bold - 0.75rem / 12px</Typography>
    <Typography variant="body3-link">Body 3 Link - 0.75rem / 12px</Typography>
    <Typography variant="body3-link-bold">Body 3 Link Bold - 0.75rem / 12px</Typography>

    <Typography variant="caption1">Caption 1 - 0.6875rem / 11px</Typography>
    <Typography variant="caption1-bold">Caption 1 Bold - 0.6875rem / 11px</Typography>
    <Typography variant="caption1-link">Caption 1 Link - 0.6875rem / 11px</Typography>
    <Typography variant="caption1-overline">Caption 1 Overline - 0.6875rem / 11px</Typography>

    <Typography variant="caption2">Caption 2 - 0.625rem / 10px</Typography>
    <Typography variant="caption2-bold">Caption 2 Bold - 0.625rem / 10px</Typography>
    <Typography variant="caption2-link">Caption 2 Link - 0.625rem / 10px</Typography>
    <Typography variant="caption2-overline">Caption 2 Overline - 0.625rem / 10px</Typography>

    <Typography variant="overline">OVERLINE - 0.563rem / 9px</Typography>
    <Typography variant="label">Label default/1rem</Typography>
    <Typography variant="label-status">Label (Status indicator)/0.6rem/Letterspacing: 0.13rem/all caps</Typography>
    <Typography variant="button">Button/1rem/letterspacing: 0.031rem</Typography>
  </Stack>
);

Default.storyName = 'Typography';
