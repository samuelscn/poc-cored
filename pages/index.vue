<template>
  <header>
    <h1>{{ homeConfig.title }}</h1>
  </header>
  <body>
    <p>{{ homeConfig.body }}</p>
  </body>
</template>

<script setup lang="ts">
import config1 from '~/infra/config-inst-1.json';
import config2 from '~/infra/config-inst-2.json';

type configuration = {
  title?: string,
  body?: string,
}

let homeConfig: configuration = reactive({});
const hostname = ref('');

onBeforeMount(() => {
  hostname.value = window.location.hostname
  // hostname.value = 'www.inst1.com';
  console.log(hostname.value)
  if (hostname.value === 'poc-cored.vercel.app') {
    homeConfig = config1;
  } else {
    homeConfig = config2;
  }
  // subdomain.value = hostname.value.split('.')[0];
})
</script>
