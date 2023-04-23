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
        <BlockTitle title="НСД/ЛР-1 Название"/>
        <div class="task_content card">
            <div class="task_content_description">
                <h3>Описание:</h3>
                <p class="task-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel saepe dicta et tempora sunt iusto inventore eius praesentium accusamus commodi corrupti cum, velit distinctio adipisci fugit porro consequatur quae laborum!
                </p>
                <div class="files">
                    <ul>
                        <li class="file_row">
                            <div class="file_icon"></div>
                            <span>Лр1 Руководство</span>
                        </li>
                        <li class="file_row">
                            <div class="file_icon"></div>
                            <span>Лр2 Форма отчета</span>
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


<style scoped>

    .card {
        display: flex;

    }
    .task-description {
        font-size: 20px;
        line-height: 1.15em;
        margin-top: 12px;
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