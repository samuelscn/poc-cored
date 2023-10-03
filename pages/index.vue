<template>
  <header>
    <title>{{ homeConfig.title }}</title>
  </header>
  <body>
    <p>{{ homeConfig.body }}</p>
  </body>
</template>

<script setup>
const url = useRequestURL()

const { data } = await useFetch(`/api/configurations/${url.hostname}`)
const homeConfig = reactive(data.value.data);
// console.log(toRaw(data.value));
// const { data } = await useAsyncData("configurations", () =>
//   $fetch("/api/configurations")
// );
// console.log(data)

// type configuration = {
//   title?: string,
//   body?: string,
// }

// let homeConfig: configuration = reactive({});
// import { AsyncData } from 'nuxt/app';


// function fetchConfigInfo() {
//   const finalPath = path.join(path.resolve(__dirname, '..'), `infra/${url.hostname}.json`);
//   console.log('pathname', finalPath)
//   const data = fs.readFileSync(finalPath, 'utf8');
//   return JSON.parse(data);
// }

// console.log(fetchConfigInfo());

// fetchConfigInfo()

// function buscarArquivoJSON(nome) {

//   return lerArquivoJson(caminho);
// }

// try {
//   const dados = buscarArquivoJSON('nome-do-arquivo'); // Substitua pelo nome real do arquivo
//   console.log(dados);
// } catch (erro) {
//   console.error('Ocorreu um erro:', erro);
// }

// AsyncData.


// const hostname = ref('');

// onBeforeMount(() => {
//   hostname.value = window.location.hostname
//   // hostname.value = 'www.inst1.com';
//   console.log(hostname.value)
//   if (hostname.value === 'poc-cored.vercel.app') {
//     homeConfig = config1;
//   } else {
//     homeConfig = config2;
//   }
//   // subdomain.value = hostname.value.split('.')[0];
// })
</script>
