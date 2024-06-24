import { request } from '../utils/index'


export const fetchLogin = async (values) => {
    try {
      const res = await request.post("/auth/supervisor-login", values);
      localStorage.setItem(
        "sessionId",
        JSON.stringify(res.data.cookies.session_id),
      );
  
      console.log(res);
    } catch (e) {
        console.log(e);
    }
  };