<script setup>
import Sidebar from './partials/Sidebar.vue';
import Header from './partials/Header.vue';
import { RouterLink } from 'vue-router';

const cources = [
    {
        name: 'Нсд',
        link: '/cources',
    },
    {
        name: 'Криптография',
        link: '/scores',
    },
    {
        name: 'КУРС №1',
        link: '/profile',
    }
];

const getCources = () => {

}

</script>

<template>
    <Header/>
  <div class="cources wrapper block-wrapper">
    <Sidebar/>
    <div class="cources_info card">
        <h2 class="block-title">Список доступных курсов</h2>
        <div class="cource__list">
            <ul class="cource__list">
                <li v-for="cource in cources">
                    <div class="icon"></div>
                    <RouterLink v-for="item in cources" :to="item.link"> 
                        {{ item.name }}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<style scoped>
    .card {
        width: 100%;
        flex-grow: 1;
    }

</style>