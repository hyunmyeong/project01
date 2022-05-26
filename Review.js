import React from "react";
import { useHistory,useParams } from "react-router-dom";


const Review = (props) => {
   const history = useHistory();
   const params = useParams();
   const [rate,setRate] = React.useState(0);
  
    return (
        <div style={{
            maxWidth:"350px",
            border: "1px solid #ddd",
            padding: "20px",
            width: "80vw",
            height:"90vh",
            margin: "2rem auto",
            borderRadius: "8px",
            boxSizing:"border-box",
         
          }}>
            <h1 style={{
            fontSize: "20px",
            fontWeight:"bold",
            textAlign:"center"
          }}>
            <span style={{
              color:"#fff",
              fontWeight:"900",
              background:"orange",
              padding:"0.2rem",
              borderRadius:"5px"
          }}>
            {params.week_day}요일
            </span>{""}
            평점 남기기
          </h1>
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            margin:"1rem 0",
            width:"100%"
          }}>
            {Array.from({length:5},(item,index)=>{
              return(
                <div
                  key={index} onClick={()=>{
                    setRate(index+1);
                  }}
                  style={{
                    width:"30px",
                    height:"30px",
                    borderRadius:"30px",
                    margin:"5px",
                    backgroundColor:rate < index + 1 ? "#ddd" : "#ffeb3b",
                  }}
                ></div>
              );
            })}
          </div>
          <div onClick={()=> {
            history.push("/");
          }}>
            <button style={{
            width:"250px",
            height:"50px",
            backgroundColor:"purple",
            border:"1px solid", 
            borderRadius:"5px",  
            padding:"10px",
            fontSize:"15px",
            color:"white",
            alignItems:"center",
            justifyContent:"center",
          }}>
              평점 남기기
          </button>
          </div>
        </div>
)
}

export default Review;