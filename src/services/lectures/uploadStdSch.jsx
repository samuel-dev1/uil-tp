import axios from "axios";

export const scoreStudents = async (values) => {
  axios
    .post(
      "https://uil-tp.com.ng/lecture/score-students",

      {
        account_number: values.vaues,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      alert(response.data.message);
    })
    .catch((error) => {
      console.error("There was an error!", error);
      alert(error.response.data.message);
    });
};
