import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './IPhone13146.module.scss';

interface Props {
    className?: string;
}
/* @figmaId 73:229 */
export const IPhone13146: FC<Props> = memo(function IPhone13146(props = {}) {
    return (
        <div className={`${resets.clapyResets} ${classes.root}`}>
            <div className={classes._3_des_16RemovebgPreview3}>
                <img src="./assets/_3_des_16RemovebgPreview2.png" alt="" />
            </div>
            <div className={classes._3_des_16RemovebgPreview32}>
                <img src="./assets/_3_des_16RemovebgPreview1.png" alt="" />
            </div>
            <div className={classes.pegantin1}>
                <img src="./assets/pegantin1.png" alt="" />
            </div>
            <span className={classes.root__weeding}>YOU ARE INVITED TO THE WEEDING OF</span>
            <span className={classes.root__namapengantin}>Khoirunisa Ratih Islami</span>
            <span className={classes.root__ortu}>Bpk Sukamta & Ibu Srihartati</span>
            <span className={classes.root__weeding} style={{ marginBottom: '10px', marginTop: '10px' }}> & </span>
            <span className={classes.root__namapengantin}>Adi septian</span>
            <span className={classes.root__ortu} style={{ marginBottom: '30px' }}>Bpk Baiman Kusyono & Ibu Kasinah</span>
            <span className={classes.root__alamat}>Kamis, 16 November 2023,10:00 WIB</span><span className={classes.root__alamat}>Karanggawang,Jumoyo,Salam,Magelang</span>
        </div>
    );
});
