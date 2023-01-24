<script lang="ts">
  import type { LoginRequestModel } from "@/model/LoginModel";
  import { OrganizationService } from "@/service/OrganizationService";
  import { LoginService } from "../service/LoginService";
  export default {
    data() {
      return {
        form: {
          username: "mint@doppio.com",
          password: "P@ssw0rd",
        },
      };
    },
    methods: {
      async login() {
        console.log("test");
        let payload: LoginRequestModel = {
          username: this.form.username as string,
          password: this.form.password as string,
        };
        try {
          let result = await LoginService.login(payload);
          this.$cookies.set("token", result.token);
          this.$router.push("/orgs");
        } catch (err) {
          throw err;
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
  <div>
    <b-card no-body class="overflow-hidden" style="min-width: 1200px; max-width: 1200px;">
      <b-row no-gutters>
        <b-col md="6" >
          
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
    </b-card>
  </div>
</template>

<style scoped>
.login-button {
  width: 100% !important;
  display: block;
}
@media only screen and (max-width: 687px) {
  .card {
    border-width: 0px !important;
    min-width: none;
    min-height: none;
  }
}
</style>
