# Natanael Albino Festas

Landing page institucional da Natanael Albino Festas, publicada em
`natanaelalbinofestas.com`.

## Estrutura

- `index.html`: conteúdo e metadados da página;
- `styles.css`: identidade visual e responsividade;
- `script.js`: ano automático e animações progressivas;
- `analytics.js`: consentimento, Google Analytics 4 e eventos de conversão;
- `assets/`: fotografia principal nos formatos JPG e WebP;
- `CNAME`: configuração do domínio personalizado no GitHub Pages.

## Publicação no GitHub Pages

Nas configurações do repositório, acesse **Settings → Pages** e selecione:

- **Source:** Deploy from a branch;
- **Branch:** `main`;
- **Folder:** `/ (root)`.

O domínio personalizado esperado é `natanaelalbinofestas.com`. Depois que o DNS
estiver apontado para o GitHub Pages, ative **Enforce HTTPS**.

## Medição de conversões

A página está preparada para Google Analytics 4 (GA4), com consentimento explícito.
Para ativar a coleta:

1. Crie uma propriedade e um fluxo da Web no Google Analytics;
2. copie o ID de medição no formato `G-XXXXXXXXXX`;
3. em `index.html`, preencha a meta tag `google-analytics-id`;
4. publique a alteração e valide os eventos no relatório **Tempo real** ou no **DebugView**;
5. em **Administrador → Eventos**, marque `generate_lead` e `begin_checkout`
   como eventos principais.

Eventos implementados:

- `generate_lead`: clique no botão do WhatsApp;
- `view_item`: visualização da seção do curso;
- `begin_checkout`: clique no botão que abre o checkout da Hotmart;
- `scroll_depth`: profundidade de 25%, 50%, 75% e 90%.

A página não envia dados ao Google antes do aceite. Sinais de publicidade permanecem
desativados. O visitante pode rever sua escolha em **Preferências de privacidade** no rodapé.

> O clique na Hotmart mede o início do checkout, não a compra concluída. As vendas efetivas
> devem ser conferidas na Hotmart ou integradas ao GA4 pela página de confirmação da plataforma.

## SEO e compartilhamento

A página inclui:

- título e descrição voltados à decoração autoral;
- metadados Open Graph e Twitter Card;
- imagem social de 1200 × 630 pixels;
- favicon em SVG;
- diretiva para indexação e prévia ampla de imagens;
- dados estruturados JSON-LD para site, empresa, Natanael Albino e curso;
- `robots.txt` e `sitemap.xml`.

Depois da publicação:

1. adicione `https://natanaelalbinofestas.com/` ao Google Search Console;
2. envie `https://natanaelalbinofestas.com/sitemap.xml`;
3. solicite a indexação da página principal;
4. valide o JSON-LD no Teste de pesquisa aprimorada do Google;
5. atualize o cache de compartilhamento das redes quando alterar a imagem social.


## Próxima etapa de conteúdo

Antes da versão comercial definitiva, adicionar:

- WhatsApp e Instagram oficiais;
- cidade e região de atendimento;
- portfólio de festas;
- modalidades de serviço;
- depoimentos e formulário de orçamento.
