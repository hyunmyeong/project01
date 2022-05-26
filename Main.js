import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Main = (props) => {
    const history = useHistory();

    const day_text_dict = {
        0:"일",
        1:"월",
        2:"화",
        3:"수",
        4:"목",
        5:"금",
        6:"토",
    }

    const week_days = Object.keys(day_text_dict).map((_d,index) => {
        let today = new Date().getDay();
        let d = 
                today + parseInt(_d) > 6 ? today + parseInt(_d) -7 : today + parseInt(_d);
        
        return day_text_dict[d];
            })

        let rate_sum = 0;
        const week_rates = week_days.map((w,index) => {
            const random = Math.floor(Math.random()*(Math.floor(5)-Math.ceil(1)+1))+Math.ceil(1);
          rate_sum += random;
          
          return {
              day: w,
              rate: random,
          };
        });

        const rate_avg = (rate_sum / week_rates.length).toFixed(1);
        const [avg,setAvg] = useState(rate_avg);
        
    return (
        <div>
            <div style={{
                border: "1px solid #ddd",
                padding: "20px",
                maxWidth: "350px",
                width:"80vw",
                height:"90vh",
                margin: "30px auto",
                borderRadius: "8px",
                boxSizing:"border-box",
            }}>
                <h1 style={{ 
                fontSize: "20px",
                fontWeight:"bold",
                textAlign:"center",
                padding:"20px 0"
            }}>내 일주일은?</h1>

            {week_rates.map((w,index)=>{
                return(
                    <div key={`week_day_${index}`}
                        style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            margin:"1rem 0",
                            width:"100%",
                        }}
                    >
                    <p style={{margin:"0 0.5rem 0 0", fontWeight:"bold"}}>{w.day}</p>

                    {Array.from({length:5},(item,index)=>{
                        return(
                            <div key={index}
                                style={{
                                    width:"30px",
                                    height:"30px",
                                    borderRadius:"30px",
                                    margin:"5px",
                                    backgroundColor: w.rate < index ? "#ddd" : "#ffeb3b",
                                }}
                            ></div>
                        );
                    })}    
                    
            
            <div  
             style={{
                appearance:"none",
                backgroundColor:"transparent",
                borderColor:"purple",
                width:"0",
                height:"0",
                borderTop:"1rem solid transparent",
                borderBottom:"1rem solid transparent",
                borderLeft:"1.6rem solid purple",
                color:"#fff",
                cursor:"pointer",
            }} onClick={()=>{
                 history.push(`/review/${w.day}`);
            }}
            ></div>
            </div>
            );
            })}

             <div style={{
                 width:"8rem",
                 margin:"2rem auto",
                 display:"flex",
                 justifyContent:"center",
                 ailgnItems:"center",
                 flexDirection:"column",
                 textAlign:"center",
                 color:"blue",
                 padding:"9px",
                 fontSize:"25px",
                 fontWeight:"bold"
             }}
             >
                 평균 평점 {avg}
                 
             </div>
                
            <div style={{
                width:"120px",
                height:"60px",
                backgroundColor:"dodgerblue",
                borderRadius:"6px",
                textAlign:"center",
                margin:"10px auto",

            }}
            onClick={()=>{
                setAvg(parseInt(0).toFixed(1));
            }}
            ><p style={{
                color:"white", 
                fontSize:"18px", 
                fontWeight:"bold",
                padding:"15px 0"
                }}>Reset</p> 
            </div>    
            
               
            </div>
            </div>    
            
    );
};


export default Main;