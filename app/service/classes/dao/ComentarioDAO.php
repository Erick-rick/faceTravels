<?php


class ComentarioDAO extends DAO{
	
	public function DAO(PDO $conexao = null){
		if($conexao != null){
			$this->conexao = $conexao;
		}else{
			$this->fazerConexao();
	
		}
	}
	public function inserir(Comentario $comentario){
	
		//A fazer
	
	}
	
}