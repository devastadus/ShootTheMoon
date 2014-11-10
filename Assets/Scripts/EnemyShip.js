#pragma strict

var prefab:GameObject;
var speed:int;
var audioClips:AudioClip[];



function Update () {
	transform.position.y -= speed * Time.deltaTime;	
	transform.Rotate(0,0,Time.deltaTime * -500);
	if(transform.position.y < -4){
	//	audio.PlayOneShot(audioClips[Random.Range(0,audioClips.length)]);
	//	Instantiate(prefab, transform.position,Quaternion.identity);
		ResetPosition();
		}	
}

function ResetPosition(){
	transform.position.y = 71;
	transform.position.x = Random.Range(-11,68);
	transform.position.z = 0;
	rigidbody.velocity = Vector3.zero;
}