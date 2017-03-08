<?php


class UsuarioController {
	private $post;
	public function UsuarioController(){
		$json = file_get_contents("php://input");
		$this->post = json_decode($json, true);
		if($_SERVER['HTTP_HOST'] == "localhost"){
			foreach($_POST as $chave => $valor){
				$this->post[$chave] = $valor;
			}
		}
	}
	public function cadastrar() {
		
		if (! (isset ( $this->post ['nome'] ) && isset ( $this->post['login'] ) && isset ( $this->post['senha'] ))) {
			echo "Incompleto";
			return;
		}
		
		$usuario = new Usuario ();
		$usuario->setNome ( $this->post ['nome'] );
		$usuario->setLogin ( $this->post ['login'] );
		$usuario->setSenha ( $this->post ['senha'] );
		if(isset($this->post['id_face'])){
			$usuario->setIdFacebook($this->post['id_face']);
		}
		if(isset($this->post['sexo'])){
			$usuario->setSexo($this->post['sexo']);
		}
		
		$usuarioDao = new UsuarioDAO ();
		if ($usuarioDao->inserir ( $usuario )) {
			echo "Sucesso";
		} else {
			echo "Fracasso";
		}
	}
	public function logar() {
		if(!(isset($this->post['login']) && isset($this->post['senha']))){
			echo "Incompleto";
			return;
		}
		$usuarioDao = new UsuarioDAO();
		$usuario = new Usuario();
		$usuario->setLogin($this->post['login']);
		$usuario->setSenha($this->post['senha']);

		if($usuarioDao->autenticar($usuario)){
			$vUsuario[] = array (
					'id_usuario' => $usuario->getId (),
					'nome' => $usuario->getNome (),
					'login' => $usuario->getLogin (),
					'senha' => $usuario->getSenha (),
					'id_facebook' => $usuario->getIdFacebook (),
					'sexo' => $usuario->getSexo(), 
					'regra' => $usuario->getStrRegra() 
					
			);
			echo json_encode ($vUsuario);
			return;
		}
		echo 'Errou!';
		
		
	}
	public function excluirUsuario() {
		if (!isset ( $this->post ['id_usuario'] ))
		{
			echo "Incompleto";
			return;
		}
		$usuario = new Usuario();
		$usuario->setId($this->post['id_usuario']);
		$usuarioDao = new UsuarioDAO ();
		if($usuarioDao->excluir($usuario)){
			echo "sucesso!";
		}
		else{
			echo 'Erro!';
		}
		
	}
	public function tornarAdmin() {
		if (!isset ( $this->post ['id_usuario'] ))
		{
			echo "Incompleto";
			return;
		}
		$usuario = new Usuario();
		$usuario->setId($this->post['id_usuario']);
		$usuario->setRegra(Usuario::USUARIO_ADM);
		$usuarioDao = new UsuarioDAO ();
		if($usuarioDao->alterarRegra($usuario)){
			echo "sucesso!";
		}
		else{
			echo 'Erro!';
		}
	
	}
	
	
	public function listar() {
		$usuarioDao = new UsuarioDAO ();
		$lista = $usuarioDao->retornaLista ();
		$listaUsuarios ['usuarios'] = array ();
		foreach ( $lista as $linha ) {
			$usuarios ['usuarios'] [] = array (
					'id_usuario' => $linha->getId (),
					'nome' => $linha->getNome (),
					'login' => $linha->getLogin (),
					'senha' => $linha->getSenha (),
					'id_facebook' => $linha->getIdFacebook (),
					'sexo' => $linha->getSexo(),
					'regra' => $linha->getStrRegra()
					
					
			);
		}
		echo json_encode ( $usuarios );
	}
	public static function consultarUsuario(){
		if(!isset($this->post['id_usuario']))
		{
			echo "Incompleto";
			return;
		}		
		$dao = new UsuarioDAO();
		$usuario = new Usuario();
		$usuario->setId($this->post['id_usuario']);
		if(!$dao->constultarPorId($usuario)){
			echo 'N&atilde;o encontrado.';
			return;
			
		}
		$vUsuario[] = array (
				'id_usuario' => $usuario->getId (),
				'nome' => $usuario->getNome (),
				'login' => $usuario->getLogin (),
				'senha' => $usuario->getSenha (),
				'id_facebook' => $usuario->getIdFacebook (),
				'sexo' => $usuario->getSexo()
		);
		echo json_encode ($vUsuario);
	}
	
	public static function consultarPorIdFace(){
		if(!isset($this->post['id_face']))
		{
			echo "Incompleto";
			return;
		}
		$dao = new UsuarioDAO();
		$usuario = new Usuario();
		$usuario->setIdFacebook($this->post['id_face']);
		if(!$dao->constultarPorIdFace($usuario)){
// 			echo 'N&atilde;o encontrado.';
			return;
				
		}
		
		$vUsuario[] = array (
				'id_usuario' => $usuario->getId (),
				'nome' => $usuario->getNome (),
				'login' => $usuario->getLogin (),
				'senha' => $usuario->getSenha (),
				'id_facebook' => $usuario->getIdFacebook (),
				'sexo' => $usuario->getSexo()
		);
		echo json_encode ($vUsuario);
	}
}

?>