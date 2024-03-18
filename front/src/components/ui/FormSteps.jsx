import React, { useState } from 'react';
import { Step1, Step2, Step3 } from './Steps'; 

function SignUpForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className='signup'>
      {/* Contenido anterior aquí */}
      {currentStep === 1 && <Step1 onNext={nextStep} />}
      {currentStep === 2 && <Step2 onNext={nextStep} onPrev={prevStep} />}
      {currentStep === 3 && <Step3 onPrev={prevStep} />}
    </div>
  );
}

export default SignUpForm;
