<template>
    <Header></Header>
    <div class="cources wrapper block-wrapper">
        <Sidebar />
        <div class="block-content">
            <BlockTitle title="НСД" />
            <div class="cources_content card">
                <Table :columns="courseColumns" :data="courses.flat()">

                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../partials/Sidebar.vue';
import Header from '../partials/Header.vue';
import BlockTitle from '../partials/BlockTitle.vue';
import Table from '../partials/DataView/Table.vue';
import courseColumns from '../static/courses/_columns';
import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';

export default {
    components: {
        Header,
        Sidebar,
        BlockTitle,
        Table,
    },

    setup() {
        const courses = ref([])

        const state = reactive({ 
            logged: false,
         });
        const columns = courseColumns;

        onMounted(() => {
            axios.get(`http://127.0.0.1:8080/tasks/by-course?course_id=${this.$route.param.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Authorization": `Bareer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(response => {
                    courses.value.push(response.data)
                    state.logged = true
                })
                .catch(error => {
                    console.error(error)
                    window.location.href = "/"
                });
        })

        return {
            loaded: state.logged,
            courses: courses.value,
            courseColumns: columns,
        }
    }
}
</script>

<style scoped>
.cources_content {
    padding: 40px 20px;
}
</style>