<template>
  <view>
    <!-- 状态栏 -->
    <uni-status-bar bgcolor="#DDD5AF"></uni-status-bar>
    <!-- 关闭按钮 -->
    <view class="icon iconfont icon-guanbi" @tap="back"></view>
    <!-- 引入背景图 --><!--可调整 -->
    <image
      class="loginhead_hgq"
      src="../../static/login/loginhead_hgq.jpg"
      mode="widthFix"
      lazy-load
    ></image>
    <!-- 输入框+按钮 -->
    <view class="login_body_hgq">
      <!-- 邮箱、密码登录 -->
      <template v-if="!status">
        <input
          type="text"
          v-model="useremail"
          @change="email"
          class="uni-input common_input_hgq"
          placeholder="请输入邮箱"
        />

        <view class="login_input_box_hgq">
          <input
            type="text"
            password
            v-model="password"
            @change="mima"
            class="uni-input common_input_hgq forget-input"
            placeholder="请输入密码"
          />
        </view>

        <button
          class="login_user_set_btn_hgq"
          :loading="loading"
          :class="{ login_user_set_btn_disable_hgq: disabled }"
          type="primary"
          :disabled="disabled"
          @click="subm_login"
        >
          登录
        </button>
      </template>

      <!-- 注册 -->
      <template v-else>
        <view class="login_input_box_hgq">
          <input
            type="text"
            v-model="useremail"
            @change="email"
            class="uni-input common_input_hgq"
            placeholder="邮箱"
          />
        </view>
        <view class="login_input_box_hgq">
          <input
            type="text"
            v-model="password"
            @change="mima"
            class="uni-input common_input_hgq forget-input"
            placeholder="请设置密码"
          />
        </view>

        <button
          class="login_user_set_btn_hgq"
          :loading="loading"
          :class="{ login_user_set_btn_disable_hgq: disabled }"
          type="primary"
          :disabled="disabled"
          @click="subm_register"
        >
          注册
        </button>
      </template>
    </view>

    <!-- 登录/注册状态切换 -->
    <view
      class="login-status u-f-ajc login_padding_hgq login_font_color_hgq"
      @tap="changeStatus"
    >
      {{ status ? "账号密码登录" : "没有账号？马上注册" }}
      <view class="icon iconfont icon-jinru login_font_color_hgq"></view>
    </view>
  </view>
</template>

<script src = "./login.js"></script>

<style>
@import "login.css";
</style>