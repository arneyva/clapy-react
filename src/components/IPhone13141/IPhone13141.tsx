import { memo, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './IPhone13141.module.scss';

interface Props {
  className?: string;
  onClick?: () => void; // Tambahkan prop onClick
}
/* @figmaId 47:3 */
export const IPhone13141: FC<Props> = memo(function IPhone13141(props = {}) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(); // Panggil fungsi onClick jika diberikan
    }
  };
  const fadeAnimation = useSpring({
    opacity: clicked ? 0 : 1, // Set opacity menjadi 0 saat clicked true
    from: { opacity: 1 }, // Mulai dari opacity 1
  });
  return (
    <animated.div className={`${resets.clapyResets} ${classes.root}`} style={fadeAnimation} onClick={handleClick}>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <div className={classes._95673652}>
          <img src="./assets/_95673652.png" alt="" />
        </div>
        <div className={classes.root__PngtreePurpleEnvelopeLoveEnvel2} >
          <img src="./assets/cekmiring3.png" alt="" />
        </div>
        {/* </div> */}
        <span className={classes.root__arum}>Kepada Yth Bapak/Saudara(i)</span>
        <button className={classes.root__namadiundang}>Wijdan Arif </button>
        <span className={classes.root__arum1}>Mohon Maaf apabila ada kesalahan nama/gelar</span>
      </div>
    </animated.div>
  );
});
