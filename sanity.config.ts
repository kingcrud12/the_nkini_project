import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'the_nk_p',
  projectId: 'bvdt4jfo',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
