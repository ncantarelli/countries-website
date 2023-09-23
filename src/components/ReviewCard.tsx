

const ReviewCard = () => {
    return (
        <div className="ReviewContainer">
            <div>
                <h3>Sarah Johnson</h3>
                <p className="ReviewDate">15.09.2023</p>
            </div>
            {/* <div key={country.name.common}>
                <span>{country.name.common} </span>
                <span>{country.flag}</span></div> */}
            <div className="TravelDetails">
                <p>Travel Dates: <span>June 15, 2022 to June 28, 2022</span></p>
                <p>Cities: <span>Ulaanbaatar and Kharkhorin</span></p>
            </div>
            <p className="ReviewText">My journey through Mongolia was an extraordinary adventure filled with awe-inspiring landscapes and rich cultural experiences. Starting in Ulaanbaatar, I was immediately captivated by the bustling markets and the warmth of the local people. Venturing into the vast wilderness, I explored Terelj National Park, where the surreal rock formations and serene wilderness left me breathless. Camping under the stars in a traditional ger was a highlight, offering a glimpse into the nomadic way of life.
            The ancient city of Kharkhorin, once the capital of the Mongol Empire, was a historical treasure trove. Visiting the Erdene Zuu Monastery, surrounded by a vast expanse of grassland, felt like stepping back in time. The spiritual aura of the place was palpable.
            One of the most magical moments was at Bayanzag, where the Flaming Cliffs glowed like a fiery dragon during sunset. Fossil hunting and uncovering dinosaur remains in this remote desert region was a surreal experience.
            Mongolia's vastness and the warmth of its people make it a destination like no other. It's a place where you can lose yourself in the beauty of nature and discover the heart of a nomadic culture. My journey through Mongolia will forever hold a special place in my heart.</p>
        </div>
    );
};

export default ReviewCard