<template>
    <el-dialog
      v-model="dialogVisible"
      title="Update Buzzer"
      class="modal"
      :before-close="handleClose"
    >
      <span>
        <textarea
        autofocus
            v-model="form.editstatus"
            rows="3"
            cols="7"
            maxlength="160"
            placeholder="What's happening ?"
            class="textareaStatus"
          >
          </textarea>
      </span>
      
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogUpdate()">Cancel</el-button>
          <el-button type="primary" @click="updateStatus(idSelect)"
            >Update Status</el-button
          >
        </span>
      </template>
    </el-dialog>

  <div v-for="status in allstatus" v-bind:key="status">
    <div class="statusSection">
      <el-row>
        <el-col :xs="5" :sm="4" :md="3" :lg="4" :xl="3">
          <div class="avaCircle" style="margin-left: 20px">
            <p>{{ status.user.name[0].toUpperCase() }}</p>
          </div>
        </el-col>
        <el-col :xs="18" :sm="19" :md="19" :lg="18" :xl="19">
          <el-row>
            <h2 class="title">{{ status.user.fullname }}</h2>
            <p class="grey">@{{ status.user.name }}</p>
          </el-row>
          <p
            style="
              float: left;
              text-align: left;
              font-family: Avenir, Helvetica, Arial, sans-serif;
              color: #8d8d8d;
              overflow=auto;
              max-width: 100%;

            "
          >
            {{ status.status }}
          </p>
        </el-col>
        <el-col :xs="1" :sm="2" :md="2" :lg="2" :xl="2"
          ><div class="grid-content">
            <el-dropdown>
              <span class="el-dropdown-link">
                <p class="grey pointer">•••</p>
              </span>
              <template #dropdown v-if="id_user == status.id_user">
                <el-dropdown-menu id="dropdown">
                  <el-dropdown-item v-on:click="dialogUpdate(status.status, status.id)">Edit Post</el-dropdown-item>
                  <el-dropdown-item v-on:click="greet(status.id)">Delete Post</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div></el-col
        >
      </el-row>
      <el-row>
        <el-col :xs="5" :sm="4" :md="3" :lg="4" :xl="3"> </el-col>
        <el-col :xs="18" :sm="19" :md="19" :lg="18" :xl="19">
          <el-row>
            <p class="grey" style="font-size: 12px; color: #8d8d8d">
              {{ moment(status.created_at).format("D-MMM-YYYY") }}
            </p>
          </el-row>
        </el-col>
      </el-row>
      <hr style="border: 0.5px solid #f0f0f0" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
// import { ref } from 'vue'

export default {
  name: "statusCard",

  data() {
    return {
      form: {
        editstatus: String,
      },
      allstatus: [],
      moment: moment,
      dialogVisible: false,
      idSelect: Number
    };
  },

  props: {
    status: String,
    id_user: Number,
  },

  async mounted() {
    console.log(this.status);
    if (this.status == null) {
      let response = await axios.get("https://buzzer.atelir.com/api/auth/status");
      this.allstatus = response.data;
    }
  },
  watch: {
    status: {
      immediate: true,
      handler(newData, oldData) {
        if (newData != oldData) this.allstatus = newData;
      },
    },
  },

  methods: {
    greet: async function (id) {
      await axios.post("https://buzzer.atelir.com/api/auth/delete", { id });
      const response = await axios.get("https://buzzer.atelir.com/api/auth/status");
      this.allstatus = response.data;
    },
    dialogUpdate(statusSelect, idStatus) {
      this.dialogVisible = !this.dialogVisible
      this.form.editstatus = statusSelect
      this.idSelect = idStatus
    },
    async updateStatus(id) {
      await axios.post("https://buzzer.atelir.com/api/auth/edit", { id: id, status: this.form.editstatus });
      const response = await axios.get("https://buzzer.atelir.com/api/auth/status");
      this.allstatus = response.data;
      this.dialogVisible = false;
    },
  },
};
</script>
<style scoped>
.modal {
  width: 40%;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}

.grey {
  color: #6d6d6d;
}
.textareaStatus {
  padding: 20px;
  margin-top: 10px;
  width: 90%;
  resize: none;
  height: 100px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border: none;
  font-size: 20px;
  background-color: #eefbff;
  border-radius: 10px;
}
.textareaStatus:focus {
  outline: none;
}
.pointer:hover {
  cursor: pointer;
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
  background-color: #f9f9f9;
  padding-bottom: 50px;
  border-radius: 40px;
}
.statusSection {
  margin-top: 2.5%;
  margin-left: 2.5%;
  margin-right: 2.5%;
}
.inputSection {
  background-color: #f0f0f0;
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
  .modal {
  width: 90%;
}
.el-dialog{
  width: 90%!important;
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
  .modal {
  width: 90vw;
}
.el-dialog{
  width: 90%!important;
}
}
</style>