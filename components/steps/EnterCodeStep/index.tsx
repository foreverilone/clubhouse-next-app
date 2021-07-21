import React from 'react';
import clsx from 'clsx';
// import { useRouter } from 'next/router';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
// import { Axios } from '../../../core/axios';

import styles from './EnterPhoneStep.module.scss';
// import { MainContext } from '../../../pages';


export const EnterCodeStep = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [codes, setCodes] = React.useState(['', '', '', '']);
  const nextDisabled = codes.some((v) => !v); //если хотя бы одно знач отсут, то дезейбли кнопку 
  
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id')) - 1; // берет id из каждого инпута и использует как index
    const value = event.target.value; // берет из этого инпута value
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });

    // если есть html элемент справа, то ставь фокус на него (автоматический фокус на следующий инпут )
    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus(); 
    } 
  };

  console.log(codes);

  return (
    <div className={styles.block}>
      <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
      {!isLoading ? (
        <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
          <div className={styles.codeInput}>
              <input
                type="tel"
                placeholder="X"
                maxLength={1}
                id="1"
                onChange={handleChangeInput}
                value={codes[0]}
              />
              <input
                type="tel"
                placeholder="X"
                maxLength={1}
                id="2"
                onChange={handleChangeInput}
                value={codes[1]}
              />
              <input
                type="tel"
                placeholder="X"
                maxLength={1}
                id="3"
                onChange={handleChangeInput}
                value={codes[2]}
              />
              <input
                type="tel"
                placeholder="X"
                maxLength={1}
                id="4"
                onChange={handleChangeInput}
                value={codes[3]}
              />
          </div>
          <Button disabled={nextDisabled}>
            Next
            <img className="d-ib ml-30" src="/static/arrow.svg" />
          </Button>
        </WhiteBlock>
      ) : (
          <div className="text-center">
            <div className="loader"></div>
            <h3 className="mt-5">Activation in progress ...</h3>
          </div>
        )}
    </div>
  );
};


// export const EnterCodeStep = () => {
//   const router = useRouter();
//   const { userData } = React.useContext(MainContext);
//   const [isLoading, setIsLoading] = React.useState<boolean>(false);
//   const [codes, setCodes] = React.useState(['', '', '', '']);

//   const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const index = Number(event.target.getAttribute('id'));
//     const value = event.target.value;
//     setCodes((prev) => {
//       const newArr = [...prev];
//       newArr[index] = value;
//       return newArr;
//     });
//     if (event.target.nextSibling) {
//       (event.target.nextSibling as HTMLInputElement).focus();
//     } else {
//       onSubmit([...codes, value].join(''));
//     }
//   };

//   const onSubmit = async (code: string) => {
//     try {
//       setIsLoading(true);
//       await Axios.post(`/auth/sms/activate`, {
//         code,
//         user: userData,
//       });
//       router.push('/rooms');
//     } catch (error) {
//       alert('Ошибка при активации!');
//       setCodes(['', '', '', '']);
//     }

//     setIsLoading(false);
//   };

//   return (
//     <div className={styles.block}>
//       {!isLoading ? (
//         <>
//           <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
//           <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
//             <div className={styles.codeInput}>
//               {codes.map((code, index) => (
//                 <input
//                   key={index}
//                   type="tel"
//                   placeholder="X"
//                   maxLength={1}
//                   id={String(index)}
//                   onChange={handleChangeInput}
//                   value={code}
//                 />
//               ))}
//             </div>
//           </WhiteBlock>
//         </>
//       ) : (
//         <div className="text-center">
//           <div className="loader"></div>
//           <h3 className="mt-5">Activation in progress ...</h3>
//         </div>
//       )}
//     </div>
//   );
// };
