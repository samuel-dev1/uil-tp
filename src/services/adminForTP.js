import { request } from "../utils";

export const adminSelectTPSch = async (values) => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    try {
      const res = await request.post(
        "/admin/chose-school",
         values,
        {
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': token,
              },
        }
      );
      console.log(res);
    } catch (error) {
    console.log(error);
    }
  }