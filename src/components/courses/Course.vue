<template>
    <Header></Header>
    <div class="cources wrapper block-wrapper">
        <Sidebar />
        <div class="block-content">
            <BlockTitle :title="course_title" />
            <div class="cources_content card">
                <Table 
                    :columns="courseColumns" 
                    :data="data.flat()"
                    href="/task"
                    >
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
import courseColumns from '../static/courses/course_columns';
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
        const data = reactive({ 
            logged: true,
            title: "НСД",
            tableData: []
         });

        const columns = courseColumns;

        onMounted(() => {
            axios.get(`http://127.0.0.1:8080/task/by-course?course_id=1`, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Authorization": `Bareer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(response => {
                    data.tableData.push(response.data)
                    data.title = response.data[0]["course_title"]
                    data.logged = true
                })
                .catch(error => {
                    console.log(error)
                    window.location.href = "/"
                });
        })

        return {
            loaded: data.logged,
            data: data.tableData,
            courseColumns: columns,
            course_title: data.title
        }
    }
}
</script>

<style scoped>
.cources_content {
    padding: 40px 20px;
}
</style>