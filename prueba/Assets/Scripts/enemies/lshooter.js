// Public variable that contains the speed of the enemy
public var speedY : int = -5;
public var direction : int = 1;
public var speedX : int = -2;
public var timeChange : float = 2;
public var moveShipAnimator : Animator;


// Function called when the enemy is created
function Start () {  
    // Add a vertical speed to the enemy
    GetComponent.<Rigidbody2D>().velocity.y = speedY;
    yield WaitForSeconds(timeChange);
    GetComponent.<Rigidbody2D>().velocity.y = 0;
    if (direction == 1) {
    	GetComponent.<Rigidbody2D>().velocity.x = speedX;
    	moveShipAnimator.SetInteger("shipDirection", 1);
    } else {
    	GetComponent.<Rigidbody2D>().velocity.x = speedX * -1; 
    	moveShipAnimator.SetInteger("shipDirection", 2);
    };
}