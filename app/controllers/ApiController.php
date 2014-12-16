<?php

class ApiController extends BaseController {


	public function getProductos($valor) {
		
		$productos = Productos::where('nombre','LIKE',"%".$valor."%")
	        ->orderBy('nombre','asc')
	        ->get();
	    
	    return Response::json( $productos, 200, array('content-type' => 'application/json', 'Access-Control-Allow-Origin' => '*'));

	}


}