const dummyUser = (data) =>{
  return {
  ...data,
  nickname : 'chang',
  id : 1,
  Posts: [],
  Followings : [],
  Followers : []
}};

export const initialState = {
  logInDone: false,
  logInLoading : false,
  logInError : null, 

  logOutDone: false,
  logOutLoading : false,
  logOutError : null, 

  signUpDone: false,
  signUpLoading : false,
  signUpError : null, 

  user: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; 

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; 
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; 
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; 

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; 
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'; 
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; 

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST'; 
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'; 
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE'; 

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST'; 
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'; 
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'; 

export const loginRequestAction = (data) =>{
  return {
    type : LOG_IN_REQUEST
  }
}
export const logoutRequestAction = () =>{
  return {
    type : LOG_OUT_REQUEST
  }
}
export const signUpRequestAction = (data) => {
  return {
    type: SIGN_UP_REQUEST,
    data,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        logInLoading: true,
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        logInDone: true,
        logInLoading: false,
        me : dummyUser(action.data)
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        logInDone: false,
        logInLoading : false
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        logOutLoading: true,
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        logInDone: false,
        logOutLoading: false,
        me: null,
      };
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        logOutLoading: false,
        logInError : action.error,
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        signUpLoading: true,
        signUpDone : false,
        signUpError : null,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        signUpLoading: true,
        signUpDone: true,
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };
    }
    default: {
      return {
        ...state,
      }
    }
  }
};
