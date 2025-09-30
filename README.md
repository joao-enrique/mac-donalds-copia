<h1 align="left">🍔 Clone do McDonald's com PERN + Prisma ✨</h1>

<div align="center">
    <a href="https://mac-donalds-copia.vercel.app/fsw-donalds" target="_blank"> 
        <img src="preview-for-project.png" alt="Button image" /> 
    </a> 
</div>

<div align="center">
    <a href="https://mac-donalds-copia.vercel.app/fsw-donalds" target="_blank"> 
        <img src="button.png" alt="Button image" /> 
    </a> 
</div>

<p align="left">
  <b>Um clone do McDonald's construído com foco em escalabilidade, performance e boas práticas, utilizando as tecnologias mais modernas do ecossistema web.</b>
</p>

---

## 🚀 Tecnologias utilizadas

- 🗄 **PostgreSQL** → Banco de dados relacional  
- ⚙️ **Node.js + Express** → Backend robusto e escalável  
- ⚡ **Prisma ORM** → Mapeamento de dados moderno e tipado  
- ⚛️ **React + Next.js** → Frontend rápido, SSR/SSG e rotas otimizadas  
- 🎨 **TailwindCSS** → Estilização moderna e responsiva  
- 🔐 **Boas práticas** → Tratamento de erros, segurança e organização de código  

<div align="right">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" alt="postgresql logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="40" alt="nextjs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/prisma/2D3748" height="40" alt="prisma logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
</div>

---

## ⚙️ Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```bash
DATABASE_URL=...

NEXT_PUBLIC_API_URL=...
PORT=3000
```

# ▶️ Como rodar o projeto
### 🔹 Backend (API)
Na raiz do projeto, rode:

```bash
npm install
npx prisma migrate dev
```
A API estará disponível em: http://localhost:3000

# 🔹 Frontend

```bash
npm run dev
```

O frontend estará disponível em: http://localhost:3000 (Next.js já usa essa porta por padrão)

# 📂 Estrutura do projeto
├── prisma/          # Código da API (Node.js + Express + Prisma) </br>
├── public/         # Aplicação cliente (React + Next.js + TailwindCSS) </br>
├── src/           # Schemas e migrations do Prisma </br>
├── preview-for-project.png     # Segue-se o resto de arquivos necessários no Next.js </br>
├── .env.example      # Exemplo de variáveis de ambiente </br>
└── README.md         <- Você está aqui 😁

# ✅ Funcionalidades

- 🍟 Menu interativo com produtos estilo McDonald's
- 🛒 Carrinho de compras dinâmico
- 💳 Simulação de checkout
- 📦 Integração entre frontend e backend
- 🔍 Persistência de dados em PostgreSQL via Prisma

# 📜 Licença
Este projeto é open-source sob a licença MIT. </br>
Sinta-se à vontade para usar, modificar e contribuir! 🚀

# 🐱‍💻 Autor
Feito com 💛 por João Enrique
<div align="right"> 
    <a href="https://www.linkedin.com/in/joao-enrique-dev/" target="_blank"> 
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin logo" /> 
    </a> 
    <a href="https://www.youtube.com/@joaocodedev" target="_blank"> 
        <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="youtube logo" /> 
    </a> 
    <a href="https://jedev1.itch.io/" target="_blank"> 
        <img src="https://img.shields.io/badge/Itch.io-FA5C5C?style=for-the-badge&logo=itchdotio&logoColor=white" alt="itch logo" /> 
    </a> 
    <a href="https://www.instagram.com/joao__dev/" target="_blank"> 
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="instagram logo" /> 
    </a> 
    <a href="https://www.tiktok.com/@joao__code" target="_blank"> 
    <img src="https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white" alt="tiktok logo" /> 
    </a> 
</div>