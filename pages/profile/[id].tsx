// import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import React from 'react';
// import { UserData } from '..';
// import { Api } from '../../api';
import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';
// import { wrapper } from '../../redux/store';
// import { checkAuth } from '../../utils/checkAuth';

// interface ProfilePageProps {
//   profileData: UserData | null;
// }


export default function ProfilePage () {
  const router = useRouter();
  
  const {id} = router.query;

  return (
    <>
      <Header />
      <div className="container mt-30">
        <Profile
          avatarUrl="https://www.meme-arsenal.com/memes/1ed4f226749a18c5bb6518be2cdeefb7.jpg"
          fullname="Ilona L"
          username="lang"
          about="Test info"
        />
      </div>
    </>
  );
} 



// const ProfilePage: NextPage<ProfilePageProps> = ({ profileData }) => {
//   const router = useRouter();

//   return (
//     <>
//       <Header />
//       <div className="container mt-30">
//         <Profile
//           avatarUrl={profileData.avatarUrl}
//           fullname={profileData.fullname}
//           username={profileData.username}
//           about="Test info"
//         />
//       </div>
//     </>
//   );
// };

// export default ProfilePage;

// export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
//   try {
//     const user = await checkAuth(ctx);

//     const userId = ctx.query.id;
//     const profileData = await Api(ctx).getUserInfo(Number(userId));

//     if (!user || !profileData) {
//       throw new Error();
//     }

//     return {
//       props: {
//         profileData,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {},
//       redirect: { permanent: false, destination: '/' },
//     };
//   }
// });
