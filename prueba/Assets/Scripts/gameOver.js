public var gameOver : GameObject;
var score :int;

function Awake () {
	DontDestroyOnLoad(gameObject);
};

function Start () {
	yield WaitForSeconds(2);
	yield WaitForSeconds(3);
	Application.LoadLevel(2);
}
