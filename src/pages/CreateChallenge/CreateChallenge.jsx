import React, { useState } from 'react'
import styles from '../../styles/style'
import { useNavigate } from 'react-router-dom'

const CreateChallenge = () => {
  const [formStep, setFormStep] = useState(1)
  const navigate = useNavigate()
  const [formState1, setFormState1] = useState({
    challengeName: '',
    description: '',
    requirements: '',
    startDate: '',
    endDate: '',
    challengeType: '',
  })

  const [formState2, setFormState2] = useState({
    wager: '',
    wallet: '',
    minParticipants: '',
    maxParticipants: '',
  })

  const handleNextClick = () => {
    if (formStep === 1) {
      setFormStep(2)
    } else {
      setFormStep(1)
    }
  }

  const handleSubmit = () => {
    console.log(formState1)
    console.log(formState2)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (formStep === 1) {
      setFormState1({ ...formState1, [name]: value })
    } else {
      setFormState2({ ...formState2, [name]: value })
    }
  }

  return (
    <div className="mx-4 flex flex-col">
      <form>
        {formStep === 1 && (
          <div className="flex flex-col gap-[12px]">
            <div className="mb-4 flex flex-col gap-[5px]">
              <label
                htmlFor="challengeName"
                className={`${styles.subheading} !text-[#666666]`}
              >
                Challenge Name
              </label>
              <input
                type="text"
                id="challengeName"
                name="challengeName"
                value={formState1.challengeName}
                onChange={handleInputChange}
                className="h-[56px] rounded-[8px] bg-[#F2EFFF]"
              />
            </div>

            <div className="mb-4 flex flex-col gap-[5px]">
              <label
                htmlFor="description"
                className={`${styles.subheading} !text-[#666666]`}
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formState1.description}
                onChange={handleInputChange}
                className="h-[56px] rounded-[8px] bg-[#F2EFFF]"
              />
            </div>

            <div className="mb-4 flex flex-col gap-[5px]">
              <label
                htmlFor="requirements"
                className={`${styles.subheading} !text-[#666666]`}
              >
                Requirements
              </label>
              <input
                type="text"
                id="requirements"
                name="requirements"
                value={formState1.requirements}
                onChange={handleInputChange}
                className="h-[56px] rounded-[8px] bg-[#F2EFFF]"
              />
            </div>

            <div className="flex gap-[10px] mb-4">
              <div className="flex flex-col gap-[5px] w-[45%]">
                <label
                  htmlFor="startDate"
                  className={`${styles.subheading} !text-[#666666]`}
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formState1.startDate}
                  onChange={handleInputChange}
                  className="h-[56px] rounded-[8px] #bg-[#F2EFFF]"
                />
              </div>
              <div className="flex flex-col gap-[5px] w-[45%]">
                <label
                  htmlFor="endDate"
                  className={`${styles.subheading} !text-[#666666]`}
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formState1.endDate}
                  onChange={handleInputChange}
                  className="h-[56px] rounded-[8px] bg-[#F2EFFF]"
                />
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-[6px]">
              <span className={`${styles.subheading} !text-[#666666]`}>
                Challenge Type
              </span>
              <div className="flex flex-col">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="challengeType"
                    value="dare"
                    checked={formState1.challengeType === 'dare'}
                    onChange={handleInputChange}
                  />
                  <span className={`${styles.subheading} !text-[#666666] ml-3`}>
                    Dare Challenge
                  </span>
                </label>
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name="challengeType"
                    value="p2p"
                    checked={formState1.challengeType === 'p2p'}
                    onChange={handleInputChange}
                  />
                  <span className={`${styles.subheading} !text-[#666666] ml-3`}>
                    P2P Challenge
                  </span>
                </label>
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    name="challengeType"
                    value="group"
                    checked={formState1.challengeType === 'group'}
                    onChange={handleInputChange}
                  />
                  <span className={`${styles.subheading} !text-[#666666] ml-3`}>
                    Group Challenge
                  </span>
                </label>
              </div>
            </div>

            <div className="flex gap-[2%] mb-[120px]">
              <div
                type="button"
                className="flex w-[49%] h-[56px] items-center rounded-[12px]  justify-center border-[1px] bg-[#F2EFFF] text-[#8567FF]"
                onClick={() => {
                  navigate('/')
                }}
              >
                Cancel
              </div>
              <div
                type="button"
                className="flex w-[49%] h-[56px] rounded-[12px] items-center justify-center bg-[#8567FF] text-white"
                onClick={handleNextClick}
              >
                Next
              </div>
            </div>
          </div>
        )}

        {formStep === 2 && (
          <div className="flex flex-col gap-[12px]">
            <div className="mb-4 flex flex-col gap-[5px]">
              <label
                htmlFor="maxParticipants"
                className={`${styles.subheading} !text-[#666666]`}
              >
                Enter Number of Maximum Paricipant
              </label>
              <input
                type="text"
                id="maxParticipants"
                name="maxParticipants"
                value={formState2.maxParticipants}
                onChange={handleInputChange}
                className="h-[56px] rounded-[8px] outline-[#8567FF]"
              />
            </div>
            <div className="mb-4 flex flex-col gap-[5px]">
              <label
                htmlFor="minParticipants"
                className={`${styles.subheading} !text-[#666666]`}
              >
                Enter Number of Minimum Paricipant
              </label>
              <input
                type="text"
                id="minParticipants"
                name="minParticipants"
                value={formState2.minParticipants}
                onChange={handleInputChange}
                className="h-[56px] rounded-[8px] outline-[#8567FF]"
              />
            </div>

            <div className="mb-4 flex flex-col gap-[5px]">
              <label
                htmlFor="wager"
                className={`${styles.subheading} !text-[#666666]`}
              >
                Enter Number of wager amount
              </label>
              <input
                type="text"
                id="wager"
                name="wager"
                value={formState2.wager}
                onChange={handleInputChange}
                className="h-[56px] rounded-[8px] outline-[#8567FF]"
              />
            </div>

            <div className="flex gap-[2%] mb-[120px]">
              <div
                type="button"
                className="flex w-[49%] h-[56px] items-center rounded-[12px]  justify-center border-[1px] border-[#8567FF] text-[#8567FF]"
                onClick={handleNextClick}
              >
                Previous
              </div>
              <div
                type="button"
                className="flex w-[49%] h-[56px] rounded-[12px] items-center justify-center bg-[#8567FF] text-white"
                onClick={handleSubmit}
              >
                Submit
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default CreateChallenge
