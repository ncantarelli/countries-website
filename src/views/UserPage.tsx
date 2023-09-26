import { useContext } from "react";
import "../style/userpage-styles.css"
import { AuthContext } from "../context/AuthContext";

function UserPage() {

  const { user } = useContext(AuthContext);

  return (
    <div className="UserPageContainer">
      <h1>Your Account</h1>
      <div className="Header"><h2>Details</h2><div className="EditButton"><img src="../src/assets/edit-button.svg"/><button>Edit</button></div></div>
      <div className="DetailsContainer">
        <div><p>Username: <span>{user?.displayName}</span></p></div>
        <div><p>Email: <span>{user?.email}</span></p></div>
        <div><p>Password: <span>******</span></p></div>
        <p>User since: <span>21.12.2022</span></p>
      </div>
      <div className="Header"><h2>Bucket List</h2><div className="EditButton"><img src="../src/assets/delete-button.svg"/><button>Delete All</button></div></div>
      <div className="DetailsContainer">
          
      </div>
      <h2>Reviews</h2>
      <div className="DetailsContainer">
          
      </div>
    </div>
  );
};

export default UserPage