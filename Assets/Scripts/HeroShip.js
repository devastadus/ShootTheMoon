#pragma strict
var lastX:float;
var isMoving:boolean = false;
var catchAudio:AudioClip;
var explosionSound:AudioClip;
var explosionParticle:GameObject;
var bullet:GameObject;


function Update () {	
	transform.position.x = (Input.mousePosition.x)/20;	
	if(Input.GetMouseButtonDown(0)){
		Instantiate(bullet, transform.position+new Vector3(-3,2,0),Quaternion.identity);
		Instantiate(bullet, transform.position+new Vector3(3,2,0),Quaternion.identity);
	}
}

function OnCollisionEnter(col : Collision) {
	if(col.gameObject.CompareTag("bomb")){		
		audio.PlayOneShot(explosionSound);
		Instantiate(explosionParticle,col.gameObject.transform.position,Quaternion.identity);				
	} 	
	if(col.gameObject.GetComponent(EnemyShip)){
		col.gameObject.GetComponent(EnemyShip).ResetPosition();		
	}
}

