<template>
    <div class="card">
        <h2 class="block-title">
            {{ props.title }}
        </h2>
    </div>
</template>

<script>
    export default {
        props: {
            title: String
        },

        setup(props) {
            return {
                props
            }
        }
    }
</script>


<style scoped>
    .card {
        padding: 16px 30px;
        margin-bottom: 26px;
    }
    .block-title {
        color: #111;
        font-size: 40px;
        line-height: 47px;
        font-weight: 400;
    }
</style>