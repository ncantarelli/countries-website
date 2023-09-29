import { FormEvent, FunctionComponent, useContext, useEffect, useRef, useState } from 'react';
import '../style/reviews-modal-styles.css';
import { ReviewsType } from '../types/customTypes';
import { AuthContext } from '../context/AuthContext';
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { db } from '../config/firebaseConfig';



interface ReviewsModalProps {
  onClose: () => void;
}

const ReviewsModal: FunctionComponent<ReviewsModalProps> = ({ onClose }) => {

  const {user} = useContext(AuthContext);

  const [countryInput, setcountryInput] = useState("");
  const [citiesInput, setcitiesInput] = useState("");
  const [travelDatesInput, settravelDatesInput] = useState("");
  const [expTextInput, setexpTextInput] = useState("");

  const modalRef = useRef<HTMLDivElement | null>(null);

  const submitReview = async () => {

      const newReview:ReviewsType = {
        author: user!.email!,
        country: countryInput,
        traveldates: travelDatesInput,
        cities: citiesInput,
        text: expTextInput,
        date: new Date(),
      };

      console.log('newReview :>> ', newReview);
      const docRef = await addDoc(collection(db, "reviews"), newReview);
      console.log("Document written with ID: ", docRef.id);

  };

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    }

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };

  }, [onClose])

  return (
    <div className="reviews-modal">
      <div ref={modalRef}>
        <form className="reviews-modal-content" onSubmit={handleForm}>
          <button className="CloseButtonReview" onClick={onClose}>
          <img src="../src/assets/closing-button.svg" alt="Close" />
        </button>
          <h2>Your experience</h2>
          <div className='InputElements'>
            <div className='InputElements'>
              <label>Country You Visited</label>
              <input 
                type='text' 
                className='ExperienceInput' 
                placeholder='Germany'
                required 
                onChange={(e) => {
                    setcountryInput(e.target.value);
                    // console.log('countryInput :>> ', countryInput);
                }}>
              </input>
            </div>
            <div className='InputElements'>
              <label>Cities You Visited</label>
              <input 
                type='text' 
                className='ExperienceInput' 
                placeholder='London, Berlin, Paris'
                required
                onChange={(e) => {
                  setcitiesInput(e.target.value);
                  // console.log('citiesInput :>> ', citiesInput);
                }}>
              </input>
            </div>
            <div className='InputElements'>
              <label>Date of your Trip</label>
              <input 
                type='text' 
                className='ExperienceInput' 
                placeholder='Dec 21, 2022 to Jan 3, 2023'
                required
                onChange={(e) => {
                  settravelDatesInput(e.target.value);
                  // console.log('travelDatesInput :>> ', travelDatesInput);
                }}>
              </input>
            </div>
            <div className='InputElements'>
              <label>Tell us about your Experience</label>
              <textarea 
                className='ExperienceBox' 
                placeholder='What did you see in your trip?'
                required
                onChange={(e) => {
                  setexpTextInput(e.target.value);
                  // console.log('expTextInput :>> ', expTextInput);
              }}></textarea>
            </div>
          </div>
          <button className="PublishButtonReview" onClick={submitReview}>Publish Review</button>
          <p>By clicking on "Publish review" you agree to make your review public.</p>
        </form>
        
      </div>
    </div>
  );
};

export default ReviewsModal;