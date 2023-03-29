<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';

const error = ref(null);

const formData = reactive({
  username: "",
  password: "",
});

function sendAuth() {
  let data = {
    'username': this.formData.username,
    'password': this.formData.password,
  };

  axios.post('http://127.0.0.1:8080/login', data)
    .then(response => {
        this.localStorage.accessToken = response.accessToken;
    })
    .catch(error => {
      this.error = error;
    });

    if (this.localStorage.accessToken) {
        window.location.replace("http://127.0.0.1:5173/home")
    }
}

</script>

<template>
  <div class="auth">
    <div class="card">
      <h1 class="green">Авторизация</h1>
      <form ref="login_form" @submit.prevent="sendAuth()">
        <input v-model="formData.username" autocomplete="true" type="text" id="login" placeholder="Введите ваш логин" />
        <input v-model="formData.password" autocomplete="true" type="password" id="password" placeholder="Введите парлоль" />
        <div class="row">
          <a href="#" class="link-info">Не могу войти</a>
          <button type="submit" class="button-blue">Войти</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.2rem;
}

.row button {
  flex-shrink: 0;
  flex-grow: 1;
}

.row {
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
}

.row a,
.row button {
  flex-basis: 48%;
  flex-shrink: 0;
  flex-grow: 1;
}

.row a {
  text-align: center;
}

button {
  max-width: 100%;
}

.auth {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
}

.auth h1,
.auth h3 {
  text-align: center;
}

.card {
  padding: 30px 40px;
  width: 400px;
  align-items: center;
}

.card form {
  display: flex;
  width: 100%;
  flex-direction: column;
}

input {
  margin-bottom: 30px;
  width: 100%;
  font-size: 1.2rem;
  padding: 6px 10px;
  border: none;
  border-bottom: 2px var(--color-border) solid;
  transition: 0.3s ease-in;
}

input:focus {
  outline: none;
  border-bottom-color: #2f3be0;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
