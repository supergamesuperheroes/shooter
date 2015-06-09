// Public variable that contains the speed of the enemy
public var speed : int = -1;
var robotoAnimator : Animator;


// Function called when the enemy is created
function Start () {  
    // Add a vertical speed to the enemy
    GetComponent.<Rigidbody2D>().velocity.y = -1;
    yield WaitForSeconds(1.5);
    if ( GameObject.FindGameObjectWithTag("Player") != null) {
	    var positionPlayer = GameObject.FindGameObjectWithTag("Player").transform.position;
	    var positionRoboto = GetComponent.<Rigidbody2D>().transform.position;
	    GetComponent.<Rigidbody2D>().velocity.x = (positionPlayer.x - positionRoboto.x) / 2;
	    GetComponent.<Rigidbody2D>().velocity.y = (positionPlayer.y - positionRoboto.y) / 2;
	  }
}

function Update () {
	if ( GameObject.FindGameObjectWithTag("Player") != null) {
		var positionXPlayer = GameObject.FindGameObjectWithTag("Player").transform.position.x;
	  var positionXRoboto = GetComponent.<Rigidbody2D>().transform.position.x;
	  Debug.Log(positionXPlayer);
	  Debug.Log(positionXRoboto);
	  if (GetComponent.<Rigidbody2D>().transform.position.y < 4) {
		  if (positionXPlayer < positionXRoboto + .3  && positionXPlayer > positionXRoboto -.3 ) {
		  	robotoAnimator.SetBool("jump", true);
		  	GetComponent.<Rigidbody2D>().velocity.x = 0;
		    GetComponent.<Rigidbody2D>().velocity.y = -3;
		  };
		};
	};
}