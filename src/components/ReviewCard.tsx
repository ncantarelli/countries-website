import { Timestamp, collection, getDocs, onSnapshot, query} from "firebase/firestore"; 
import { db } from "../config/firebaseConfig";
import { FunctionComponent, useEffect, useState } from "react";
import { ReviewsType } from "../types/customTypes";

// interface ReviewsType {
//     author: string;
//     text: string;
//     countries: string;
//     cities: string;
//     date: Timestamp;
//     traveldates: string;
// }
interface ReviewsCardProps {
    countryName: string;
  }

const ReviewCard: FunctionComponent<ReviewsCardProps> = (countryName) => {

    const [reviewMessages, setReviewMessages] = useState<ReviewsType[] | null>(null);

    const getReviews = async () => {

        const querySnapshot = await getDocs(collection(db, `countries/${countryName}/reviews/`));

        const reviewsArray:ReviewsType[] = [];

        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log('doc.data :>> ', doc.data());
            reviewsArray.push(doc.data() as ReviewsType);
        });
        setReviewMessages(reviewsArray);
    };
    
    const formatDate = (date:Timestamp | Date):string => {

        if(date instanceof Timestamp) {
            const formattedDate = new Date(date.seconds * 1000).toLocaleString();
            return formattedDate; 
        } else {
            const formattedDate = new Date(date).toLocaleString();
            return formattedDate;
        };
        
    };

    const getReviewsLiveUpdate = () => {
        if (countryName.countryName) {

            const q = query(collection(db, `countries/${countryName.countryName}/reviews`));
        console.log('countryName :>> ', countryName);
        console.log('q review :>> ', q);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messagesArray: ReviewsType[] = [];
        querySnapshot.forEach((doc) => {
            messagesArray.push(doc.data() as ReviewsType);
        });
        setReviewMessages(messagesArray);
        }); 
        }
       
    }
    useEffect(() => {

    getReviewsLiveUpdate();

    }, []);

// const ReviewCard = () => {

//     const [reviewMessages, setReviewMessages] = useState<ReviewsType[] | null>(null);

//     const getReviews = async () => {

//         const querySnapshot = await getDocs(collection(db, "reviews"));

//         const reviewsArray:ReviewsType[] = [];

//         querySnapshot.forEach((doc) => {
//             console.log(`${doc.id} => ${doc.data()}`);
//             console.log('doc.data :>> ', doc.data());
//             reviewsArray.push(doc.data() as ReviewsType);
//         });
//         setReviewMessages(reviewsArray);
//     };
    
//     const formatDate = (date:Timestamp | Date):string => {

//         if(date instanceof Timestamp) {
//             const formattedDate = new Date(date.seconds * 1000).toLocaleString();
//             return formattedDate; 
//         } else {
//             const formattedDate = new Date(date).toLocaleString();
//             return formattedDate;
//         };
        
//     };

//     const getReviewsLiveUpdate = () => {
//         const q = query(collection(db, "reviews"));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const messagesArray: ReviewsType[] = [];
//         querySnapshot.forEach((doc) => {
//             messagesArray.push(doc.data() as ReviewsType);
//         });
//         setReviewMessages(messagesArray);
//         });
//     }
//     useEffect(() => {

//     getReviewsLiveUpdate();

//     }, []);
    
    

    return (
        <>
        {reviewMessages && reviewMessages?.map((review, index) => {
          return (
            <div className="ReviewContainer" key={index}>
                <div>
                    <h3>{review.author}</h3>
                    <p className="ReviewDate">{formatDate(review.date)}</p>
                </div>  
                <div className="TravelDetails">
                    <p>Travel Dates: <span>{review.traveldates}</span></p>
                    <p>Cities: <span>{review.cities}</span></p>
                </div>
                <p className="ReviewText">{review.text}</p>
            </div>
          );
        })}
        
        </>
    );
};

export default ReviewCard