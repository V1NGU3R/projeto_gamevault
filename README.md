# 🎮 GameVault

**Sua biblioteca de jogos, organizada em um só lugar.**

O GameVault é um aplicativo mobile desenvolvido com React Native e Expo, criado para ajudar jogadores a organizar suas coleções, explorar novos títulos e acompanhar seu progresso em uma interface moderna e intuitiva.

## ✨ Funcionalidades

- 🎮 Exploração de jogos por meio da RAWG API.
- 🔎 Pesquisa de jogos por nome.
- 📄 Paginação para carregar mais resultados.
- ↕️ Ordenação por relevância, avaliação, lançamento e nome.
- 📚 Gerenciamento de uma coleção pessoal.
- ❤️ Sistema de favoritos.
- ⭐ Avaliações pessoais de 1 a 5 estrelas.
- 📝 Anotações individuais para cada jogo.
- 📌 Controle de status: Quero jogar, Jogando e Zerado.
- 🏠 Tela inicial com resumo da coleção.
- 📊 Perfil com estatísticas dos jogos.
- 📷 Scanner de QR Codes e códigos de barras compatíveis.
- 💾 Persistência local dos dados com AsyncStorage.

## 🛠️ Tecnologias

- **React Native** — desenvolvimento mobile.
- **Expo** — ambiente de desenvolvimento.
- **JavaScript** — linguagem de programação.
- **React Navigation** — navegação entre telas.
- **Context API** — gerenciamento global de estado.
- **Axios** — comunicação com APIs.
- **RAWG API** — consulta de informações sobre jogos.
- **AsyncStorage** — armazenamento local.
- **Expo Camera** — acesso à câmera e leitura de códigos.
- **React Native SVG** — suporte a elementos gráficos vetoriais.
- **React Native QR Code SVG** — geração de QR Codes, quando integrada ao projeto.

## 📂 Estrutura do projeto

```text
gamevault/
├── assets/
├── components/
├── constants/
├── contexts/
├── navigation/
├── screens/
├── services/
├── utils/
├── .env
├── App.js
├── index.js
└── package.json
```

## ⚙️ Como executar

### 1. Pré-requisitos

- Node.js e npm instalados.
- Expo Go ou emulador Android configurado.

### 2. Clonar o repositório

```bash
git clone https://github.com/V1NGU3R/projeto_gamevault.git
```

```bash
cd gamevault
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar a RAWG API

Crie um arquivo `.env` na raiz do projeto e adicione sua chave:

```env
EXPO_PUBLIC_RAWG_API_KEY=sua_chave_aqui
```

A chave pode ser obtida na [documentação oficial da RAWG API](https://rawg.io/apidocs).

> **Importante:** não publique credenciais privadas. Variáveis com prefixo `EXPO_PUBLIC_` podem ser acessadas pelo aplicativo e não devem ser tratadas como segredos.

### 5. Executar o aplicativo

```bash
npx expo start
```

Para reiniciar limpando o cache:

```bash
npx expo start -c
```

## 🔌 Integração com API

O GameVault utiliza a RAWG API para obter informações sobre jogos, incluindo nomes, imagens, avaliações, plataformas, gêneros e datas de lançamento.

As requisições são organizadas no diretório `services/`, utilizando Axios para comunicação HTTP.

A identificação por códigos de barras utiliza um serviço externo separado, cuja disponibilidade depende da API utilizada.

## 🧠 Conceitos praticados

- Desenvolvimento de interfaces mobile.
- Componentização e reutilização de código.
- Consumo de APIs REST.
- Navegação entre telas.
- Gerenciamento de estado com Context API.
- Persistência local de dados.
- Operações assíncronas e tratamento de erros.
- Pesquisa, paginação e ordenação de resultados.
- Integração com recursos nativos do dispositivo.

## 🚀 Melhorias planejadas

- [ ] Aprimorar os filtros por plataforma, status e favoritos.
- [ ] Concluir e testar a geração e leitura de QR Codes próprios.
- [ ] Melhorar a identificação de jogos por códigos de barras.
- [ ] Expandir as opções de pesquisa e organização da coleção.
- [ ] Adicionar novas funcionalidades de personalização.

## 👨‍💻 Autor

**V1NGU3R**

- GitHub: [@V1NGU3R](https://github.com/V1NGU3R)
- LinkedIn: [Arthur Portilio](https://www.linkedin.com/in/arthur-portilio-69063a360/)

---

Projeto desenvolvido para aprendizado e portfólio na área de desenvolvimento de software.
