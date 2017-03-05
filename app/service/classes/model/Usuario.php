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
	}
	
	public function setSexo($sexo){
		$this->sexo = $sexo;
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
	public function getPapel(){
		return $this->regra;
	}
	public function getStrRegra(){
		switch ($this->regra){
			case self::REGRA_VIP:
				return "VIP";
				break;
			case self::REGRA_ADM:
				return "ADM";
				break;
			default:
				return "PADRAO";
				break;
		}
		
	}
	const REGRA_PADRAO = 1;
	const REGRA_ADM = 2;
	const REGRA_VIP = 3;
	
}


?>