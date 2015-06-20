// Public variable that contains the speed of the enemy
public var speedY : float = -3;
public var speedX : float = 0;


// Function called when the enemy is created
function Update () {
    // Add a vertical speed to the enemy
    GetComponent.<Rigidbody2D>().velocity.y = speedY;
    GetComponent.<Rigidbody2D>().velocity.x = speedX;
}
