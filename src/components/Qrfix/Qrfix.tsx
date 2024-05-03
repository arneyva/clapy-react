import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Qrfix.module.scss';

interface Props {
  className?: string;
}
/* @figmaId 47:3 */
export const Qrfix: FC<Props> = memo(function Page2(props = {}) {
  const handleMapClick = () => {
    // Mengarahkan pengguna ke lokasi tertentu di Google Maps saat elemen diklik
    window.open('https://maps.app.goo.gl/deheDy6T43VQWzeJ9');
  };
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes._3_des_16RemovebgPreview3} >
        <img src="./assets/_3_des_16RemovebgPreview2.png" alt="" />
      </div>
      <div className={classes._3_des_16RemovebgPreview32}>
        <img src="./assets/_3_des_16RemovebgPreview1.png" alt="" />
      </div>
      <div className={classes.root__bismillah} style={{ marginBottom: '30px' }} onClick={handleMapClick}>
        <img src="./assets/qr2.png" alt="" />
      </div>
      <div className={classes.root__bismillah2} style={{ marginBottom: '30px' }} onClick={handleMapClick}>
        <img src="./assets/qr2.png" alt="" />
      </div>
      <span className={classes.root__arum} style={{ marginTop: '310px' }}>Scan atau Klik Qr diatas untuk Detail ke lokasi kami</span>

    </div>
  );
});
