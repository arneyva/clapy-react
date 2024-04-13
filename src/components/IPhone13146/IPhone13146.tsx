import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './IPhone13146.module.css';

interface Props {
    className?: string;
}
/* @figmaId 73:229 */
export const IPhone13146: FC<Props> = memo(function IPhone13146(props = {}) {
    return (
        <div className={`${resets.clapyResets} ${classes.root}`}>
            <div className={classes._3_des_16RemovebgPreview3}></div>
            <div className={classes._3_des_16RemovebgPreview32}></div>
            <div className={classes.pegantin1}></div>
            <div className={classes.tHEWEDDINGOF}>
                <div className={classes.youAreInvitedToTheWeedingOf}>You are Invited To The Weeding of</div>
                <div className={classes.putriKeduaDariBpkSukamtaIbuSir}>Putri Kedua dari Bpk. Sukamta &amp; Ibu Sirhartati</div>
                <div className={classes.khoirunisaRatihIslami}>Khoirunisa Ratih Islami</div>
                <div className={classes.putriKeduaDariBpkSukamtaIbuSir2}>Putri Kedua dari Bpk. Sukamta &amp; Ibu Sirhartati</div>
                <div className={classes.khoirunisaRatihIslami2}>Khoirunisa Ratih Islami</div>
                <div className={classes.kamis16November2023100WIBKaran}>
                    <div className={classes.textBlock}>Kamis, 16 November 2023,10:00 WIB</div>
                    <div className={classes.textBlock2}>Karanggawang,Jumoyo,Salam,Magelang</div>
                </div>
            </div>
        </div>
    );
});
