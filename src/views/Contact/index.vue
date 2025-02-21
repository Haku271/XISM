<template>
  <div class="container">
    <div class="banner">
      <div class="content-w1350 box">
        <div class="text">CONTACT US NOW!</div>
        <div class="text1">
          Your trusted AI companion for solving the most complex wastewater challenges
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-w1200">
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
            <el-input v-model="formData.message" type="textarea" :rows="10" />
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
    </div>
    <!-- <RequestDemo /> -->
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { getCurrentInstance, ref } from "vue";
// import RequestDemo from "@/components/RequestDemo.vue";

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
    height: 923px;
    background: url("../../assets/imgs/banner-contact.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;

    .box {
      position: absolute;
      left: 50%;
      top: 580px;
      transform: translateX(-50%);
    }
    .text {
      font-size: 72px;
      font-weight: 400;
      font-family: LeagueGothic;
      letter-spacing: 0px;
      line-height: 76px;
      color: rgba(64, 224, 208, 1);
      text-align: left;
      vertical-align: top;
      animation: fromLeftShow 1s;
    }
    .text1 {
      margin-top: 20px;
      width: 800px;
      font-size: 30px;
      font-weight: 500;
      font-family: Poppins;
      letter-spacing: 0px;
      line-height: 40px;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      vertical-align: top;
      animation: fromLeftShow 1s;
    }
  }
  .content {
    overflow: hidden;
    background: linear-gradient(
      216.64deg,
      rgba(13, 118, 118, 0.29) 0%,
      rgba(204, 204, 204, 0) 100%
    );
  }
  .content-w1200 {
    margin: 70px auto 50px;

    .text {
      font-size: 60px;
      font-weight: 400;
      font-family: LeagueGothic;
      letter-spacing: 0px;
      line-height: 72px;
      color: rgba(255, 99, 71, 1);
      animation: fromTopShow 2s;
    }
    .text1 {
      margin-bottom: 40px;
      font-size: 30px;
      font-weight: 600;
      font-family: Poppins;
      letter-spacing: 0px;
      line-height: 40px;
      color: rgba(71, 71, 71, 1);
      animation: fromTopShow 2.2s;
    }

    :deep(.el-form) {
      animation: fromRightShow 1s;
      .el-form-item__label {
        font-size: 24px;
        font-weight: 400;
        font-family: Poppins;
        letter-spacing: 0px;
        line-height: 33.6px;
        color: rgba(71, 71, 71, 1);
        text-align: left;
        vertical-align: top;

        &::before {
          float: right;
          margin-left: 6px;
          color: rgba(184, 75, 75, 1);
        }
      }
      .el-input {
        height: 70px;
        font-size: 24px;
        font-weight: 400;
        font-family: Poppins;
        color: rgba(71, 71, 71, 1);

        .el-input__wrapper {
          padding: 0 26px;
          border-radius: 106px;
          background: rgba(255, 255, 255, 1);
          box-shadow: none;
        }
      }
      .el-textarea {
        font-size: 24px;
        font-weight: 400;
        font-family: Poppins;
        color: rgba(71, 71, 71, 1);
        .el-textarea__inner {
          border-radius: 40px;
          background: rgba(255, 255, 255, 1);
          box-shadow: none;
        }
      }
      .el-form-item__error {
        font-size: 20px;
        font-weight: 400;
        font-family: Poppins;
      }
    }
    .btn-container {
      margin-top: 40px;

      :deep(.el-form-item__content) {
        display: flex;
        justify-content: flex-end;
      }
      .hint-text {
        width: 328px;
        font-size: 18px;
        font-weight: 400;
        font-family: Poppins;
        letter-spacing: 0px;
        line-height: 26px;
        color: rgba(71, 71, 71, 1);
        text-align: left;
        vertical-align: top;
      }
      .el-button {
        margin-left: 20px;
        width: 128px;
        height: 66px;
        border-radius: 33px;
        background: rgba(64, 224, 208, 1);
        font-size: 20px;
        font-weight: 500;
        font-family: Poppins;
        letter-spacing: 0px;
        line-height: 28px;
        color: rgba(71, 71, 71, 1);
        border: none;
        overflow: hidden;

        img {
          margin-left: 20px;
          width: 16px;
        }
      }
    }
  }
}
</style>
