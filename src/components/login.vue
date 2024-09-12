<template>
    <div>
        <!-- <div class="bg">滚动行为</div> -->
        <div class="logPage">
            <!-- <LoadingBar></LoadingBar> -->
            <el-card style="max-width: 480px">
                <div>
                    <el-form ref="loginForm" :rules="rules" :model="formInline" class="demo-form-inline">
                        <el-form-item label="账号：" prop="user">
                            <el-input v-model="formInline.user" placeholder="请输入账号" clearable />
                        </el-form-item>
                        <el-form-item label="密码：" prop="password">
                            <el-input v-model="formInline.password" placeholder="请输入密码" type="password" clearable />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>

        </div>
        <!-- <div class="bg">滚动行为</div> -->
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
import type { FormRules, FormInstance } from 'element-plus'
// import LoadingBar from '@/components/LoadingBar/LoadingBar.vue'
import axios from 'axios'



const router = useRouter()
interface RuleForm {
    user: string,
    password: string
}
const formInline = reactive<RuleForm>({
    user: '',
    password: ''
})
const loginForm = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
    user: [
        { required: true, message: '请输入账号', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
})

const onSubmit = () => {
    // console.log('submit!', loginForm.value)
    loginForm.value?.validate((valid: Boolean) => {
        if (valid) {
            // 写死方案
            // router.push('/list')
            // sessionStorage.setItem('token', 'true')
            // ElMessage.success('登录成功');
            // 动态路由方案
            initRouter()

        } else {
            ElMessage.error('账号或密码错误');
        }
    })
}

/* const onSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            router.push('/list')
            sessionStorage.setItem('token', 'true')
            ElMessage.success('登录成功');
        } else {
            ElMessage.error('账号或密码错误');
            return false
        }
    })
} */

// 动态路由方案
const initRouter = async () => {
    // const result = await axios.get('http://localhost:3000/login', {params: formInline});
    const result = {
        data: {
            route: [
                {
                    path: '/demo1',
                    name: 'demo1',
                    component: 'demo1'
                }
            ]
        }
    }
    // const result = {
    //     data: {
    //         route: [
    //             {
    //                 path: '/demo2',
    //                 name: 'demo2',
    //                 component: 'demo2'
    //             }
    //         ]
    //     }
    // }
    result.data.route.forEach(v => {
        router.addRoute({
            path: v.path,
            name: v.name,
            component: () => import(`../views/${v.component}.vue`)
        })
    });
    router.push('/nav');
    sessionStorage.setItem('token', 'true')
    console.log(router.getRoutes());

    // 路由删除
    // router.removeRoute('demo1')
    // router.removeRoute('demo2')

}
</script>

<style scoped lang="scss">
.bg {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    font-size: 40px;
    background-color: black;
    color: white;
}

.logPage {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.demo-form-inline .el-input {
    --el-input-width: 220px;
}
</style>
