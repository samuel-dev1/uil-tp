import React, { useEffect, useState } from 'react';
import { Input, Button } from '../../components'; 
import { WindowReloader } from '../../components';
import { useNavigate } from 'react-router-dom';

export const Allscores = () => {

const navigate = useNavigate()


  
return(
   <>
   <div>
      please select a Result to view
   </div>
   <Button handleSubmit={()=>navigate("/see",{state:{"type":"ob"}})} label={"Observation"} />
   <Button handleSubmit={()=>navigate("/see",{state:{"type":"tp"}})} label={"Teaching practice"} />
   </>
)

};
