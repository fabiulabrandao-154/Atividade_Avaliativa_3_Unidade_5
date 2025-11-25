# 📝 Atividade – CRUD Pessoas (PF e PJ) com Integração ao BackEnd

Considere os arquivos e repositórios a seguir como base para a realização da atividade:

1) Repositório base do FrontEnd  
👉 https://github.com/vaguettibfd/ReactJSBFD

2) Readme base do BackEnd (Pessoas)  
👉 https://github.com/vaguettibfd/backend_pessoas  

3) Versão do CRUD Pessoas (PF e PJ) com integração ao BackEnd (Pessoas)

---

## 🎯 Objetivo da Atividade

Implementar, de forma complementar, os objetos e formulários necessários para que:

- **a data de nascimento da Pessoa Física (PF)**  
- **a data de registro da Pessoa Jurídica (PJ)**  

sejam **armazenadas e gerenciadas corretamente pelo BackEnd**, utilizando o atributo **`data`** existente em `PessoaBase` (herdado por PF e PJ).

📌 **Importante:**  
O campo `data` do backend deve ser tratado como:  
- **Data de Nascimento** → para PF  
- **Data de Registro** → para PJ  

---

# ✅ Implementação Concluída

As adaptações foram realizadas com sucesso para garantir o correto envio, recebimento, exibição e edição das datas no sistema integrado ao backend.

---

## 📦 Alterações nos DAOs (Integração BackEnd)

### **PFDAOBackEnd.mjs**
#### ✔ `mapPF()`  
- Mapeia o campo **`pf.data`** recebido do backend para **`dataNascimento`** no frontend.  

#### ✔ `toPlain()`  
- Converte **`dataNascimento`** do frontend para o campo **`data`** esperado pelo backend ao salvar ou atualizar.

---

### **PJDAOBackEnd.mjs**
#### ✔ `mapPJ()`  
- Mapeia **`pj.data`** do backend para **`dataRegistro`** no frontend.  

#### ✔ `toPlain()`  
- Converte **`dataRegistro`** do frontend para **`data`**, enviando corretamente ao backend.

---

## 📝 Alterações no Formulário (PessoaFormBack.jsx)

### ✔ Carregamento (edição)
- Converte a data recebida do backend (string) para um objeto **dayjs**, permitindo exibição correta no campo de data.

### ✔ Salvamento
- Converte a data selecionada no formulário (dayjs) para o formato **`YYYY-MM-DD`** antes de enviar ao backend.

### ✔ Regras aplicadas
- Para PF → chama **`pf.setDataNascimento()`**  
- Para PJ → chama **`pj.setDataRegistro()`**

---

## 👁️ Visualização (VisualizarPessoaBack.jsx)

### ✔ PF – Pessoa Física
- Exibe a **data de nascimento** formatada corretamente.

### ✔ PJ – Pessoa Jurídica
- Exibe a **data de registro** formatada.

---

# 📌 Resultado Final

O sistema agora gerencia corretamente o campo **`data`** do backend, atendendo completamente ao solicitado na atividade:

- PF → `data` interpretada como **data de nascimento**  
- PJ → `data` interpretada como **data de registro**  
- CRUD totalmente funcional com integração ao backend  
- Datas convertidas, exibidas, salvas e atualizadas corretamente

---
