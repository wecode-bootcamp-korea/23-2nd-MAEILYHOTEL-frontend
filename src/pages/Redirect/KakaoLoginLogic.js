import { useEffect, useState } from 'react';
import { KAKAO_LOGIN, REDIRECT_URI } from '../../config';

export const useKakaoLogin = codeData => {
  const [userInfo, setUserInfo] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState('');

  const login = async () => {
    try {
      const kakaoCall = await fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${codeData}`
      );
      if (!kakaoCall.ok) {
        throw new Error('kakao fetch call(Auth) error!');
      }
      const json = await kakaoCall.json();

      if (!json.access_token) {
        throw new Error('not exist token!');
      }

      const backCall = await fetch(KAKAO_LOGIN, {
        method: 'POST',
        headers: { Authorization: json.access_token },
      });

      if (!backCall.ok) {
        throw new Error('backend fetch call(Auth) error!');
      }
      const backResponse = await backCall.json();
      if (!backResponse.token) {
        throw new Error('not exist our token');
      }
      setUserInfo(backResponse);
      setLoading(false);
    } catch (e) {
      setErrorText(e);
    }
  };

  useEffect(() => {
    login();
  }, []);

  return [userInfo, loading, errorText];
};
