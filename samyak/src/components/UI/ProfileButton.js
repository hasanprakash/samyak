import styled from "styled-components";

const ProfileButtonStyled = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const ProfileButton = (props) => {
    return (
        <ProfileButtonStyled>
            <button onClick={props.onClick} className="btn btn-outline-primary">{props.children}</button>
        </ProfileButtonStyled>
    );
}

export default ProfileButton;