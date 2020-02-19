import axios from 'axios';

export const createCourt = (name,price,desc) => {
    return async (dispatch, getState) => {
      const token = getState().auth.token;
      let username = getState().auth.user.username;

      let config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token '+token
        }
      }

      try{
        let res = await axios.post("http://localhost:8000/api/court/", {name,price,desc}, config);
        console.log(res.data);
        return res.data;
      }
      catch(err){
        console.log("error");
        throw err;
      }
    }
  }

export const loadCourts = () => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;

        let config = {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token '+token
            }
        }

        try{
            let res = await axios.get("http://localhost:8000/api/court/", config);
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log("error");
            throw err;
        }
        
    }
}

export const loadCourt = (courtName) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;

        let config = {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token '+token
            }
        }

        try{
            let res = await axios.get("http://localhost:8000/api/court/"+courtName+"/", config);
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log("error");
            throw err;
        }
        
    }
}

export const reviewCourt = (courtName, score, review) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;

        let config = {
            headers: {
                'Content-Type': "application/json",
                'Authorization': 'Token '+token
            }
        }

        try{
            let res = await axios.post("http://localhost:8000/api/court/"+courtName+"/rate_court/", {score, review}, config);
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log("error");
            throw err;
        }
        
    }
}

export const loadMyCourt = () => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;

        let config = {
            headers: {
                'Content-Type': "application/json",
                'Authorization': 'Token '+token
            }
        }

        try{
            let res = await axios.get("http://localhost:8000/api/user/"+getState().auth.user.username+"/courts/", config);
            return res.data;
        }
        catch(err){
            console.log("error");
            throw err;
        }
    }
}

export const addImageToCourt = (courtName, url) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;

        let config = {
            headers: {
                'Content-Type': "application/json",
                'Authorization': 'Token '+token
            }
        }

        try{
            let res = await axios.post("http://localhost:8000/api/court/"+courtName+"/add_image/", {url}, config);
            return res.data;
        }
        catch(err){
            console.log("error");
            throw err;
        }
    }
}