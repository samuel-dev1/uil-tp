import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from "react-to-print";
import Html2Pdf from 'js-html2pdf';

export const FormalLetter = () => {
  const componentRef = useRef();
  const location = useLocation();
  const data = location?.state?.data;

  useEffect(()=> {
     console.log(data);
  },[])

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    print: async (printIframe) => {
      const document = printIframe.contentDocument;
      if (document) {
        const html = document.getElementsByClassName("FormalLetter")[0];
        const options = {
          margin: 0,
          filename: "posting-letter.pdf",
        };
        const exporter = new Html2Pdf(html, options);
        await exporter.getPdf(options);
      }
    },
  });
  return (
    <>
    <div ref={componentRef} className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 FormalLetter">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Faculty of Education Teaching Practice Portal</h1>
        <p className="text-sm">24th July, 2024</p>
      </div>
      <div id="formal-letter">
        <div className="mb-4">
          <p className="text-base">
            University of Ilorin <br />
            Faculty of Education <br />
            2023 Teaching Practice Exercise
          </p>
        </div>
        <div className="mb-4">
          <p className="text-base">
            The Principal, <br />
            {data?.school_name} <br />
            {data?.address}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-base">Dear Sir/Ma,</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">2024 TEACHING PRACTICE EXERCISE</h2>
          <p className="text-base">
            {`${data?.gender === "female"? 'Mrs.': 'Mr.'}`} {data?.firstname} {data?.lastname} has been posted for immediate resumption to your school for
            six weeks Teaching Practice exercise, starting from Monday, 25 September, 2023 to Friday, 3
            November, 2023. He is also expected to participate fully in all other school activities daily at
            usual time.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-base">
            We would appreciate if you could appoint a committed component teacher to serve as MENTOR
            TEACHER and oversee the activities of the student. This will go a long way to assist in the
            monitoring of the student and ensure quality control.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-base">
            As stakeholders in education, we implore you to treat him like your permanent staff, especially
            in the areas of dressing and attitude to work. We also wish to have a separate attendance
            register opened for him during the period.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-base">Thank you for your usual cooperation.</p>
        </div>
        <div className="mt-6">
          <p className="text-base">Yours faithfully,</p>
          <p className="text-lg font-bold mt-2">Prof. O. L. Olaitan</p>
          <p className="text-base">Coordinator, TP Committee</p>
        </div>
      </div>
    </div>
     <div className="flex justify-center mt-6">
     <button
       onClick={handlePrint}
       className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
     >
       Print
     </button>
   </div>
   </>
  );
};
