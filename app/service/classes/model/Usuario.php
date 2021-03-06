<?php


class Usuario{
	

	private $id;
	private $nome;
	private $login;
	private $senha;
	private $idFacebook;
	private $sexo;
	private $regra;
	
	public function Usuario(){
		$this->idFacebook = "";
		$this->sexo = "";
		$this->regra = self::USUARIO_COMUM;
		
	}
	
	public function setSexo($sexo){
		
		$this->sexo = substr($sexo,0,1);
	}
	public function getSexo(){
		return $this->sexo;
	}
	public function setId($id){
		$this->id = $id;
	}
	public function getId(){
		return $this->id;
		
	}
	public function setLogin($login){
		$this->login = $login;
	}
	public function getLogin(){
		return $this->login;
	}
	public function setNome($nome){
		$this->nome = $nome;
	}
	public function getNome(){
		return $this->nome;
	}
	public function setSenha($senha){
		$this->senha = $senha;
		
	}
	public function getSenha(){
		return $this->senha;
	}
	public function setIdFacebook($idFacebook){
		$this->idFacebook = $idFacebook;
	}
	public function getIdFacebook(){
		return $this->idFacebook;
	}
	public function setRegra($regra){
		$this->regra = $regra;
	}
	public function getRegra(){
		return $this->regra;
	}
	public function getStrRegra(){
		switch ($this->regra){
			case self::USUARIO_VIP:
				return "USUARIO_VIP";
				break;
			case self::USUARIO_ADM:
				return "USUARIO_ADM";
				break;
			default:
				return "USUARIO_COMUM";
				break;
		}
		
	}
	const USUARIO_COMUM = 1;
	const USUARIO_ADM= 2;
	const USUARIO_VIP = 3;
	
}


?>