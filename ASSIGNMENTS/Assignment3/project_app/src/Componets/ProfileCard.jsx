import React from 'react'

const ProfileCard = ({name,role,image}) => {
    
  return (
    <div style={beauty.card}>
      <h3>Name: {name}</h3>
      <p>role: {role}</p>
      <img src={image} alt={name} style={beauty.image} />
    </div>
  )
}

const beauty={
    card: {
        border: "2px double brown ",
        width: "200px",
        borderRadius: "10px",
        padding: "50px",
        textAlign: "center",
        margin:"50 px"
    },
    image:{
        width: "100%",
        borderRadius:"10px"

    }
};

export default ProfileCard
