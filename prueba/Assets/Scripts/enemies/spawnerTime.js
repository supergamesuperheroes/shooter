// Variable to store the enemy prefab
public var seekerEnemyGameObject : GameObject;
public var horseEnemy : GameObject;
public var roboto : GameObject;
public var buildingBlock2 : GameObject;

private var clone: GameObject;
private var spawnPoint;
var yDefault;
function Start() {
  // body...
  yDefault = transform.position.y;
}

Invoke("frameEnemy1", 1);
Invoke("frameEnemy2", 4);
Invoke("frameEnemy3", 14);

function frameEnemy1 () {
  spawnEnemy(0, -4, yDefault / 2, 0, -3);
}

function frameEnemy2 () {
  spawnEnemy(3, -1.29, 7.34, 0, 0);
  spawnEnemy(0, -11.5, 7.6, 2.5, -2.4);
  spawnEnemy(0, -12.5, 8.6, 2.5, -2.4);
  spawnEnemy(0, -13.5, 9.6, 2.5, -2.4);
}

function frameEnemy3 () {
  spawnEnemy(0, 1.5, 7.6, -2.5, -2.4);
  spawnEnemy(0, 2.5, 9.6, -2.5, -2.4);
  spawnEnemy(0, 3.5, 11.6, -2.5, -2.4);
  spawnEnemy(0, -11.5, 8.6, 2.5, -2.4);
  spawnEnemy(0, -12.5, 10.6, 2.5, -2.4);
  spawnEnemy(0, -13.5, 12.6, 2.5, -2.4);
  spawnEnemy(0, -4, 14.6, .2, -2.4);
  spawnEnemy(0, -5, 14.6, 0, -2.4);
  spawnEnemy(0, -6, 14.6, -.2, -2.4);
}

//0 seeker

function spawnEnemy(selectEnemy, xSpawnPosition, ySpawnPosition, velX, velY) {
    // Variables to store the X position of the spawn object
    // See image below

        // Randomly pick a point within the spawn object
        var spawnPoint = new Vector2(xSpawnPosition, ySpawnPosition);

        // Create an enemy at the 'spawnPoint' position
        var clone;

        if (selectEnemy == 3) {
            clone = Instantiate(buildingBlock2, spawnPoint, Quaternion.identity);
        } else if (selectEnemy == 2) {
            clone = Instantiate(roboto, spawnPoint, Quaternion.identity);
        } else if (selectEnemy == 1) {
            clone = Instantiate(horseEnemy, spawnPoint, Quaternion.identity);
            clone.GetComponent(spawnCoins).numberOfCoins = Mathf.Floor(Random.Range(1, 8));
            clone.GetComponent(lshooter).timeChange = Random.Range(1, 2.1);
            clone.GetComponent(lshooter).direction = Random.Range(1, 3);
        } else if (selectEnemy == 0){
            clone = Instantiate(seekerEnemyGameObject, spawnPoint, Quaternion.identity);
            clone.GetComponent(seekerEnemy).speedX = velX;
            clone.GetComponent(seekerEnemy).speedY = velY;
        };

}
