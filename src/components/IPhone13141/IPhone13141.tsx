import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './IPhone13141.module.scss';

interface Props {
  className?: string;
  onClick?: () => void; // Tambahkan prop onClick
}
/* @figmaId 47:3 */
export const IPhone13141: FC<Props> = memo(function IPhone13141(props = {}) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(); // Panggil fungsi onClick jika diberikan
    }
  };
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} onClick={handleClick}>
      {/* <div className={classes._95673652}></div>
      <div className={classes.PngtreePurpleEnvelopeLoveEnvel}></div>
      <div className={classes.PngtreePurpleEnvelopeLoveEnvel2}></div> */}
      <div className={classes._95673652}>
        <img src="./assets/_95673652.png" alt="" />
      </div>
      <div className={classes.PngtreePurpleEnvelopeLoveEnvel}>
        <img src="./assets/PngtreePurpleEnvelopeLoveEnvel.png" alt="" />
      </div>
      <div className={classes.PngtreePurpleEnvelopeLoveEnvel2}>
        <img src="./assets/PngtreePurpleEnvelopeLoveEnvel.png" alt="" />
      </div>
    </div>
  );
});
