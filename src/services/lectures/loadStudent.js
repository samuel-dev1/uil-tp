
import axios from "axios";

export const stdUnderLecture= async (values) => {
    try {
      const response = await axios.get('https://uil-tp.com.ng/show-ob-students', {
        params: {
          staff_id:values.supervisor_id,
        },
      });
      setMessage(response.data.message);
      console.log(response.data)
      setError('');
    } catch (err) {
     console.log(err.data.message)
    }
  };
b 




