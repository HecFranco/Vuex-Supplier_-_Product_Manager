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
  </div>
</template>

<script>
import * as types from "../types/authentication";

export default {
  name: "AuthenticationPage",
  computed: {
    firstname: {
      get () {
        return this.$store.state.USER;
      },
      set (value) {
        this.$store.commit(types.MUTATE_USER_FIRSTNAME, value)
      }
    },
    lastname: {
      get () {
        return this.$store.state.USER;
      },
      set (value) {
        this.$store.commit(types.MUTATE_USER_LASTNAME, value)
      }
    },
    email: {
      get () {
        return this.$store.state.USER;
      },
      set (value) {
        this.$store.commit(types.MUTATE_USER_EMAIL, value)
      }
    },    
    password: {
      get () {
        return this.$store.state.USER;
      },
      set (value) {
        this.$store.commit(types.MUTATE_USER_PASSWORD, value)
      }
    },     
  }
};
</script>

<style scoped>
</style>