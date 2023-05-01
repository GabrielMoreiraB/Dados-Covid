# Bootcamp React - TPM2 - Trabalho Prático do Módulo 1 JS Avançado

Trabalho prático do módulo 1 do bootcamp react, Pós-graduação em Desenvolvimento Full Stack - XP Educação

Construção de uma aplicação de graficos interativos sobre a COVID19 consumido de uma API utilizando JavaScript puro e HTML.

## Atividades

- [✔] Implementar HTML CSS e JS uma aplicação para apresentação;

  > **API**:  
  > https://api.covid19api.com/summary/

- [✔] Carregar as informações necessárias para a aplicação;

  > **Rota**:  
  > https://api.covid19api.com/summary

- [✔] Implementar um JavaScript puro, HTML e CSS, uma aplicação para
apresentação dos números da COVID-19 de um determinado país para um
período de datas. A URL base para consumo da API com os dados da COVID
é **https://api.covid19api.com/**. As respectivas rotas serão descritas nas
atividades subsequentes.;

  

- [✔] A imagem abaixo ilustra um exemplo de implementação dessa aplicação, com
um tipo de estilização obtido da internet (https://keen.io/). O estilo da página
não necessariamente precisa ter o mesmo layout apresentado, mas é
importante ter os mesmos componentes. O projeto base (HTML e CSS) será
disponibilizado no fórum de avisos do professor, caso queiram utilizá-lo como
referência.

A página apresentada na Figura 1 trata-se da Home de sua aplicação. Nela devem
ser apresentados os números globais, até a data corrente, retornados pela API na
rota “/summary”, sendo eles:
KPIs: Total de Confirmados, Total de Mortes e Total Recuperados.
Pizza: Novos Confirmados, Novas Mortes e Novos Recuperados
Barras: Pareto com o Top 10 no número de mortes por país.

- [✔] Filtros: Data Início, Data Fim, País (combo retornado pela rota “/coutries”), Dados
(Casos Confirmados, Número de Mortes e Casos Recuperados) e o um botão para
aplicar os filtros selecionados.
Gráfico de Linhas: Apresentação diária dos números do tipo de dados selecionados
pelo filtro (Confirmados, Mortes ou Recuperados). Apresentar no gráfico a linha
com o número médio correspondente aos números apresentados na curva diária.
KPIs: Total de Confirmados, Total de Mortes e Total de Recuperados para o país
selecionado.

- [✔] Nas informações por país, foi utilizada a rota “By Country All Status”. Mais
detalhes e exemplos podem ser avaliados na documentação da API:
**https://documenter.getpostman.com/view/10808728/SzS8rjbc**.