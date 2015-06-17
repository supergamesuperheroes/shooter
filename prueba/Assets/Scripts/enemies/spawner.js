// Variable to store the enemy prefab
public var seekerEnemy : GameObject;
public var horseEnemy : GameObject;
public var roboto : GameObject;

// Variable to know how fast we should create new enemies
public var spawnTime : float = 2;
public var selectEnemy : float;

var timeSpawn : float = 120;
var timer : float = 0;

function Start () {
    InvokeRepeating("timeUpgrade", 1, 1);
}

// New function to spawn an enemy
function Update() {  
    // Variables to store the X position of the spawn object
    // See image below
    timer++;
    if (timer > timeSpawn) {

        var x1 = -9.5;
        var x2 = 0;

        // Randomly pick a point within the spawn object
        var spawnPoint = new Vector2(Random.Range(x1, x2), transform.position.y);

        // Create an enemy at the 'spawnPoint' position
        selectEnemy = Random.Range(-1,2);
        var clone;

        if (selectEnemy > 0) {
            clone = Instantiate(roboto, spawnPoint, Quaternion.identity);
        } else if (selectEnemy > -1) {
            clone = Instantiate(horseEnemy, spawnPoint, Quaternion.identity);
            clone.GetComponent(spawnCoins).numberOfCoins = Mathf.Floor(Random.Range(1, 8));
            clone.GetComponent(lshooter).timeChange = Random.Range(1, 2.1);
            clone.GetComponent(lshooter).direction = Random.Range(1, 3);
        } else {
            clone = Instantiate(seekerEnemy, spawnPoint, Quaternion.identity);
            clone.GetComponent(spawnCoins).numberOfCoins = Mathf.Floor(Random.Range(1, 5));
        };
        timer = 0;
    };

}

function timeUpgrade () {
  if (timeSpawn > .4) {
    timeSpawn = timeSpawn - 1;
  } 
  if (timeSpawn < .4) {
    timeSpawn = .2;
  } 
}