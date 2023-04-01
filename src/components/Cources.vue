<script setup>
import Sidebar from './partials/Sidebar.vue';
import Header from './partials/Header.vue';
import BlockTitle from './partials/BlockTitle.vue';
import Table from './partials/DataView/Table.vue';
import courseColumns from './static/courses/_columns';

const cources = [
    {
        title: 'Нсд',
        progress: '2/8 ЛР',
        period: '10.02.2023 - 25.05.2023',
        actions: ''
    },
    {
        title: 'Криптография',
        progress: '1/8 ЛР',
        period: '10.02.2023 - 25.05.2023',
        actions: ''
    },
    {
        title: 'ТЗИ',
        progress: '5/12 ЛР',
        period: '10.02.2023 - 25.05.2023',
        actions: ''
    },
    
];
</script>

<template>
    <Header></Header>
  <div class="cources wrapper block-wrapper">
    <Sidebar/>
    <div class="block-content">
        <BlockTitle title="Доступные курсы"/>
        <div class="cources_content card">
            <Table  :columns="courseColumns"
                    :data="cources"
            >
                
            </Table>
        </div>
    </div>
  </div>
</template>

<style scoped>
    .cources_content{
        padding: 40px 20px;
    }
</style>