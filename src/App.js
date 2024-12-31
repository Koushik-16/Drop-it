import { Routes, Route, useNavigate} from "react-router-dom"
import Login from "./Container/Login";
import Home from "./Container/Home"
import { useEffect, useState } from 'react';
import { userAccessToken, fetchUser } from './utils/fetch';


function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    
    const accesstoken = userAccessToken();
    if (!accesstoken) {
     navigate("/login", {replace : true});
    } else {
      const userinfo = fetchUser();
      setUser(userinfo);
    }
  }, [])
  return (
    <Routes>
      <Route path= "/login" exact element={<Login />} />
      <Route path="/*" element={<Home user={user} />} />
    </Routes>
  );
}

export default App;