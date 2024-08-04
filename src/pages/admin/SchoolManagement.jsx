import { useState } from "react"
import { SchoolList, AddSchool, UpdateSchoolModal } from "../../components"

export const SchoolManagement = ()=> {
    const [ addSchool, setAddSchool] = useState(false);
    const [deletschool, setDeleteschool] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [selectedSchool, setSelectedSchool] = useState();

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
         <SchoolList setAddSchool={setAddSchool} setSelectedSchool={setSelectedSchool} setModalShow={setModalShow} />
         {modalShow  && 
        <UpdateSchoolModal setModalShow={setModalShow} selectedSchool={selectedSchool} />}
        </>
    )
}