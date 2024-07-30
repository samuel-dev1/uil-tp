export const BackButton = ({ handleBack })=> {
    return(
        <>
          <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: "1rem", height: "1rem"}} className="size-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

        </>
    )
}