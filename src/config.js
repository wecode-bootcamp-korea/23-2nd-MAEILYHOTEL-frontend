const API_IP = 'http://3.36.89.94:8000';

export const LOGIN_TOKEN = 'login_token';

export const USER_INFO = 'user_info';

export const REDIRECT_URI = 'http://localhost:3000/users/kakao';

export const KAKAO_OAUTH = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const KAKAO_LOGIN = `${API_IP}/users/kakao`;

export const DETAIL_PAGE = `${API_IP}`;

export const GRADE = `${API_IP}/users/level`;

export const PROFILE_API = `${API_IP}/users/profile`;

export const BOOK_API = `${API_IP}/books`;

export const LIST_API = `${API_IP}/stays`;

export const BOOK_LIST_API = `${API_IP}/books/list`;
