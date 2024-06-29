import { useState } from "react"
import { SchoolList, AddSchool } from "../../components"

export const SchoolManagement = ()=> {
    const [ addSchool, setAddSchool] = useState(false);

    if(addSchool){
       return(
        <>
        <AddSchool />
        </>
       )
    }
    return(
        <>
         <SchoolList setAddSchool={setAddSchool} />
        </>
    )
}