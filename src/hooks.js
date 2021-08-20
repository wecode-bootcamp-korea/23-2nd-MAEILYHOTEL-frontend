import { useEffect, useState } from 'react';
import { KAKAO_LOGIN, REDIRECT_URI } from '../../config';

export const useFetch = (url, methodOptions) => {
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
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return [responseData, loading, error];
};

export const useKakaoLogin = codeData => {
  const [userInfo, setUserInfo] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState('');

  const login = async () => {
    try {
      const kakaoTokenCall = await fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${codeData}`
      );

      const kakaoToken = await kakaoTokenCall.json();

      const backEndUserInfoCall = await fetch(KAKAO_LOGIN, {
        method: 'POST',
        headers: { Authorization: kakaoToken.access_token },
      });

      const backEndUserInfo = await backEndUserInfoCall.json();

      setUserInfo(backEndUserInfo);
      setLoading(false);
    } catch (e) {
      setErrorText(e, 'error!');
    }
  };

  useEffect(() => {
    login();
  }, []);

  return [userInfo, loading, errorText];
};
