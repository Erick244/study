import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const { tabelaVisivel, formularioVisivel, exibirForm, exibirTabela } = useTabelaOuForm();

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirForm();
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    exibirForm();
  }

  return {
    salvarCliente,
    excluirCliente,
    novoCliente,
    selecionarCliente,
    obterTodos,
    exibirTabela,
    cliente,
    clientes,
    tabelaVisivel,
  };
}