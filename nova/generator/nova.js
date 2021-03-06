'use strict';

goog.provide('Blockly.Arduino.nova');

goog.require('Blockly.Arduino');

// LED
Blockly.Arduino.Nova_Led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_led'+dropdown_pin] = 'LED  led_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'led_'+dropdown_pin+'.'+dropdown_stat+';\n'
  return code;
};

// Led_PWM
Blockly.Arduino.Nova_Led_PWM = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
 // var code = ' analogWrite('+dropdown_pin+','+value_num+');\n';
  var code = ' analogWrite('+dropdown_pin+',map('+value_num+', 0, 100, 255, 0));\n';

  return code;
};

// Button
Blockly.Arduino.Nova_Button = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_button'+dropdown_pin] = 'Button  Button_'+dropdown_pin+''+'('+dropdown_pin+');';
  var STAT = this.getTitleValue('STAT');
  var code = +STAT+'== Button_'+dropdown_pin+'.state()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 4按钮
Blockly.Arduino.Nova_4Button = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('ABCD');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_buttona'+dropdown_pin] = 'FourButton  FourButton_'+dropdown_pin+''+'('+dropdown_pin+');';
  var STAT = this.getTitleValue('STAT');
  var code = +STAT+' == FourButton_'+dropdown_pin+'.'+dropdown_stat+'';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 倾斜开关
Blockly.Arduino.Nova_TiltSwitch = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_tiltswitch'+dropdown_pin] = 'TiltSwitch  TiltSwitch_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'TiltSwitch_'+dropdown_pin+'.state()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 声音
Blockly.Arduino.Nova_Sound = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_Sound'+dropdown_pin] = 'Sound  Sound_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'Sound_'+dropdown_pin+'.state()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 限位
Blockly.Arduino.Nova_LimitSwitch = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_LimitSwitch'+dropdown_pin] = 'LimitSwitch  LimitSwitch_'+dropdown_pin+''+'('+dropdown_pin+');';
  var STAT = this.getTitleValue('STAT');
  var code = +STAT+' == LimitSwitch_'+dropdown_pin+'.state()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 光敏
Blockly.Arduino.Nova_Light = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_Light'+dropdown_pin] = 'Light Light_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'Light_'+dropdown_pin+'.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 蜂鸣
Blockly.Arduino.Nova_Buzzer = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var dur = Blockly.Arduino.valueToCode(this, 'DURATION',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_buzzer'+dropdown_pin] = 'Buzzer  Buzzer_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'Buzzer_'+dropdown_pin+'.tone('+fre+','+dur+');\n'
  return code;
};

// 超声波
Blockly.Arduino.Nova_Ultrasonic = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_Ultrasonic'+dropdown_pin] = 'Ultrasonic Ultrasonic_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'Ultrasonic_'+dropdown_pin+'.distance()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 温湿度
Blockly.Arduino.Nova_DHTxx = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('dht');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_dht'+dropdown_pin] = 'DHT DHT_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'DHT_'+dropdown_pin+'.'+dropdown_stat+'';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 寻线
Blockly.Arduino.Nova_2LineFinder = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('linefinder');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_linefinder'+dropdown_pin] = 'LineFinder LineFinder_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'LineFinder_'+dropdown_pin+'.'+dropdown_stat+'';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Nova_2LineFinder_readLineState = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('linefinder');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_linefinder_readLineState'+dropdown_pin] = 'LineFinder LineFinder_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'LineFinder_'+dropdown_pin+'.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 数码管
Blockly.Arduino.Nova_4DigitDisplay = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var num = Blockly.Arduino.valueToCode(this, 'num',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_4DigitPlay'+dropdown_pin] = 'DigitDisplay  DigitDisplay_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'DigitDisplay_'+dropdown_pin+'.displayFloat('+num+');\n'
  return code;
};

Blockly.Arduino.Nova_4DigitDisplay_Time = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var hour = Blockly.Arduino.valueToCode(this, 'hour',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var min = Blockly.Arduino.valueToCode(this, 'min',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_4DigitPlay_Time'+dropdown_pin] = 'DigitDisplay  DigitDisplay_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'DigitDisplay_'+dropdown_pin+'.displayTime('+hour+','+min+');\n'
  return code;
};

Blockly.Arduino.Nova_4DigitDisplay_abcdef = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var abcdef = Blockly.Arduino.valueToCode(this, 'abcdef',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var bit = Blockly.Arduino.valueToCode(this, 'bit',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_4DigitPlay_Time'+dropdown_pin] = 'DigitDisplay  DigitDisplay_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'DigitDisplay_'+dropdown_pin+'.displayABCDEF('+abcdef+','+bit+');\n'
  return code;
};

// 时钟
Blockly.Arduino.Nova_RTC = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('RTC');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_RTC'+dropdown_pin] = 'RTC RTC_'+dropdown_pin+''+'('+dropdown_pin+');';
 // var code = 'RTC_'+dropdown_pin+'.getTime();\nRTC_'+dropdown_pin+'.'+dropdown_stat+'';
 var code = 'RTC_'+dropdown_pin+'.'+dropdown_stat+'';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Nova_RTC_SetHMS = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var Hour = Blockly.Arduino.valueToCode(this, 'Hour',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var Min = Blockly.Arduino.valueToCode(this, 'Min',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var Sec = Blockly.Arduino.valueToCode(this, 'Sec',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_RTC'+dropdown_pin] = 'RTC RTC_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'RTC_'+dropdown_pin+'.fillByHMS('+Hour+','+Min+','+Sec+');\n';
  return code;
};

Blockly.Arduino.Nova_RTC_SetYMD = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var Year = Blockly.Arduino.valueToCode(this, 'Year',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var Month = Blockly.Arduino.valueToCode(this, 'Month',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var Day = Blockly.Arduino.valueToCode(this, 'Day',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_RTC'+dropdown_pin] = 'RTC RTC_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'RTC_'+dropdown_pin+'.fillByYMD('+Year+','+Month+','+Day+');\n';
  return code;
};

Blockly.Arduino.Nova_RTC_SetWeek = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var Week = Blockly.Arduino.valueToCode(this, 'Week',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_RTC'+dropdown_pin] = 'RTC RTC_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'RTC_'+dropdown_pin+'.fillByWeek('+Week+');\n';
  return code;
};

// 红外
Blockly.Arduino.Nova_IrRev_Available = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['var_IRSendRev'+dropdown_pin] = 'IRSendRev IRSendRev_'+dropdown_pin+';';
  var code = 'IRSendRev_'+dropdown_pin+'.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Nova_IrRev = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_IRSendRev'+dropdown_pin] = 'IRSendRev IRSendRev_'+dropdown_pin+';';
  Blockly.Arduino.setups_['setup_IRSendRev_'+dropdown_pin] = 'IRSendRev_'+dropdown_pin+'.begin('+dropdown_pin+');\n';
  var code = 'IRSendRev_'+dropdown_pin+'.recv()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 蓝牙
// Blockly.Arduino.Nova_Bluetooth_available = function() {
//   var dropdown_pin = this.getTitleValue('PIN');
//   Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
//   Blockly.Arduino.definitions_['var_nova_bluetooth'] = 'BlueTooth  Bluetooth_'+dropdown_pin+';';
//   var code = 'Bluetooth_'+dropdown_pin+'.available()';
//   return [code, Blockly.Arduino.ORDER_ATOMIC];
// };

// Blockly.Arduino.Nova_Bluetooth_readString = function() {
//   var dropdown_pin = this.getTitleValue('PIN');
//   Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
//   Blockly.Arduino.definitions_['var_nova_bluetooth'] = 'BlueTooth  Bluetooth_'+dropdown_pin+';';
//   var code = 'Bluetooth_'+dropdown_pin+'.readString()';
//   return [code, Blockly.Arduino.ORDER_ATOMIC];
// };

Blockly.Arduino.Nova_Bluetooth_readAppKey = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_bluetooth'] = 'BlueTooth  Bluetooth_'+dropdown_pin+''+'('+dropdown_pin+');';
  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] = 'Bluetooth_'+dropdown_pin+'.begin(9600);\n';
  var code = 'Bluetooth_'+dropdown_pin+'.readAppKey()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 舵机
Blockly.Arduino.Nova_Servo = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};

// 电机
Blockly.Arduino.Nova_Motor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var speed = Blockly.Arduino.valueToCode(this, 'speed',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['include_nova'] = '#include "Nova.h"';
  Blockly.Arduino.definitions_['var_nova_motor'+dropdown_pin] = 'Motor  M_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'M_'+dropdown_pin+'.run('+speed+');\n'
  return code;
};