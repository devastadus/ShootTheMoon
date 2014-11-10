#pragma strict

function Start () {
	rigidbody.velocity.y = 100;

}

function Update () {
	if(transform.position.y >62){
		Destroy(gameObject);
	}

}