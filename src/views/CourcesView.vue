<template>
  <main>
    <Cources />
  </main>
</template>

<script>
import { reactive, onMounted } from 'vue';
import Cources from '../components/Cources.vue'
import axios from 'axios';

export default {
  components: {
    Cources
  },

  setup() {
    // const state = reactive({logged: false});
    // const courses = reactive([]);

    // onMounted(() => {
    //   axios.get('http://127.0.0.1:8080/courses', {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "*/*",
    //       "Authorization": `Bareer ${localStorage.getItem('accessToken')}`,
    //     }
    //   })
    //     .then(response => {
    //       courses.value = response.data
    //       state.logged = true
    //     })
    //     .catch(error => {
    //       console.error(error)
    //       window.location.href = "/"
    //     });
    // })

    // return { 
    //     loaded: state.logged, 
    //     courses: courses
    //   }
  },
}

</script>