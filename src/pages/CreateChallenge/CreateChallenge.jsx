import React,{useState} from "react";
import CreateChallengeForm from "../../components/Create/CreateChallengeForm";
import DareChallengeForm from "../../components/Create/DareChallenge/DareChallengeForm";
import { useForm } from "react-hook-form"
const CreateChallenge = () => {
  const [step,setStep]=useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (<>
    {step===1 && (<CreateChallengeForm
      step={step}
      setStep={setStep}
      register={register}
      handleSubmit={handleSubmit}
      watch={watch}
      errors={errors}
    />)}
    {step===2 && (<DareChallengeForm
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
    />)}
  </>);
};

export default CreateChallenge;
