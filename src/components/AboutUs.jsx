import React from 'react'

const AboutUs = () => {
  return (
    <div className='cont_about' style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "coloumn",
        height: "82vh"
    }}>
        <div className="inner_about" style={{
            marginTop: "-10vh",
            textAlign: "center"
        }}>
        <p style={{
            fontSize: "37px",
            marginBottom: "2vh"
        }} >Developers</p>
        <p style={{
            fontSize: "22px"
        }}>Animesh Jain</p>
        <p style={{
            fontSize: "22px"
        }}>Anukriti Shrivastava</p>
        <p style={{
            fontSize: "22px"
        }}>Aniket Chelawat</p>
        </div>
    </div>
  )
}

export default AboutUs
