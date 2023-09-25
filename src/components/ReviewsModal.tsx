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
        <h2>Your experience</h2>
        <div className='InputElements'>
          <div className='InputElements'>
            <label>Cities You Visited</label>
            <input type='text' className='ExperienceInput'></input>
          </div>
          <div className='InputElements'>
            <label>Date of your Trip</label>
            <input type='text' className='ExperienceInput'></input>
          </div>
          <div className='InputElements'>
            <label>Tell us about your Experience</label>
            <textarea className='ExperienceBox'></textarea>
          </div>
        </div>
          <button onClick={onClose}>Publish Review</button>
          <p>By clicking on "Publish review" you agree to make your review public.</p>
        </form>
        
        </div>
    </div>
  );
};

export default ReviewsModal;