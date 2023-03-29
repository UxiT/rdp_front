<template>
  <div class="home_screen">

    <Modal>
      <h3 class="login_header">Авторизация</h3>
      <p class="login_text">Войдите, используя свой логин и пароль ОРИОКС</p>

      <form ref="login_form" class="login_form" @submit.prevent="postLogin()">
        <input v-model="formData.username" autocomplete="true" type="text" id="login" placeholder="Логин" />
        <input v-model="formData.password" autocomplete="true" type="password" id="password" placeholder="Пароль" />

        <button type="submit" class="button-blue">Войти</button>
        <a href="#" class="login-trouble">Не могу войти</a>
      </form>
    </Modal>

    <div class="login_wrapper" style="display: flex; align-items: center; position: absolute; left: 58%; top: 50%; transform: translate(-50%, -50%);">
      <button class="enter" @click="emitOpenModal()">
        <span>Войти</span>
      </button>
      <div class="dash"></div>
      <div class="enter">
        <span>Заргестрироваться</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Modal from '../partials/Modal.vue';
  import { ref, reactive } from 'vue';
  import useEventsBus from '../../composables/eventBus';

  export default {
    components: {
      Modal
    },
    setup() {
      const isVisible = ref(false);
      const {emit}=useEventsBus();

      const formData = reactive({
        username: "",
        password: "",
      });

      function emitOpenModal(){
        emit('openModal');
      }
      
      function postLogin() {
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

      return {
        isVisible,
        formData,
        emitOpenModal,
        postLogin
      }
    }
  }
</script>

<style scoped>
  .home_screen {
    background-image: url('../../assets/img/bg_login.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    position: relative
  };

  .login_wrapper{
    display: flex;
  }

  .login_wrapper span {
    font-size: 48px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
    transition: all 0.4s ease;
  }

  .enter{
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  .enter:hover span {
    opacity: 0.7;
  }

  .dash {
    width: 3px;
    height: 110px;
    background-color: #fff;
    margin: 0 36px;
  }

  .login_header {
    color: #111;
    font-size: 36px;
    line-height: 43px;
    font-weight: 600;
  }

  .login_text {
    margin-top: 10px;
    font-size: 16px;
    color: #737373;
    font-weight: 400;
    width: 50%;
  }

  form {
    margin-top: 40px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 100%;
    font-size: 24px;
    line-height: 1rem;
    padding: 13px 18px;
    border: none;
    border-radius: 12px;
    border: 3px #0061ff solid;
    margin-bottom: 14px;
    outline: none;
    color: #c3c3c3;
  }

  input:focus {border-color: #0061ff;}

  button[type='submit'] {
    cursor: pointer;
    border: none;
    outline: none;
    width: 100%;
    min-height: 54px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #0061ff;
    border-radius: 6px;
    color: #fff;

    font-size: 24px;
    font-weight: 600;
    margin-top: 19px;
  }

  button[type='submit']:hover,
  .login-trouble:hover
  {opacity: 0.8;}

  .login-trouble {
    text-decoration: none;
    color: #0061ff;
    font-size: 20px;
    margin-top: 9px;
    padding: 5px 0;
  }
  

</style>