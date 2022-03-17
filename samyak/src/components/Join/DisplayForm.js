import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const DisplayForm = (props) => {
    let toBeDisplayed = props.toBeDisplayed;
    if(toBeDisplayed === "LoginForm") 
        return <LoginForm />
    else
        return <RegisterForm />
}

export default DisplayForm;