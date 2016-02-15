#include "Nova.h"

Light Light_A0(A0);
LED  led_S0(S0);
void setup()
{

}


void loop()
{
  if (Light_A0.read() >= 100) {
    led_S0.on();

  } else {
    led_S0.off();

  }

}