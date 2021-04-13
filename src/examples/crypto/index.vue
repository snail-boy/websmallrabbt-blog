<template>
    <div>
        <h1>AES加密</h1>
        <p> 明文为：{{this.data}}</p>
        <p>密钥为: {{this.key}}</p>
        <p>加密后的密文: {{this.encrypted}}</p>
        <p>解密后的明文: {{this.decrypted}}</p>
        <a href="https://www.liaoxuefeng.com/wiki/1022910821149312/1023025778520640">详情</a>
    </div>

</template>

<script>
    import {aesEncrypt, aesDecrypt} from './util'
    export default {
        name: "crypto",
        data() {
            return {
                data: 'Hello, this is a secret message!',
                key: 'password!',
                encrypted: '',
                decrypted: ''
            }
        },
       created() {
            this.getPassword()
       },
        methods: {
            getPassword() {
                this.encrypted = aesEncrypt(this.data, this.key)
                this.decrypted = aesDecrypt(this.encrypted, this.key);

            }
        }
    }
</script>

<style scoped>

</style>
