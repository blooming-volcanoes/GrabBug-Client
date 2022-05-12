/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import { postDataAPI } from '../../utils/fetchData'
import valid from '../../utils/valid'
import { GLOBALTYPES } from './globalTypes'


export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
        const res = await postDataAPI('login', data)
        dispatch({ 
            type: GLOBALTYPES.AUTH, 
            payload: {
                token: res.data.access_token,
                user: res.data.user
            } 
        })
        console.log(res.data.access_token);

        localStorage.setItem("firstLogin", true)
        localStorage.setItem("userData", res.data.access_token)
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                success: res.data.msg
            } 
        })
        
    } catch (err) {
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: err.response.data.msg
            } 
        })
    }
}



export const loadUser = (data)=> async(dispatch)=>{
    const token = localStorage.getItem("token");
    console.log(token);
    try{
        
        
        // if(!token){
        //     dispatch({type:GLOBALTYPES.ALERT, payload:{
        //         error: 'Please, Log in to access the resource'
        //     }})
        // }else{

        // }

        dispatch({type: GLOBALTYPES.ALERT, payload:{loading: true}})
        const res = await axios.get('http://localhost:5000/me', {
            headers:{
                Authorization: `${token}`
            }
        });

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload:{
                token: res.data.token,
                user: res.data.user
            }
        })

        dispatch({ type: GLOBALTYPES.ALERT, payload: {} })

    }catch(err){
        console.log(err);
        // dispatch({type: GLOBALTYPES.ALERT, payload:{
        //     error: err.response.data.message
        // }})
    }
}

export const register = (data) => async (dispatch) => {
    const check = valid(data)
    if(check.errLength > 0)
    return dispatch({type: GLOBALTYPES.ALERT, payload: check.errMsg})

    try {
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

        const res = await postDataAPI('register', data)
        dispatch({ 
            type: GLOBALTYPES.AUTH, 
            payload: {
                token: res.data.access_token,
                user: res.data.user
            } 
        })

        console.log(res);

        localStorage.setItem("firstLogin", true)
        localStorage.setItem("userData", res.data.access_token)
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                success: res.data.msg
            } 
        })
    } catch (err) {
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: err.response.data.msg
            } 
        })
    }
}


export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('firstLogin')
        await postDataAPI('logout')
        window.location.href = "/"
    } catch (err) {
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: err.response.data.msg
            } 
        })
    }
}