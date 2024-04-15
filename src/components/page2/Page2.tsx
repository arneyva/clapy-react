import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Page2.module.scss';

interface Props {
  className?: string;
}
/* @figmaId 47:3 */
export const Page2: FC<Props> = memo(function Page2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes._95673652}>
        <img src="./assets/_95673652.png" alt="" />
      </div>
      <div className={classes.root__bismillah} style={{ marginBottom: '30px' }}>
        <img src="./assets/bismi4.png" alt="" />
      </div>
      <span className={classes.root__arum}>Dan kawinkanlah orang-orang yang sendirian di antara kamu, dan orang-orang yang layak (berkawin) dari hamba-hamba sahayamu yang lelaki dan hamba-hamba sahayamu yang perempuan. Jika mereka miskin Allah akan memampukan mereka dengan karunia-Nya. Dan Allah Maha luas (pemberian-Nya) lagi Maha Mengetahui.QS. An Nur : 32</span>
    </div>
  );
});
