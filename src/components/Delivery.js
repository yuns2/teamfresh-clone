import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";


function Delivery () {
    const [zonecode, setCode] = useState("");
    const [address, setAddr] = useState("");
    const history = useHistory();

    const onCompletePost = (data) => {
      
        const { zonecode, address } = data;
        setCode( zonecode );
        setAddr( address );

        history.push({
            pathname: "/search_result",
            state : { address : address, zonecode : zonecode }
        });

      }
      
      
      return (
        <div>
            <DaumPostcode onComplete={onCompletePost}/>
        </div>
      )
    
}
export default Delivery;