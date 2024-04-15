import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './IPhone13142.module.scss';

interface Props {
    className?: string;
}
/* @figmaId 47:10 */
export const IPhone13142: FC<Props> = memo(function IPhone13142(props = {}) {
    return (
        <div className={`${resets.clapyResets} ${classes.root}`}>
            <div className={classes._3_des_16RemovebgPreview2}>
                <img src="./assets/_3_des_16RemovebgPreview2.png" alt="" />
            </div>
            <div className={classes._3_des_16RemovebgPreview1}>
                <img src="./assets/_3_des_16RemovebgPreview1.png" alt="" />
            </div>
            <span className={classes.root__weeding}>THE WEEDING OF</span>
            <span className={classes.root__ratih}>Ratih & Adi</span>
            <span className={classes.root__tanggal}>24-06-2024</span>

        </div>
    );
});
