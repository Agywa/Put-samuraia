import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile_reducer";
import {AppStateType} from "../../redux/redux-store";
import {useParams} from "react-router-dom";
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
    status: string
    updateUserStatus: (status: string) => void
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
    isAuth: boolean
    status: string
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
            userId = 22039;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)

    }

    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                />

            </div>

        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
});

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
    getUserProfile, getUserStatus, updateUserStatus
})(WithUrlDataContainerComponent);

