import { useEffect, useState } from 'react';
import { KAKAO_LOGIN, PROFILE_API, REDIRECT_URI } from './config';

export const useFetch = (
  url = '',
  methodOptions = {},
  { onSuccess, onFailed } = {}
) => {
  const [responseData, setResponseData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUrl = async () => {
    try {
      const response = await fetch(url, methodOptions);

      if (!response.ok) {
        throw new Error(response.status);
      }

      const json = await response.json();
      setResponseData(json);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, [url]);

  return [responseData, loading, error];
};

export const LOGIN_TOKEN = 'login_token';

export const USER_INFO = 'user_info';

export const useKakaoLogin = codeData => {
  const [backEndToken, setUserInfo] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState('');

  const login = async () => {
    try {
      const kakaoTokenCall = await fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${codeData}`
      );

      const kakaoToken = await kakaoTokenCall.json();

      const backEndTokenCall = await fetch(KAKAO_LOGIN, {
        method: 'POST',
        headers: { Authorization: kakaoToken.access_token },
      });

      const backEndToken = await backEndTokenCall.json();
      localStorage.setItem(LOGIN_TOKEN, backEndToken.token);
      setUserInfo(backEndToken);
    } catch (e) {
      setErrorText(e, 'error!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    login();
  }, []);

  return [backEndToken, loading, errorText];
};

export const useProfile = dependancy => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = localStorage.getItem(LOGIN_TOKEN);
  const headers = { Authorization: token };

  const fetchProfile = async () => {
    try {
      const profileCall = await fetch(PROFILE_API, { headers });

      const profile = await profileCall.json();

      setProfile(profile);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [dependancy, token]);

  return [profile, loading, error];
};
