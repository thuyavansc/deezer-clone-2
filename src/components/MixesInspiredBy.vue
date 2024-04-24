<script setup>
import { toRef, ref, toRefs } from "vue";
import { RouterLink } from "vue-router";

import Paly from "vue-material-design-icons/Play.vue";

let isHover = ref(false);

const props = defineProps({
  by: String,
  image: String,
  text: String,
  to: String,
});

const { by, text, to } = toRefs(props);

//export default {};
</script>

<template>
  <div>
    <RouterLink :to="to" class="relative">
      <div class="flex items-center bg-[#23232D] rounded-sm h-[54px] relative">
        <div
          class="flex items-center w-[54px]"
          @mouseenter="($event) => (isHover = true)"
          @mouseleave="($event) => (isHover = false)"
        >
          <div
            :class="
              isHover
                ? 'transition ease-in duration-100 bg-opacity-40'
                : 'transition ease-out duration-100 bg-opacity-5'
            "
            class="absolute h-full z-10 w-[54px] bg-black rounded-sm"
          />
          <div
            :class="
              isHover
                ? 'transition ease-in duration-100 bg-opacity-1000'
                : 'transition ease-out duration-100 opacity-0'
            "
            class="absolute z-20 p-1.5 rounded-full bg-white left-[6px]"
          >
            <Paly :size="30" />
          </div>
          <img class="min-h-[54px] rounded-sm z-0" :src="image" alt="" />
        </div>
        <div class="truncate w-full ml-4">
          <p
            class="hover:underline truncate max-w-[95%] text-gray-200 font-light text-[15px] cursor-pointer"
          >
            {{ text }}
          </p>
          <p class="text-[#787882] truncate text-[12px] max-w-[95%] font-light">
            by <span class="hover:underline cursor-pointer">{{ by }}</span>
          </p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style></style>
