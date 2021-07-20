// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Link from 'next/link'

import React from 'react'
import { WelcomeStep } from '../components/steps/WelcomeStep'

const stepsComponents = {
  0: WelcomeStep
};

export default function Home() {
  const [step, setStep] = React.useState<number>(1);
  const Step = stepsComponents[step];

  return (
    <div>
      <WelcomeStep />
    </div>
  );
}
