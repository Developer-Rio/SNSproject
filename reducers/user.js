const dummyUser = {
  id: 1,
  nickname: '제로초',
  Posts: [],
  Followings: [],
  Followers: [],
};

export const initialState = {
  isLoggedIn: false,
  isLoggingIn : false,
  isLoggingOut : false, //로그아웃 시도중
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

export const loginRequestAction = () =>{
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
        isLoggingIn: true,
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        me : {...action.data, nickname : 'chang'}
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn : false
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true,
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggedIn: false,
        isLoggingOut: false,
        user: null,
      };
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        isLoggedIn: false,
        isLoggingOut : false,
        user: null,
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      }
    }
  }
};
