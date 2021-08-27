export const queryGenerator = query => {
  let queryString = query.split('&');
  let stayDate = queryString.map(date => {
    return date.split('=')[1];
  });

  return stayDate;
};

export const postFetch = (url = '', headers = {}, body = {}) => {
  const postCallBody = JSON.stringify(body);
  const post = async () => {
    try {
      const postCall = await fetch(url, {
        method: 'POST',
        headers,
        body: postCallBody,
      });
      const postRes = await postCall.json();
      console.log(postRes.message);

      return postRes.message;
    } catch (e) {
      const result = e;
      return result;
    }
  };
  console.log('test');
  if (post() === 'SUCCESS') {
    return 'test';
  }
};
