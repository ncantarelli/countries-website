import { Timestamp, collection, getDocs } from "firebase/firestore"; 
import { db } from "../config/firebaseConfig";
import { useEffect, useState } from "react";

interface ReviewsType {
    author: string;
    text: string;
    countries: string;
    cities: string;
    date: Timestamp;
    traveldates: string;
}

const ReviewCard = () => {

    const [reviewMessages, setReviewMessages] = useState<ReviewsType[] | null>(null);

    const getReviews = async () => {

        const querySnapshot = await getDocs(collection(db, "reviews"));

        const reviewsArray:ReviewsType[] = [];

        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log('doc.data :>> ', doc.data());
            reviewsArray.push(doc.data() as ReviewsType);
        });
        setReviewMessages(reviewsArray);
    };

    const formatDate = (date:number):string => {
        const formattedDate = new Date(date * 1000).toLocaleString();
        return formattedDate;
    };

    useEffect(() => {

     getReviews();

    }, []);
    

    return (
        <>
        {reviewMessages && reviewMessages?.map((review) => {
          return (
            <div className="ReviewContainer" key={review.date.nanoseconds}>
                <div>
                    <h3>{review.author}</h3>
                    <p className="ReviewDate">{formatDate(review.date.seconds)}</p>
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