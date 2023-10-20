<template>
  <div>
    <div ref="modal" :class="{modal:true}" v-if="visible" :style="'opacity: '+(visible?1:0)"></div>
    <transition name="bounce">
      <div v-if="visible" class="content" @click.self.stop="$emit('close')">
        <slot name="body">
          <div class="dialog">
            <slot>对话框</slot>
          </div>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "PDialog",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(value) {
      if (value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.removeProperty("overflow");
      }
    }
  }
}
</script>

<style scoped>
.blur {
  filter: blur(2px);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity .3s;
}

.content{
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
}
.dialog {
  background-color: var(--vp-c-bg);
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  overflow: hidden;
}
.bounce-enter-active {
  animation: bounce-in 400ms;
}
.bounce-leave-active {
  animation: bounce-out 300ms;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.0);
  }
}
</style>