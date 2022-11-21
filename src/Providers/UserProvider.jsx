import React from "react";
import { useState } from "react";
import Loading from "../Loading";
import { useEffect } from "react";
import axios from "axios";
import { UserContext } from "../Contexts";

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider value={{ isLoggedIn: !!token, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

// import React from "react";
// import { useState } from "react";
// import { userContext } from "../Contexts";
// import Loading from "../Loading";
// import { useEffect } from "react";

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState();

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (token) {
//       axios
//         .get("https://myeasykart.codeyogi.io/me", {
//           headers: {
//             Authorization: token,
//           },
//         })
//         .then((response) => {
//           setUser(response.data);
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const tokenSignup = localStorage.getItem("tokenSignup");

//   useEffect(() => {
//     if (tokenSignup) {
//       axios
//         .get("https://myeasykart.codeyogi.io/me", {
//           headers: {
//             Authorization: tokenSignup,
//           },
//         })
//         .then((response) => {
//           setUser(response.data);
//           setLoading(false);
//         })
//         .catch(() => {
//           localStorage.removeItem("token");
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <userContext.Provider value={{ isLoggedIn: !!token, user, setUser }}>
//       {children}
//     </userContext.Provider>
//   );
// };

// export default UserProvider;
