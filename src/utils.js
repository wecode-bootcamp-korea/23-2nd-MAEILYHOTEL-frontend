export const useProfileCallAfterLogin = (loginToken, PROFILE_API) => {
  const [userInfo, userInfoLoading, userInfoErrorText] = useFetch(PROFILE_API, {
    method: 'GET',
    headers: loginToken.token,
  });

  const fetchResult = {
    userInfo: { ...userInfo },
  };

  const fetchValid = {
    userInfo: userInfo => userInfo.hasOwnProperty('userlevel'),
  };

  const isFetchValid = fetchResult =>
    Object.entries(fetchResult).every(([key, value]) => fetchValid[key](value));
};
