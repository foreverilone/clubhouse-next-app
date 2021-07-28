/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectUserData } from '../../redux/selectors';
import { Avatar } from '../Avatar';

import styles from './Header.module.scss';

export const Header: React.FC = () => {

  return (
    <div className={styles.header}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/rooms">
          <div className={clsx(styles.headerLogo, 'd-flex align-items-center cup')}>
            <img src="/static/hand-wave.png" alt="Logo" className="mr-5" />
            <h4>Clubhouse</h4>
          </div>
        </Link>
        <div>
          <Link href="/profile/1">
            <div className="d-flex align-items-center cup">
              <b className="mr-15">Lang I</b>
              <Avatar 
                src="https://www.meme-arsenal.com/memes/1ed4f226749a18c5bb6518be2cdeefb7.jpg" 
                width="40px" 
                height="40px" 
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

// export const Header: React.FC = () => {
//   const userData = useSelector(selectUserData);

//   return (
//     <div className={styles.header}>
//       <div className="container d-flex align-items-center justify-content-between">
//         <Link href="/rooms">
//           <div className={clsx(styles.headerLogo, 'd-flex align-items-center cup')}>
//             <img src="/static/hand-wave.png" alt="Logo" className="mr-5" />
//             <h4>Clubhouse</h4>
//           </div>
//         </Link>
//         <Link href="/profile/1">
//           <div className="d-flex align-items-center cup">
//             <b className="mr-15">{userData?.fullname}</b>
//             <Avatar src={userData?.avatarUrl} width="40px" height="40px" />
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };
