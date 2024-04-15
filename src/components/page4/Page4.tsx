import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Page4.module.scss';

interface Props {
  className?: string;
}
/* @figmaId 47:3 */
export const Page4: FC<Props> = memo(function Page4(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes._95673652}>
        <img src="./assets/_95673652.png" alt="" />
      </div>
      <span className={classes.root__arum} style={{ marginBottom: '30px' }}>Merupakan suatu kehormatan dan kebahagian bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai</span>
      <span className={classes.root__ratih}>Ratih & Adi</span>
    </div>
  );
});
