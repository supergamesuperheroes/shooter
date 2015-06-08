var health : int;

function OnBecameInvisible() {  
  // Destroy the bullet 
  Destroy(gameObject);
}

function OnTriggerEnter2D(obj : Collider2D) {  
    var name = obj.gameObject.name;
    var tag = obj.gameObject.tag;
    // If it collided with a bullet
    if (name == "bullet1(Clone)") {
        
        health--;
        if (health < 1) {
            // Destroy itself (the enemy)
            Destroy(gameObject);
        };
        

        // And destroy the bullet
        Destroy(obj.gameObject);

    }
    if (tag == "spawner") {
    	Destroy(gameObject);
    };
}