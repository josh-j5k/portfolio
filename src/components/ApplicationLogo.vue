<script setup>
    defineProps({
        class: String
    })
    const logo = "<Achumanzeh />"
</script>
<template>
    <h2 class="font-aldrich" :class="class">
        {{ logo }}
    </h2>
</template>