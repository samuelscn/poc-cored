
import localhost from '@/infra/localhost.json';
import config1 from '@/infra/config-inst-1.json';
import config2 from '@/infra/config-inst-2.json';

export default defineEventHandler((event) => {
  const hostname = getRouterParam(event, 'hostname')
  if (hostname === 'poc-cored.vercel.app') {
    return { data: config1 }
  }
  if (hostname === 'poc-cored-2.vercel.app') {
    return { data: config2 }
  }
  return { data: localhost }
})
