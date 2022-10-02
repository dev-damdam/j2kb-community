import validateMessage from "./validateMessage";

var utils = {
  emailRegex: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
  passwordRegex:
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-]).{8,25}$/,
  emailValidation(email) {
    if (email == "" || email == undefined) {
      return { state: false, message: validateMessage.NOT_INPUT_EMAIL };
    }

    if (this.emailRegex.test(email)) {
      return { state: true, message: "" };
    } else {
      return { state: false, message: validateMessage.EMAIL_VALID_FAIL };
    }
  },

  passwordValidation(password) {
    if (password == "" || password == undefined) {
      return { state: false, message: validateMessage.NOT_INPUT_PASSWORD };
    }

    if (this.passwordRegex.test(password)) {
      return { state: true, message: "" };
    } else {
      return { state: false, message: validateMessage.PASSWORD_VALID_FAIL };
    }
  },

  passwordCheckValidation(password, passwordCheck) {
    if (passwordCheck == "" || passwordCheck == undefined) {
      return { state: false, message: validateMessage.NOT_INPUT_PASSWORDCHECK };
    }

    if (password == passwordCheck) {
      return { state: true, message: "" };
    } else {
      return {
        state: false,
        message: validateMessage.PASSWORDCHECK_VALID_FAIL,
      };
    }
  },

  nicknameValidation(nickname) {
    if (nickname == "" || nickname == undefined) {
      return { state: false, message: validateMessage.NOT_INPUT_NICKNAME };
    } else {
      return { state: true, message: "" };
    }
  },

  quizValidation(quiz, answer) {
    console.log(quiz, answer, quiz == answer);
    if (quiz == "" || quiz == undefined) {
      return { state: false, message: validateMessage.NOT_INPUT_QUIZ };
    }

    if (quiz == answer) {
      return { state: true, message: "" };
    } else {
      return {
        state: false,
        message: validateMessage.NOT_CORRECT_QUIZ,
      };
    }
  },
};

export default utils;
