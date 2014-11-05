#pragma strict
var lastX:float;
var isMoving:boolean = false;
var catchAudio:AudioClip;


function Start () {
	animation.Stop();	
}

function Update () {
	var halfW:float = Screen.width / 2;
	transform.position.x = (Input.mousePosition.x)/20;	
	
	if(lastX != transform.position.x){
		//if(!isMoving){
		//Debug.Log('moving');
			isMoving = true;
			if(!animation.IsPlaying("catch")){			
				 animation.CrossFade("step");	
				Debug.Log("step");						
			}						
		//}
	}
	else{
		//if(isMoving){
		//Debug.Log('stop');
			isMoving = false;
			if(!animation.IsPlaying("catch")){			
				Debug.Log("idle");
				animation.CrossFade("idle");
			}					
				
		//}		
	}		
	lastX = transform.position.x;			
}

function OnCollisionEnter(col : Collision) {
	if(col.gameObject.CompareTag("bomb")){		
		
	} else if(col.gameObject.CompareTag("stein")){		
		audio.PlayOneShot(catchAudio);
		Debug.Log('catch');
		animation.Play("catch");
	}
	
	col.gameObject.transform.position.y = 50;
	col.gameObject.transform.position.z = -16;
	col.gameObject.transform.position.x = Random.Range(0,60);
	
}