<?php


class Comentario
{
	
	private $id;
	private $texto;
	private $autor;
	private $mapa;
	private $data;
	
	
	public function Comentario(){
		$this->autor = new Usuario();
		$this->mapa = new Mapa();
	}
	public function setId($id){
		$this->id = $id;
	}
	
	public function getId(){
		return $this->id;
	}
	public function setTexto($texto){
		$this->texto = $texto;
	}
	public function getTexto(){
		return $this->texto;
	}
	public function setAutor(Usuario $autor){
		$this->autor = $autor;
	}
	public function setMapa(Mapa $mapa){
		$this->mapa = $mapa;
	}
	public function getMapa(){
		return $this->mapa;
	}
	public function setData($data){
		$this->data = $data;
	}
	public function getData(){
		return $this->data;
	}
}


?>