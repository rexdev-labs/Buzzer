<template>
  <el-main>
    <el-topleft>
      <img src="../assets/images/topLeft.webp" alt="" class="topLeft" />
    </el-topleft>
    <img src="../assets/images/logo.png" alt="" class="logos" />
    <h1 class="heading">
      See what’s happening <br />
      int the world righ now
    </h1>
    <br />
    <el-row justify="center">
      <form @submit.prevent="submit">
        <div class="grid-content">
          <el-form label-position="top" label-width="100px" class="form">
            <el-form-item label="Email" class="label">
              <el-input
                class="inputAuth"
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
                class=""
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

          <el-button type="primary" class="btnLogin" @click="submit"
            >Login</el-button
          >

          <p class="grey">
            Don't have an account yet. ?
            <router-link class="colorBL" to="/register">
              Create Account</router-link
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
import { mapActions } from "vuex";

export default {
  name: "loginView",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    async submit() {
      this.signIn(this.form).then(()=>{
        this.$router.replace({
          name: "home",
        });
      })
    },
  },
};
</script>


<style scoped>
.term {
  margin-top: 25px;
  color: #949494;
  margin-bottom: 25px;
}
.form {
  width: 100%;
}
.colorBL {
  color: var(--blueLight);
  text-decoration: none;
  font-weight: bold;
}
.inputAuth {
  background: #edf8ff;
  border-radius: 20px;
}
.btnLogin {
  margin-bottom: 30px;
  text-decoration: none;
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
  color: white;
}
.label {
  font-weight: bold;
  color: var(--grey);
}
.grey {
  color: #949494;
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
  margin-top: 50px;
}
@media only screen and (max-width: 600px) {
  .logos {
    width: 100px;
  }
}
</style>
