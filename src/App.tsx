import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { IPhone13141 } from './components/IPhone13141/IPhone13141';
import { IPhone13142 } from './components/IPhone13142/IPhone13142';
import { IPhone13146 } from './components/IPhone13146/IPhone13146';
import { Page2 } from './components/page2/Page2';
import { Page4 } from './components/page4/Page4';
import { Qr } from './components/qr/Qr';
import { Qrfix } from './components/Qrfix/Qrfix';
import { Maps } from './components/Maps/Maps';


interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <IPhone13141 />
      <IPhone13142 />
      <Page2 />
      <IPhone13146 />
      <Page4 />
      <Qrfix />
    </div>
  );
});
