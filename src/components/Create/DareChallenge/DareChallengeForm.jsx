import React from 'react';
import { Input, SelectInput, CheckboxInput, ToggleSwitchInput } from '../../ui/Input';
import { PurpleButton, PurpleOutlineButton } from '../../ui/Button';
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
                    {...register("maxParticipant", { required: "Max Participants value is required"})} 
                />
                
                <Input
                    label='Min Participants'
                    placeholder='Enter Min Participants'
                    errorName="minParticipant"
                    errors={errors}
                    footerText="This is a sample footer text"
                    {...register("minParticipant", { required: "Min Participants value is required"})} 
                    />
                <Input
                    label='Wager Amount'
                    placeholder='Enter Wager Amount'
                    errorName="wager"
                    errors={errors}
                    footerText="This is a sample footer text"
                    {...register("wager", { required: "wager value is required"})} 
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

                <div className=" lg:pb-10 h-full w-full pt-4">
                <div className=" flex  justify-between gap-2 items-end px-2">
                    <PurpleOutlineButton onClick={()=>console.log("clicked")}>
                        Cancel
                    </PurpleOutlineButton> 
                    <PurpleButton className=" opacity-80" type="submit">
                        Submit
                    </PurpleButton>
                </div>
                </div>
            </form>
        </div>
  ) 
}

export default DareChallengeForm