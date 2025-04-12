import { codeToHtml } from 'shiki';

const cCode = `
#include <Servo.h>

// Create servo objects
Servo servos[6];
int servoPins[6] = {3,5,6,9,10,11};

//constants
const char START_CHAR = 'S';

//declare funcation
void initializeServos();
void parseMessage();

void setup(){
  //init
  Serial.begin(9600);
  Serial.println("Initializing servos");
  initializeServos();
}

void loop(){
    run();
}

// FUNCTIONS //
void initializeServos() {   
  // Attaching servos
  for (int i = 0; i < 6; i++) {
    servos[i].attach(servoPins[i]);
    //checking the status
    if (servos[i].attached()) {
      sprintf(buf, "Servo variable %d is set to pin %d.", i, servoPins[i]);
      Serial.println(buf);
    }
    else {
      sprintf(buf, "Servo variables are not set to %d.", servoPins[i]);
      Serial.println(buf);
    }
  }
}

void run() {
  if (Serial.available() >= 2) {
    int servoNum = Serial.read(); // Read servo number
    int position = Serial.read(); // Read position
    // Ensure valid servo number and pos
    if (servoNum >= 0 && servoNum < 6 && position >= 0 && position <= 180) {
      Serial.print("Servo: ");
      Serial.print(servoNum);
      Serial.print(" Position: ");
      Serial.println(position);
      servos[servoNum].write(position);
    } else {
      Serial.println("Invalid data received");
    }
  }
}

// END //
`;

const html = await codeToHtml(cCode, {
    lang: 'c',              // Use 'c' for C highlighting (even if this code is Arduino-flavored)
    theme: 'vitesse-dark'   // Or choose any other supported theme
});

console.log(html);
