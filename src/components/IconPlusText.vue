<script setup>
    defineProps({
        iconLink: String
    })
</script>
<template>
    <li class="flex gap-3 items-center">
        <span>
            <img :src="iconLink" alt="html5" class="w-8">
        </span>
        <span>
            <slot />
        </span>
    </li>
</template>