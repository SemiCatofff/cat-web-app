import React from 'react';
import { Input, SelectInput, CheckboxInput, ToggleSwitchInput } from '../../ui/Input';
import CustomButton from '../../ui/Button';
import { yellowarrow } from '../../../assets/images';
const DareChallengeForm = ({register,errors,handleSubmit}) => {

    // const handleChange=(e)=>{
    //     setChallenge({
    //         ...challenge,
    //         [e.target.id]:e.target.value
    //     });
    // }

    // const handleOptionChange=(e)=>{
    //     setChallenge({
    //         ...challenge,
    //         selectedWallet:e.target.value
    //     })
    // }

    // const toggleCheckbox = () => {
    //   setChallenge({
    //     ...challenge,
    //     checked: !challenge.checked
    //   });
    // };

    // const toggleSwitch=()=>{
    //     setChallenge({
    //         ...challenge,
    //         openForAll: !challenge.openForAll
    //     });
    // }

    const onSubmit = (data) => {
        console.log("the form is submitted",data);
        // console.log(data);
    }

    return (
        <div className='px-4'>
            <h1 className=' text-xl text-purple font-semibold mb-3'>
                Create a new Challenge
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className=' relative flex flex-col gap-4 h-[80vh]'>
                <Input
                    label='Max Participants'
                    placeholder='Enter Max Participants'
                    errorName="maxParticipant"
                    errors={errors}
                    footerText="This is a sample footer text"
                    {...register("maxParticipant", { 
                        required: "Max Participants value is required",
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "Max Participants must be a valid integer"
                        },
                    max: {
                        value: 100,
                        message: "Max Participants should be less than 100"
                    }
                })} 
                />
                
                <Input
                    label='Min Participants'
                    placeholder='Enter Min Participants'
                    errorName="minParticipant"
                    errors={errors}
                    footerText="This is a sample footer text"
                    {...register("minParticipant", { 
                        required: "Min Participants value is required",
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "Max Participants must be a valid integer"
                        },
                    max: {
                        value: 0,
                        message: "Min Participants should be less than 100"
                    }})}/>
                <Input
                    label='Wager Amount'
                    placeholder='Enter Wager Amount'
                    errorName="wager"
                    errors={errors}
                    footerText="This is a sample footer text"
                    {...register("wager", { 
                        required: "wager value is required",
                        pattern: {
                            value:/^\d+(\.\d+)?$/,
                            message: "The wager can only be a number"
                        }})} 
                />
                <SelectInput
                    label='Select Wallet'
                    id='selectedWallet'
                    options={["Wallet 1","Wallet 2","Wallet 3"]}
                    {...register("selectedWallet")}
                />
                <ToggleSwitchInput
                    label='Open for all'
                    {...register("openForAll")}
                    // checked={challenge.openForAll}
                    // toggleSwitch={toggleSwitch}
                />
                <div>
                    <CheckboxInput
                        label='I Accept all the terms and conditions'
                        {...register("terms", { required: "You need to accept the terms and conditions"})}
                    /> 
                    {errors.terms&&<p className=" text-sm text-red-500">{errors.terms.message}</p>}
                </div>

                <div className=" pb-32 h-full w-full pt-4">
                <div className=" flex  justify-between gap-2 items-end px-2">
                    <CustomButton textColor="black" buttonColor="[#F2EFFF]" type="button">
                        Cancel
                    </CustomButton> 
                    <CustomButton textColor="yellow" buttonColor="black" type="submit">
                        Submit
                        <img src={yellowarrow} alt="next-arrow" />
                    </CustomButton>
                </div>
                </div>
            </form>
        </div>
  ) 
}

export default DareChallengeForm