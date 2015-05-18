// Public variable that contains the speed of the enemy
public var speed : int = -5;


// Function called when the enemy is created
function Start () {  
    // Add a vertical speed to the enemy
    GetComponent.<Rigidbody2D>().velocity.y = speed;
}

function OnBecameInvisible() {  
  // Destroy the bullet 
  Destroy(gameObject);
}

function OnTriggerEnter2D(obj : Collider2D) {  
    var name = obj.gameObject.name;
    // If it collided with a bullet
    if (name == "bullet1(Clone)") {
        
        
        // Destroy itself (the enemy)
        Destroy(gameObject);

        // And destroy the bullet
        Destroy(obj.gameObject);

    }
}