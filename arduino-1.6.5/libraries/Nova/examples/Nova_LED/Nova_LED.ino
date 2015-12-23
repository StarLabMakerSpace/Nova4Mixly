
 /*
Nova_Led

Turns on an LED on for one second, then off for one second, repeatedly.

Created 15 Dec 2015
By Blue

http://easy.cc/wiki/index.php/Nova
*/


#include <Nova.h>

LED led = LED(S0);  // A0、A1、A2、A3、S0、S1、S2、S3 

void setup() 
{

}

void loop() 
{
  // turn the LED on
  led.On(); 
  
  // wait for a second
  delay(1000);
  
  // turn the LED off
  led.Off();
  
  // wait for a second
  delay(1000);
}
