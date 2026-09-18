# Guilherme Bezerra de Jesus | Portfólio Profissional

![Deploy Status](https://img.shields.io/badge/Deploy-GitHub_Pages-6366f1?style=for-the-badge&logo=github)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)

Landing page e portfólio de apresentação pessoal e profissional de **Guilherme Bezerra de Jesus**, projetada para publicação e compartilhamento no LinkedIn. O objetivo da página é transmitir uma apresentação autêntica, sóbria e transparente sobre minha formação, trajetória em desenvolvimento de software, projetos autorais e frentes de estudo.

🌐 **Acesse a aplicação**: [https://guibez007.github.io/](https://guibez007.github.io/)

---

## 🎯 Sobre o Projeto & Trajetória

Minha trajetória na tecnologia começou em 2023, ao iniciar a faculdade (FATEC) após um período trabalhando com atividades braçais. Desde então, venho construindo minha formação através da prática constante e do desenvolvimento de projetos próprios.

### Destaques & Vivências:
- **Formação & Projetos Acadêmicos**: 3 anos de graduação com participação em eventos e competições como a **InterFatecs** (competição de programação), a **RoboCode** (competição de robótica) e a **EXPOCIEE** (evento de empregabilidade, capacitação e conexão). 
- **Inglês**: Realização do **TOEIC em dois anos** (exame internacional de proficiência em inglês), acompanhando minha constante evolução no idioma.
- **CountBus**: Projeto prático que evoluiu de um protótipo acadêmico para uma solução integrando hardware, sensores, GPS, conectividade, backend, banco de dados e dashboard web.
- **The Revolt Saga (TRS)**: Projeto autoral focado na escrita de livro, roteiro e worldbuilding detalhado, servindo também como base conceitual para um futuro projeto de jogo.
- **Formação em Inteligência Artificial**: Cursos de IA no **SENAI**, explorando a aplicação prática de modelos e sua integração ao desenvolvimento de software.
- **Vivência Prática**: Experiência no **TG (Trabalho de Graduação)** e em projetos em equipe, desenvolvendo solução de problemas reais, lógica de programação e trabalho colaborativo.

---

## 🛠️ Conhecimentos & Tecnologias

A aplicação organiza minhas principais frentes de atuação de forma clara e direta:

- **Desenvolvimento Web**: React, JavaScript, HTML5, CSS3.
- **Backend & Sistemas**: Node.js, Spring Boot, APIs REST, Bancos de Dados (MariaDB).
- **Inteligência Artificial**: Cursos de IA no SENAI, aplicações de IA e integração com software.
- **Hardware & IoT**: Sensores, GPS, conectividade e integração hardware/software.
- **Escrita & Narrativa**: Escrita de livro, roteirização, criação de personagens e worldbuilding.

---

## 📂 Arquitetura do Projeto React

A aplicação foi desenvolvida com arquitetura modular em React 19 + Vite 7, utilizando um design system próprio em Vanilla CSS com tema escuro e alta legibilidade:

```
guibez007.github.io/
├── public/
│   └── favicon.svg           # Favicon vetorial personalizado
├── src/
│   ├── assets/
│   │   ├── ftperfil.png       # Foto de perfil
│   │   └── revolt_saga_banner.jpg # Arte conceitual do projeto TRS
│   ├── components/
│   │   ├── Header.jsx         # Menu fixo responsivo com navegação rápida
│   │   ├── Hero.jsx           # Apresentação com foto, badges, CTAs e redes
│   │   ├── About.jsx          # Trajetória detalhada e destaques formatados
│   │   ├── FocusAreas.jsx     # Cards de habilidades (max 3 por linha no desktop)
│   │   ├── FeaturedProject.jsx # Spotlight do projeto autoral TRS
│   │   └── Footer.jsx         # Rodapé e links sociais
│   ├── data/
│   │   ├── profile.js         # Dados pessoais e links de redes (GitHub, LinkedIn, E-mail)
│   │   ├── about.js           # Parágrafos da trajetória e destaques
│   │   ├── focusAreas.js      # Lista dos 5 domínios de habilidades & tecnologias
│   │   ├── featuredProject.js # Dados do projeto autoral TRS
│   │   └── content.js         # Centralizador que re-exporta personalData
│   ├── App.jsx                # Layout principal da aplicação
│   ├── main.jsx               # Ponto de entrada React + StrictMode
│   └── index.css              # Design system com variáveis CSS, dark theme & glassmorphism
└── index.html                 # Configuração SEO, Open Graph & Google Fonts
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (v18+)
- npm ou npx

### Passo a passo
1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/GuiBez007/guibez007.github.io.git
   cd guibez007.github.io
   ```

2. **Instalar as dependências**:
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Gerar a build de produção**:
   ```bash
   npm run build
   ```

---

## 📬 Contato

- **LinkedIn**: [guilherme-b-b3905229b](https://www.linkedin.com/in/guilherme-b-b3905229b/)
- **GitHub**: [GuiBez007](https://github.com/GuiBez007)
- **E-mail**: [guilhermebezerradejesus@gmail.com](mailto:guilhermebezerradejesus@gmail.com)
