<script setup>
import Sidebar from './partials/Sidebar.vue';
import Header from './partials/Header.vue';
import BlockTitle from './partials/BlockTitle.vue';
import Table from './partials/DataView/Table.vue';

</script>

<template>
    <Header></Header>
  <div class="cources wrapper block-wrapper">
    <Sidebar/>
    <div class="block-content">
        <BlockTitle title="Успеваемость"/>
        <div class="scores_content card">
          
        </div>
    </div>
  </div>
</template>
