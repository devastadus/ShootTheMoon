#pragma strict

function Start () {

}

function Update () {

}

function LateUpdate() {
	if(!particleSystem.IsAlive()){		
		Destroy(this.gameObject);
	}
}