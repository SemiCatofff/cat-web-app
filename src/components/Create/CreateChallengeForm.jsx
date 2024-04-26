import { Input, RadioInput, DatePickerInput, SelectInput } from '../ui/Input'
import CustomButton from '../ui/Button'
import { yellowarrow } from '../../assets/images'
import { useEffect, useState } from 'react'

const CreateChallengeForm = ({ setStep, register, watch, handleSubmit, errors }) => {
  const onSubmit = (data) => {
    setStep(2)
  }
  const selectedCategory = watch('GameType');
  const [selection, setSelection] = useState(false)
  
  useEffect(()=>{
   setSelection(selectedCategory !== '2')
  },[selectedCategory])

  return (
    <div className="px-4">
      <h1 className="text-xl text-purple font-semibold my-4">
        Create a new Challenge
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col gap-4 h-[80vh]"
      >
        <Input
          label="Challenge Name"
          placeholder="Enter Challenge Name"
          errorName="ChallengeName"
          errors={errors}
          {...register('ChallengeName', {
            required: 'This challenge Name is required',
          })}
        />

        <Input
          label="Description"
          placeholder="Enter Challenge Description"
          errorName="description"
          errors={errors}
          footerText=""
          {...register('ChallengeDescription', {
            required: 'This challenge Description is required',
          })}
        />

        <div className="flex justify-between gap-1">
          <DatePickerInput
            label={'Start Date'}
            errorName="startDate"
            errors={errors}
            {...register('StartDate', {
              required: 'Start Date is required',
            })}
          ></DatePickerInput>

          <DatePickerInput
            label={'End Date'}
            errorName="endDate"
            errors={errors}
            {...register('EndDate', {
              required: 'End Date is required',
            })}
          ></DatePickerInput>
        </div>

        <SelectInput
          label="Select Category"
          id="category"
          options={['Steps', 'Calories','Twitter Impressions (Reclaim)', 'Food-War (Validator)']}
          {...register('GameType')}
        />

        <div>
          <label className="text-sm text-[#666666] font-semibold my-2">
            Challenge Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(!selection? ['1v1 Challenge','Multiplayer Challenge']: ['0v1 Challenge', '1v1 Challenge', 'Multiplayer Challenge']).map(
              (value, index) => {
                return (
                  <RadioInput
                    key={index}
                    label={value}
                    value={index}
                    {...register('challengeType', {
                      required: 'Challenge type is required',
                    })}
                  />
                )
              }
            )}
          </div>
          {errors.challengeType && (
            <p className="text-sm text-red-500">
              {errors.challengeType.message}
            </p>
          )}
        </div>

        <div className="lg:pb-10 h-full w-full pt-4">
          <div className="flex justify-between gap-2 items-end px-2 pb-24">
            <CustomButton
              textColor="black"
              buttonColor="[#F2EFFF]"
              type="button"
            >
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
