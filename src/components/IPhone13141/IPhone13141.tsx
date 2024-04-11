import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './IPhone13141.module.css';

interface Props {
  className?: string;
}
/* @figmaId 47:3 */
export const IPhone13141: FC<Props> = memo(function IPhone13141(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes._95673652}></div>
      <div className={classes.PngtreePurpleEnvelopeLoveEnvel}></div>
      <div className={classes.PngtreePurpleEnvelopeLoveEnvel2}></div>
    </div>
  );
});
