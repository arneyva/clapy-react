import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './IPhone13142.module.css';

interface Props {
    className?: string;
}
/* @figmaId 47:10 */
export const IPhone13142: FC<Props> = memo(function IPhone13142(props = {}) {
    return (
        <div className={`${resets.clapyResets} ${classes.root}`}>
            <div className={classes._3_des_16RemovebgPreview2}></div>
            <div className={classes._3_des_16RemovebgPreview1}></div>
            <div className={classes.tHEWEDDINGOF}>
                <div className={classes.textBlock}> THE WEDDING OF</div>
                <div className={classes.textBlock2}>
                    <p></p>
                </div>
            </div>
            <div className={classes._2462024}>24-06-2024</div>
            <div className={classes.ratihAdi}>Ratih &amp; Adi</div>
        </div>
    );
});
