import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile_reducer";
import {AppStateType} from "../../redux/redux-store";
import {useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type ContactsType = {
    facebook: string
    website: string | null
    vk: string
    twitter: string
    instagram: string
    youtube: string | null
    github: string
    mainLink: string | null

}
type PhotosType = {
    small: string
    large: string
}
export type ProfileAllType = {
    profile: ProfileType
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: PhotosType

}

type MapStatePropsType = {
    profile: AppStateType
    isAuth:boolean
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileAllType) => void
}
type PropsType = MapStatePropsType & MapDispatchToPropsType

// let AuthRedirectComponent= withAuthRedirect(ProfileContainer);


let AuthRedirectComponent = (props: any) => {
    let navigate = useNavigate();
    let LoggedIn = !props.isAuth;
    useEffect(() => {
        if (LoggedIn) {
            return navigate("/login");
        }
    }, [LoggedIn]);
    return <ProfileContainer {...props}/>
}

const withRouter = (WrappedComponent: any) => (props: any) => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);

    }


    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}/>

            </div>

        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
    getUserProfile

})(WithUrlDataContainerComponent);

// let withUrlDataContainerComponent =  withRouter(ProfileContainer);
//
// function withRouter(ProfileContainer: any) {
//     function ComponentWithRouterProp(props: ProfileAllType) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <ProfileContainer
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }
//
//     return ComponentWithRouterProp;
// }
//


// export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer)
