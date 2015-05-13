
var statusX :int = 5;
var statusY :int = 5;
var maxSpeed :float = 10;
var speed :float = 10;

var rightWingAnimator : Animator;
var leftWingAnimator : Animator;
var centerAnimator : Animator;

public var bullet : GameObject;

private var vertExtent : float;
private var horzExtent : float;
private var rend: Renderer;
private var width :float;
private var height :float;

private var pastStatusX :int = 5;
private var pastStatusY :int = 5;

function Start () {
  vertExtent = Camera.main.GetComponent.<Camera>().orthographicSize;    
  horzExtent = vertExtent * Screen.width / Screen.height;
  rend = GetComponent.<Renderer>(); 
  width = (GetComponent.<Renderer>().bounds.size.x) / 2;
  height = (GetComponent.<Renderer>().bounds.size.y) / 2;
}

// This function gets called ~60 times per second
function Update() {  
	// GetAxis() returns a value between 1 and -1
  // Depending on which arrow key is pressed
  // So we change the spaceship X velocity
  // By GetAxis("Horizontal") * 10
  GetComponent.<Rigidbody2D>().velocity.x = Input.GetAxis("Horizontal") * speed;
  GetComponent.<Rigidbody2D>().velocity.y = Input.GetAxis("Vertical") * speed;

  pastStatusX = statusX;
  statusX = 5;
  pastStatusY = statusY;
  statusY = 5;

  var position = new Vector3(0,0,0);
  var adjustShootX = -0.01;

  position = this.transform.position;
  if (position.x < (width - horzExtent)) {
      position.x = width - horzExtent;
  }
  if (position.x > (horzExtent - width)) {
      position.x = horzExtent - width;
  }
  
  if (position.y > (vertExtent - height)) {
    position.y = vertExtent - height;
  }
  if (position.y < (height - vertExtent)) {
    position.y = height - vertExtent;
  }

  this.transform.position = position;

  if (Input.GetKey(KeyCode.LeftArrow)) {
    statusX = 4;
    adjustShootX = -0.04;
  } else if (Input.GetKey(KeyCode.RightArrow)) {
    statusX = 6;
    adjustShootX = 0.04;
  };

  if (Input.GetKey(KeyCode.UpArrow)) {
    statusY = 2;
  } else if (Input.GetKey(KeyCode.DownArrow)) {
    statusY = 8;
  };

  position.y = position.y + .1;
  position.x = position.x + adjustShootX;

  if (Input.GetKeyDown("space")) {
    // Create a new bullet at “transform.position”
    // Which is the current position of the ship
    Instantiate(bullet, position, Quaternion.identity);
  }

  speed = speed + .5;
  speed = speed > maxSpeed ? maxSpeed : speed;

  if (statusX == 5 && statusY == 5) {
    speed = 0;
  };

  leftWingAnimator.SetInteger ("horizontal", statusX);
  rightWingAnimator.SetInteger ("horizontal", statusX);
  centerAnimator.SetInteger ("horizontal", statusX);
}