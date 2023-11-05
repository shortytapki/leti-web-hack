import { memo } from 'react';
import { useTheme } from '@app/providers';
import { ThemeIcon } from '@shared/assets/icons';
import { Button, ButtonTheme } from '@shared/ui';

export const ThemeSwitcher = memo(() => {
  const { toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
      <ThemeIcon />
    </Button>
  );
});
