<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const url = useRequestURL()

const { data } = await useFetch(`/api/configurations/${url.hostname}`)
useSeoMeta({
  title: data.value?.data.title,
  ogTitle: 'Site para testes institucionais',
  description: 'O site visa trabalhar com informações institucionais para crianças e adultos que desejam praticar atividades fisicas',
  ogDescription: 'O site visa trabalhar com informações institucionais para crianças e adultos que desejam praticar atividades fisicas',
})
</script>
