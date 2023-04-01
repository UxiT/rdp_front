<script setup>
import Sidebar from './partials/Sidebar.vue';
import Header from './partials/Header.vue';
import BlockTitle from './partials/BlockTitle.vue';

</script>

<template>
    <Header></Header>
  <div class="cources wrapper block-wrapper">
    <Sidebar/>
    <div class="block-content">
        <BlockTitle title="Оценки"/>
    </div>
  </div>
</template>
