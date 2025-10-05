import React,{useState} from "react";

function Content1(){
    const [name,setName]=useState("Guest");
    const [quantity,setQuantity]=useState(1);
    const [Comments,setComments]=useState("");
    const [payment,setPayment]=useState("Cash on Delivery");
    const [Radiobtn,setRadiobtn]=useState("Online");

    function InputName(event){
        setName(event.target.value);
    }
    function Quantity(event){
        setQuantity(event.target.value);
    }

    function Commentsws(event){
        setComments(event.target.value);
    }
    function Payment(event){
        setPayment(event.target.value);
    }

    function Radiobuttons(event){   
        setRadiobtn(event.target.value);
    }
    return(
        <>
        <div>
            <h2>Name:{name}</h2>
            <input type="text" onChange={InputName} placeholder="Enter your Name"/>
            <br/><br/>
            <h2>Quantity:{quantity}</h2>
            <input type="number" onChange={Quantity} placeholder="Enter Quantity"/>
            <br/><br/>
            <h2>Comments:{Comments}</h2>
            <textarea onChange={Commentsws} placeholder="Enter Comments"></textarea>
            <br/><br/>
            <h2>Payment Method:{payment}</h2>
            <select onChange={Payment}>
                <option value="visa">visa</option>
                <option value="mastercard">mastercard</option>
                <option value="paypal">paypal</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
            <br/><br/>
            <h2>Radio Button:{Radiobtn}</h2>
            <label >
                <input type="radio" value="online" onChange={Radiobuttons} name="payment"/>Online
            </label>
            <label >
                <input type="radio" value="offline" onChange={Radiobuttons} name="payment"/>Offline
            </label>
            
        </div>
        </>
    )
}
export default Content1
