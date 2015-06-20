var health : int;
private var damageColor : float;
private var colorShip : float = 1;
private var flagFlash : boolean = true;

function Start() {
    if (health > 1) {
        damageColor = 1f / (health - 1f);
    };
    InvokeRepeating("flashColor", .1, .1);
};

function OnBecameInvisible() {  
  // Destroy the bullet 
  Destroy(gameObject);
}

function OnTriggerEnter2D(obj : Collider2D) {  
    var tag = obj.gameObject.tag;
    
    // If it collided with a bullet
    if (tag == "bullet") {
        health--;
        colorShip = damageColor * (health - 1);
        if (health < 1) {
            // Destroy itself (the enemy)
            Destroy(gameObject);
        };
        Destroy(obj.gameObject);
        // And destroy the bullet
        

    }
    if (tag == "spawner") {
    	Destroy(gameObject);
    };
}

function flashColor() {
	flagFlash = !flagFlash;
	gameObject.GetComponent("SpriteRenderer").color = flagFlash ? new Color(1, colorShip, colorShip, 1) : new Color(1, 1, 1, 1);
}