 /*
Nova_Buzzer

Buzzer will play do re mi fa so la si.

Created 15 Dec 2015
By Blue

http://easy.cc/wiki/index.php/Nova
*/

#include <Nova.h>

Buzzer myBuzzer = Buzzer(S0);

int Tune[8]={0,294,330,350,393,441,495,556}; // do re mi fa so la si
  
void setup() {
}

void loop() {

 myBuzzer.Tone(Tune[1],1000);//do, delay 1000ms
 myBuzzer.Tone(Tune[2],1000);//re, delay 1000ms
 myBuzzer.Tone(Tune[3],1000);//mi, delay 1000ms
 myBuzzer.Tone(Tune[4],1000);//fa, delay 1000ms
 myBuzzer.Tone(Tune[5],1000);//so, delay 1000ms
 myBuzzer.Tone(Tune[6],1000);//la, delay 1000ms
 myBuzzer.Tone(Tune[7],1000);//si, delay 1000ms
}
