import http from "./http_common";

//GET MEMBER
export const ApiFetchMember = async (memberToken) => {

    let result = await http.get("/member/fetchMember", {
        headers: {
          'x-access-token': memberToken,
        }
      })
    return result.data
}

// ADD MEMBER
export const ApiPostMember = async (data) => {


    const result = await http.post("/member/register", data )
    return result.data
}

// CHECK LOGIN MEMBER
export const ApiPostLogin = async (member_email, member_password) => {

    let result = await http.post("/member/login", { member_email, member_password })
    return result.data
}


