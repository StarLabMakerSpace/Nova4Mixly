 /*
Nova_TiltSwitch

Serial port will print "Hello",When the Tilt Switch Trigger.

Created 15 Dec 2015
By Blue

https://github.com/StarLabMakerSpace/Nova/wiki
*/

#include <Nova.h>

TiltSwitch tilt = TiltSwitch(S0); // A0、A1、A2、A3、S0、S1、S2、S3 

void setup() {
 Serial.begin(9600);
}

void loop() {
  
  if(tilt.state() == true)
  {
    Serial.println("Hello");
  }
}
