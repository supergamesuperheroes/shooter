
public var health :int;
public var coinsGrabbed :int;
public var death : GameObject;
var damageRightWingAnimator : Animator;
var damageLeftWingAnimator : Animator;
var damageCenterAnimator : Animator;

function Start () {
	health = 4;
}

function Update () {

}

function OnTriggerEnter2D(obj : Collider2D) {  
    var type = obj.gameObject.tag;
    var position = this.transform.position;
    Debug.Log(coinsGrabbed);
    if (type == "damage") {
    	health--;
    	Destroy(obj.gameObject);

    	switch (health) {
		    case 3:
	        damageLeftWingAnimator.SetBool ("onOff", false);
		    	damageCenterAnimator.SetBool ("onOff", false);
		    	damageRightWingAnimator.SetBool ("onOff", true);
	        break;
		    case 2:
	        damageLeftWingAnimator.SetBool ("onOff", true);
		    	damageCenterAnimator.SetBool ("onOff", false);
		    	damageRightWingAnimator.SetBool ("onOff", true);
	        break;
		    case 1:
	        damageLeftWingAnimator.SetBool ("onOff", true);
		    	damageCenterAnimator.SetBool ("onOff", true);
		    	damageRightWingAnimator.SetBool ("onOff", true);
	        break;
		    case 0:
		    	Instantiate(death, position, Quaternion.identity);
		    	Destroy(gameObject);
	        break;
		    default:
		    	damageLeftWingAnimator.SetBool ("onOff", false);
		    	damageCenterAnimator.SetBool ("onOff", false);
		    	damageRightWingAnimator.SetBool ("onOff", false);
	        
	        break;
    	}
    };

}