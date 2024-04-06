import { Input, RadioInput, DatePickerInput,SelectInput } from "../ui/Input";
import CustomButton from "../ui/Button";
import { yellowarrow } from "../../assets/images";

const CreateChallengeForm = ({setStep,register,handleSubmit,errors}) => {
    // const [challenge,setChallenge]=useState({
    //     challengeName:"",
    //     description:"",
    //     category: "Select a Category",
    //     startDate:new Date(),
    //     endDate:new Date(),
    //     challengeType:"",
    // });

    // const handleRadioChange=(e)=>{
    //     setChallenge({
    //         ...challenge,
    //         challengeType:e.target.value
    //     });
    // }

    // const handleSetStartDate=(date)=>{  
    //     setChallenge({
    //         ...challenge,
    //         startDate:date
    //     })  
    // }

    // const handleSetEndDate=(date)=>{    
    //     setChallenge({
    //         ...challenge,
    //         endDate:date
    //     })
    // }

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     setStep(2);
    // }

    const onSubmit = (data) => {
        setStep(2);
    }

    // const handleOptionChange=(e)=>{
    //     setChallenge({
    //         ...challenge,
    //         category:e.target.value
    //     })
    // }



  return (
    <div className=" px-4">
        <h1 className=' text-xl text-purple font-semibold my-4'>
            Create a new Challenge
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className=' relative flex flex-col gap-4 h-[80vh]'>
            <Input 
                label='Challenge Name' 
                placeholder='Enter Challenge Name' 
                errorName="challengeName"
                errors={errors}
                footerText="This is a sample footer text"
                {...register("challengeName", { required: "This challenge Name is required"})} 
            />

            <Input 
                label='Description' 
                placeholder='Enter Challenge Description' 
                errorName="description"
                errors={errors}
                footerText="This is a sample footer text"
                {...register("description", { required: "This challenge Description is required"})} 
            />
            {/* <Input 
                label='Requirements' 
                placeholder='Enter Requirement' 
                id='requirements' 
                value={challenge.requirements} 
                onChange={handleChange}
                footerText={""}
            /> */}
            <div className=" flex justify-between gap-1">
                <DatePickerInput
                label={"Start Date"}
                errorName="startDate"
                errors={errors}
                {...register("startDate",{
                    required: "StartDate is required"
                })}></DatePickerInput>

                <DatePickerInput
                label={"End Date"}
                errorName="endDate"
                errors={errors}
                {...register("endDate",{
                    required: "EndDate is required"
                })}></DatePickerInput>

            </div>
            <SelectInput
                label='Select Category'
                id='category'
                options={["Option 1","Option 2","Option 3"]}
                {...register("category")}
            />
            <div>
            <label className=" text-sm text-[#666666] font-semibold my-2">Challenge Type</label>
            <div className="grid grid-cols-2 gap-3">
            {["0v1 Challenge","1v1 Challenge","Multiplayer Challenge"].map((value, index)=>{
                return (
                    <RadioInput
                        key={index}
                        label={value}
                        {...register("challengeType", { required: "Challange type is required"})} 
                        // selectedValue={challenge.challengeType}
                        // handleInputChange={handleRadioChange}
                    />
                )
            })}
            </div>
            {errors.challengeType&&<p className=" text-sm text-red-500">{errors.challengeType.message}</p>}
            </div>

            <div className=" lg:pb-10 h-full w-full pt-4">
            <div className=" flex  justify-between gap-2 items-end px-2 pb-24">
                <CustomButton textColor="black" buttonColor="[#F2EFFF]" type="button">
                    Cancel
                </CustomButton> 
                <CustomButton textColor="yellow" buttonColor="black" type="submit">
                    Next
                    <img src={yellowarrow} alt="next-arrow" />
                </CustomButton>
            </div>
            </div>
        </form>
    </div>
  )
}

export default CreateChallengeForm