// src/useMockCountdown.ts
import { onMounted, ref } from "vue";
function useMockCountdown(args) {
  const total = args?.total ?? 100;
  const left = ref(total);
  let timeout;
  function loop() {
    let delta;
    if (left.value >= total / 2) {
      delta = total / 10;
    } else if (left.value >= total / 4) {
      delta = total / 20;
    } else {
      delta = Math.random() * left.value * 0.8;
    }
    left.value -= Math.floor(delta);
    if (left.value > 0) {
      timeout = window.setTimeout(() => {
        loop();
      }, 1e3);
    }
  }
  function cancel() {
    if (timeout) {
      window.clearTimeout(timeout);
      timeout = void 0;
    }
  }
  function setLeft(v) {
    left.value = v;
  }
  onMounted(() => {
    loop();
  });
  return { left, cancel, setLeft };
}

export {
  useMockCountdown
};
