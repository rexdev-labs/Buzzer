<template>
  <el-main>
    <el-topleft>
      <img src="../assets/images/topLeft.webp" alt="" class="topLeft" />
    </el-topleft>
    <img src="../assets/images/logo.png" alt="" class="logos" />
    <h1 class="heading">Create Account</h1>
    <br />
    <el-row justify="center">
      <form @submit.prevent="submit">
        <div class="grid-content">
          <el-form label-position="top" label-width="100px" class="form">
            <el-form-item label="Username" class="label">
              <el-input
                v-model="form.name"
                type="text"
                placeholder="ex: rexsi"
              ></el-input>
            </el-form-item>
            <el-form-item label="Full Name" class="label">
              <el-input
                v-model="form.fullname"
                type="text"
                placeholder="ex: rexsi yudi putra"
              />
            </el-form-item>
            <el-form-item label="Email" class="label">
              <el-input
                v-model="form.email"
                type="email"
                placeholder="ex: rexsi@gmail.com"
              ></el-input>
            </el-form-item>
            <el-form-item label="Password" class="label">
              <el-input
                v-model="form.password"
                type="password"
                placeholder="............."
                show-password
              />
            </el-form-item>
          </el-form>
          <p class="term">
            By signing up, you agree to our<router-link to="/" class="colorBL">
              Terms</router-link
            >
            ,
            <router-link to="/" class="colorBL"> Privacy Policity</router-link>
            , and
            <router-link to="/" class="colorBL"> Cookie Use</router-link> .
          </p>
          <el-button type="primary" class="btnRegister" @click="submit"
            >Register</el-button
          >

          <p class="grey">
            Have an account ?<router-link class="colorBL" to="/login">
              Login</router-link
            >
          </p>
        </div>
      </form>
    </el-row>
    <el-topleft>
      <img src="../assets/images/bottomRight.webp" alt="" class="bottomRight" />
    </el-topleft>
  </el-main>
</template>

<script>
import axios from "axios"
export default {
  name: "registerView",
  components: {},
  data() {
    return {
      form: {
        name: "",
        fullname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      await axios.post('https://buzzer.atelir.com/api/auth/register', this.form).then(()=>{
         this.$router.replace({
          name: "login",
        });
      })
    },
  },
};
</script>


<style scoped>
.grey {
  color: #949494;
}
.form {
  width: 100%;
}
.colorBL {
  color: var(--blueLight);
  text-decoration: none;
  font-weight: bold;
}
.el-input {
  background: #001420 !important;
  border-radius: 50px;
}
.btnRegister {
  margin-bottom: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  background: rgb(6, 122, 238);
  background: linear-gradient(
    112deg,
    rgba(6, 122, 238, 1) 0%,
    rgba(9, 192, 249, 1) 100%
  );
  border-radius: 20px;
  font-weight: bold;
}
.label {
  font-weight: bold;
  color: var(--grey);
}

.heading {
  color: var(--blue);
}

.topLeft {
  position: absolute;
  width: 10%;
  top: 0;
  left: 0;
}
.bottomRight {
  position: absolute;
  width: 20%;
  bottom: 0;
  right: 0;
}
.logos {
  width: 200px;
}
.term {
  margin-top: 25px;
  margin-bottom: 25px;
  color: #949494;
}
@media only screen and (max-width: 600px) {
  .logos {
    width: 100px;
  }
}
</style>
