import { useEffect } from "react";
import axiosInstance from "../../axios";

import { useSnackbar } from "notistack";

const Profile = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  // const [user, setUser] = useState(null);
  const user = null;

  useEffect(() => {
    if(user !== null)
      return;
    let storage = JSON.parse(localStorage.getItem("user"));
    if (props.isAuth) {
      axiosInstance
        .get("user/", {
          headers: {
            Authorization: "JWT " + storage.user[0].tokens.access_token,
          },
        })
        .then((response) => {
          // setUser(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          // console.log(error);
          props.setIsAuth(false);
        });
    } else {
      enqueueSnackbar("Session Expired or You Haven't LoggedIN yet!", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }
  }, [enqueueSnackbar, props.isAuth, props, user]);

  if (!props.isAuth) {
    return (
      <div>
        <h1>User Not Logged IN</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Profile</h1>
      <ul>
        {user &&
          user.map((user) => {
            return (
              <li key={user.id}>
                {user.username} {user.email}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Profile;
