import { BeatIcon } from '@shared/assets/icons';
import cls from './Logo.module.css';

export const Logo = () => {
  return (
    <div>
      <h2 className={cls.logo}>
        <span>F i f t y H e r t z</span> <BeatIcon />
      </h2>
    </div>
  );
};
