<script setup>
import { RouterLink } from "vue-router";

const items = [
  {
    name: "Мои курсы",
    link: "/cources",
  },
  {
    name: "Успеваемость",
    link: "/scores",
  },
];
</script>

<template>
  <div class="sidebar_container">
    <div class="sidebar">
      <div class="sidebar_wrapper">
        <RouterLink to="/profile" class="profile_link">
          <div class="profile_img"></div>
          <div class="profile_info">
            <span>Иван Иванов</span>
            <span class="small">ИБ-41</span>
          </div>
        </RouterLink>
        <ul class="sidebar_list">
          <li v-for="item in items">
            <div class="icon"></div>
            <RouterLink :to="item.link"> {{ item.name }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar_container {
    flex-shrink: 0;
    flex-grow: 1;
}
.sidebar {
  min-width: 280px;
  background: linear-gradient(62deg, #0061ff 0%, #5b93ef 100%);
  border-radius: 12px;
  padding: 18px 20px 20px 18px;
  flex-shrink: 0;
  width: 100%;
}
.sidebar_list {
  margin-top: 50px;
}

li {
  margin-bottom: 14px;
  display: flex;
}
li a {
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  line-height: 28.4px;
}
li .icon {
  width: 30px;
  height: 30px;
  background: #fff;
  margin-right: 7px;
}

.profile_link {
  display: flex;
  text-decoration: none;
  align-items: center;
  color: #fff;
}

.profile_img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
}

.profile_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile_info span {
  font-size: 20px;
  font-weight: 600;
  line-height: 23.7px;
}

.profile_info span.small {
  font-size: 14px;
  font-weight: 400;
}
</style>
