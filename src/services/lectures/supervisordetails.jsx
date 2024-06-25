

 export const fetchLecture = async (values) => {
    try {
      const response = await axios.get('https://uil-tp.com.ng/get-lecture', {
        params: {
          staff_id:values.staff_id,
        },
      });
      setMessage(response.data.message);
      console.log(response.data)
      setError('');
    } catch (err) {
     console.log(err.data.message)
    }
  };

