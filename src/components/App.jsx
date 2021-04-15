import React from "react";
import contacts from "/src/contacts.js";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        email="b@beyonce.com"
        tel="+123 456 789"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      />
      <Card
        name={contacts[1].name}
        email={contacts[1].email}
        tel={contacts[1].phone}
        img={contacts[1].imgURL}
      />
      <Card
        name={contacts[2].name}
        email={contacts[2].email}
        tel={contacts[2].phone}
        img={contacts[2].imgURL}
      />
    </div>
  );
}

export default App;
