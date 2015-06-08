// Public variable that contains the speed of the enemy
public var speed : int = -5;


// Function called when the enemy is created
function Start () {  
    // Add a vertical speed to the enemy
    GetComponent.<Rigidbody2D>().velocity.y = speed;
}