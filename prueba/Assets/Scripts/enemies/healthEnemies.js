var health : int;
private var damageColor : float;

function Start() {
    if (health > 1) {
        damageColor = 1f / (health - 1f);
    };
};

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
        var colorShip : float = damageColor * (health - 1);
        if (health < 1) {
            // Destroy itself (the enemy)
            Destroy(gameObject);
        };
        gameObject.GetComponent("SpriteRenderer").color = new Color(1, colorShip, colorShip, 1);
        // And destroy the bullet
        Destroy(obj.gameObject);

    }
    if (tag == "spawner") {
    	Destroy(gameObject);
    };
}