<?php


class Marcador{
	
	private $id;
	private $nome;
	private $descricao;
	private $latitude;
	private $longitude;
	private $icon;
	private $foto;
	
	
	public function setId($id){
		$this->id = $id;
	}
	public function getId(){
		return $this->id;
	}
	public function setDescricao($descricao){
		$this->descricao = $descricao;
		
	}
	public function getDescricao(){
		return $this->descricao;
	}
	public function setLatitude($latitude){
		$this->latitude = $latitude;
	}
	public function getLatitude(){
		return $this->latitude;
	}
	public function setLongitude($longitude){
		$this->longitude = $longitude;
	}
	public function getLongitude(){
		return $this->longitude;
	}
	public function setIcon($icon){
		$this->icon = $icon;
	}
	public function getIcon(){
		return $this->icon;
	}
	public function setFoto($foto){
		$this->foto = $foto;
	}
	public function getFoto(){
		return $this->foto;
	}
	
}

?>