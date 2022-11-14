import{d as f,c as y,l as M,i as D}from"./dayjs.f704ecef.js";f.extend(y);f.extend(M);f.extend(D);var g=function(h,o){return o?function(){for(var n=[],u=0;u<arguments.length;u++)n[u]=arguments[u];return h.apply(void 0,n).locale(o)}:h},v={normalDateWithWeekday:"ddd, MMM D",normalDate:"D MMMM",shortDate:"MMM D",monthAndDate:"MMMM D",dayOfMonth:"D",year:"YYYY",month:"MMMM",monthShort:"MMM",monthAndYear:"MMMM YYYY",weekday:"dddd",weekdayShort:"ddd",minutes:"mm",hours12h:"hh",hours24h:"HH",seconds:"ss",fullTime:"LT",fullTime12h:"hh:mm A",fullTime24h:"HH:mm",fullDate:"ll",fullDateWithWeekday:"dddd, LL",fullDateTime:"lll",fullDateTime12h:"ll hh:mm A",fullDateTime24h:"ll HH:mm",keyboardDate:"L",keyboardDateTime:"L LT",keyboardDateTime12h:"L hh:mm A",keyboardDateTime24h:"L HH:mm"},b=function(){function h(o){var n=this,u=o===void 0?{}:o,c=u.locale,l=u.formats,m=u.instance;this.lib="dayjs",this.is12HourCycleInCurrentLocale=function(){var t,e;return/A|a/.test((e=(t=n.rawDayJsInstance.Ls[n.locale||"en"])===null||t===void 0?void 0:t.formats)===null||e===void 0?void 0:e.LT)},this.getCurrentLocaleCode=function(){return n.locale||"en"},this.getFormatHelperText=function(t){var e=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?)|./g;return t.match(e).map(function(r){var a,s,i=r[0];return i==="L"&&(s=(a=n.rawDayJsInstance.Ls[n.locale||"en"])===null||a===void 0?void 0:a.formats[r])!==null&&s!==void 0?s:r}).join("").replace(/a/gi,"(a|p)m").toLocaleLowerCase()},this.parseISO=function(t){return n.dayjs(t)},this.toISO=function(t){return t.toISOString()},this.parse=function(t,e){return t===""?null:n.dayjs(t,e,n.locale,!0)},this.date=function(t){return t===null?null:n.dayjs(t)},this.toJsDate=function(t){return t.toDate()},this.isValid=function(t){return n.dayjs(t).isValid()},this.isNull=function(t){return t===null},this.getDiff=function(t,e,r){return t.diff(e,r)},this.isAfter=function(t,e){return t.isAfter(e)},this.isBefore=function(t,e){return t.isBefore(e)},this.isAfterDay=function(t,e){return t.isAfter(e,"day")},this.isBeforeDay=function(t,e){return t.isBefore(e,"day")},this.isBeforeYear=function(t,e){return t.isBefore(e,"year")},this.isAfterYear=function(t,e){return t.isAfter(e,"year")},this.startOfDay=function(t){return t.startOf("day")},this.endOfDay=function(t){return t.endOf("day")},this.format=function(t,e){return n.formatByString(t,n.formats[e])},this.formatByString=function(t,e){return n.dayjs(t).format(e)},this.formatNumber=function(t){return t},this.getHours=function(t){return t.hour()},this.addSeconds=function(t,e){return e<0?t.subtract(Math.abs(e),"second"):t.add(e,"second")},this.addMinutes=function(t,e){return e<0?t.subtract(Math.abs(e),"minute"):t.add(e,"minute")},this.addHours=function(t,e){return e<0?t.subtract(Math.abs(e),"hour"):t.add(e,"hour")},this.addDays=function(t,e){return e<0?t.subtract(Math.abs(e),"day"):t.add(e,"day")},this.addWeeks=function(t,e){return e<0?t.subtract(Math.abs(e),"week"):t.add(e,"week")},this.addMonths=function(t,e){return e<0?t.subtract(Math.abs(e),"month"):t.add(e,"month")},this.addYears=function(t,e){return e<0?t.subtract(Math.abs(e),"year"):t.add(e,"year")},this.setMonth=function(t,e){return t.set("month",e)},this.setHours=function(t,e){return t.set("hour",e)},this.getMinutes=function(t){return t.minute()},this.setMinutes=function(t,e){return t.set("minute",e)},this.getSeconds=function(t){return t.second()},this.setSeconds=function(t,e){return t.set("second",e)},this.getMonth=function(t){return t.month()},this.getDate=function(t){return t.date()},this.setDate=function(t,e){return t.set("date",e)},this.getDaysInMonth=function(t){return t.daysInMonth()},this.isSameDay=function(t,e){return t.isSame(e,"day")},this.isSameMonth=function(t,e){return t.isSame(e,"month")},this.isSameYear=function(t,e){return t.isSame(e,"year")},this.isSameHour=function(t,e){return t.isSame(e,"hour")},this.getMeridiemText=function(t){return t==="am"?"AM":"PM"},this.startOfYear=function(t){return t.startOf("year")},this.endOfYear=function(t){return t.endOf("year")},this.startOfMonth=function(t){return t.startOf("month")},this.endOfMonth=function(t){return t.endOf("month")},this.startOfWeek=function(t){return t.startOf("week")},this.endOfWeek=function(t){return t.endOf("week")},this.getNextMonth=function(t){return t.add(1,"month")},this.getPreviousMonth=function(t){return t.subtract(1,"month")},this.getMonthArray=function(t){for(var e=t.startOf("year"),r=[e];r.length<12;){var a=r[r.length-1];r.push(n.getNextMonth(a))}return r},this.getYear=function(t){return t.year()},this.setYear=function(t,e){return t.set("year",e)},this.mergeDateAndTime=function(t,e){return t.hour(e.hour()).minute(e.minute()).second(e.second())},this.getWeekdays=function(){var t=n.dayjs().startOf("week");return[0,1,2,3,4,5,6].map(function(e){return n.formatByString(t.add(e,"day"),"dd")})},this.isEqual=function(t,e){return t===null&&e===null?!0:n.dayjs(t).isSame(e)},this.getWeekArray=function(t){for(var e=n.dayjs(t).startOf("month").startOf("week"),r=n.dayjs(t).endOf("month").endOf("week"),a=0,s=e,i=[];s.isBefore(r);){var d=Math.floor(a/7);i[d]=i[d]||[],i[d].push(s),s=s.add(1,"day"),a+=1}return i},this.getYearRange=function(t,e){for(var r=n.dayjs(t).startOf("year"),a=n.dayjs(e).endOf("year"),s=[],i=r;i.isBefore(a);)s.push(i),i=i.add(1,"year");return s},this.isWithinRange=function(t,e){var r=e[0],a=e[1];return t.isBetween(r,a,null,"[]")},this.rawDayJsInstance=m||f,this.dayjs=g(this.rawDayJsInstance,c),this.locale=c,this.formats=Object.assign({},v,l)}return h}();export{b as D};