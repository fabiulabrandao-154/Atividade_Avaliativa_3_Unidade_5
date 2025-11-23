import React, { useEffect, useState } from "react";
import { Table, Button, Space, Popconfirm, message, Tag, Input, Select } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PFDAO from "../../objetos/dao/PFDAOLocalV2.mjs";
import PJDAO from "../../objetos/dao/PJDAOLocalV2.mjs";

export default function ListaPessoas() {
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("PF");
  const [filtroNome, setFiltroNome] = useState("");
  const [dados, setDados] = useState([]);

  const pfDAO = new PFDAO();
  const pjDAO = new PJDAO();

  function carregarLista() {
    const dao = tipo === "PF" ? pfDAO : pjDAO;
    const lista = dao.listar(); // ← LÊ do localStorage (lista JSON)

    const filtrados = lista.filter((p) =>
      p.nome?.toLowerCase().includes(filtroNome.toLowerCase())
    );

    setDados(filtrados);
  }

  useEffect(() => {
    carregarLista();
  }, [tipo, filtroNome]);

  function excluirPessoa(id) {
    const dao = tipo === "PF" ? pfDAO : pjDAO;
    dao.excluir(id); // ← Atualiza lista JSON no localStorage
    message.success("Registro excluído com sucesso!");
    carregarLista();
  }

  // colunas, ações de visualizar/editar/excluir...

  return (
    <div style={{ padding: 24 }}>
      {/* filtros, select PF/PJ, campo de busca, botão Atualizar */}
      <Space style={{ marginBottom: 16 }}>
        <Select
          value={tipo}
          onChange={setTipo}
          style={{ width: 160 }}
          options={[
            { value: "PF", label: "Pessoa Física" },
            { value: "PJ", label: "Pessoa Jurídica" },
          ]}
        />
        <Input
          placeholder="Filtrar por nome"
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
        />
        <Button type="primary" onClick={carregarLista}>
          Atualizar
        </Button>
      </Space>

      <Table
        dataSource={dados}
        columns={colunas}
        rowKey="id"
        pagination={{ pageSize: 6 }}
      />
    </div>
  );
}
