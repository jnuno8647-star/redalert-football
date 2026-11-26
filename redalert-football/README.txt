REDALERT FOOTBALL — PROTÓTIPO PWA

O que já está incluído:
- Interface adaptada a iPhone.
- Manifesto para instalação no ecrã principal.
- Service worker e cache offline básico.
- Pedido de permissão de notificações.
- Notificação local de teste.
- Preparação para receber mensagens Push.

IMPORTANTE — ainda não é um serviço de alertas reais:
- Não existe ligação à API-Football.
- Não existe backend a consultar jogos.
- Não existe envio real de Web Push.
- A notificação de teste é local e não prova que os alertas de jogos estejam ligados.

INSTALAÇÃO:
1. Publicar estes ficheiros num alojamento HTTPS.
2. No iPhone, abrir o endereço no Safari.
3. Tocar em Partilhar > Adicionar ao ecrã principal.
4. Abrir a aplicação pelo novo ícone.
5. Tocar em "Ativar notificações" e permitir.
6. Tocar em "Enviar notificação de teste".

PRÓXIMA FASE TÉCNICA:
- Criar conta gratuita API-Football e obter a chave API.
- Guardar a chave apenas no servidor (nunca no JavaScript público).
- Criar tarefa agendada para obter fixtures em direto e eventos.
- Comparar eventos para evitar alertas duplicados.
- Guardar a subscrição Push do iPhone.
- Enviar Web Push quando aparecer evento Card / Red Card ou segundo amarelo.
- Respeitar quotas, limites e cobertura por competição da API.

LIMITAÇÃO DO PLANO GRATUITO:
API-Football anuncia 100 pedidos por dia no plano Free. Isto não chega para consultar todos os jogos do mundo continuamente. O modo gratuito terá de limitar a frequência e/ou o conjunto de jogos monitorizados. A cobertura depende da competição e dos dados fornecidos pela API.

Não coloques a tua chave API em ficheiros públicos, GitHub público ou mensagens.
