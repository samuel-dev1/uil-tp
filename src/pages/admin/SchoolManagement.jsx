import { useState } from "react"
import { SchoolList, AddSchool } from "../../components"

export const SchoolManagement = ()=> {
    const [ addSchool, setAddSchool] = useState(false);
    const [deletschool, setDeleteschool] = useState(false)

    if(addSchool){
       return(
        <>
        <AddSchool />
        </>
       )
    }
    if(deletschool){
        return(
            <>
            
            </>
        )
    }
    return(
        <>
         <SchoolList setAddSchool={setAddSchool} />
        </>
    )
}