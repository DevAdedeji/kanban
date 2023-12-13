<template>
  <div
    class="flex items-center justify-center h-screen bg-white dark:bg-dark_gray"
  >
    <div class="flex flex-col sm:flex-row items-center justify-center gap-2">
      <div>
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <h3 class="text-dark_gray dark:text-white text-xl">
        Please do not refresh the page &nbsp; 🙏🏽
      </h3>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["user"],
});
onBeforeMount(() => {
  setTimeout(() => {
    navigateTo("/board/demo");
  }, 2000);
});
</script>

<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #635fc7;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #635fc7 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
