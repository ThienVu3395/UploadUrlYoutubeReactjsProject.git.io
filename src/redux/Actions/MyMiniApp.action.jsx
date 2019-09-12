import * as type from '../Constants/MyMiniApp.constant';
import axios from 'axios'

export const Register = (objRegister) => {
    return {
        type : type.REGISTER,
        objRegister
    }
}

export const Login = (objLogin) => {
    return {
        type : type.LOG_IN,
        objLogin
    }
}

export const Logout = () => {
    return {
        type : type.LOG_OUT
    }
}

export const ShareMovie = (objShare) => {
    return  (dispatch) => {
        let getLinkApi = "";
        if(objShare.Link.length >= 43){
            getLinkApi = objShare.Link.slice(32);
        }
        else {
            getLinkApi = objShare.Link.slice(20);
        }
        axios({
            url: `https://www.googleapis.com/youtube/v3/videos?id=${getLinkApi}&key=AIzaSyDBiACZhchapuqwkTwxw0rlX-QE0kO1uh0&part=snippet&fieds=items(snipper(title,description))`,
            method: 'GET',
        }).then((result) => {
            dispatch({
                type : type.SHARE_MOVIE,
                objShare : result.data.items[0].snippet,
                linkAPI : getLinkApi
            })
        }).catch((error) => {
            alert("This URL Is Not Exist!!!")
        })
    }
}