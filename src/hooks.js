import { useEffect, useState } from 'react';
import { KAKAO_LOGIN, REDIRECT_URI } from './config';

export const useFetch = (
  url = '',
  methodOptions = {},
  { onSuccess, onFailed } = {}
) => {
  const [responseData, setResponseData] = useState({});
  const [loading, setLoading] = useState(true);
  // 시작과 동시에 로딩 start => true
  const [error, setError] = useState('');

  const fetchUrl = async () => {
    try {
      const response = await fetch(url, methodOptions);
      // 입력받은 url과 {method : ?, body : ?} 등의 옵션으로 fetch() 실행

      if (!response.ok) {
        throw new Error(response.status);
      }

      const json = await response.json();
      // 응답 결과 -> .then(res => res.json()) 과 같은 과정
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
  // componentDidMount, useEffect 의 2번째 인자 ([]) 빈 배열을 넣었을 경우, class component 기준 CDM과 같이 동작합니다.
  // 따라서 해당 fetchUrl 이라는 함수는 useFetch가 실행되고 1회만 실행됩니다.

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
    } catch (e) {
      setErrorText(e, 'error!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    login();
  }, []);

  return [userInfo, loading, errorText];
};
