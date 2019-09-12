# Configurações de ambiente

Esta pasta contém os parâmetros de configuração para o ambiente de produção. 

A aplicação depende das seguintes configurações:

 - Token JWT
 - URI de acesso ao banco de dados
 - Chave de acesso ao firebase

 Esses parâmetros devem ser definidos como variáveis de ambiente. O script de compilação deve obter esses parâmetros e salvar em um arquivo `.json`