# Weather App

## Descrição do Projeto

O **Weather App** é uma aplicação móvel desenvolvida para consultar a previsão de tempo de qualquer cidade do mundo.

## Tecnologias Utilizadas

- **React Native + Expo**: Framework para construção de aplicações móveis nativas usando React.

### Bibliotecas

- **Babel-Plugin-Module-Resolver**: Plugin Babel permite configurar atalhos para caminhos de importação, ajudando a organizar e simplificar a estrutura de arquivos do projeto.
- **React Navigation**: Biblioteca de navegação para gerenciar rotas e navegação dentro da aplicação.
- **Styled Components**: Utilizado para estilização dos componentes com uma abordagem CSS-in-JS.
- **Context API**: Gerenciamento de estado leve e compartilhamento de dados entre componentes.
- **React Hooks**: Utilizado para gerenciar estado e efeitos colaterais em componentes funcionais.
- **Google Fonts**: Biblioteca para importar e utilizar fontes do Google Fonts na aplicação, permitindo personalização do Font Family.
- **Axios**: Realizar requisições HTTP, usada para interagir com APIs e serviços externos, facilitando o manuseio de promessas e respostas assíncronas.
- **Dayjs**: Biblioteca para manipulação e formatação de datas de forma leve e eficiente.
- **Expo-Location**: Biblioteca do Expo para acessar serviços de localização do dispositivo, permitindo obter coordenadas e atualizações de localização em tempo real.
- **Lucide-React-Native**: Biblioteca de ícones


## Como Executar o Projeto

1. **Clone o Repositório**:
   ```sh
   git clone git@github.com/hayashirafael/weather-app.git
   cd weather-app
   ```

2. **Instale as Dependências**:
   ```sh
   ## Node v20.18.0.
   npm install
   ```

3. **Insira a Chave do [WeatherAPI](https://www.weatherapi.com/) no Arquivo .env**:
  **Atenção: Renomeie o arquivo '.env.example' para '.env'**
   ```sh
   ## https://www.weatherapi.com/
   EXPO_PUBLIC_WEATHER_API_KEY=SUA CHAVE AQUI
   ```

4. **Execute a Aplicação**:
   ```sh
   npx expo start
   ```

## Estrutura do Projeto

- **/src**: Contém o código-fonte da aplicação.
  - **/@types**: Arquivos de tipagem para o TypeScript.
  - **/components**: Componentes reutilizáveis.
  - **/contexts**: Configurações e provedores do Context API.
  - **/dto**: Arquivos para tipagem de dados vindo da API.
  - **/hooks**: Hooks da aplicação.
  - **/routes**: Configurações de navegação.
  - **/screens**: Interfaces da aplicação.
  - **/services**: Configurações do Axios e chamadas REST.
  - **/theme**: Tema da aplicação.

## Funcionalidades

- **Home**: Página central da aplicação, onde será mostrado o clima atual da localização do dispositivo ou da cidade selecionada no campo de pesquisa e previsão dos próximos 2 dias no rodapé do app.
- **Detalhes**: Através do clique do Card no rodapé, será mostrado outras informações do clima, como a previsão de hora em hora do dia selecionado. 

## Observação
* Aplicação testada somente em sistema Android.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Feito com ❤️ por [Rafael Hayashi](https://github.com/hayashirafael).
