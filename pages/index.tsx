// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Link from 'next/link'

import React from 'react';
import { WelcomeStep } from '../components/steps/WelcomeStep';
import { EnterNameStep } from '../components/steps/EnterNameStep';
import { GitHubStep } from '../components/steps/GitHubStep';
import { ChooseAvatarStep } from '../components/steps/ChooseAvatarStep';
import { EnterPhoneStep } from '../components/steps/EnterPhoneStep';
import { EnterCodeStep } from '../components/steps/EnterCodeStep';


const stepsComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: GitHubStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

export default function Home() {
  const [step, setStep] = React.useState<number>(5);
  const Step = stepsComponents[step];

  return (
    <div>
      <Step />
    </div>
  );
}
