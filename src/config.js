const API_IP = 'http://10.58.3.60:8000';

export const REDIRECT_URI = 'http://localhost:3000/users/kakao';
export const KAKAO_OAUTH = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const KAKAO_LOGIN = `${API_IP}/users/kakao`;

export const DETAIL_PAGE = `${API_IP}/stays`;
