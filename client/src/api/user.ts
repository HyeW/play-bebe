import axios from "axios";

const signUp = (email: string, password: string, nickname: string, callback: () => void) => {
  const url = '/api/join';
  const data = {
    email: email,
    password: password,
    nickname: nickname,
  };
  axios.post(url, data)
    .then(response => {
      alert('회원가입 성공! 로그인 페이지로 이동합니다.');
      callback();
    }).catch(error => {
    if (error.response.data) {
      if (error.response.data.emailDup) {
        alert('이미 존재하는 계정입니다. 다른 이메일을 입력해주세요.');
      }
      if (error.response.data.nicknameDup) {
        alert('이미 사용 중인 닉네임입니다. 다른 닉네임을 입력해주세요.');
      }
    } else {
      alert(error);
    }
  });
};

const login = (email: string, password: string, callback: (token: string) => void) => {
  const url = '/login';
  const data = {
    email: email,
    password: password,
  };
  axios.post(url, data)
    .then(response => {
      alert('로그인 성공!');
      callback(response.data.token);
      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      axios.defaults.headers.common['Authorization'] = response.data.token;
    }).catch(error => {
    if (error.response.data && error.response.data.status === 401) {
      alert('이메일 또는 비밀번호가 잘못되었습니다. 다시 입력해주세요.');
    } else {
      alert(error);
    }
  });
};

const getUserId = (email: string, callback: (userId: number) => void) => {
  const url = `api/user/${email}`;
  axios.get(url)
    .then(response => {
      callback(response.data.userId);
      console.log(response)
    }).catch(error => {
    alert(error);
    callback(-1);
  })
};

export {signUp, login, getUserId};