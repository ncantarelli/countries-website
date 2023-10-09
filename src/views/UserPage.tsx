import { useContext, useEffect, useState } from "react";
import "../style/userpage-styles.css"
import { AuthContext } from "../context/AuthContext";
import {  collection, getDocs, query, where, getDoc , doc, updateDoc, deleteField} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { CountryType, ReviewsType } from "../types/customTypes";

function UserPage() {
  const { user } = useContext(AuthContext);
  const [favoriteCountries, setFavoriteCountries] = useState<CountryType[]>([]);
  const [userReviews, setUserReviews] = useState<ReviewsType[]>([]);

  useEffect(() => {
    const fetchUserReviews = async () => {
      if (!user) {
        return;
      };
      try {
        const q = query(collection(db, "reviews"), where("author", "==", user.displayName));
        const querySnapshot = await getDocs(q);

        const userReviewsArray: ReviewsType[] = querySnapshot.docs.map((doc) => doc.data() as ReviewsType);
        setUserReviews(userReviewsArray);
      } catch (error) {
        console.log('Error fetching user reviews :>> ', error);
      }

    };

    fetchUserReviews();
    
  }, [user]);
  
  const removeItemFromBucketList = async (country: CountryType) => {
    try {
  
      const updatedFavoriteCountries = favoriteCountries.filter(
        (item) => item !== country
      );
      setFavoriteCountries(updatedFavoriteCountries);

      const docRef = doc(db, "favorites", `${user!.uid}`);
      await updateDoc(docRef, {
        countries: updatedFavoriteCountries,
      });
    } catch (error) {
      console.error("Error removing item from bucket list: ", error);
    }
  };

  const deleteAllFavorites = async () => {
    try {
      setFavoriteCountries([]);
      const docRef = doc(db, "favorites", `${user!.uid}`);
      await updateDoc(docRef, {
        countries: deleteField(),
      });
    } catch (error) {
      console.log('Error deleting all favorites :>> ', error);
    }
  }


  // useEffect(() => {
    
  //   const fetchFavoriteCountries = async () => {
  //     if (!user) {
  //       return;
  //     };
    
  //     try {
  //       const q = query(collection(db, "favorites", user!.uid, "countries"));
  //       const querySnapshot = await getDocs(q);
     
 
  //       const favoriteCountriesArray = querySnapshot.docs.map((doc) => {
  //         console.log("doc>>>>", doc.data())
  //         return doc.data() as CountryType} )
        
  //       querySnapshot.forEach((doc)=> {
  //         console.log("doc>>>", doc.data())
  //       })
  //       const favoriteCountriesArray = querySnapshot.forEach((doc)=> {
  //         console.log("doc>>>", doc.data())
  //       })
  //       setFavoriteCountries(favoriteCountriesArray);
  //       console.log("Favorite Countries:", favoriteCountriesArray);
  //     } catch (error) {
  //       console.log('Error fetching favorite countries :>> ', error);
  //     };
  //   };



  //   fetchFavoriteCountries();
  // }, [user]);
  

  //REVIEW accediendo solo al documento :
      useEffect(() => {
    
    const fetchFavoriteCountries = async () => {
      if (!user) {
        return;
      };
    
      try {
   
          const docRef = doc(db, "favorites", `${user!.uid}`); // crea referencia de un documento en una colección.
          // console.log("user>>>>", user.uid)
          const singleDocument = await getDoc(docRef); //accede al documento usando la referencia
          console.log("querySnapshot>>>", singleDocument.data())
          const favoriteCountriesArray: CountryType[] = singleDocument.data()?.countries
          setFavoriteCountries(favoriteCountriesArray);
          console.log("Favorite Countries:", favoriteCountriesArray);

      } catch (error) {

          console.log('Error fetching favorite countries :>> ', error);

      };
    };
    fetchFavoriteCountries();
  }, [user]);

  return (
    <div className="UserPageContainer">
      <h1>Your Account</h1>
      <div className="Header"><h2>Details</h2><div className="EditButton"><img src="https://res.cloudinary.com/dykwqjdq3/image/upload/v1696845366/travelImages/a86ltc8pmqmvj9hrwpmj.svg"/><button>Edit</button></div></div>
      <div className="DetailsContainer">
        <div><p>Username: <span>{user?.displayName}</span></p></div>
        <div><p>Email: <span>{user?.email}</span></p></div>
        <div><p>Password: <span>******</span></p></div>
        <p>User since: <span>{user?.metadata.creationTime}</span></p>
      </div>
      <div className="Header">
        <h2>Bucket List</h2>
        <div className="EditButton">
          <img src="https://res.cloudinary.com/dykwqjdq3/image/upload/v1696845367/travelImages/eii8kvalvr2wy55fdcwd.svg"/>
          <button onClick={deleteAllFavorites}>Delete All</button>
        </div>
      </div>
      <div className="CountryDetailsContainer">
        {favoriteCountries && favoriteCountries.length > 0 ? (
            favoriteCountries.map((country, index) => (
              <div className="BucketListItem" key={index}>
                  <h3>{country.name?.common} {country.flag}</h3>
                  <img className="DeleteFavoriteButton" src="https://res.cloudinary.com/dykwqjdq3/image/upload/v1696845369/travelImages/osysjlug9kvaiikkeflo.svg" onClick={() => removeItemFromBucketList(country)}/>
              </div>
            ))
          ) : 
          (
            <div className="BucketListItemEmpty">
            <p>Add some countries to your bucket list to see them here!</p>
            </div>
          )
        }    
      </div>
      <h2>Reviews</h2>
      <div className="UserReviewsContainer">
          {userReviews.map((review, index) => (
            <div className="ReviewItem" key={index}>
            <h3>{review.country}</h3>
            <div>
            <p>Cities: <span>{review.cities}</span></p>
            <p>Travel Dates: <span>{review.traveldates}</span></p></div>
            <p><span>{review.text}</span></p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserPage