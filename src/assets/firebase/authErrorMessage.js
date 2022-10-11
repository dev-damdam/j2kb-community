var authErorrMessage = {
  message: "",
  getErrorMessage(errorCode) {
    if (errorCode == "auth/claims-too-large") {
      this.message =
        "제공된 클레임 페이로드가 최대 허용 크기인 1,000바이트를 초과합니다.";
    } else if (errorCode == "auth/email-already-exists") {
      this.message = "이미 사용 중인 이메일입니다.";
    } else if (errorCode == "auth/id-token-expired") {
      this.message = "토큰이 만료되었습니다.";
    } else if (errorCode == "auth/id-token-revoked") {
      this.message = "토큰이 취소되었습니다.";
    } else if (errorCode == "auth/insufficient-permission") {
      this.message =
        "Admin SDK 초기화에 사용된 사용자 인증 정보에는 요청한 인증 리소스에 액세스할 권한이 없습니다.";
    } else if (errorCode == "auth/internal-error") {
      this.message =
        "인증 서버에서 요청을 처리하려고 시도하는 중에 예기치 않은 오류가 발생했습니다.";
    } else if (errorCode == "invalid-argument") {
      this.message = "인증 메서드에 잘못된 인수가 제공되었습니다.";
    } else if (errorCode == "invalid-claims") {
      this.message = "제공된 커스텀 클레임 속성이 잘못되었습니다.";
    } else if (errorCode == "auth/invalid-continue-uri") {
      this.message = "연결 URL은 올바른 URL 문자열이어야 합니다.";
    } else if (errorCode == "auth/invalid-creation-time") {
      this.message = "생성 시간이 올바른 UTC 날짜 문자열이어야 합니다.";
    } else if (errorCode == "auth/invalid-credential") {
      this.message =
        "Admin SDK 인증에 사용된 사용자 인증 정보로는 원하는 작업을 수행할 수 없습니다.";
    } else if (errorCode == "auth/invalid-disabled-field") {
      this.message = "disabled 사용자 속성에 제공된 값이 잘못되었습니다.";
    } else if (errorCode == "auth/invalid-display-name") {
      this.message = "displayName 사용자 속성에 제공된 값이 잘못되었습니다.";
    } else if (errorCode == "auth/invalid-dynamic-link-domain") {
      this.message =
        "제공된 동적 링크 도메인이 구성되지 않거나 현재 프로젝트에 대해 승인되지 않았습니다.";
    } else if (errorCode == "auth/invalid-email") {
      this.message = "유효하지 않은 이메일입니다.";
    } else if (errorCode == "auth/invalid-email-verified") {
      this.message = "이메일 인증이 정상 처리되지 않았습니다.";
    } else if (errorCode == "auth/invalid-hash-algorithm") {
      this.message = "유효하지 않은 해시 알고리즘입니다.";
    } else if (errorCode == "auth/invalid-hash-block-size") {
      this.message = "해시 블록 크기가 유효하지 않습니다.";
    } else if (errorCode == "auth/invalid-hash-derived-key-length") {
      this.message = "해시에서 파생된 키 길이가 유효한 숫자여야 합니다.";
    } else if (errorCode == "auth/invalid-hash-key") {
      this.message = "유효하지 않은 해시 키 입니다.";
    } else if (errorCode == "auth/invalid-hash-memory-cost") {
      this.message = "캐시 메모리 비용은 유효한 숫자여야 합니다.";
    } else if (errorCode == "auth/invalid-hash-parallelization") {
      this.message = "해시 벙렬 처리는 유효한 숫자여야 합니다.";
    } else if (errorCode == "auth/invalid-hash-rounds") {
      this.message = "해시 라운드가 유효한 숫자여야 합니다.";
    } else if (errorCode == "invalid-hash-salt-separator") {
      this.message =
        "해싱 알고리즘 솔트 구분자 필드가 유효한 바이트 버퍼여야 합니다.";
    } else if (errorCode == "auth/invalid-id-token") {
      this.message = "제공된 ID 토큰이 유효한 ID 토큰이 아닙니다.";
    } else if (errorCode == "auth/invalid-last-sign-in-time") {
      this.message = "마지막 로그인 시간이 UTC 날짜 문자열이 아닙니다.";
    } else if (errorCode == "auth/invalid-page-token") {
      this.message = "다음 페이지 토큰이 잘못되었습니다.";
    } else if (errorCode == "auth/invalid-password") {
      this.message = "이메일 혹은 비밀번호가 일치하지 않습니다.";
    } else if (errorCode == "auth/invalid-password-hash") {
      this.message = "비밀번호 해시가 유효한 바이트 버퍼가 아닙니다.";
    } else if (errorCode == "auth/invalid-password-salt") {
      this.message = "비밀번호 솔트가 유효한 바이트 버퍼가 아닙니다.";
    } else if (errorCode == "auth/invalid-phone-number") {
      this.message = "전화번호가 유효하지 않습니다.";
    } else if (errorCode == "auth/invalid-photo-url") {
      this.message = "photo URL 값이 유효한 URL이 아닙니다.";
    } else if (errorCode == "auth/invalid-provider-data") {
      this.message = "providerData 값이 유효한 UserInfo 객체 배열이 아닙니다.";
    } else if (errorCode == "auth/invalid-provider-id") {
      this.message =
        "providerId가 지원되는 유효한 제공업체 식별자 문자열이 아닙니다.";
    } else if (errorCode == "auth/invalid-oauth-responsetype") {
      this.message = "하나의 OAuth responseType만 true로 설정해야 합니다.";
    } else if (errorCode == "auth/invalid-session-cookie-duration") {
      this.message =
        "세션 쿠키 기간이 5분에서 2주 사이의 밀리초 단위 숫자여야 합니다.";
    } else if (errorCode == "auth/invalid-uid") {
      this.message =
        "제공된 uid는 128자(영문 기준) 이하의 비어 있지 않은 문자열이어야 합니다.";
    } else if (errorCode == "auth/invalid-user-import") {
      this.message = "가져올 사용자 레코드가 잘못되었습니다.";
    } else if (errorCode == "auth/maximum-user-count-exceeded") {
      this.message = "가져올 수 있는 최대 사용자 수를 초과했습니다.";
    } else if (errorCode == "auth/missing-android-pkg-name") {
      this.message =
        "Android 앱을 설치해야 할 경우 Android 패키지 이름을 제공해야 합니다.";
    } else if (errorCode == "auth/missing-continue-uri") {
      this.message = "요청에 유효한 연결 URL을 제공해야 합니다.";
    } else if (errorCode == "auth/missing-hash-algorithm") {
      this.message =
        "비밀번호 해시를 사용해 사용자를 가져오려면 해싱 알고리즘 및 매개변수를 제공해야 합니다.";
    } else if (errorCode == "auth/missing-ios-bundle-id") {
      this.message = "요청에 번들 ID가 누락되었습니다.";
    } else if (errorCode == "auth/missing-uid") {
      this.message = "현재 작업에 uid 식별자가 필요합니다.";
    } else if (errorCode == "auth/missing-oauth-client-secret") {
      this.message =
        "OIDC 코드 흐름을 사용 설정하려면 OAuth 구성 클라이언트 비밀번호가 필요합니다.";
    } else if (errorCode == "auth/operation-not-allowed") {
      this.message =
        "제공된 로그인 제공업체가 Firebase 프로젝트에서 사용 중지되었습니다.";
    } else if (errorCode == "auth/phone-number-already-exists") {
      this.message = "이미 사용중인 전화번호 입니다.";
    } else if (errorCode == "auth/project-not-found") {
      this.message =
        "Admin SDK를 초기화하는 데 사용한 사용자 인증 정보에 해당하는 Firebase 프로젝트가 없습니다.";
    } else if (errorCode == "auth/reserved-claims") {
      this.message = "하나 이상의 커스텀 사용자 클레임이 예약되어 있습니다. ";
    } else if (errorCode == "auth/session-cookie-expired") {
      this.message = "제공된 Firebase 세션 쿠키가 만료되었습니다.";
    } else if (errorCode == "auth/session-cookie-revoked") {
      this.message = "Firebase 세션 쿠키가 취소되었습니다.";
    } else if (errorCode == "auth/uid-already-exists") {
      this.message = "이미 사용중인 uid 입니다.";
    } else if (errorCode == "auth/unauthorized-continue-uri") {
      this.message = "연결 URL의 도메인이 허용 목록에 포함되어 있지 않습니다.";
    } else if (errorCode == "auth/user-not-found") {
      this.message = "이메일 혹은 비밀번호를 다시 입력해주세요.";
    } else if (errorCode == "auth/user-disabled") {
      this.message = "정지된 사용자입니다.";
    } else if (errorCode == "auth/wrong-password") {
      this.message = "이메일 혹은 비밀번호를 다시 입력해주세요.";
    } else if (errorCode == "auth/network-request-failed") {
      this.message = "네트워크 연결 상태를 확인해주세요.";
    }

    return this.message;
  },
};

export default authErorrMessage;
