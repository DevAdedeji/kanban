<template>
  <Teleport to="body">
    <Transition name="fade" mode="out-in" :appear="true">
      <div
        v-if="show"
        class="modal flex items-center justify-center"
        @click.self="closeModal"
      >
        <div class="flex flex-col items-center justify-center">
          <Transition name="slidein" mode="out-in" :appear="true">
            <div
              v-if="showModalContent"
              class="flex flex-col w-full items-center justify-center"
            >
              <div class="modal__header">
                <slot name="header" />
              </div>
              <div class="modal__content">
                <slot name="content" />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface ModalProps {
  show: boolean;
}
const { show = false } = defineProps<ModalProps>();
const emits = defineEmits(["close-modal"]);

const showModalContent = ref<boolean>(true);

const closeModal = () => {
  showModalContent.value = false;
  emits("close-modal");
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  z-index: 10;
  overflow-y: auto;
}
</style>
