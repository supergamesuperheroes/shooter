#pragma strict

var speedMax : float;

var rightWingAnimator : Animator;
var leftWingAnimator : Animator;
var centerAnimator : Animator;
//var backAnimator : Animator;
var statusX :int = 5;
var statusY :int = 5;
var speed : float;
var speedMin : float = 0;
private var pastStatusX :int = 5;
private var	pastStatusY :int = 5;
private var directionX :int = 1;
private var directionY :int = 1;
private var vertExtent : float;
private var horzExtent : float;
private var rend: Renderer;
private var width :float;
private var height :float;


function Start () {
	speed = speedMin;
	vertExtent = Camera.main.GetComponent.<Camera>().orthographicSize;    
  horzExtent = vertExtent * Screen.width / Screen.height;
  rend = GetComponent.<Renderer>(); 
  width = (GetComponent.<Renderer>().bounds.size.x) * 1.5;
  height = (GetComponent.<Renderer>().bounds.size.y) * 1.2;
}

function Update () {
  var position = new Vector3(0,0,0);
  
  pastStatusX = statusX;
  statusX = 5;
  pastStatusY = statusY;
  statusY = 5;

  if (Input.GetKey(KeyCode.LeftArrow)) {
    statusX = 4;
    directionX = -1;
  } else if (Input.GetKey(KeyCode.RightArrow)) {
    statusX = 6;
    directionX = 1;
  };

  if (Input.GetKey(KeyCode.UpArrow)) {
    statusY = 2;
    directionY = 1;
  } else if (Input.GetKey(KeyCode.DownArrow)) {
    statusY = 8;
    directionY = -1;
  };

  position = this.transform.position;
  if (statusX != 5) {
    position.x = position.x + (directionX * speed);
    if (position.x < (width - horzExtent)) {
      position.x = width - horzExtent;
    }
    if (position.x > (horzExtent - width)) {
      position.x = horzExtent - width;
   }
  };

  if (statusY != 5) {
    position.y = position.y + (directionY * speed);
    if (position.y > (vertExtent - height)) {
      position.y = vertExtent - height;
    }
    if (position.y < (height - vertExtent)) {
      position.y = height - vertExtent;
    }
  }

  this.transform.position = position;

  if ((pastStatusX != statusX) || (pastStatusY != statusY)) {
    speed = speedMin;
  } else {
    speed = speed + .002;
    if (speed > speedMax) {
      speed = speedMax;
    };
  }

  leftWingAnimator.SetInteger ("horizontal", statusX);
  rightWingAnimator.SetInteger ("horizontal", statusX);
  centerAnimator.SetInteger ("horizontal", statusX);
}
