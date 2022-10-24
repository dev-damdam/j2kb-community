<template>
  <div class="update-profile-view-wrapper">
    <section class="profile-wrapper p-4">
      <img class="image mb-1 mr-3" src="@/assets/imgs/member/user.png" />
      <div class="text-wrap">
        <span class="nickname mb-1">{{ this.userInfo.nickname }}</span>
        <span class="mb-1">{{ this.userInfo.email }}</span>
        <span>{{ this.userInfo.register_date }} 가입</span>
      </div>
    </section>

    <section class="modify-section-wrapper p-4">
      <b-button
        pill
        class="nickname-btn mb-2"
        variant="primary"
        @click="openInputModal('nickname')"
      >
        별명 수정
      </b-button>
      <b-button
        pill
        class="password-btn"
        variant="primary"
        @click="openInputModal('password')"
      >
        비밀번호 변경
      </b-button>
    </section>
    <b-modal v-model="modalShow" :title="modalTitle" @change="modalChange">
      <span>{{ message }}</span>
      <b-input
        v-model="modalInput"
        :type="inputType"
        :placeholder="inputPlaceholder"
      />

      <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            size="sm"
            class="ml-1 float-right"
            @click="updateProfile"
          >
            확인
          </b-button>
          <b-button size="sm" class="float-right" @click="modalShow = false">
            닫기
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  name: "update-profile-view",
  data() {
    return {
      userInfo: {},
      modalShow: false,
      modalType: "",
      modalInput: "",
      message: "",
      modalTitle: "",
      inputPlaceholder: "",
      inputType: "",
    };
  },
  created() {
    moment.locale("ko");
    this.setUserInfo();
  },
  computed: {
    ...mapGetters(["getUserInfo"]),
  },
  methods: {
    setUserInfo() {
      const date = moment(this.getUserInfo.register_date).format("ll");
      // this.getUser.uid
      this.userInfo.nickname = this.getUserInfo.nickname;
      this.userInfo.email = this.getUserInfo.email;
      this.userInfo.register_date = date;
    },
    openInputModal(type) {
      if (type == "nickname") {
        //
        this.message = "별명을 입력해주세요.";
        this.modalTitle = "별명 변경";
        this.inputPlaceholder = "별명";
        this.inputType = "text";
      } else {
        //
        this.modalTitle = "비밀번호 변경";
        this.message = "새 비밀번호를 입력해주세요.";
        this.inputPlaceholder = "비밀번호";
        this.inputType = "password";
      }
      this.modalType = type;
      this.modalShow = true;
    },
    modalChange(visible) {
      if (!visible) {
        this.modalInput = "";
      }
    },
    updateProfile() {
      console.log(this.modalType);
    },
  },
};
</script>
<style lang="scss" scoped>
.update-profile-view-wrapper {
  width: 100%;
  background-color: white;

  border: 1px solid #dee2e6;
  border-radius: 0.5rem;

  display: flex;

  .profile-wrapper {
    width: 80%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dee2e6;
    font-size: 0.8rem;

    .image {
      width: 10%;
    }

    .text-wrap {
      display: flex;
      flex-direction: column;
      .nickname {
        color: #0000fd;
        font-size: 1.2rem;
        font-weight: 700;
      }
    }
  }
  .modify-section-wrapper {
    width: 20%;
    display: flex;
    flex-direction: column;
  }
}
</style>
