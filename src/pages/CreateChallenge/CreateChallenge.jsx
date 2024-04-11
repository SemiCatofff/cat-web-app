import React, { useState } from 'react'
import CreateChallengeForm from '../../components/Create/CreateChallengeForm'
import DareChallengeForm from '../../components/Create/DareChallenge/DareChallengeForm'
import { useForm } from 'react-hook-form'

const CreateChallenge = () => {
  const [step, setStep] = useState(1)
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm()

  return (
    <>
      {step === 1 && (
        <CreateChallengeForm
          setStep={setStep}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
      {step === 2 && (
        <DareChallengeForm
          register={register}
          setValue={setValue} // Pass setValue down to the DareChallengeForm
          watch={watch} // Pass watch down to the DareChallengeForm
          handleSubmit={handleSubmit}
          errors={errors}
          setStep={setStep}
        />
      )}
    </>
  )
}

export default CreateChallenge
