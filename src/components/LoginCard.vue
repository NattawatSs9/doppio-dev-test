<script lang="ts">
  import type { LoginRequestModel } from "@/model/LoginModel";
  import { OrganizationService } from "@/service/OrganizationService";
  import { LoginService } from "../service/LoginService";
  export default {
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
        isError: false,
      };
    },
    methods: {
      async login() {
        let payload: LoginRequestModel = {
          username: this.form.username as string,
          password: this.form.password as string,
        };
        try {
          let result = await LoginService.login(payload);
          this.$cookies.set("token", result.token);
          this.$router.push("/orgs");
        } catch (err) {
          this.isError = true
          throw err
        }
      },
      async getOrgs() {
        try {
          let result = await OrganizationService.get();
        } catch (err) {
          throw err;
        }
      },
    },
  };
</script>

<template>
  <div class="card card-setting">
      <b-row>
        <b-col class="first-col" md="6">
          <div class="p-5">
            <h3 class="text-light text-center">Dev Test by Doppio Tech</h3>
            <h5 class="text-light text-center">Developed by Nattawat Samsee</h5>
          </div>
          
        </b-col>
        <b-col md="6">
          <div class="p-5">
            <h3 class="text-center">Login</h3>
            <b-form @submit="login()">
              <b-form-group
                id="input-group-1"
                label="Your Email: "
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.username"
                  type="email"
                  placeholder="Enter Username"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Your Password: "
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  placeholder="Enter Password"
                  required
                  type="password"
                ></b-form-input>
              </b-form-group>
              <template v-if="isError">
                <p class="text-danger">** Please try again **</p>
              </template>
              <b-button
                type="submit"
                pill
                variant="primary"
                class="login-button"
                >Login</b-button
              >
            </b-form>
          </div>
        </b-col>
      </b-row>
  </div>
</template>

<style scoped>
  .first-col {
    background-color: #0d6efd;
    padding: 0px !important;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .login-button {
    width: 100% !important;
    display: block;
  }
  @media only screen and (max-width: 600px) {
    .card {
      border-width: 0px !important;
      min-width: none;
      min-height: none;
    }
  }
  @media only screen and (min-width: 600px) {
    .card {
      border-width: 0px !important;
      min-width: none;
      min-height: none;
    }
  }
  @media only screen and (max-width: 687px) {
    .card {
      border-width: 0px !important;
      width: auto;
      height: auto;
    }
  }
  @media only screen and (min-width: 768px) {
    .card {
      border-width: 0px !important;
      min-width: none;
      min-height: none;
    }
  }
  @media only screen and (min-width: 768px) {
    .card-setting {
      max-width: 600px;
      min-width: 600px;
      border-width: 1px !important;
    }
  }
  @media only screen and (min-width: 992px) {
    .card-setting {
      max-width: 900px;
      min-width: 900px;
      border-width: 1px !important;
    }
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .card-setting {
      max-width: 1200px;
      min-width: 1200px;
      border-width: 1px !important;
    }
  }

</style>
