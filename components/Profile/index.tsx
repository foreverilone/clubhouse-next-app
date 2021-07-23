import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { Avatar } from '../Avatar';
// import { BackButton } from '../BackButton';
import { Button } from '../Button';

import styles from './Profile.module.scss';

interface ProfileProps {
  fullname: string;
  username: string;
  avatarUrl: string;
  about: string;
}

export const Profile: React.FC<ProfileProps> = ({ fullname, username, avatarUrl, about }) => {
  return (
    <>
      <Link href="/rooms">
        <a className="d-flex mb-30">
        <img src="/static/back-arrow.svg" alt="Back" className=" mr-10"/>
        <h3>Back</h3>
          {/* <BackButton title="Back" href="/rooms" /> */}
        </a>
      </Link>

      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Avatar 
            avatarUrl="https://www.meme-arsenal.com/memes/1ed4f226749a18c5bb6518be2cdeefb7.jpg"
            width="100px" 
            height="100px" 
            />
          <div className="d-flex flex-column ml-30 mr-30">
            <h2 className="mt-0 mb-0">Ilona</h2>
            <h3 className={clsx(styles.username, 'mt-0 mb-0')}>@ilona</h3>
          </div>
        </div>
        <Button className={styles.followButton} color="blue">
          Follow
        </Button>
      </div>
      <p className={styles.about}>{about}</p>
    </>
  );
};
