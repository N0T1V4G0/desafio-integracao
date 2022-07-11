interface IProduct {
  id?: number;
  codigo: string;
  nome: string;
  status: number;
  valor: number;
  descricao?: string;
  idCategoria: number;
}

export { IProduct };
