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
		$this->conexao = new PDO('mysql:host=localhost;dbname=facetravels', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
		
	}
	
	public function getConexao(){
		return $this->conexao;
		
	}
}


?>