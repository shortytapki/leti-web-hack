import { memo } from 'react';
import { useTheme } from '@app/providers';
import { ThemeIcon } from '@shared/assets/icons';
import { Button, ButtonTheme } from '@shared/ui';
import { classNames } from '@shared/lib';

export const ThemeSwitcher = memo(() => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, ['tr-main'])}
      onClick={toggleTheme}
      theme={ButtonTheme.PRIMARY}
    >
      <ThemeIcon />
    </Button>
  );
});
