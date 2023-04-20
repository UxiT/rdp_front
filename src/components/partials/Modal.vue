<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content">
        <slot></slot>
        <button class="close_modal" @click="closeModal()"></button>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref, watch } from 'vue';
  import useEventsBus from '../../composables/eventBus';

  export default defineComponent({
    emits: ['closeModal'],
    setup() {
      const isVisible = ref(false);
      const { bus } = useEventsBus();

      function closeModal() {
        isVisible.value = false;
      }

      watch(isVisible, (newValue) => {
        if (newValue) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });

      watch(() => bus.value.get('openModal'), () => {
        isVisible.value = true
      })

      return {
        isVisible,
        closeModal
      };
    },
  });

</script>

<style>
  .modal_content {
    position: relative;
  }

  .close_modal {
    background: none;
    border: none;
    outline: none;
    position: absolute;
    z-index: 1000;
    right: 5px;
    top: 5px;
    width: 32px;
    height: 32px;
    font-weight: 200;
    cursor: pointer;
  }

  .close_modal::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('../../assets/img/close.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>