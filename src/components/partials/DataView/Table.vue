<template>
  <div>
    <div class="table-responsive">
      <div class="list-titles">
        <span class="col-xs">№</span>
        <span v-for="col in columns" :class="col.className">
            {{ col.title }}
        </span>
      </div>
      <ul class="list-items">
        <li v-for="(row, idx) in data" :class="[(idx + 1) % 2 == 0 ? 'even' : 'odd']">
            <div class="col-xs">{{ idx+1 }}</div>
            <div v-for="(value, id) in row" :class="[columns[id]['className']]">
                {{ value }}
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableClass: {},
    columns: { type: Object },
    settings: {},
    data: {},
  },
  setup(props) {
    return {
      props
    };
  },
};
</script>


<style scoped>
    .table-responsive {
        overflow: auto;
        min-height: 600px;
    }

    li, li span, .list-titles span {
        font-size: 20px;
        line-height: 24px;
        font-family: Roboto;
        font-weight: 500;
        color: #504e4e;
    }

    .list-titles span {color: #9c9c9c}
    .list-titles {
        display: flex;
        padding: 0 10px 16px 10px;
    }

    .list-items li {
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 6px;
        margin-bottom: 9px;
        cursor: pointer;
    }

    li.odd {
        background-color: #f9f9f9;
    }

    li.even {
        background-color: #f1f9fd;
    }

    .col-xs {flex-basis: 5%;}
    .col-xs-4{flex-basis: 15%;}
    .col-s {flex-basis: 25%;}
    .col-m {flex-basis: 33%;}
    .col-lg {flex-basis: 50%;}
    .col-xl {flex-basis: 75%;}

    .center {text-align: center;}

</style>