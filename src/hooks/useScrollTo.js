import React from "react";
import { TbArrowBadgeRight } from "react-icons/tb";
import { useCallback } from "react";

const useScrollTo =()=>
{

    const scrollTo = useCallback((event, targetId) =>{
    event.preventDefault ();

  if (targetId === 'home'){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })

  }
  else{
    const element = document.getElementById(targetId);
    if(element){
        element.scrollIntoView({behavior:'smooth'});
    }

  }

    },[])

return scrollTo;

};

export default useScrollTo;
