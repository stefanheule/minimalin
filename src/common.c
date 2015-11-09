#include "common.h"

static Time s_current_time;
static bool s_current_time_set = false;
static GFont s_font;

void update_current_time() {
  const time_t temp = time(NULL); 
  const struct tm *tick_time = localtime(&temp);
  int hour = tick_time->tm_hour;
  if(hour > 12){
    hour -= 12;
  }else if(hour == 0){
    hour = 12;
  }
  s_current_time.hour   = hour;
  s_current_time.minute = tick_time->tm_min;
  s_current_time.day    = tick_time->tm_mday;
}

Time get_current_time(Time * current_time){
  if(!s_current_time_set){
    update_current_time();
    s_current_time_set = true;
  }
  return s_current_time;
}

GPoint gpoint_on_circle(const GPoint center, const int angle, const int radius){
  const int diameter = radius * 2;
  const GRect grect_for_polar = GRect(center.x - radius, center.y - radius, diameter, diameter);
  return gpoint_from_polar(grect_for_polar, GOvalScaleModeFitCircle, angle);
}

void init_font(){
  s_font = fonts_load_custom_font(resource_get_handle(RESOURCE_ID_FONT_NUPE_23));
}

void deinit_font(){
  fonts_unload_custom_font(s_font);
}

GFont get_font(){
  return s_font;
}