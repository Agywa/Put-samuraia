import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";
import {AppStateType} from "../../redux/redux-store";

type ContactsType = {
    facebook: string
    website: string | null
    vk: string
    twitter:string
    instagram: string
    youtube: string| null
    github: string
    mainLink: string|null

}

type PhotosType ={
    small: string
    large:string
}
export type ProfileAllType = {
    profile:ProfileType
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName: string
    photos: PhotosType

}

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(` https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: AppStateType) => ({
 profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer)