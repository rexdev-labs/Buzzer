<template>
  <el-header class="header">
    <el-row
      :gutter="10"
      justify="space-between"
      style="margin-top: 10px; margin-bottom: 10px"
    >
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content">
          <img src="../assets/images/logo.png" class="imageLogo" />
        </div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img src="../assets/images/roundedavatar.webp" class="imageAva" />
          </span>
          <template #dropdown>
            <el-dropdown-menu id="dropdown">
              <el-dropdown-item>{{ user.fullname }}</el-dropdown-item>
              <router-link to="/login"
                ><el-dropdown-item @click="signOut"
                  >LogOut</el-dropdown-item
                ></router-link
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
  <el-main>
    <el-row justify="center">
      <el-col :xs="24" :sm="24" :md="20" :lg="12" :xl="12" class="mainSection">
        <addStatusCard :id_user="user.id" @status="setStatus" />
        <br />
        <statusCard :status=status :id_user=user.id />
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import statusCard from "../components/statusComponent.vue";
import addStatusCard from "../components/addStatusComponent.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HomeView",

  data() {
    return {
      status: null
    }
  },

  components: {
    statusCard,
    addStatusCard,
  },

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },

  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),
    setStatus(value) {
      this.status = value
    },
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace()({
          name: "login",
        });
      });
    },
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
  background-color: #f0f0f0;
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
.mainSection {
  margin-top: 70px;
  z-index: 1;
  background-color: #FAFDFF;
  padding-bottom: 50px;
  border-radius: 40px;
}
.statusSection {
  margin-top: 2.5%;
  margin-left: 2.5%;
  margin-right: 2.5%;
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