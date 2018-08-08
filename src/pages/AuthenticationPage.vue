<template>
  <!-- begin:: Page -->
  <div class="m-grid m-grid--hor m-grid--root m-page" style="height: 100vh;">
    <!--begin::form -->
    <form 
      >
      <!--begin::signin inputs -->
      <div class="form-group m-form__group">
        <input 
          class="form-control m-input" 
          type="text" 
          placeholder="Firstname" 
          name="firstname"
          v-model="firstname"
          >
      </div>
      <div class="form-group m-form__group">
        <input 
          class="form-control m-input" 
          type="text" 
          placeholder="Lastname" 
          name="lastname"
          v-model="lastname"
          >
      </div>
      <div class="form-group m-form__group">
        <input 
          class="form-control m-input" 
          type="text" 
          placeholder="Email" 
          name="email"
          v-model="email"
          >
      </div>
      <div class="form-group m-form__group">
        <input 
          class="form-control m-input" 
          type="text" 
          placeholder="Password" 
          name="password"
          v-model="password"
          >
      </div>                  
    </form>
    <!--end::form -->
      <router-link
        id="m_login_signup"
        class="m-link m-link--focus m-login__account-link"
        :to="{ name: 'signupPage'}"
      >
        signupPage
      </router-link>
      <router-link
        id="m_login_signup"
        class="m-link m-link--focus m-login__account-link"
        :to="{ name: 'loginPage'}"
      >
        loginPage
      </router-link>   
      <router-link
        id="m_login_signup"
        class="m-link m-link--focus m-login__account-link"
        :to="{ name: 'forgetPasswordPage'}"
        >
      forgetPasswordPage
      </router-link>    
      <p>Type: {{this.$route.props}} - {{type_auth}}</p>
  </div>
</template>

<script>
import * as types from "../types/authentication";

export default {
  name: "AuthenticationPage",
  // Data from father component
  props: {
    type_auth: String
  },
  created() {
    this.$store.state.authentication.auth_type = this.type_auth;
  },
  updated() {
    this.$store.commit(types.MUTATE_TYPE_AUTHENTICATION, this.type_auth);
  },  
  computed: {
    firstname: {
      set(value) {
        this.$store.commit(types.MUTATE_USER_FIRSTNAME, value);
      }
    },
    lastname: {
      set(value) {
        this.$store.commit(types.MUTATE_USER_LASTNAME, value);
      }
    },
    email: {
      set(value) {
        this.$store.commit(types.MUTATE_USER_EMAIL, value);
      }
    },
    password: {
      set(value) {
        this.$store.commit(types.MUTATE_USER_PASSWORD, value);
      }
    },
    auth_type: {
      set() {
        this.$store.commit(types.MUTATE_TYPE_AUTHENTICATION, this.type_auth);
      }
    }
  }
};
</script>

<style scoped>
</style>