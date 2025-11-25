📋 CRUD Pessoas (PF e PJ) — Integração com Backend

Este projeto implementa as adaptações necessárias para permitir que datas de nascimento (Pessoa Física) e datas de registro (Pessoa Jurídica) sejam corretamente armazenadas, carregadas e manipuladas no backend Pessoas, conforme requisitos da atividade.

📚 Referências Utilizadas

A atividade foi desenvolvida tomando como base os seguintes repositórios:

Frontend base ReactJS
👉 https://github.com/vaguettibfd/ReactJSBFD

Documentação e backend da atividade
👉 https://github.com/vaguettibfd/backend_pessoas

Versão do CRUD Pessoas (PF e PJ) com integração via API
O backend implementa a classe PessoaBase, que contém o campo data, herdado tanto por PF quanto por PJ.

Para PF, esse campo representa a data de nascimento

Para PJ, representa a data de registro

🎯 Objetivo da Atividade

Implementar os objetos, componentes e formulários necessários para que:

A data de nascimento da Pessoa Física (PF)

A data de registro da Pessoa Jurídica (PJ)

sejam:

✔️ Armazenadas corretamente no backend
✔️ Convertidas adequadamente entre frontend ↔ backend
✔️ Editáveis no formulário
✔️ Exibidas na visualização
✔️ Consistentes com o campo data da classe PessoaBase

✅ Implementação Concluída

A seguir, o resumo das adaptações realizadas:

🔧 1. Alterações nos DAOs
PFDAOBackEnd.mjs

mapPF()
Converte pf.data recebido do backend para dataNascimento no frontend.

toPlain()
Envia dataNascimento do frontend como data para o backend.

PJDAOBackEnd.mjs

mapPJ()
Mapeia pj.data do backend para dataRegistro no frontend.

toPlain()
Converte dataRegistro do frontend para o campo data ao enviar ao backend.

🧩 2. Alterações no Formulário
PessoaFormBack.jsx
✔️ Carregamento

Ao editar um registro:

As datas vindas do backend (YYYY-MM-DD) são convertidas em objetos dayjs.

✔️ Salvamento

Processamento da data antes de enviar:

Para PF:

Converte para YYYY-MM-DD

Chama pf.setDataNascimento()

Para PJ:

Converte para YYYY-MM-DD

Chama pj.setDataRegistro()

👁️ 3. Visualização
VisualizarPessoaBack.jsx

PF → exibe Data de Nascimento formatada

PJ → exibe Data de Registro formatada

O frontend trata corretamente o campo data retornado pelo backend conforme o tipo de pessoa.
