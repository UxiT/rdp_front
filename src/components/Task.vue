<template>
    <Header></Header>
  <div class="cources wrapper block-wrapper">
    <Sidebar/>
    <div class="block-content">
        <BlockTitle :title="data.title"/>
        <div class="task_content card">
            <div class="task_content_description">
                <h3>Описание:</h3>
                <p class="task-description">
                   {{ data.description_text }}
                </p>
                <div class="files">
                    <ul>
                        <li class="file_row">
                            <div class="file_icon"></div>
                            <span>Лр1 Руководство</span>
                        </li>
                        <li class="file_row">
                            <div class="file_icon"></div>
                            <span>Лр1 Форма отчета</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="task_content_actions">
                <button  type="submit" class="button-blue">Подключиться</button>
                <button  type="submit" class="button">Добаить отчёт</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import Sidebar from './partials/Sidebar.vue';
    import Header from './partials/Header.vue';
    import BlockTitle from './partials/BlockTitle.vue';
    import { reactive, onMounted, watchEffect } from 'vue';
    import axios from 'axios';
    
    export default {
        components: {
            Sidebar,
            Header,
            BlockTitle
        },

        setup() {
            
        const data = reactive({ 
            logged: true,
            description_text: "",
            title: "",
         });

        onMounted(() => {
            axios.get(`http://127.0.0.1:8080/task/1`, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Authorization": `Bareer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(response => {
                    console.log(response.data)
                    data.description_text = response.data.description_text
                    data.logged = true
                    data.title =  `НСД/${response.data.title}`
                    // console.log(data.title)
                })
                .catch(error => {
                    console.log(error)
                    // window.location.href = "/"
                });
        });

        watchEffect(() => {
            console.log("Changes?")
        });

        return {
            data: data
        }
    }
}
</script>

<style scoped>

    .card {
        display: flex;

    }
    .task-description {
        font-size: 20px;
        line-height: 1.15em;
        margin-top: 12px;
    }

    .task_content_description {
        width: 70%;
        padding-right: 3rem;
    }

    button {
        max-width: auto;
        padding: 14px 12px;
    }

    .button {
        background-color: #c6c6c6;
    }

    .files {
        margin-top: 36px;
        border-top: 2px #bfbfbf solid;
        max-width: 445px;
        width: 100%;
    }

    .file_row {
        display: flex;
        margin-top: 12px;
        align-items: center;
    }

    .file_row span {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 20px;
    }

    .file_icon {
        width: 46px;
        height: 46px;
        border-radius: 6px;
        background-color: #e9e9e9;
        margin-right: 12px;
    }
</style>