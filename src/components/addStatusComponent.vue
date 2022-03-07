<template>
  <form @submit.prevent="submit">
    <div class="inputSection">
      <div class="flex-container">
        <div style="flex-grow: 1">
          <div class="avaCircle"><p>{{user.name[0].toUpperCase()}}</p></div>
        </div>
        <div style="flex-grow: 23">
          <textarea
            v-model="form.status"
            rows="3"
            cols="7"
            maxlength="160"
            placeholder="What's happening ?"
            class="textareaStatus"
          >
          </textarea>
        </div>
      </div>
      

      <el-row justify="space-between">
        <el-col :span="6"></el-col>
        <el-col :span="6">
          <router-link to="/" style="text-decoration: none">
            <el-button class="btnBuzz" @click="submit"
              >Buzz</el-button
            ></router-link
          >
        </el-col>
      </el-row>
    </div>
  </form>
</template>
<script>
import axios from "axios"
import {mapGetters} from "vuex"
export default {
  name: "addStatusCard",

  props: {
      id_user : String,
  },
  data() {
    return {
      form: {
        status: "",
        id_user: this.id_user
      },
    };
  },
  methods: {
    async submit() {
      await axios.post('https://buzzer.atelir.com/api/auth/addstatus', this.form)
      const response = await axios.get('https://buzzer.atelir.com/api/auth/status')
      this.form.status = null
      this.$emit('status', response.data)
    },
  },
    computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>
<style scoped>
.grey {
  color: #6d6d6d;
}
.textareaStatus {
  margin-top: 10px;
  width: 100%;
  resize: none;
  height: 100px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border: none;
  font-size: 20px;
  background-color: #EEFBFF;
}
.textareaStatus:focus {
  outline: none;
}

.header {
  box-shadow: 1px 8px 13px -5px rgba(194, 194, 194, 0.75);
  -webkit-box-shadow: 1px 8px 13px -5px rgba(194, 194, 194, 0.75);
  -moz-box-shadow: 1px 8px 13px -5px rgba(194, 194, 194, 0.75);
  height: 80px;
  margin-left: none;
  margin-right: none;
  align-items: baseline;
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: white;
}
.inputSection {
  background-color: #EEFBFF;
  padding: 20px;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-top: 2.5%;
  border-radius: 20px;
}
.flex-container {
  display: flex;
  align-items: stretch;
}

.btnBuzz {
  color: white;
  margin-top: 10px;
  float: right;
  text-decoration: none;
  padding: 20px 40px 20px 40px;
  background: var(--blue);
  border-radius: 20px;
  font-weight: bold;
}

#dropdown {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.imageAva {
  width: 60px;
  border-radius: 50%;
}

.avaCircle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  border-radius: 50%;
  height: 60px;
  background-color: var(--blue);
  font-weight: bold;
  color: #ffffff;
  font-size: 20px;
}

.imageLogo {
  width: 60px;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
@media only screen and (max-width: 600px) {
  .logos {
    width: 100px;
  }
}
@media only screen and (max-width: 420px) {
  .avaCircle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    border-radius: 50%;
    height: 40px;
    background-color: var(--blue);
    font-weight: bold;
    color: #ffffff;
    font-size: 16px;
  }
}
</style>