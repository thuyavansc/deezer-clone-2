<script setup>
import { onBeforeMount } from "vue";
import { RouterLink, RouterView } from "vue-router";

import Magnify from "vue-material-design-icons/Magnify.vue";
import Bell from "vue-material-design-icons/Bell.vue";
import SideMenuItem from "./components/SideMenuItem.vue";
import MusicPlayer from "./components/MusicPlayer.vue";

//Pinia-store
import { useSongStore } from "./stores/song";
import { storeToRefs } from "pinia";
const useSong = useSongStore();
const { isPlaying, currentTrack, isLyrics, trackTime } = storeToRefs(useSong);

//Function
onBeforeMount(() => {
  isPlaying.value = false;
  isLyrics.value = false;
  trackTime.value = "0:00";
});
</script>

<template>
  <!-- topbar start -->
  <div
    id="TopNav"
    class="fixed right-0 flex items-center justify-between w-[calc(100%-240px)] h-[56px] border-b border-b-[#32323D]"
  >
    <div class="flex items-center w-full">
      <Magnify class="p-6 mt-1 pr-2" fillColor="#7E7E88" :size="22" />
      <input
        class="p-1 bg-transparent outline-none placeholder-[#BEBEC7] text-[#FFFFFF] w-full max-w-xl"
        placeholder="Search"
        type="text"
      />
    </div>

    <!-- for bell icon -->
    <div class="flex items-center pr-10">
      <div class="mr-4 p-1 hover:bg-gray-600 rounded-full cursor-pointer">
        <Bell fillColor="#FFFFFF" :size="20" />
      </div>
      <img
        class="rounded-full w-[33px]"
        src="https://yt3.ggpht.com/sSnZzOAOO8OHbTA5nioAyD9DrpVwPUkFzfbAqT5DVj9Ixn-4ifbSNWzD3tozMNXiH5eOGPqf5w=s88-c-k-c0x00ffffff-no-rj"
        alt=""
      />
    </div>
  </div>
  <!-- top-Nav-end -->
  <!-- side navigation -start -->
  <div
    id="SideNav"
    class="fixed w-[240px] bg-[#191922] h-[100vh] border-r border-r-[#32323D]"
  >
    <div class="w-full pl-6 pt-3 cusor-pointer">
      <RouterLink to="/">
        <img width="130" src="/images/deezer-logo.png" alt="Site Logo" />
      </RouterLink>
    </div>
    <div class="mt-[53px]">
      <!-- //menu section -->
      <SideMenuItem
        iconString="music"
        :iconSize="20"
        pageurl="/"
        name="Music"
      />
      <SideMenuItem
        iconString="podcast"
        :iconSize="20"
        pageurl="/podcasts"
        name="Podcasts"
      />
      <SideMenuItem
        iconString="explore"
        :iconSize="20"
        pageurl="/artist"
        name="Explore"
      />
      <SideMenuItem
        iconString="favourite"
        :iconSize="20"
        pageurl="/favourite"
        name="Favourites"
      />
    </div>
    <div class="text-[#A2A2AD] font-light text-[12px] pl-[62px] mt-[25px]">
      <div class="py-[9px] hover:text-[#EF5465] cusor-pointer">
        Favourite tracks
      </div>
      <div class="py-[9px] hover:text-[#EF5465] cusor-pointer">Playlist</div>
      <div class="py-[9px] hover:text-[#EF5465] cusor-pointer">Albums</div>
      <div class="py-[9px] hover:text-[#EF5465] cusor-pointer">Artists</div>
      <div class="py-[9px] hover:text-[#EF5465] cusor-pointer">Podcasts</div>
    </div>
  </div>

  <div
    class="fixed w-[calc(100%-240px)] h-[calc(100%-56px)] ml-[240px] mt-[56px] overflow-auto"
  >
    <RouterView />
  </div>
  <MusicPlayer v-if="currentTrack" />
</template>

<style scoped></style>
