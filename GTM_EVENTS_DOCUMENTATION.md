# Eventos do Google Tag Manager - Comunidade ContentDoc

## Configuração Inicial

1. **Substitua `GTM-XXXXXXX`** no arquivo `app/layout.tsx` pelo seu ID real do GTM
2. Configure os eventos no GTM usando os nomes listados abaixo

## Eventos Implementados

### 1. Cliques em Botões (`button_click`)
**Quando dispara:** Qualquer clique em botão importante
**Parâmetros:**
- `button_name`: Nome do botão clicado
- `button_location`: Localização na página
- `event_category`: "engagement"
- `event_label`: Combinação do nome e localização

**Exemplos de botões rastreados:**
- "Transformar Consultório" (Hero Principal)
- "Saiba Mais" (Hero Secundário)
- "Garantir Vaga R$ 9,90" (Pricing Principal)
- "Garantir Vaga Final" (CTA Final)
- "Login" (Header)

### 2. Conversões (`conversion`)
**Quando dispara:** Cliques nos CTAs principais
**Parâmetros:**
- `conversion_type`: Tipo de conversão
- `conversion_value`: 9.90 (valor da oferta)
- `currency`: "BRL"
- `event_category`: "conversion"
- `event_label`: Tipo da conversão

### 3. Scroll da Página (`scroll`)
**Quando dispara:** Marcos de scroll (25%, 50%, 75%, 100%)
**Parâmetros:**
- `scroll_percentage`: Porcentagem do scroll
- `event_category`: "engagement"
- `event_label`: "X% scroll"

### 4. Visualização de Seções (`section_view`)
**Quando dispara:** Quando uma seção fica 50% visível
**Parâmetros:**
- `section_name`: Nome da seção
- `event_category`: "engagement"
- `event_label`: "Viewed [section_name]"

**Seções rastreadas:**
- `hero`: Seção principal
- `pain-points`: Pontos de dor
- `solution`: Ponte da solução
- `benefits`: Benefícios
- `features`: Recursos
- `authority`: Autoridade
- `pricing`: Preços
- `faq`: Perguntas frequentes
- `final-cta`: CTA final

## Como Usar no GTM

### Configurar Triggers
1. **Page View**: Trigger automático
2. **Custom Event**: Para todos os eventos personalizados
   - Event name equals: `button_click`, `conversion`, `scroll`, `section_view`

### Configurar Tags
1. **Google Analytics 4**: Para enviar eventos para GA4
2. **Facebook Pixel**: Para remarketing
3. **Google Ads**: Para conversões

### Exemplo de Tag GA4
\`\`\`
Event Name: {{Event}}
Parameters:
- button_name: {{button_name}}
- button_location: {{button_location}}
- conversion_value: {{conversion_value}}
- section_name: {{section_name}}
\`\`\`

## Eventos de Conversão Recomendados

### Para Google Ads
- **Conversão Principal**: Evento `conversion` com `conversion_type = "cta_click"`
- **Micro-conversões**: 
  - Scroll 75%
  - Visualização da seção pricing
  - Cliques em "Saiba Mais"

### Para Facebook Ads
- **Purchase**: Evento `conversion`
- **AddToCart**: Cliques nos CTAs principais
- **ViewContent**: Visualização de seções importantes

## Testando os Eventos

1. Use o **Preview Mode** do GTM
2. Navegue pela página e interaja com os elementos
3. Verifique se os eventos estão sendo disparados corretamente
4. Teste em diferentes dispositivos (mobile/desktop)

## Métricas Importantes para Acompanhar

1. **Taxa de Conversão**: Conversões / Visitantes únicos
2. **Engajamento**: Scroll médio, seções visualizadas
3. **Funil de Conversão**: 
   - Hero → Pain Points → Benefits → Pricing → Conversão
4. **Performance dos CTAs**: Qual botão converte mais
5. **Abandono**: Em que seção os usuários saem mais
