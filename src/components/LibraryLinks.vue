<script setup>
    const props = defineProps({
        title: String,
        links: Array
    });
    console.log(props.links);
</script>
<template>
    <div>
        <h3 class="uppercase mb-5">{{title}}</h3>
        <ul class="ml-[40px]">
          <li class="mb-4 " v-for="(link, n) in links" :key="n"><a href="#" class="link capitalize">{{link}}</a></li>
        </ul>
      </div>
</template>