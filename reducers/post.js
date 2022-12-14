import shortId from 'shortid';
export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'Develop-Rio',
    },
    content: '첫 번째 게시글',
    Images: [{
      id : shortId.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      id : shortId.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, {
      id : shortId.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }],
    Comments: [{
      id : shortId.generate(),
      User: {
        id : shortId.generate(),
        nickname: 'nero',
      },
      content: '우와 개정판이 나왔군요~',
    }, {
      id : shortId.generate(),
      User: {
        id : shortId.generate(),
        nickname: 'hero',
      },
      content: '얼른 사고싶어요~',
    }]
  }],
  imagePaths: [],

  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,

  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
};
const dummyPost =(data)=> {
  return {
  // id: shortId.generate(), //key값이 다 2이면 문제가 된다.
  id : data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'chang',
  },
  Images: [],
  Comments: [],
}};
const dummyComment = (data) =>({
  id : data.id,
  content : data.content,
  User : {
    id : 1,
    nickname : 'suchang'
  }

})
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'; 
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'; 
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST'; 
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS'; 
export const REMOVE_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'; 
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'; 
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; 

export const addPost =(data)=> ({
  type: ADD_POST_REQUEST,
  data
});

export const addComment =(data) => ({
  type: ADD_COMMENT_REQUEST,
  data
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST: {
      return {
        ...state,
        addPostLoading : true,
        addPostDone : false,
        // addPostError : null,
      };
    }
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone : true
      };
    }
    case ADD_POST_FAILURE: {
      return {
        ...state,
        addPostLoading : false,
        addPostError: action.error,
      };
    }

    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        addCommentLoading : true,
        addCommentDone : false,
        // addCommentError : null,
      };
    }
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
      const post = { ...state.mainPosts[postIndex] };
      post.Comments = [dummyComment(action.data), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;
      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state,
        addCommentLoading : false,
        addCommentError: action.error,
      };   
    }

    case REMOVE_POST_REQUEST: {
      return {
        ...state,
        removePostLoading : true,
        removePostDone : false,
        // removePostError : null,
      };
    }
    case REMOVE_POST_SUCCESS: {
      return {
        ...state,
        mainPosts: state.mainPosts.filter(v=>v.id !== action.data),
        removePostLoading: false,
        removePostDone : true
      };
    }
    case REMOVE_POST_FAILURE: {
      return {
        ...state,
        removePostLoading : false,
        removePostError: action.error,
      };
    }
    
    
    default: {
      return {
        ...state,
      };
    }
  }
};
