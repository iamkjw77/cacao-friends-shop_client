import { User, UserState } from 'types/User';
import {
  LOG_IN,
  LOG_OUT,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from './actions';

const initialState: UserState = {
  authUser: null,
  isLoading: false,
  error: '',
};

const userReducer = (
  state = initialState,
  action: {
    type: string;
    authUser?: User;
    error?: string;
  }
): UserState => {
  switch (action.type) {
    // 로그인
    case LOG_IN:
      return {
        ...state,
        isLoading: true,
      };
    // LOG_IN_SUCCESS
    case LOG_IN_SUCCESS:
      return {
        ...state,
        authUser: action.authUser || null,
        isLoading: false,
      };
    // LOG_IN_FAILURE
    case LOG_IN_FAILURE:
      return {
        ...state,
        error: action.error || null,
        isLoading: false,
      };
    // 로그아웃 (기본 처리)
    case LOG_OUT:
      return initialState;
    //회원가입
    case SIGN_UP:
      return {
        ...state,
        isLoading: true,
      };
    //회원가입 성공
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        authUser: action.authUser || null,
      };
    //회원가입 실패
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.error || null,
      };
    // 기본 (초기 상태)
    default:
      return state;
  }
};

export default userReducer;
