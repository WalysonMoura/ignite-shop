####################################################################################################
01. Configurando Stitches: 
   [Commit: Estrutura visual - Configurando Stitches](https://github.com/rocketseat-education/04-ignite-shop/commit/f93c94150fa48f04245b9c90c8ca67cb6f8a52e0)

Nessa aula conheceremos o [Stitches](https://stitches.dev/), uma ferramenta CSS-in-JS com foco em performance e experiencia de desenvolvimento que utilizaremos para estilizar a nossa aplicação.

####################################################################################################
02. Estilos globais: 
   [Commit: Estrutura visual - Estilos globais](https://github.com/rocketseat-education/04-ignite-shop/commit/2634abc449b8a76efe5f0cc9d4c1e95135045bc7)

Vamos agora configurar os estilos globais da nossa aplicação, para reaproveitar algumas estilizações em todas as partes do nosso app.

/styles/global.ts:

```tsx
import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$gray900',
    color: '$gray100'
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
})
```

/styles/index.ts

```tsx
import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e'
    }
  }
})
```

####################################################################################################
03. Cabeçalho da aplicação: 
   [Commit: Estrutura visual - Cabeçalho da aplicação](https://github.com/rocketseat-education/04-ignite-shop/commit/a06358d9d761af6b54ca269e722d2015b3f137b5)

Nessa aula vamos começar a criar os elementos do nosso App, começando pelo Header.

####################################################################################################
04. Imagens no Next.js: 
   [Commit: Estrutura visual - Imagens no Next.js](https://github.com/rocketseat-education/04-ignite-shop/commit/4105ff21ff1cc778beaaa35bf92e61755bda3514)

O NextJS é um framework que possui muito mais funcionalidades que somente SSR e SSG. Nessa aula vamos conhecer uma de suas features, que é a funcionalidade de otimização de imagens.

####################################################################################################
05. Estrutura da Home: 
   [Commit: Estrutura visual - Estrutura da Home](https://github.com/rocketseat-education/04-ignite-shop/commit/ba9cbacabffec13afc9201688437a6faace82e3f)

Nessa aula vamos começar a estruturar e estilizar nossa página Home, exibindo a estrutura inicial da visualização dos produtos.

####################################################################################################
06. Criando carrossel: 
   [Commit: Estrutura visual - Criando carrossel](https://github.com/rocketseat-education/04-ignite-shop/commit/2e711b3deb96d6a84b08f27bfad8616513718190)

Agora vamos implementar a funcionalidade de carrosell para nossa aplicação, que torna possível a gente fazer um scroll horizontal para visualizar mais produtos na nossa tela.
