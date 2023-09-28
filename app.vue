<template>
  <nuxt-layout>
    <section
      class="h-screen min-w-screen w-screen flex flex-col select-none overflow-hidden bg-stone-100 text-stone-800 transition-colors duration-200 ease-linear dark:bg-stone-900 dark:text-stone-100"
    >
      <main class="flex-1 overflow-y-auto">
        <div class="h-full flex items-center justify-center">
          <nuxt-page />
        </div>
      </main>
    </section>
  </nuxt-layout>
</template>
