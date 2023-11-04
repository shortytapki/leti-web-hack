import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
import { lsController } from '@shared/lib';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = (): void => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);
    lsController.setTheme(newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
