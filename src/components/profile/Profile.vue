<script setup>
import Sidebar from '../partials/Sidebar.vue';
import { reactive } from 'vue';

const profileData = reactive([
  {
    name: 'Имя',
    value: 'Иван',
  },
  {
    name: 'Фамилия',
    value: 'Иванов',
  },
  {
    name: 'Группа',
    value: 'ИБ-41',
  },
]);

</script>

<template>
  <div class="profile wrapper block-wrapper">
    <Sidebar/>
    <div class="profile__info">
      <div class="profile_image">
      </div>
      <div class="profile_text">
        <div class="profile_text_item" v-for="item in profileData">
          <span class="profile_text_info mono italic">{{ item.name }}: </span>
          <span class="profile_text_value mono">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
