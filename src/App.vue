<script setup>
  import ApplicationLogo from './components/ApplicationLogo.vue';
  import { onMounted, ref } from 'vue';
  const toggled = ref(false)
  const clipPathDuration = ref(500)
  function navToggle() {
    const nav = document.getElementById('primary_nav')
    toggled.value = !toggled.value
    if (toggled.value) {
      nav.classList.remove('hidden')
      setTimeout(() => {
        nav.classList.add('show')
        document.documentElement.classList.add('overflow-hidden')
      }, 1)
    } else {
      document.documentElement.classList.remove('overflow-hidden')
      nav.classList.remove('show')
      setTimeout(() => {
        nav.classList.add('hidden')
      }, clipPathDuration.value)
    }
  }
  onMounted(() => {
    const nav = document.getElementById('primary_nav')
    nav.addEventListener('click', () => {
      toggled.value = false
      document.documentElement.classList.remove('overflow-hidden')
      nav.classList.remove('show')
      setTimeout(() => {
        nav.classList.add('hidden')
      }, clipPathDuration.value)
    })
  })
  const year = new Date().getFullYear()
</script>

<template>
  <header class="h-24 items-center absolute w-full">
    <div class="w-5/6 mx-auto h-[inherit] flex justify-between items-center">
      <ApplicationLogo class="text-xl" />
      <button @click="navToggle" type="button" title="nav toggle" class="w-12 h-8 relative z-[9998]">
        <span
          class="w-9 h-0.5 transition-opacity duration-500 bg-primary absolute before:content-string left-0 block before:absolute before:w-5/6 before:h-full before:bg-primary before:-top-3 before:-right-1 after:content-string after:absolute after:w-5/6 after:h-full after:-right-1 after:bg-primary after:top-3"
          :class="[toggled ? 'opacity-0' : 'opacity-100']"></span>
        <span
          class="absolute left-1.5 w-8 h-0.5 rotate-45 transition-opacity duration-500 bg-white before:content-string before:absolute before:w-full before:h-0.5 before:bg-white before:-rotate-90 before:-top-0 before:-left-0"
          :class="[toggled ? 'opacity-100' : 'opacity-0']">
        </span>
      </button>
      <nav id="primary_nav"
        class="fixed primary-nav z-[9997] inset-0 bg-[rgba(0,0,0,0.96)] w-screen h-screen text-white hidden gap-4 text-3xl font-saira">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer class="bg-black text-white py-12 text-center">
    <p class="capitalize">
      &copy; {{ year }} achumanzeh &nbsp; - &nbsp; all rights reserved
    </p>
  </footer>
</template>

<style scoped>
  .primary-nav {
    clip-path: polygon(0 0, 0 0, 50% 50%, 0 100%, 0 100%, 50% 50%, 100% 100%, 100% 100%, 50% 50%, 100% 0, 100% 0, 50% 50%);
    transition: clip-path 500ms ease-in-out;
  }

  .show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .primary-nav.show {
    clip-path: polygon(0 0, 0 0, 0 50%, 0 100%, 0 100%, 50% 100%, 100% 100%, 100% 100%, 100% 50%, 100% 0, 100% 0, 50% 0);
  }
</style>
