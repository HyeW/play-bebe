// 이메일 유효성 검사
const isEmailValidate = (email: string, callback: (isEmail: boolean) => void) => {
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const result = emailRegex.test(email);
  callback(result);
  return result;
};

export {isEmailValidate};