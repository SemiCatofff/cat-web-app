import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/style';
import { arrowRight, thumbnail, tick, refresh } from '../../assets/images';

const StepRenderer = ({ step, quantity, handleInputChange, handlePrevStep, handleNextStep, handleUploadMedia, uploadedImage, handleSubmit, decrement, increment }) => {
  switch (step) {
    case 1:
      return (
        <div className={`${styles.marginX} text-center h-full`}>
          <p className={`${styles.heading2} mt-10`}>Add Quantity Consumed</p>
          <div className="flex items-center justify-center mt-4">
            <button onClick={decrement} className="bg-gray-300 px-4 py-2 rounded-full">-</button>
            <div className={`${styles.caption1} `}>
              <input type="number" value={quantity} onChange={handleInputChange} className="px-4  text-center w-16 bg-transparent" />
            </div>
            <button onClick={increment} className="bg-gray-300 px-4 py-2 rounded-full">+</button>
          </div>
          <button onClick={handleNextStep} className="bg-yellow px-2 w-40 py-2 rounded-lg mb-4">
            <p className={`${styles.heading2} !text-black flex justify-center`}>Next <span><img src={arrowRight} alt="" className='ml-2 pt-1' /></span></p>
          </button>
        </div>
      );
    case 2:
      return (
        <div className={`${styles.marginX} text-center h-full`}>
          <p className={`${styles.heading2} mt-10 mb-2`}>Upload your media:</p>
          <label htmlFor="file-upload" className="custom-file-upload">
            {uploadedImage ? (
              <img src={uploadedImage} className='w-[152px] h-[108px] object-cover rounded-xl' alt="Uploaded thumbnail" />
            ) : (
              <img src={thumbnail} className='w-[152px] h-[108px] object-cover rounded-xl' alt="Upload icon" />
            )}
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*,video/*"
            onChange={handleUploadMedia}
            className="hidden"
          />
          <div className="w-40 flex justify-between mb-4">
            <button onClick={handlePrevStep} className="bg-gray-400 px-2 py-2 rounded-lg mt-4 w-full mr-1">
              <p className={`${styles.heading2} !text-black flex justify-center`}>Back</p>
            </button>
            <button onClick={handleNextStep} className="bg-yellow px-2 w-full py-2 rounded-lg mt-4 ml-1">
              <p className={`${styles.heading2} !text-black flex justify-center`}>Next</p>
            </button>
          </div>
        </div>
      );
    case 3:
      return (
        <div className={`${styles.marginX} text-center h-full`}>
          <p className={`${styles.heading2} mt-10`}>Confirm your submission:</p>
          <div className="w-40 flex justify-between mb-4">
            <button onClick={handlePrevStep} className="bg-gray-400 px-2 py-2 rounded-lg mt-4 w-full mr-1">
              <p className={`${styles.heading2} !text-black flex justify-center`}>Back</p>
            </button>
            <button onClick={handleSubmit} className="bg-yellow px-2 w-full py-2 rounded-lg mt-4 ml-1">
              <p className={`${styles.heading2} !text-black flex justify-center`}>Submit</p>
            </button>
          </div>
        </div>
      );
    case 4:
      return (
        <div className={`${styles.marginX} relative`}>
          <div className="flex justify-between -mt-1 mb-4">
            <div className=" w-[70px]">
              <p className={`${styles.paragraph} py-1  border  border-neutral-300 border-opacity-10 bg-black  flex justify-center rounded-xl`}> <img src={tick} className='mr-1 ' alt="" />Verified </p>
            </div>
            <img src={refresh} className='w-[15px] h-[17px] my-auto' />
          </div>
          {uploadedImage && (
            <div className="mt-2">
              <img src={uploadedImage} className='w-[152px] h-[120px] object-cover rounded-xl' alt="Submitted thumbnail" />
            </div>
          )}
          <div className="mt-6">
            <div className="flex justify-between">
              <p className={`${styles.heading2}`}>{quantity} gm</p>
              <div className="">
                <p className={`${styles.paragraph} py-1  px-4 bg-white !text-black flex rounded-xl`}>View <img src={arrowRight} className='bg-white ml-1' alt="" /></p>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

StepRenderer.propTypes = {
  step: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  handleUploadMedia: PropTypes.func.isRequired,
  uploadedImage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

export default StepRenderer;
