import React from 'react';
import Axios from '../../core/axios';

import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import { Room } from '../../components/Room';

// interface ProfilePageProps {
//   profileData: UserData | null;
// }


export default function RoomPage ({ room }) {
  return (
    <>
      <Header />
      <div className="container mt-40 ">
        <BackButton title="All rooms" href="/rooms" />
        
      </div>
      <Room title={room.title} />
    </>
  );
} 

//с помощью getServerSideProps отправили на бэк запрос, достали json
//нашли необходимый обьект, вернули пропсы этого обьекта и отобразили необх инф (заголовой комнаты)
export const getServerSideProps = async (ctx) => {
  try {
    const { data } = await Axios.get('/rooms.json');
    const roomId = ctx.query.id;
    const room = data.find(obj => obj.id === roomId);
    return {
      props: {
        room,
      }
    };
  } catch (error) {
    return {
      props: {
        rooms: [],
      }
    };
  }
}



// import React from 'react';
// import { Api } from '../../api';
// import { BackButton } from '../../components/BackButton';
// import { Header } from '../../components/Header';
// import { Room } from '../../components/Room';
// import { wrapper } from '../../redux/store';
// import { checkAuth } from '../../utils/checkAuth';

// export default function RoomPage({ room }) {
//   return (
//     <>
//       <Header />
//       <div className="container mt-40">
//         <BackButton title="All rooms" href="/rooms" />
//       </div>
//       <Room title={room.title} />
//     </>
//   );
// }

// export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
//   try {
//     const user = await checkAuth(ctx);

//     if (!user) {
//       return {
//         props: {},
//         redirect: {
//           permanent: false,
//           destination: '/',
//         },
//       };
//     }

//     const roomId = ctx.query.id;
//     const room = await Api(ctx).getRoom(roomId as string);

//     return {
//       props: {
//         room,
//       },
//     };
//   } catch (error) {
//     console.log('ERROR!');
//     return {
//       props: {},
//       redirect: {
//         destination: '/rooms',
//         permanent: false,
//       },
//     };
//   }
// });
