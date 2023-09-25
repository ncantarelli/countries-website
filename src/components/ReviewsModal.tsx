import { FunctionComponent, useEffect, useRef } from 'react';
import '../style/reviews-modal-styles.css';


interface ReviewsModalProps {
  onClose: () => void;
}

const ReviewsModal: FunctionComponent<ReviewsModalProps> = ({ onClose }) => {

  const modalRef = useRef<HTMLDivElement | null>(null);

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
        <form className="reviews-modal-content">
          <button className="CloseButtonReview" onClick={onClose}>
          <img src="../src/assets/closing-button.svg" alt="Close" />
        </button>
          <h2>Your experience</h2>
          <div className='InputElements'>
            <div className='InputElements'>
              <label>Cities You Visited</label>
              <input type='text' className='ExperienceInput' placeholder='London, Berlin, Paris'></input>
            </div>
            <div className='InputElements'>
              <label>Date of your Trip</label>
              <input type='text' className='ExperienceInput' placeholder='Dec 21, 2022 to Jan 3, 2023'></input>
            </div>
            <div className='InputElements'>
              <label>Tell us about your Experience</label>
              <textarea className='ExperienceBox' placeholder='What did you see in your trip?'></textarea>
            </div>
          </div>
          <button className="PublishButtonReview" onClick={onClose}>Publish Review</button>
          <p>By clicking on "Publish review" you agree to make your review public.</p>
        </form>
        
      </div>
    </div>
  );
};

export default ReviewsModal;