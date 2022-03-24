import { useEffect } from "react";
import axiosInstance from "../../axios";
import { useSnackbar } from "notistack";
import NavBarSpace from '../BaseComponents/NavBarSpace';

const Profile = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  //const [user, setUser] = useState(null);
  const user = null;

  useEffect(() => {
    if (user !== null) return;
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

  const handlePayment = () => {
    console.log("ONCLICK FOR PAYMENT");
    let storage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    let access_token = storage ? storage.user[0].tokens.access_token : null;
    let details = storage ? storage.user[1].details : null;
    console.log(details);
  if(access_token) {
    axiosInstance
      .post("../home/payment", {
          username: details.username,
          email: details.user_email,
          // phone: details.phone
        }, {
        headers: {
          Authorization: "JWT " + storage.user[0].tokens.access_token,
        },
      })
      .then((response) => {
        // setUser(response.data);
        console.log(response.data);
        window.location.href = response.data;
      })
      .catch((error) => {
        // console.log(error);
        // props.setIsAuth(false);
      });
    }
    else {
      console.log("USER NOT LOGGED IN");
    }
  };
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
      <NavBarSpace />
      <button onClick={handlePayment}>
      <a
        href="https://www.instamojo.com/@klusamyak/la0747a9640ac4948819986013fe771e9"
        //href="https://test.instamojo.com/api/1.1/"
        //href="https://test.instamojo.com/@mchaitanyanathsingh/"
        rel="im-checkout"
        data-text="Pay"
        data-css-style="color:#ffffff; background:#5300eb; width:180px; border-radius:30px"
        data-layout="vertical"
      >Paynow</a></button>
    </div>
  );
};

// https://www.instamojo.com/@klusamyak/la0747a9640ac4948819986013fe771e9/
export default Profile;
