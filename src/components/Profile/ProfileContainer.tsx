import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";
import {AppStateType} from "../../redux/redux-store";
import {useParams} from "react-router-dom";


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
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileAllType) => void
}
type PropsType = MapStatePropsType & MapDispatchToPropsType


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
        axios.get(` https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
    profile: state.profilePage.profile
});
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile
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
