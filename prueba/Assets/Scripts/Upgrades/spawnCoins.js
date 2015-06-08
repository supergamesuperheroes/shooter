public var coin : GameObject;
public var xSize : float;
public var ySize : float;
public var numberOfCoins : int;

static var isShuttingDown : boolean;
private var vertExtent : float;

function Start () {
  vertExtent = Camera.main.GetComponent.<Camera>().orthographicSize;    
}

function OnDestroy () {
	print("Script was destroyed");

  if (transform.position.y > -vertExtent && transform.position.x > -9.5 && transform.position.x < 0) {
  	var x1 = transform.position.x - xSize;
	  var x2 = transform.position.x + xSize;
	  var y1 = transform.position.y - ySize;
	  var y2 = transform.position.y + ySize;

	  // Randomly pick a point within the spawn object
	  for (var i = 0; i < numberOfCoins; i++) {

		  var spawnPoint = new Vector2(Random.Range(x1, x2), Random.Range(y1, y2));

		  SafeInstantiate(coin, spawnPoint, Quaternion.identity);

	  };
  };
	
}


static function SafeInstantiate (original : Object, position : Vector3, rotation : Quaternion) : Object { 
	if (isShuttingDown) return null; 
	else return Instantiate(original, position, rotation); 
}

function OnApplicationQuit() { isShuttingDown = true; }