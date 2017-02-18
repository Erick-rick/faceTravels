<?php 


class UsuarioDAO extends DAO{
	

	public function DAO(PDO $conexao = null){
		if($conexao != null){
			$this->conexao = $conexao;
		}else{
			$this->fazerConexao();
	
		}
	}
	public function inserir(Usuario $usuario){
		
		$sql = "INSERT INTO usuario(nome, login, senha) 
				VALUES('".$usuario->getNome()."', '".$usuario->getLogin()."', '".$usuario->getSenha()."')";
		
		return $this->getConexao()->exec($sql);
		
		
	}
	public function retornaLista() {
		$lista = array ();
		$sql = "SELECT * FROM usuario LIMIT 1000";
		$result = $this->getConexao ()->query ( $sql );
	
		foreach ( $result as $linha ) {
			$usuario = new Usuario();
			$usuario->setId( $linha ['id_usuario'] );
			$usuario->setNome( $linha ['nome'] );
			$usuario->setLogin($linha ['login']);
			$usuario->setSenha($linha['senha']);
			$usuario->setIdFacebook($linha['id_facebook']);
			$lista [] = $usuario;
		}
		return $lista;
	}
	
}


?>