// import { memo, useEffect, useState } from 'react';
// import type { FC } from 'react';

// import classes from './App.module.css';
// import resets from './components/_resets.module.css';
// import { IPhone13141 } from './components/IPhone13141/IPhone13141';
// import { IPhone13142 } from './components/IPhone13142/IPhone13142';
// import { IPhone13146 } from './components/IPhone13146/IPhone13146';
// import { Page2 } from './components/page2/Page2';
// import { Page4 } from './components/page4/Page4';
// import { Qr } from './components/qr/Qr';
// import { Qrfix } from './components/Qrfix/Qrfix';
// import { Maps } from './components/Maps/Maps';


// interface Props {
//   className?: string;
// }
// export const App: FC<Props> = memo(function App(props = {}) {
//   const [isHomePage, setIsHomePage] = useState(true);

//   const handleStartClick = () => {
//     setIsHomePage(false); // Set isHomePage to false when clicked
//     document.body.style.overflow = 'auto';
//   };
//   useEffect(() => {
//     if (isHomePage) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto'; // Set overflow ke auto ketika tidak di halaman utama
//     }
//   }, [isHomePage]);
//   useEffect(() => {
//     // Ketika komponen App dimuat ulang, pastikan overflow diatur ke default
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, []);
//   return (
//     <div className={`${resets.clapyResets} ${classes.root}`}>
//       {isHomePage && <IPhone13141 onClick={handleStartClick} />}
//       <IPhone13142 />
//       <Page2 />
//       <IPhone13146 />
//       <Page4 />
//       <Qrfix />
//     </div>
//   );
// });

import { memo, useEffect, useRef, useState } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { IPhone13141 } from './components/IPhone13141/IPhone13141';
import { IPhone13142 } from './components/IPhone13142/IPhone13142';
import { IPhone13146 } from './components/IPhone13146/IPhone13146';
import { Page2 } from './components/page2/Page2';
import { Page4 } from './components/page4/Page4';
import { Qrfix } from './components/Qrfix/Qrfix';

// @ts-ignore
import audioFile from './cintaterakhir.mp3';
interface Props {
  className?: string;
}

// export const App: FC<Props> = memo(function App(props = {}) {
//   const [isHomePage, setIsHomePage] = useState(true);
//   const appRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Mengatur scroll ke posisi IPhone13141 saat komponen dimuat ulang (refresh)
//     appRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
//   }, []);

//   const handleStartClick = () => {
//     setIsHomePage(false);
//   };

//   useEffect(() => {
//     if (isHomePage) {
//       document.body.style.overflow = 'hidden';
//     } else {

//       document.body.style.overflow = 'auto';
//     }
//   }, [isHomePage]);

//   return (
//     <div ref={appRef} className={`${resets.clapyResets} ${classes.root}`}>
//       {isHomePage ? (
//         <IPhone13141 onClick={handleStartClick} />
//       ) : (
//         <>
//           <IPhone13142 />
//           <Page2 />
//           <IPhone13146 />
//           <Page4 />
//           <Qrfix />
//         </>
//       )}
//     </div>
//   );
// });

export const App: FC<Props> = memo(function App(props = {}) {
  const [isHomePage, setIsHomePage] = useState(true);
  const appRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    appRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
  }, []);

  const handleStartClick = () => {
    setIsHomePage(false);
  };

  useEffect(() => {
    if (!isHomePage) {
      document.body.style.overflow = 'auto';
      const audio = audioRef.current;
      if (audio) {
        audio.play(); // Mulai pemutaran audio ketika pergi ke halaman selain halaman utama
      }
    } else {
      document.body.style.overflow = 'hidden';
      const audio = audioRef.current;
      if (audio) {
        audio.pause(); // Hentikan pemutaran audio ketika kembali ke halaman utama
        audio.currentTime = 0; // Kembalikan waktu pemutaran ke awal
      }
    }
  }, [isHomePage]);

  return (
    <div ref={appRef} className={`${resets.clapyResets} ${classes.root}`}>
      <audio ref={audioRef} src={audioFile} loop /> {/* Tambahkan elemen audio dengan ref */}
      {isHomePage ? (
        <IPhone13141 onClick={handleStartClick} />
      ) : (
        <>
          <IPhone13142 />
          <Page2 />
          <IPhone13146 />
          <Page4 />
          <Qrfix />
        </>
      )}
    </div>
  );
});

// import { memo, useState, useEffect } from 'react';
// import type { FC } from 'react';

// import resets from './components/_resets.module.css';
// import classes from './App.module.css';
// import { IPhone13141 } from './components/IPhone13141/IPhone13141';
// import { IPhone13142 } from './components/IPhone13142/IPhone13142';
// import { IPhone13146 } from './components/IPhone13146/IPhone13146';
// import { Page2 } from './components/page2/Page2';
// import { Page4 } from './components/page4/Page4';
// import { Qr } from './components/qr/Qr';
// import { Qrfix } from './components/Qrfix/Qrfix';
// import { Maps } from './components/Maps/Maps';

// // Import audio file
// // @ts-ignore
// import audioFile from './cintaterakhir.mp3';

// interface Props {
//   className?: string;
// }

// export const App: FC<Props> = memo(function App(props = {}) {
//   const [isHomePage, setIsHomePage] = useState(true);

//   const handleStartClick = () => {
//     setIsHomePage(false); // Set isHomePage to false when clicked
//   };

//   // Play audio when isHomePage changes to false
//   useEffect(() => {
//     if (!isHomePage) {
//       const audio = new Audio(audioFile);
//       audio.play();
//       return () => {
//         audio.pause();
//         audio.currentTime = 0;
//       };
//     }
//   }, [isHomePage]);

//   return (
//     <div className={`${resets.clapyResets} ${classes.root}`}>
//       {isHomePage && <IPhone13141 onClick={handleStartClick} />}
//       <IPhone13142 />
//       <Page2 />
//       <IPhone13146 />
//       <Page4 />
//       <Qrfix />
//     </div>
//   );
// });

