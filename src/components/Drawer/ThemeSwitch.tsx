import { Button } from '@components/Button';
import { type Theme } from '@features/themes/types';
import { useTheme } from '@features/themes/hooks/useTheme';
import { assertIsTheme } from '@features/themes/utils/assertIsTheme';

export function ThemeSwitch() {
  const { theme, changeTheme } = useTheme();

  function handleOnClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    const value = (event.target as HTMLButtonElement).value;
    assertIsTheme(value);
    changeTheme(value);
  }

  function getButtonVariant(themeValue: Theme) {
    return theme === themeValue ? 'contained' : 'outlined';
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="uppercase text-sm font-bold">Mode</span>
      <div className="flex">
        <Button
          onClick={handleOnClick}
          value="water"
          variant={getButtonVariant('water')}
        >
          Water
        </Button>
        <Button
          onClick={handleOnClick}
          value="fire"
          variant={getButtonVariant('fire')}
        >
          Fire
        </Button>
        <Button
          onClick={handleOnClick}
          value="light"
          variant={getButtonVariant('light')}
        >
          Light
        </Button>
      </div>
    </div>
  );
}
