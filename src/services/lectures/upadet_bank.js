// /update-banks

import axios from "axios";

export const updateBank = async (values) => {
  axios
    .post(
      "https://uil-tp.com.ng/login/login-students",

      {
        account_number:values.account_number,
        account_name:values.account_name,
        department:values.department,
        email:values.email
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
