<script setup>
import MixesInspiredBy from "@/components/MixesInspiredBy.vue";
</script>

<template>
  <div class="max-w-[1500px] mx-auto">
    <div class="px-8 mt-8 min-w-[800px] w-full">
      <div class="text-white text-xl font-semibold inline-block">
        Mixes inspired by...
        <div class="text-sm font-light text-[#A2A2AD]">
          Discover new Tracks similar to your favourites
        </div>
      </div>
      <div class="py-3"></div>
      <div class="flex justify-between w-full gap-8">
        <div class="xl:w-1/3 w-1/2">
          <MixesInspiredBy
            class="pb-1.5"
            text="VAMPIRE (feat. oli Skyes of Bring Me The Horizon)"
            by="Ic3peak"
            to="/artist"
            image="https://picsum.photos/id/147/300/300"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Deutchland"
            by="Rammstein"
            to="/artist"
            image="https://picsum.photos/id/166/300/300"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Fallout"
            by="Masked wolf"
            to="/artist"
            image="https://picsum.photos/id/127/300/300"
          />
        </div>
        <div class="xl:w-1/3 w-1/2">
          <MixesInspiredBy
            class="pb-1.5"
            text="Pray For Plagues"
            by="Bring Me the Horizon"
            to="/artist"
            image="https://picsum.photos/id/201/300/300"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Candy truck / You expected"
            by="Bring Me the Horizon"
            to="/artist"
            image="https://picsum.photos/id/222/300/300"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="L'efant sauage"
            by="Gojira"
            to="/artist"
            image="https://picsum.photos/id/212/300/300"
          />
        </div>
        <div class="xl:block hidden xl:w-1/3">
          <MixesInspiredBy
            class="pb-1.5"
            text="Bad Life"
            by="Sigrid"
            to="/artist"
            image="https://picsum.photos/id/211/300/300"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Dystopid"
            by="Megadeth"
            to="/artist"
            image="https://picsum.photos/id/123/300/300"
          />
          <MixesInspiredBy
            class="pb-1.5"
            text="Can You Feel My Heart"
            by="Bring Me the Horizon"
            to="/artist"
            image="https://picsum.photos/id/94/300/300"
          />
        </div>
      </div>
    </div>
  </div>
</template>
