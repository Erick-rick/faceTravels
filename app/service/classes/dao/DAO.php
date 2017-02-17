<?php 


class DAO{
	
	protected $conexao;
	
	public function DAO(PDO $conexao = null){
		if($conexao != null){
			$this->conexao = $conexao;
		}else{
			$this->fazerConexao();
				
		}
	}
	public function fazerConexao(){
		$this->conexao = new PDO('mysql:host=localhost;dbname=facetravels');
	}
	
	public function getConexao(){
		return $this->conexao;
		
	}
}


?>