<template>
  <div class="container">
    <div class="banner">
      <div class="box">
        <div class="text">CONTACT US NOW!</div>
        <div class="text1">
          Your trusted AI<br />
          companion for solving<br />
          the most complex<br />
          wastewater challenges<br />
          and more
        </div>
      </div>
    </div>
    <div class="content">
      <div class="text">Connect with us and request a demo</div>
      <div class="text1">*Must include</div>
      <el-form
        ref="formRef"
        :model="formData"
        :rules="formRules"
        label-position="top"
        size="large"
      >
        <el-form-item label="Name" prop="name">
          <el-input v-model="formData.name" />
        </el-form-item>
        <el-form-item label="Job title" prop="job_title">
          <el-input v-model="formData.job_title" />
        </el-form-item>
        <el-form-item label="Company" prop="company">
          <el-input v-model="formData.company" />
        </el-form-item>
        <el-form-item label="Industry" prop="industry">
          <el-input v-model="formData.industry" />
        </el-form-item>
        <el-form-item label="Location" prop="location">
          <el-input v-model="formData.location" />
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model="formData.email" />
        </el-form-item>
        <el-form-item label="Message" prop="message">
          <el-input v-model="formData.message" type="textarea" :rows="4" />
        </el-form-item>
        <el-form-item class="btn-container">
          <div class="hint-text">
            By submitting this form, I consent to receiving information from XSIM:
          </div>
          <el-button type="primary" v-loading="btnLoading" @click="submitForm(formRef)"
            >Send<img src="../../assets/imgs/icon-arrows.png"
          /></el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <RequestDemo /> -->
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { getCurrentInstance, ref } from "vue";
// import RequestDemo from "@/components/RequestDemoMobile.vue";

defineOptions({
  name: "ContactPage",
});

const { proxy } = getCurrentInstance();

const formRef = ref(null);
const formData = ref({});
const formRules = ref({
  name: [
    {
      required: true,
      message: "Please fill in name.",
      trigger: "change",
    },
  ],
  company: [
    {
      required: true,
      message: "Please fill in company.",
      trigger: "change",
    },
  ],
  email: [
    {
      required: true,
      message: "Please fill in email.",
      trigger: "change",
    },
    {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please fill in a valid email address.",
      trigger: "change",
    },
  ],
  message: [
    {
      required: true,
      message: "Please fill in message.",
      trigger: "change",
    },
  ],
});
const btnLoading = ref(false);

const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      console.log(formData.value);
      btnLoading.value = true;
      proxy.$http
        .post("/contact_us/", { ...formData.value })
        .then((res) => {
          if (res.data.code === 200) {
            ElMessage.success(
              "Thank you for connecting with us. Our team will reach out to you shortly."
            );
            formRef.value.resetFields();
          } else {
            ElMessage.error(res.data.msg);
          }
          btnLoading.value = false;
        })
        .catch(() => {
          btnLoading.value = false;
        });
    }
  });
};
</script>

<style lang="scss" scoped>
.container {
  height: max-content;
  .banner {
    position: relative;
    width: 100%;
    height: 7.42rem;
    background: url("../../assets/imgs/banner-contact-mobile.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
    overflow: hidden;

    .box {
      margin-top: 1.88rem;
    }
    .text {
      font-size: 0.6rem;
      font-weight: 400;
      font-family: LeagueGothic;
      line-height: 0.48rem;
      color: rgba(64, 224, 208, 1);
      text-align: center;
      animation: fromLeftShow 1s;
    }
    .text1 {
      margin: 0.6rem 0;
      font-size: 0.24rem;
      font-weight: 500;
      font-family: Poppins;
      line-height: 0.3rem;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      animation: fromLeftShow 1s;
    }
  }
  .content {
    padding: 0.5rem 0.2rem;
    overflow: hidden;
    background: linear-gradient(
      360deg,
      rgba(13, 118, 118, 0.29) 0%,
      rgba(204, 204, 204, 0) 100%
    );

    .text {
      font-size: 0.44rem;
      font-weight: 400;
      font-family: LeagueGothic;
      line-height: 0.44rem;
      color: rgba(255, 99, 71, 1);
      animation: fromTopShow 2s;
    }
    .text1 {
      margin: 0.1rem 0 0.4rem;
      font-size: 0.2rem;
      font-weight: 600;
      font-family: Poppins;
      line-height: 0.28rem;
      color: rgba(71, 71, 71, 1);
      animation: fromTopShow 2.2s;
    }

    :deep(.el-form) {
      animation: fromRightShow 1s;
      .el-form-item__label {
        height: 0.46rem;
        font-size: 0.18rem;
        font-weight: 400;
        font-family: Poppins;
        line-height: 0.46rem;
        color: rgba(71, 71, 71, 1);

        &::before {
          float: right;
          color: rgba(184, 75, 75, 1);
        }
      }
      .el-input {
        height: 0.5rem;
        font-size: 0.18rem;
        font-weight: 400;
        font-family: Poppins;
        color: rgba(71, 71, 71, 1);

        .el-input__wrapper {
          padding: 0 0.2rem;
          border-radius: 1.06rem;
          background: rgba(255, 255, 255, 1);
          box-shadow: none;

          .el-input__inner {
            height: 100%;
          }
        }
      }
      .el-textarea {
        font-size: 0.18rem;
        font-weight: 400;
        font-family: Poppins;
        color: rgba(71, 71, 71, 1);
        .el-textarea__inner {
          padding: 0.1rem 0.2rem;
          border-radius: 0.16rem;
          background: rgba(255, 255, 255, 1);
          box-shadow: none;
        }
      }
      .el-form-item__error {
        font-size: 0.14rem;
        font-weight: 400;
        font-family: Poppins;
      }
    }
    .el-form-item {
      margin-bottom: 0.1rem;
    }
    .btn-container {
      margin: 0.2rem 0 0;

      :deep(.el-form-item__content) {
        display: flex;
        justify-content: flex-end;
      }
      .hint-text {
        width: 2.55rem;
        font-size: 0.14rem;
        font-weight: 400;
        font-family: Poppins;
        line-height: 0.2rem;
        color: rgba(71, 71, 71, 1);
      }
      .el-button {
        margin-top: 0.2rem;
        width: 1.28rem;
        height: 0.66rem;
        border-radius: 0.33rem;
        background: rgba(64, 224, 208, 1);
        font-size: 0.2rem;
        font-weight: 500;
        font-family: Poppins;
        letter-spacing: 0px;
        line-height: 0.28rem;
        color: rgba(71, 71, 71, 1);
        border: none;
        overflow: hidden;

        img {
          margin-left: 0.2rem;
          width: 0.16rem;
        }
      }
    }
  }
}
</style>
