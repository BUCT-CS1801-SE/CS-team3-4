import uniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue";
import otherLogin from "../../components/home/other-login.vue";
export default {
        components: {
        uniStatusBar,
        otherLogin,
    },
    data() {
        return {
        status: false, //false代表邮箱、密码登录页面，true代表注册页面
        disabled: true,
        loading: false,
        useremail: "",
        password: "",
        };
    },
    watch: {
        useremail(val) {
        this.OnBtnChange();
        },
        password(val) {
        this.OnBtnChange();
        },
    },
    methods: {
        // 验证输入格式
        email: function () {
        var email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        if (!email.test(this.useremail)) {
            uni.showToast({ title: "邮箱格式错误！", icon: "none" });
            this.useremail = "";
        }
        },
        mima: function () {
        var password = /^[\w_-]{6,16}$/;
        if (!password.test(this.password)) {
            uni.showToast({
            title: "密码长度6-16，由数字和字母和下划线及减号组成！",
            icon: "none",
            });
            this.password = "";
        }
        },
        subm_login() {
        //uni.switchTab可跳转tabBar路径
        if (
            this.useremail == "keshehaonan@163.com" &&
            this.password == "123456qw"
        ) {
            uni.showToast({
            title: "登录成功!",
            icon: "none",
            success: () => {
                setTimeout(() => {
                //uni.switchTab可跳转tabBar路径
                uni.switchTab({
                    //uni.navigateTo用于跳转非 tabBar 的页面的路径
                    url: "../recommend/list", //设置跳转路径，可传参，例如../recommend/list？useremail=''&password=''
                    success: (res) => {}, //在list.vue的export default中onLoad用来接收参数
                    fail: () => {},
                    complete: () => {},
                });
                }, 1500);
            },
            });
        } else if (this.useremail != "keshehaonan@163.com") {
            uni.showToast({ title: "用户名错误！", icon: "none" });
            this.useremail = "";
        } else if (this.password != "123456qw") {
            uni.showToast({ title: "密码错误！", icon: "none" });
            this.password = "";
        }
        },

        subm_register() {
        if (
            (this.useremail == "keshehaonan@163.com") &
            (this.password == "123456qw")
        ) {
            uni.showToast({
            title: "注册成功！请返回登录！",
            icon: "none",
            success: () => {
                setTimeout(() => {
                //uni.switchTab可跳转tabBar路径
                uni.navigateTo({
                    //uni.navigateTo用于跳转非 tabBar 的页面的路径
                    url: "../login/login", //设置跳转路径，可传参，例如../recommend/list？useremail=''&password=''
                    success: (res) => {}, //在list.vue的export default中onLoad用来接收参数
                    fail: () => {},
                    complete: () => {},
                });
                }, 1500);
            },
            });
        }
        },
        // 初始化表单
        initInput() {
        this.useremail = "";
        this.password = "";
        },
        // 改变按钮状态
        OnBtnChange() {
        if (this.useremail && this.password) {
            this.disabled = false;
            return;
        }
        this.disabled = true;
        },
        // 切换登录状态
        changeStatus() {
        this.initInput();
        this.status = !this.status;
        },
        // 返回上一步
        back() {
        uni.navigateBack({ delta: 1 });
        },
        // 提交登录
        /* submit(){
                    // 账号密码登录
                    if(!this.status){
                        return this.User.login({
                            url:"/user/login",
                            data:{
                                useremail:this.useremail,
                                password:this.password
                            }
                        })
                    }
                    
                    // 验证邮箱合法性
                    if(!this.isEmail()){
                        return uni.showToast({ title: '请输入正确的邮箱', icon:"none" });
                    }
                    
            } */
    },
};