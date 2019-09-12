import * as type from '../Constants/MyMiniApp.constant'

const stateMiniApp = {
    LoginStatus: "",
    StorageStatus: localStorage.length,
    listMovie: [
        {
            Title: "AnnaBelle",
            Link: "https://www.youtube.com/embed/KisPhy7T__Q",
            Author: "admin@gmail.com",
            Description: "Annabelle là câu chuyện về nguồn gốc của búp bê quỷ ám. Đi sâu vào bộ phim lần này Annabelle xuất hiện tại một gia đình vợ chồng trẻ.",
            Like: 5,
            Dislike: 10
        },

        {
            Title: "Spider-Man: Far From Home",
            Link: "https://www.youtube.com/embed/ORrQKFliVLM",
            Author: "admin@gmail.com",
            Description: "Nhóc nhện Tom Holland vừa hé lộ tên phần tiếp theo của loạt phim Người Nhện sẽ là Spider-Man: Far From Home, tạm hiểu là Người Nhện: Xa Nhà.",
            Like: 15,
            Dislike: 20
        },

        {
            Title: "Avengers 4: Endgame",
            Link: "https://www.youtube.com/embed/TcMBFSGVi1c",
            Author: "admin@gmail.com",
            Description: "Biệt Đội Siêu Anh Hùng 4: Tàn Cuộc (Avengers 4: Endgame) ra mắt vào tháng 4/2019 sẽ giải quyết triệt để những khúc mắc đã vạch ra suốt 22 bộ phim trước đó.",
            Like: 25,
            Dislike: 30
        }
    ],

    listUser: [
        {
            Email: "abc@gmail.com",
            Password: "123",
        },

        {
            Email: "def@gmail.com",
            Password: "456",
        },

        {
            Email: "xyz@gmail.com",
            Password: "789",
        },
    ],
}

const storeMiniAppReducer = (state = stateMiniApp, action) => {
    switch (action.type) {
        case type.REGISTER: {
            let list = [...state.listUser];
            let objRegister = action.objRegister;
            let index = list.findIndex(item => item.Email === objRegister.Email);
            if (index === -1) {
                alert("Register Success !!!");
                list.push(objRegister);
                state.listUser = list;
                document.getElementById('close').click()
            }
            else alert("This Email Is Exist !!!");
            return { ...state }
        };

        case type.LOG_IN: {
            let UserLogin = action.objLogin
            let listUser = [...state.listUser];
            let index = listUser.findIndex(i => i.Email === UserLogin.Email);
            if (index !== -1) {
                if (listUser[index].Password === UserLogin.Password) {
                    alert("Login Success !!!");
                    state.LoginStatus = 1;
                    state.StorageStatus = localStorage.length;
                    localStorage.setItem('UserLogin', UserLogin.Email);
                    document.getElementById('close').click()
                }
                else {
                    alert("Password is not correct !!!");
                }
                return { ...state }
            }
            else {
                alert("Email or Password is not correct !!!")
            }
            return { ...state }
        };

        case type.LOG_OUT: {
            localStorage.clear();
            state.StorageStatus = localStorage.length;
            state.LoginStatus = "";
            return { ...state }
        };

        case type.SHARE_MOVIE: {
            let list = [...state.listMovie];
            let objShare = action.objShare;
            let Des = "";
            if (objShare.description.length > 30) {
                Des = objShare.description.slice(-objShare.description.length,objShare.description.length-30) + " ...";
            }
            else if (objShare.description === " " || objShare.description === ""){
                Des = "Nội Dung Đang Cập Nhật ...";
            }
            else {
                Des = objShare.description + "...";
            }
            let addMovies = {
                Title: objShare.title,
                Link: "https://www.youtube.com/embed/" + action.linkAPI,
                Author: localStorage.getItem('UserLogin'),
                Description: Des,
                Like: 0,
                Dislike: 0
            }
            console.log(Des)
            let index = list.findIndex(item => item.Link === addMovies.Link);
            if (index === -1) {
                alert("Share Movie Success !!!");
                list.push(addMovies);
                state.listMovie = list;
                document.getElementById('close').click()
            }
            else alert("This URL Is Exist !!!");
            return { ...state }
        };

        default: return { ...state }
    }
}

export default storeMiniAppReducer