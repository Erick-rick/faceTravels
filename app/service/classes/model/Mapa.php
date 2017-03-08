<?php


class Mapa{
	
	private $id;
	private $dono;
	private $titulo;
	private $marcadores;
	
	public function Mapa(){
		$this->dono = new Usuario();
	}
	public function setId($id){
		$this->id = $id;
		
	}
	public function getId(){
		return $this->id;
	}
	public function setDono(Usuario $dono){
		$this->dono = $dono;
	}
	public function getDono(){
		return $this->dono;
	}
	public function setTitulo($titulo){
		$this->titulo = $titulo;
	}
	
	public function getTitulo(){
		return $this->titulo;
	}
	
	public function addMarcador(Marcador $marcador){
		$this->marcadores[] = $marcador;
	}
	public function setMarcadores($marcadores){
		$this->marcadores = $marcadores;
	}
	public function getMaracaoders(){
		return $this->marcadores;
	}
	
	
}

?>