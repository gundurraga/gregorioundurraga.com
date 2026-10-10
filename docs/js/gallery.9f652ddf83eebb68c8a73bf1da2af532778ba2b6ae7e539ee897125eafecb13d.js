var ch=0,ja=1,lh=2;var Js=1,hh=2,us=3,Nn=0,qe=1,Ne=2,Un=0,ds=1,Qa=2,tc=3,ec=4,uh=5;var Di=100,dh=101,fh=102,ph=103,mh=104,gh=200,_h=201,xh=202,vh=203,nc=204,ic=205,yh=206,Mh=207,Sh=208,bh=209,Eh=210,Ah=211,Th=212,wh=213,Ch=214,Vr=0,Hr=1,kr=2,is=3,Wr=4,Xr=5,qr=6,Yr=7,sc=0,Rh=1,Ih=2,vn=0,rc=1,oc=2,ac=3,cc=4,lc=5,hc=6,uc=7;var dc=300,pi=301,Ni=302,xo=303,vo=304,Ks=306,Ri=1e3,Je=1001,Zr=1002,Ce=1003,Ph=1004;var js=1005;var Ie=1006,yo=1007;var Fn=1008;var nn=1009,fc=1010,pc=1011,fs=1012,Mo=1013,yn=1014,Mn=1015,sn=1016,So=1017,bo=1018,ps=1020,mc=35902,gc=35899,_c=1021,xc=1022,dn=1023,Pn=1026,mi=1027,vc=1028,Eo=1029,gi=1030,Ao=1031;var To=1033,Qs=33776,tr=33777,er=33778,nr=33779,wo=35840,Co=35841,Ro=35842,Io=35843,Po=36196,Lo=37492,Do=37496,No=37488,Uo=37489,ir=37490,Fo=37491,Oo=37808,Bo=37809,zo=37810,Go=37811,Vo=37812,Ho=37813,ko=37814,Wo=37815,Xo=37816,qo=37817,Yo=37818,Zo=37819,$o=37820,Jo=37821,Ko=36492,jo=36494,Qo=36495,ta=36283,ea=36284,sr=36285,na=36286;var Us=2300,$r=2301,zr=2302,Xa=2303,qa=2400,Ya=2401,Za=2402;var Lh=3200;var yc=0,Dh=1,Yn="",Re="srgb",Fs="srgb-linear",Os="linear",Kt="srgb";var Gr=7680;var Nh=519,Uh=512,Fh=513,Oh=514,ia=515,Bh=516,zh=517,sa=518,Gh=519,Vh=35044;var Mc="300 es",xn=2e3,Bs=2001;function gf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _f(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){let i=zs("canvas");return i.style.display="block",i}var Gl={},ss=null;function Sc(...i){let t="THREE."+i.shift();ss?ss("log",t,...i):console.log(t,...i)}function kh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Rt(...i){i=kh(i);let t="THREE."+i.shift();if(ss)ss("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function It(...i){i=kh(i);let t="THREE."+i.shift();if(ss)ss("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ci(...i){let t=i.join(" ");t in Gl||(Gl[t]=!0,Rt(...i))}function Wh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Xh={[Vr]:Hr,[kr]:qr,[Wr]:Yr,[is]:Xr,[Hr]:Vr,[qr]:kr,[Yr]:Wr,[Xr]:is},Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=1234567,Ds=Math.PI/180,rs=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Ht(i,t,e){return Math.max(t,Math.min(e,i))}function bc(i,t){return(i%t+t)%t}function xf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function vf(i,t,e){return i!==t?(e-i)/(t-i):0}function Ns(i,t,e){return(1-e)*i+e*t}function yf(i,t,e,n){return Ns(i,t,1-Math.exp(-e*n))}function Mf(i,t=1){return t-Math.abs(bc(i,t*2)-t)}function Sf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ef(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Af(i,t){return i+Math.random()*(t-i)}function Tf(i){return i*(.5-Math.random())}function wf(i){i!==void 0&&(Vl=i);let t=Vl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cf(i){return i*Ds}function Rf(i){return i*rs}function If(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Pf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Df(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ke={DEG2RAD:Ds,RAD2DEG:rs,generateUUID:ms,clamp:Ht,euclideanModulo:bc,mapLinear:xf,inverseLerp:vf,lerp:Ns,damp:yf,pingpong:Mf,smoothstep:Sf,smootherstep:bf,randInt:Ef,randFloat:Af,randFloatSpread:Tf,seededRandom:wf,degToRad:Cf,radToDeg:Rf,isPowerOfTwo:If,ceilPowerOfTwo:Pf,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:Df,normalize:Xe,denormalize:es},Cc=class Cc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cc.prototype.isVector2=!0;var kt=Cc,Dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let E=Math.acos(m),T=Math.sin(E);p=Math.sin(p*E)/T,a=Math.sin(a*E)/T,c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+x*a}else{c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+x*a;let E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Rc=class Rc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rc.prototype.isVector3=!0;var V=Rc,Aa=new V,Hl=new Dn,Ic=class Ic{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],E=s[1],T=s[4],_=s[7],M=s[2],b=s[5],w=s[8];return r[0]=o*x+a*E+c*M,r[3]=o*m+a*T+c*b,r[6]=o*p+a*_+c*w,r[1]=l*x+h*E+d*M,r[4]=l*m+h*T+d*b,r[7]=l*p+h*_+d*w,r[2]=u*x+f*E+g*M,r[5]=u*m+f*T+g*b,r[8]=u*p+f*_+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ta.makeScale(t,e)),this}rotate(t){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ta.makeRotation(-t)),this}translate(t,e){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ic.prototype.isMatrix3=!0;var Pt=Ic,Ta=new Pt,kl=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nf(){let i={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Kt&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Kt&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?Os:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fs]:{primaries:t,whitePoint:n,transfer:Os,toXYZ:kl,fromXYZ:Wl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:Kt,toXYZ:kl,fromXYZ:Wl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),i}var Vt=Nf();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hi,Jr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hi===void 0&&(Hi=zs("canvas")),Hi.width=t.width,Hi.height=t.height;let s=Hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Uf=0,os=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=ms(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wa(s[o].image)):r.push(wa(s[o]))}else r=wa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var Ff=0,Ca=new V,Pe=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Je,s=Je,r=Ie,o=Fn,a=dn,c=nn,l=i.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=ms(),this.name="",this.source=new os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ca).x}get height(){return this.source.getSize(Ca).y}get depth(){return this.source.getSize(Ca).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case Je:t.x=t.x<0?0:1;break;case Zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case Je:t.y=t.y<0?0:1;break;case Zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=dc;Pe.DEFAULT_ANISOTROPY=1;var Pc=class Pc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,_=(f+1)/2,M=(p+1)/2,b=(h+u)/4,w=(d+x)/4,y=(g+m)/4;return T>_&&T>M?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=w/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=w/r,s=y/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-x)/E,this.z=(u-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pc.prototype.isVector4=!0;var ce=Pc,Kr=class extends Ln{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Pe(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new os(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends Kr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gs=class extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jr=class extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var _o=class _o{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _o().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Of,t,Bf)}lookAt(t,e,n){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ei.crossVectors(n,je),ei.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ei.crossVectors(n,je)),ei.normalize(),yr.crossVectors(je,ei),s[0]=ei.x,s[4]=yr.x,s[8]=je.x,s[1]=ei.y,s[5]=yr.y,s[9]=je.y,s[2]=ei.z,s[6]=yr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],E=n[3],T=n[7],_=n[11],M=n[15],b=s[0],w=s[4],y=s[8],A=s[12],P=s[1],R=s[5],L=s[9],D=s[13],I=s[2],O=s[6],W=s[10],X=s[14],tt=s[3],Y=s[7],K=s[11],et=s[15];return r[0]=o*b+a*P+c*I+l*tt,r[4]=o*w+a*R+c*O+l*Y,r[8]=o*y+a*L+c*W+l*K,r[12]=o*A+a*D+c*X+l*et,r[1]=h*b+d*P+u*I+f*tt,r[5]=h*w+d*R+u*O+f*Y,r[9]=h*y+d*L+u*W+f*K,r[13]=h*A+d*D+u*X+f*et,r[2]=g*b+x*P+m*I+p*tt,r[6]=g*w+x*R+m*O+p*Y,r[10]=g*y+x*L+m*W+p*K,r[14]=g*A+x*D+m*X+p*et,r[3]=E*b+T*P+_*I+M*tt,r[7]=E*w+T*R+_*O+M*Y,r[11]=E*y+T*L+_*W+M*K,r[15]=E*A+T*D+_*X+M*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],E=c*f-l*u,T=a*f-l*d,_=a*u-c*d,M=o*f-l*h,b=o*u-c*h,w=o*d-a*h;return e*(x*E-m*T+p*_)-n*(g*E-m*M+p*b)+s*(g*T-x*M+p*w)-r*(g*_-x*b+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],E=e*a-n*o,T=e*c-s*o,_=e*l-r*o,M=n*c-s*a,b=n*l-r*a,w=s*l-r*c,y=h*x-d*g,A=h*m-u*g,P=h*p-f*g,R=d*m-u*x,L=d*p-f*x,D=u*p-f*m,I=E*D-T*L+_*R+M*P-b*A+w*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return t[0]=(a*D-c*L+l*R)*O,t[1]=(s*L-n*D-r*R)*O,t[2]=(x*w-m*b+p*M)*O,t[3]=(u*b-d*w-f*M)*O,t[4]=(c*P-o*D-l*A)*O,t[5]=(e*D-s*P+r*A)*O,t[6]=(m*_-g*w-p*T)*O,t[7]=(h*w-u*_+f*T)*O,t[8]=(o*L-a*P+l*y)*O,t[9]=(n*P-e*L-r*y)*O,t[10]=(g*b-x*_+p*E)*O,t[11]=(d*_-h*b-f*E)*O,t[12]=(a*A-o*R-c*y)*O,t[13]=(e*R-n*A+s*y)*O,t[14]=(x*T-g*M-m*E)*O,t[15]=(h*M-d*T+u*E)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,x=o*h,m=o*d,p=a*d,E=c*l,T=c*h,_=c*d,M=n.x,b=n.y,w=n.z;return s[0]=(1-(x+p))*M,s[1]=(f+_)*M,s[2]=(g-T)*M,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(u+p))*b,s[6]=(m+E)*b,s[7]=0,s[8]=(g+T)*w,s[9]=(m-E)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ki.set(s[0],s[1],s[2]).length(),a=ki.set(s[4],s[5],s[6]).length(),c=ki.set(s[8],s[9],s[10]).length();r<0&&(o=-o),mn.copy(this);let l=1/o,h=1/a,d=1/c;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,e.setFromRotationMatrix(mn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=xn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===xn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Bs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===xn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Bs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};_o.prototype.isMatrix4=!0;var ie=_o,ki=new V,mn=new ie,Of=new V(0,0,0),Bf=new V(1,1,1),ei=new V,yr=new V,je=new V,Xl=new ie,ql=new Dn,ai=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zf=0,Yl=new V,Wi=new Dn,Gn=new ie,Mr=new V,Rs=new V,Gf=new V,Vf=new Dn,Zl=new V(1,0,0),$l=new V(0,1,0),Jl=new V(0,0,1),Kl={type:"added"},Hf={type:"removed"},Xi={type:"childadded",child:null},Ra={type:"childremoved",child:null},un=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new ai,n=new Dn,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Pt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis($l,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis($l,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Rs,Mr,this.up):Gn.lookAt(Mr,Rs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),Ra.child=t,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new V(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},kf={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Vt.workingColorSpace){if(t=bc(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ia(o,r,t+1/3),this.g=Ia(o,r,t),this.b=Ia(o,r,t-1/3)}return Vt.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Vt.workingToColorSpace(ze.copy(this),t),Math.round(Ht(ze.r*255,0,255))*65536+Math.round(Ht(ze.g*255,0,255))*256+Math.round(Ht(ze.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.workingToColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Vt.workingColorSpace){return Vt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Re){Vt.workingToColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(Sr);let n=Ns(ni.h,Sr.h,e),s=Ns(ni.s,Sr.s,e),r=Ns(ni.l,Sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Ut;Ut.NAMES=qh;var Vs=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},gn=new V,Vn=new V,Pa=new V,Hn=new V,qi=new V,Yi=new V,jl=new V,La=new V,Da=new V,Na=new V,Ua=new ce,Fa=new ce,Oa=new ce,oi=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Vn.subVectors(n,e),Pa.subVectors(t,e);let o=gn.dot(gn),a=gn.dot(Vn),c=gn.dot(Pa),l=Vn.dot(Vn),h=Vn.dot(Pa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ua.setScalar(0),Fa.setScalar(0),Oa.setScalar(0),Ua.fromBufferAttribute(t,e),Fa.fromBufferAttribute(t,n),Oa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ua,r.x),o.addScaledVector(Fa,r.y),o.addScaledVector(Oa,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Vn.subVectors(t,e),gn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),gn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;qi.subVectors(s,n),Yi.subVectors(r,n),La.subVectors(t,n);let c=qi.dot(La),l=Yi.dot(La);if(c<=0&&l<=0)return e.copy(n);Da.subVectors(t,s);let h=qi.dot(Da),d=Yi.dot(Da);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(qi,o);Na.subVectors(t,r);let f=qi.dot(Na),g=Yi.dot(Na);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Yi,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return jl.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(jl,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Er.subVectors(this.max,Is),Zi.subVectors(t.a,Is),$i.subVectors(t.b,Is),Ji.subVectors(t.c,Is),ii.subVectors($i,Zi),si.subVectors(Ji,$i),Ei.subVectors(Zi,Ji);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Ei.z,Ei.y,ii.z,0,-ii.x,si.z,0,-si.x,Ei.z,0,-Ei.x,-ii.y,ii.x,0,-si.y,si.x,0,-Ei.y,Ei.x,0];return!Ba(e,Zi,$i,Ji,Er)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,Zi,$i,Ji,Er))?!1:(Ar.crossVectors(ii,si),e=[Ar.x,Ar.y,Ar.z],Ba(e,Zi,$i,Ji,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},kn=[new V,new V,new V,new V,new V,new V,new V,new V],_n=new V,br=new ci,Zi=new V,$i=new V,Ji=new V,ii=new V,si=new V,Ei=new V,Is=new V,Er=new V,Ar=new V,Ai=new V;function Ba(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ai.fromArray(i,r);let a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=t.dot(Ai),l=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Me=new V,Tr=new kt,Wf=0,hn=class extends Ln{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Hs=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ii=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xf=new ci,Ps=new V,za=new V,ls=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);let e=Ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(za)),this.expandByPoint(Ps.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qf=0,cn=new ie,Ga=new un,Ki=new V,Qe=new ci,Ls=new ci,Te=new V,Ve=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gf(t)?Ii:Hs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Ga.lookAt(t),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Qe.min,Ls.min),Qe.expandByPoint(Te),Te.addVectors(Qe.max,Ls.max),Qe.expandByPoint(Te)):(Qe.expandByPoint(Ls.min),Qe.expandByPoint(Ls.max))}Qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Te.fromBufferAttribute(a,l),c&&(Ki.fromBufferAttribute(t,l),Te.add(Ki)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new V,c[y]=new V;let l=new V,h=new V,d=new V,u=new kt,f=new kt,g=new kt,x=new V,m=new V;function p(y,A,P){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,P),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[y].add(x),a[A].add(x),a[P].add(x),c[y].add(m),c[A].add(m),c[P].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let y=0,A=E.length;y<A;++y){let P=E[y],R=P.start,L=P.count;for(let D=R,I=R+L;D<I;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let T=new V,_=new V,M=new V,b=new V;function w(y){M.fromBufferAttribute(s,y),b.copy(M);let A=a[y];T.copy(A),T.sub(M.multiplyScalar(M.dot(A))).normalize(),_.crossVectors(b,A);let R=_.dot(c[y])<0?-1:1;o.setXYZW(y,T.x,T.y,T.z,R)}for(let y=0,A=E.length;y<A;++y){let P=E[y],R=P.start,L=P.count;for(let D=R,I=R+L;D<I;D+=3)w(t.getX(D+0)),w(t.getX(D+1)),w(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new V,r=new V,o=new V,a=new V,c=new V,l=new V,h=new V,d=new V;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new hn(u,h,d)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Va=new V,Yf=new V,Zf=new Pt,tn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Va.subVectors(n,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Va),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zf.getNormalMatrix(t),s=this.coplanarPoint(Va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},$f=0,Pi=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=ds,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Wn=new V,Ha=new V,wr=new V,Cr=new V,ks=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ha.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),Cr.copy(this.origin).sub(Ha);let r=t.distanceTo(e)*.5,o=-this.direction.dot(wr),a=Cr.dot(this.direction),c=-Cr.dot(wr),l=Cr.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ha).addScaledVector(wr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,E=n.y-o.y,T=n.z-o.z,_=Math.abs(c),M=Math.abs(l),b=Math.abs(h),w,y,A,P,R,L,D,I,O,W,X,tt;if(_>=M&&_>=b?(A=c,L=d,O=g,tt=p,c>=0?(w=l,y=h,P=u,R=f,D=x,I=m,W=E,X=T):(w=h,y=l,P=f,R=u,D=m,I=x,W=T,X=E)):M>=b?(A=l,L=u,O=x,tt=E,l>=0?(w=h,y=c,P=f,R=d,D=m,I=g,W=T,X=p):(w=c,y=h,P=d,R=f,D=g,I=m,W=p,X=T)):(A=h,L=f,O=m,tt=T,h>=0?(w=c,y=l,P=d,R=u,D=g,I=x,W=p,X=E):(w=l,y=c,P=u,R=d,D=x,I=g,W=E,X=p)),A===0)return null;let Y=w/A,K=y/A,et=1/A,St=P-Y*L,xt=R-K*L,jt=D-Y*O,Ot=I-K*O,Wt=W-Y*tt,Z=X-K*tt,q=Wt*Ot-Z*jt,ht=St*Z-xt*Wt,wt=jt*xt-Ot*St;if(s){if(q<0||ht<0||wt<0)return null}else if((q<0||ht<0||wt<0)&&(q>0||ht>0||wt>0))return null;let lt=q+ht+wt;if(lt===0)return null;let Ft=et*(q*L+ht*O+wt*tt);return(lt>0?Ft<0:Ft>0)?null:this.at(Ft/lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ql=new ie,Ti=new ks,Rr=new ls,th=new V,Ir=new V,Pr=new V,Lr=new V,ka=new V,Dr=new V,eh=new V,Nr=new V,ee=class extends un{constructor(t=new Ve,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(ka.fromBufferAttribute(d,t),o?Dr.addScaledVector(ka,h):Dr.addScaledVector(ka.sub(e),h))}e.add(Dr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Rr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Rr,th)===null||Ti.origin.distanceToSquared(th)>(t.far-t.near)**2))&&(Ql.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,M=T;_<M;_+=3){let b=a.getX(_),w=a.getX(_+1),y=a.getX(_+2);s=Ur(this,p,t,n,l,h,d,b,w,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=a.getX(m),T=a.getX(m+1),_=a.getX(m+2);s=Ur(this,o,t,n,l,h,d,E,T,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,M=T;_<M;_+=3){let b=_,w=_+1,y=_+2;s=Ur(this,p,t,n,l,h,d,b,w,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=m,T=m+1,_=m+2;s=Ur(this,o,t,n,l,h,d,E,T,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Jf(i,t,e,n,s,r,o,a){let c;if(t.side===qe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Nn,a),c===null)return null;Nr.copy(a),Nr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Nr);return l<e.near||l>e.far?null:{distance:l,point:Nr.clone(),object:i}}function Ur(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ir),i.getVertexPosition(c,Pr),i.getVertexPosition(l,Lr);let h=Jf(i,t,e,n,Ir,Pr,Lr,eh);if(h){let d=new V;oi.getBarycoord(eh,Ir,Pr,Lr,d),s&&(h.uv=oi.getInterpolatedAttribute(s,a,c,l,d,new kt)),r&&(h.uv1=oi.getInterpolatedAttribute(r,a,c,l,d,new kt)),o&&(h.normal=oi.getInterpolatedAttribute(o,a,c,l,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new V,materialIndex:0};oi.getNormal(Ir,Pr,Lr,u.normal),h.face=u,h.barycoord=d}return h}var Qr=class extends Pe{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ce,h=Ce,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wi=new ls,Kf=new kt(.5,.5),Fr=new V,Li=class{constructor(t=new tn,e=new tn,n=new tn,s=new tn,r=new tn,o=new tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],E=r[12],T=r[13],_=r[14],M=r[15];if(s[0].setComponents(l-o,f-h,p-g,M-E).normalize(),s[1].setComponents(l+o,f+h,p+g,M+E).normalize(),s[2].setComponents(l+a,f+d,p+x,M+T).normalize(),s[3].setComponents(l-a,f-d,p-x,M-T).normalize(),n)s[4].setComponents(c,u,m,_).normalize(),s[5].setComponents(l-c,f-u,p-m,M-_).normalize();else if(s[4].setComponents(l-c,f-u,p-m,M-_).normalize(),e===xn)s[5].setComponents(l+c,f+u,p+m,M+_).normalize();else if(e===Bs)s[5].setComponents(c,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);let e=Kf.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ws=class extends Pe{constructor(t=[],e=pi,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},li=class extends Pe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hi=class extends Pe{constructor(t,e,n=yn,s,r,o,a=Ce,c=Ce,l,h=Pn,d=1){if(h!==Pn&&h!==mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},to=class extends hi{constructor(t,e=yn,n=pi,s,r,o=Ce,a=Ce,c,l=Pn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xs=class extends Pe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},hs=class i extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function g(x,m,p,E,T,_,M,b,w,y,A){let P=_/w,R=M/y,L=_/2,D=M/2,I=b/2,O=w+1,W=y+1,X=0,tt=0,Y=new V;for(let K=0;K<W;K++){let et=K*R-D;for(let St=0;St<O;St++){let xt=St*P-L;Y[x]=xt*E,Y[m]=et*T,Y[p]=I,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(St/w),d.push(1-K/y),X+=1}}for(let K=0;K<y;K++)for(let et=0;et<w;et++){let St=u+et+O*K,xt=u+et+O*(K+1),jt=u+(et+1)+O*(K+1),Ot=u+(et+1)+O*K;c.push(St,xt,Ot),c.push(xt,jt,Ot),tt+=6}a.addGroup(f,tt,A),f+=tt,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qn=class i extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let E=p*u-o;for(let T=0;T<l;T++){let _=T*d-r;g.push(_,-E,0),x.push(0,0,1),m.push(T/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){let T=E+l*p,_=E+l*(p+1),M=E+1+l*(p+1),b=E+1+l*p;f.push(T,_,b),f.push(_,M,b)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ui(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(nh(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(nh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=Ui(i[e]);for(let s in n)t[s]=n[s]}return t}function nh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ec(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}var Yh={clone:Ui,merge:He},Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new kt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},eo=class extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var no=class extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},io=class extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ji(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Wa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},so=class extends ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qa,endingEnd:qa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ya:r=t,a=2*e-n;break;case Za:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ya:o=t,c=2*n-e;break;case Za:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,E=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,T=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let M=0;M!==a;++M)r[M]=p*o[h+M]+E*o[l+M]+T*o[c+M]+_*o[d+M];return r}},ro=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},oo=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ao=class extends ui{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*g;return r}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[c+g],p=f*u+g*2,E=d[p],T=d[p+1],_=t*u+g*2,M=h[_],b=h[_+1],w=np(n,e,E,M,s);r[g]=Zh(w,x,T,b,m)}return r}};function Zh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function ep(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function np(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Zh(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=ep(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var en=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ji(e,this.TimeBufferType),this.values=ji(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ji(t.times,Array),values:ji(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Wa(t.settings)&&(n.settings={inTangents:ji(t.settings.inTangents,Array),outTangents:ji(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ao(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Us:e=this.InterpolantFactoryMethodDiscrete;break;case $r:e=this.InterpolantFactoryMethodLinear;break;case zr:e=this.InterpolantFactoryMethodSmooth;break;case Xa:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Rt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return $r;case this.InterpolantFactoryMethodSmooth:return zr;case this.InterpolantFactoryMethodBezier:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Wa(this.settings)&&(ih(this.settings.inTangents,t),ih(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){It("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){It("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&_f(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){It("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Wa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ih(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=$r;var di=class extends en{constructor(t,e,n){super(t,e,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Us;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="color";var lo=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};lo.prototype.ValueTypeName="number";var ho=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Dn.slerpFlat(r,0,o,l-a,o,l,c);return r}},qs=class extends en{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ho(this.times,this.values,this.getValueSize(),t)}};qs.prototype.ValueTypeName="quaternion";qs.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends en{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Us;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};uo.prototype.ValueTypeName="vector";var fo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$h=new fo,po=class{constructor(t){this.manager=t!==void 0?t:$h,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};po.DEFAULT_MATERIAL_NAME="__DEFAULT";var Or=new V,Br=new Dn,In=new V,Ys=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Or,Br,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Br,In.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Or,Br,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Br,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ri=new V,sh=new kt,rh=new kt,we=class extends Ys{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,sh,rh),e.subVectors(rh,sh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zs=class extends Ys{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Qi=-90,ts=1,mo=class extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(Qi,ts,t,e);s.layers=this.layers,this.add(s);let r=new we(Qi,ts,t,e);r.layers=this.layers,this.add(r);let o=new we(Qi,ts,t,e);o.layers=this.layers,this.add(o);let a=new we(Qi,ts,t,e);a.layers=this.layers,this.add(a);let c=new we(Qi,ts,t,e);c.layers=this.layers,this.add(c);let l=new we(Qi,ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},go=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ac="\\[\\]\\.:\\/",ip=new RegExp("["+Ac+"]","g"),Tc="[^"+Ac+"]",sp="[^"+Ac.replace("\\.","")+"]",rp=/((?:WC+[\/:])*)/.source.replace("WC",Tc),op=/(WCOD+)?/.source.replace("WCOD",sp),ap=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),cp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),lp=new RegExp("^"+rp+op+ap+cp+"$"),hp=["material","materials","bones","map"],$a=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ip,"")}static parseTrackName(t){let e=lp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;It("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=$a;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IS=new Float32Array(1);var oh=new ie,$s=class{constructor(t,e,n=0,s=1/0){this.ray=new ks(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new as,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):It("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return oh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oh),this}intersectObject(t,e=!0,n=[]){return Ja(t,this,n,e),n.sort(ah),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ja(t[s],this,n,e);return n.sort(ah),n}};function ah(i,t){return i.distance-t.distance}function Ja(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ja(r[o],t,e,!0)}}var Lc=class Lc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Lc.prototype.isMatrix2=!0;var Ka=Lc;function wc(i,t,e,n){let s=up(n);switch(e){case _c:return i*t;case vc:return i*t/s.components*s.byteLength;case Eo:return i*t/s.components*s.byteLength;case gi:return i*t*2/s.components*s.byteLength;case Ao:return i*t*2/s.components*s.byteLength;case xc:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case To:return i*t*4/s.components*s.byteLength;case Qs:case tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:case Io:return Math.max(i,16)*Math.max(t,8)/4;case wo:case Ro:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Lo:case No:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Do:case ir:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ko:case jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ta:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sr:case na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function up(i){switch(i){case nn:case fc:return{byteLength:1,components:1};case fs:case pc:case sn:return{byteLength:2,components:1};case So:case bo:return{byteLength:2,components:4};case yn:case Mo:case Mn:return{byteLength:4,components:1};case mc:case gc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _u(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function fp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,om=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Em=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:_p,alphatest_fragment:xp,alphatest_pars_fragment:vp,aomap_fragment:yp,aomap_pars_fragment:Mp,batching_pars_vertex:Sp,batching_vertex:bp,begin_vertex:Ep,beginnormal_vertex:Ap,bsdfs:Tp,iridescence_fragment:wp,bumpmap_pars_fragment:Cp,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Pp,clipping_planes_vertex:Lp,color_fragment:Dp,color_pars_fragment:Np,color_pars_vertex:Up,color_vertex:Fp,common:Op,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:zp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Vp,emissivemap_fragment:Hp,emissivemap_pars_fragment:kp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:Zp,envmap_pars_vertex:$p,envmap_physical_pars_fragment:om,envmap_vertex:Jp,fog_vertex:Kp,fog_pars_vertex:jp,fog_fragment:Qp,fog_pars_fragment:tm,gradientmap_pars_fragment:em,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:am,lights_toon_pars_fragment:cm,lights_phong_fragment:lm,lights_phong_pars_fragment:hm,lights_physical_fragment:um,lights_physical_pars_fragment:dm,lights_fragment_begin:fm,lights_fragment_maps:pm,lights_fragment_end:mm,lightprobes_pars_fragment:gm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:ym,map_fragment:Mm,map_pars_fragment:Sm,map_particle_fragment:bm,map_particle_pars_fragment:Em,metalnessmap_fragment:Am,metalnessmap_pars_fragment:Tm,morphinstance_vertex:wm,morphcolor_vertex:Cm,morphnormal_vertex:Rm,morphtarget_pars_vertex:Im,morphtarget_vertex:Pm,normal_fragment_begin:Lm,normal_fragment_maps:Dm,normal_pars_fragment:Nm,normal_pars_vertex:Um,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Vm,opaque_fragment:Hm,packing:km,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:$m,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:Km,shadowmap_vertex:jm,shadowmask_pars_fragment:Qm,skinbase_vertex:tg,skinning_pars_vertex:eg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:og,tonemapping_pars_fragment:ag,transmission_fragment:cg,transmission_pars_fragment:lg,uv_pars_fragment:hg,uv_pars_vertex:ug,uv_vertex:dg,worldpos_vertex:fg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:_g,cube_vert:xg,cube_frag:vg,depth_vert:yg,depth_frag:Mg,distance_vert:Sg,distance_frag:bg,equirect_vert:Eg,equirect_frag:Ag,linedashed_vert:Tg,linedashed_frag:wg,meshbasic_vert:Cg,meshbasic_frag:Rg,meshlambert_vert:Ig,meshlambert_frag:Pg,meshmatcap_vert:Lg,meshmatcap_frag:Dg,meshnormal_vert:Ng,meshnormal_frag:Ug,meshphong_vert:Fg,meshphong_frag:Og,meshphysical_vert:Bg,meshphysical_frag:zg,meshtoon_vert:Gg,meshtoon_frag:Vg,points_vert:Hg,points_frag:kg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:qg,sprite_frag:Yg},dt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Bn={basic:{uniforms:He([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:He([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:He([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:He([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:He([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:He([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:He([dt.points,dt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:He([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:He([dt.common,dt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:He([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:He([dt.sprite,dt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:He([dt.common,dt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:He([dt.lights,dt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Bn.physical={uniforms:He([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var ra={r:0,b:0,g:0},Zg=new ie,xu=new Pt;xu.set(-1,0,0,0,1,0,0,0,1);function $g(i,t,e,n,s,r){let o=new Ut(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(E){let T=E.isScene===!0?E.background:null;if(T&&T.isTexture){let _=E.backgroundBlurriness>0;T=t.get(T,_)}return T}function g(E){let T=!1,_=f(E);_===null?m(o,a):_&&_.isColor&&(m(_,1),T=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(E,T){let _=f(T);_&&(_.isCubeTexture||_.mapping===Ks)?(l===void 0&&(l=new ee(new hs(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:Ui(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xu),l.material.toneMapped=Vt.getTransfer(_.colorSpace)!==Kt,(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ee(new qn(2,2),new De({name:"BackgroundMaterial",uniforms:Ui(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(_.colorSpace)!==Kt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,T){E.getRGB(ra,Ec(i)),e.buffers.color.setClear(ra.r,ra.g,ra.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,m(o,a)},render:g,addToRenderList:x,dispose:p}}function Jg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(R,L,D,I,O){let W=!1,X=d(R,I,D,L);r!==X&&(r=X,l(r.object)),W=f(R,I,D,O),W&&g(R,I,D,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(R,L,D,I),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function d(R,L,D,I){let O=I.wireframe===!0,W=n[L.id];W===void 0&&(W={},n[L.id]=W);let X=R.isInstancedMesh===!0?R.id:0,tt=W[X];tt===void 0&&(tt={},W[X]=tt);let Y=tt[D.id];Y===void 0&&(Y={},tt[D.id]=Y);let K=Y[O];return K===void 0&&(K=u(c()),Y[O]=K),K}function u(R){let L=[],D=[],I=[];for(let O=0;O<e;O++)L[O]=0,D[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:I,object:R,attributes:{},index:null}}function f(R,L,D,I){let O=r.attributes,W=L.attributes,X=0,tt=D.getAttributes();for(let Y in tt)if(tt[Y].location>=0){let et=O[Y],St=W[Y];if(St===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),et===void 0||et.attribute!==St||St&&et.data!==St.data)return!0;X++}return r.attributesNum!==X||r.index!==I}function g(R,L,D,I){let O={},W=L.attributes,X=0,tt=D.getAttributes();for(let Y in tt)if(tt[Y].location>=0){let et=W[Y];et===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(et=R.instanceColor));let St={};St.attribute=et,et&&et.data&&(St.data=et.data),O[Y]=St,X++}r.attributes=O,r.attributesNum=X,r.index=I}function x(){let R=r.newAttributes;for(let L=0,D=R.length;L<D;L++)R[L]=0}function m(R){p(R,0)}function p(R,L){let D=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;D[R]=1,I[R]===0&&(i.enableVertexAttribArray(R),I[R]=1),O[R]!==L&&(i.vertexAttribDivisor(R,L),O[R]=L)}function E(){let R=r.newAttributes,L=r.enabledAttributes;for(let D=0,I=L.length;D<I;D++)L[D]!==R[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function T(R,L,D,I,O,W,X){X===!0?i.vertexAttribIPointer(R,L,D,O,W):i.vertexAttribPointer(R,L,D,I,O,W)}function _(R,L,D,I){x();let O=I.attributes,W=D.getAttributes(),X=L.defaultAttributeValues;for(let tt in W){let Y=W[tt];if(Y.location>=0){let K=O[tt];if(K===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),K!==void 0){let et=K.normalized,St=K.itemSize,xt=t.get(K);if(xt===void 0)continue;let jt=xt.buffer,Ot=xt.type,Wt=xt.bytesPerElement,Z=Ot===i.INT||Ot===i.UNSIGNED_INT||K.gpuType===Mo;if(K.isInterleavedBufferAttribute){let q=K.data,ht=q.stride,wt=K.offset;if(q.isInstancedInterleavedBuffer){for(let lt=0;lt<Y.locationSize;lt++)p(Y.location+lt,q.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let lt=0;lt<Y.locationSize;lt++)m(Y.location+lt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let lt=0;lt<Y.locationSize;lt++)T(Y.location+lt,St/Y.locationSize,Ot,et,ht*Wt,(wt+St/Y.locationSize*lt)*Wt,Z)}else{if(K.isInstancedBufferAttribute){for(let q=0;q<Y.locationSize;q++)p(Y.location+q,K.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let q=0;q<Y.locationSize;q++)m(Y.location+q);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let q=0;q<Y.locationSize;q++)T(Y.location+q,St/Y.locationSize,Ot,et,St*Wt,St/Y.locationSize*q*Wt,Z)}}else if(X!==void 0){let et=X[tt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(Y.location,et);break;case 3:i.vertexAttrib3fv(Y.location,et);break;case 4:i.vertexAttrib4fv(Y.location,et);break;default:i.vertexAttrib1fv(Y.location,et)}}}}E()}function M(){A();for(let R in n){let L=n[R];for(let D in L){let I=L[D];for(let O in I){let W=I[O];for(let X in W)h(W[X].object),delete W[X];delete I[O]}}delete n[R]}}function b(R){if(n[R.id]===void 0)return;let L=n[R.id];for(let D in L){let I=L[D];for(let O in I){let W=I[O];for(let X in W)h(W[X].object),delete W[X];delete I[O]}}delete n[R.id]}function w(R){for(let L in n){let D=n[L];for(let I in D){let O=D[I];if(O[R.id]===void 0)continue;let W=O[R.id];for(let X in W)h(W[X].object),delete W[X];delete O[R.id]}}}function y(R){for(let L in n){let D=n[L],I=R.isInstancedMesh===!0?R.id:0,O=D[I];if(O!==void 0){for(let W in O){let X=O[W];for(let tt in X)h(X[tt].object),delete X[tt];delete O[W]}delete D[I],Object.keys(D).length===0&&delete n[L]}}}function A(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Kg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function jg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==dn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let y=w===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==nn&&w!==Mn&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Rt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:_,maxSamples:M,samples:b}}function Qg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new tn,a=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,T=E*4,_=p.clippingState||null;c.value=_,_=h(g,u,T,f);for(let M=0;M!==T;++M)_[M]=e[M];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,_=f;T!==x;++T,_+=4)o.copy(d[T]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var _s=4,t0=6,e0=20,n0=256,rr=new Zs,Jh=new Ut,Dc=null,Nc=0,Uc=0,Fc=!1,i0=new V,Fi=new V,aa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=i0}=r;Dc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dc,Nc,Uc),this._renderer.xr.enabled=Fc,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:sn,format:dn,colorSpace:Fs,depthBuffer:!1},s=Kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s0(r)),this._blurMaterial=o0(r,t,e),this._ggxMaterial=r0(r,t,e)}return s}_compileMaterial(t){let e=new ee(new Ve,t);this._renderer.compile(e,rr)}_sceneToCubeUV(t,e,n,s,r){let c=new we(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Jh),d.toneMapping=vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ee(new hs,new Le({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy(Jh),p=!0);for(let T=0;T<6;T++){let _=T%3;_===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):_===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let M=this._cubeSize;gs(s,_*M,T>2?M:0,M,M),d.setRenderTarget(s),p&&d.render(x,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===pi||t.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;gs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,rr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-_s?n-g+_s:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,gs(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,rr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,gs(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,rr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-_s?s-this._lodMax+_s:0),u=4*(this._cubeSize-h);gs(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(c,rr)}};function s0(i){let t=[],e=[],n=i,s=i-_s+1+t0;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let E=p%3*2/3-1,T=p>2?0:-1,_=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];g.set(_,f*u*p);for(let M=0;M<u;M++){let b=h[M*2]*2-1,w=h[M*2+1]*2-1;p===0?Fi.set(1,w,b):p===1?Fi.set(-b,1,-w):p===2?Fi.set(-b,w,1):p===3?Fi.set(-1,w,-b):p===4?Fi.set(-b,-1,w):Fi.set(b,w,-1),Fi.toArray(x,(p*u+M)*f)}}let m=new Ve;m.setAttribute("position",new hn(g,f)),m.setAttribute("outputDirection",new hn(x,f)),e.push(new ee(m,null)),n>_s&&n--}return{lodMeshes:e,sizeLods:t}}function Kh(i,t,e){let n=new Ge(i,t,e);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function r0(i,t,e){return new De({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function o0(i,t,e){return new De({name:"SphericalGaussianBlur",defines:{SAMPLES:e0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ha(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function jh(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Qh(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ha(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ca=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ws(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new hs(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Un});r.uniforms.tEquirect.value=e;let o=new ee(s,r),a=e.minFilter;return e.minFilter===Fn&&(e.minFilter=Ie),new mo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function a0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===xo||f===vo)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new ca(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",l),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===xo||f===vo,x=f===pi||f===Ni;if(g||x){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new aa(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return g&&E&&E.height>0||x&&E&&c(E)?(n===null&&(n=new aa(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===xo?u.mapping=pi:f===vo&&(u.mapping=Ni),u}function c(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function c0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ci("WebGLRenderer: "+n+" extension not supported."),s}}}function l0(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let E=f.array;x=f.version;for(let T=0,_=E.length;T<_;T+=3){let M=E[T+0],b=E[T+1],w=E[T+2];u.push(M,b,b,w,w,M)}}else{let E=g.array;x=g.version;for(let T=0,_=E.length/3-1;T<_;T+=3){let M=T+0,b=T+1,w=T+2;u.push(M,b,b,w,w,M)}}let m=new(g.count>=65535?Ii:Hs)(u,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function h0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function u0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:It("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function d0(i,t,e){let n=new WeakMap,s=new ce;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let A=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let _=a.attributes.position.count*T,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*M*4*d),w=new Gs(b,_,M,d);w.type=Mn,w.needsUpdate=!0;let y=T*4;for(let P=0;P<d;P++){let R=m[P],L=p[P],D=E[P],I=_*M*4*P;for(let O=0;O<R.count;O++){let W=O*y;f===!0&&(s.fromBufferAttribute(R,O),b[I+W+0]=s.x,b[I+W+1]=s.y,b[I+W+2]=s.z,b[I+W+3]=0),g===!0&&(s.fromBufferAttribute(L,O),b[I+W+4]=s.x,b[I+W+5]=s.y,b[I+W+6]=s.z,b[I+W+7]=0),x===!0&&(s.fromBufferAttribute(D,O),b[I+W+8]=s.x,b[I+W+9]=s.y,b[I+W+10]=s.z,b[I+W+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new kt(_,M)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function f0(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var p0={[rc]:"LINEAR_TONE_MAPPING",[oc]:"REINHARD_TONE_MAPPING",[ac]:"CINEON_TONE_MAPPING",[cc]:"ACES_FILMIC_TONE_MAPPING",[hc]:"AGX_TONE_MAPPING",[uc]:"NEUTRAL_TONE_MAPPING",[lc]:"CUSTOM_TONE_MAPPING"};function m0(i,t,e,n,s,r){let o=new Ge(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Ve;l.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ge([0,2,0,0,2,0],2));let h=new eo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ee(l,h),u=new Zs(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,E=[],T=!1;this.setSize=function(_,M){o.setSize(_,M),a!==null&&a.setSize(_,M),c!==null&&c.setSize(_,M);for(let b=0;b<E.length;b++){let w=E[b];w.setSize&&w.setSize(_,M)}},this.setEffects=function(_){E=_,T=E.length>0&&E[0].isRenderPass===!0;let M=o.width,b=o.height;E.length>0&&a===null&&(a=new Ge(M,b,{type:sn,depthBuffer:!1,stencilBuffer:!1}),c=new Ge(M,b,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<E.length;w++){let y=E[w];y.setSize&&y.setSize(M,b)}},this.begin=function(_,M){if(x||_.toneMapping===vn&&E.length===0)return!1;if(p=M,M!==null){let b=M.width,w=M.height;(o.width!==b||o.height!==w)&&this.setSize(b,w)}return T===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=vn,!0},this.hasRenderPass=function(){return T},this.end=function(_,M){_.toneMapping=m,x=!0;let b=o,w=a;for(let y=0;y<E.length;y++){let A=E[y];A.enabled!==!1&&(A.render(_,w,b,M),A.needsSwap!==!1&&(b=w,w=w===a?c:a))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},Vt.getTransfer(f)===Kt&&(h.defines.SRGB_TRANSFER="");let y=p0[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(p),_.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var vu=new Pe,zc=new hi(1,1),yu=new Gs,Mu=new jr,Su=new Ws,tu=[],eu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tu[s];if(r===void 0&&(r=new Float32Array(s),tu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ua(i,t){let e=eu[t];e===void 0&&(e=new Int32Array(t),eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function g0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function y0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),Ee(e,n)}}function M0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),Ee(e,n)}}function S0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),Ee(e,n)}}function b0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function A0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function T0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function w0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function C0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function P0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zc.compareFunction=e.isReversedDepthBuffer()?sa:ia,r=zc):r=vu,e.setTexture2D(t||r,s)}function L0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mu,s)}function D0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Su,s)}function N0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yu,s)}function U0(i){switch(i){case 5126:return g0;case 35664:return _0;case 35665:return x0;case 35666:return v0;case 35674:return y0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return b0;case 35667:case 35671:return E0;case 35668:case 35672:return A0;case 35669:case 35673:return T0;case 5125:return w0;case 36294:return C0;case 36295:return R0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return N0}}function F0(i,t){i.uniform1fv(this.addr,t)}function O0(i,t){let e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function B0(i,t){let e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function z0(i,t){let e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function G0(i,t){let e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function V0(i,t){let e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function H0(i,t){let e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function k0(i,t){i.uniform1iv(this.addr,t)}function W0(i,t){i.uniform2iv(this.addr,t)}function X0(i,t){i.uniform3iv(this.addr,t)}function q0(i,t){i.uniform4iv(this.addr,t)}function Y0(i,t){i.uniform1uiv(this.addr,t)}function Z0(i,t){i.uniform2uiv(this.addr,t)}function $0(i,t){i.uniform3uiv(this.addr,t)}function J0(i,t){i.uniform4uiv(this.addr,t)}function K0(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=zc:o=vu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function j0(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Mu,r[o])}function Q0(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Su,r[o])}function t_(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yu,r[o])}function e_(i){switch(i){case 5126:return F0;case 35664:return O0;case 35665:return B0;case 35666:return z0;case 35674:return G0;case 35675:return V0;case 35676:return H0;case 5124:case 35670:return k0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Z0;case 36295:return $0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return t_}}var Gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=U0(e.type)}},Vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e_(e.type)}},Hc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Oc=/(\w+)(\])?(\[|\.)?/g;function ru(i,t){i.seq.push(t),i.map[t.id]=t}function n_(i,t,e){let n=i.name,s=n.length;for(Oc.lastIndex=0;;){let r=Oc.exec(n),o=Oc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ru(e,l===void 0?new Gc(a,i,t):new Vc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Hc(a),ru(e,d)),e=d}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);n_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ou(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var i_=37297,s_=0;function r_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var au=new Pt;function o_(i){Vt._getMatrix(au,Vt.workingColorSpace,i);let t=`mat3( ${au.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(i)){case Os:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+r_(i.getShaderSource(t),a)}else return r}function a_(i,t){let e=o_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var c_={[rc]:"Linear",[oc]:"Reinhard",[ac]:"Cineon",[cc]:"ACESFilmic",[hc]:"AgX",[uc]:"Neutral",[lc]:"Custom"};function l_(i,t){let e=c_[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oa=new V;function h_(){Vt.getLuminanceCoefficients(oa);let i=oa.x.toFixed(4),t=oa.y.toFixed(4),e=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function d_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function f_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ar(i){return i!==""}function lu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(i){return i.replace(p_,g_)}var m_=new Map;function g_(i,t){let e=Nt[t];if(e===void 0){let n=m_.get(t);if(n!==void 0)e=Nt[n],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return kc(e)}var __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(i){return i.replace(__,x_)}function x_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var v_={[Js]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function y_(i){return v_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var M_={[pi]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE_UV"};function S_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":M_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var b_={[Ni]:"ENVMAP_MODE_REFRACTION"};function E_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":b_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A_={[sc]:"ENVMAP_BLENDING_MULTIPLY",[Rh]:"ENVMAP_BLENDING_MIX",[Ih]:"ENVMAP_BLENDING_ADD"};function T_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":A_[i.combine]||"ENVMAP_BLENDING_NONE"}function w_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function C_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=y_(e),l=S_(e),h=E_(e),d=T_(e),u=w_(e),f=u_(e),g=d_(r),x=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(m=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==vn?l_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,a_("linearToOutputTexel",e.outputColorSpace),h_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),o=kc(o),o=lu(o,e),o=hu(o,e),a=kc(a),a=lu(a,e),a=hu(a,e),o=uu(o),a=uu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=E+m+o,_=E+p+a,M=ou(s,s.VERTEX_SHADER,T),b=ou(s,s.FRAGMENT_SHADER,_);s.attachShader(x,M),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(R){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(M)||"",I=s.getShaderInfoLog(b)||"",O=L.trim(),W=D.trim(),X=I.trim(),tt=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,b);else{let K=cu(s,M,"vertex"),et=cu(s,b,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+K+`
`+et)}else O!==""?Rt("WebGLProgram: Program Info Log:",O):(W===""||X==="")&&(Y=!1);Y&&(R.diagnostics={runnable:tt,programLog:O,vertexShader:{log:W,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(M),s.deleteShader(b),y=new xs(s,x),A=f_(s,x)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,i_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=b,this}var R_=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xc(t),e.set(t,n)),n}},Xc=class{constructor(t){this.id=R_++,this.code=t,this.usedTimes=0}};function I_(i){return i===gi||i===ir||i===sr}function P_(i,t,e,n,s,r){let o=new as,a=new Wc,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,A,P,R,L,D){let I=R.fog,O=L.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,tt=t.get(y.envMap||W,X),Y=tt&&tt.mapping===Ks?tt.image.height:null,K=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Rt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,St=et!==void 0?et.length:0,xt=0;O.morphAttributes.position!==void 0&&(xt=1),O.morphAttributes.normal!==void 0&&(xt=2),O.morphAttributes.color!==void 0&&(xt=3);let jt,Ot,Wt,Z;if(K){let oe=Bn[K];jt=oe.vertexShader,Ot=oe.fragmentShader}else{jt=y.vertexShader,Ot=y.fragmentShader;let oe=a.getVertexShaderStage(y),$t=a.getFragmentShaderStage(y);a.update(y,oe,$t),Wt=oe.id,Z=$t.id}let q=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),wt=L.isInstancedMesh===!0,lt=L.isBatchedMesh===!0,Ft=!!y.map,Se=!!y.matcap,Bt=!!tt,Yt=!!y.aoMap,re=!!y.lightMap,Gt=!!y.bumpMap&&y.wireframe===!1,ue=!!y.normalMap,Ae=!!y.displacementMap,$e=!!y.emissiveMap,me=!!y.metalnessMap,ve=!!y.roughnessMap,F=y.anisotropy>0,Fe=y.clearcoat>0,Qt=y.dispersion>0,C=y.retroreflectivity>0,v=y.iridescence>0,B=y.sheen>0,H=y.transmission>0,$=F&&!!y.anisotropyMap,it=Fe&&!!y.clearcoatMap,st=Fe&&!!y.clearcoatNormalMap,J=Fe&&!!y.clearcoatRoughnessMap,Q=v&&!!y.iridescenceMap,rt=v&&!!y.iridescenceThicknessMap,Et=B&&!!y.sheenColorMap,ut=B&&!!y.sheenRoughnessMap,ot=!!y.specularMap,At=!!y.specularColorMap,Ct=!!y.specularIntensityMap,Lt=H&&!!y.transmissionMap,U=H&&!!y.thicknessMap,at=!!y.gradientMap,j=!!y.alphaMap,ct=y.alphaTest>0,mt=!!y.alphaHash,nt=!!y.extensions,Tt=vn;y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Tt=i.toneMapping);let Mt={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:Ot,defines:y.defines,customVertexShaderID:Wt,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:lt,batchingColor:lt&&L._colorsTexture!==null,instancing:wt,instancingColor:wt&&L.instanceColor!==null,instancingMorph:wt&&L.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Vt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ft,matcap:Se,envMap:Bt,envMapMode:Bt&&tt.mapping,envMapCubeUVHeight:Y,aoMap:Yt,lightMap:re,bumpMap:Gt,normalMap:ue,displacementMap:Ae,emissiveMap:$e,normalMapObjectSpace:ue&&y.normalMapType===Dh,normalMapTangentSpace:ue&&y.normalMapType===yc,packedNormalMap:ue&&y.normalMapType===yc&&I_(y.normalMap.format),metalnessMap:me,roughnessMap:ve,anisotropy:F,anisotropyMap:$,clearcoat:Fe,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:J,dispersion:Qt,retroreflection:C,iridescence:v,iridescenceMap:Q,iridescenceThicknessMap:rt,sheen:B,sheenColorMap:Et,sheenRoughnessMap:ut,specularMap:ot,specularColorMap:At,specularIntensityMap:Ct,transmission:H,transmissionMap:Lt,thicknessMap:U,gradientMap:at,opaque:y.transparent===!1&&y.blending===ds&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:mt,combine:y.combine,mapUv:Ft&&g(y.map.channel),aoMapUv:Yt&&g(y.aoMap.channel),lightMapUv:re&&g(y.lightMap.channel),bumpMapUv:Gt&&g(y.bumpMap.channel),normalMapUv:ue&&g(y.normalMap.channel),displacementMapUv:Ae&&g(y.displacementMap.channel),emissiveMapUv:$e&&g(y.emissiveMap.channel),metalnessMapUv:me&&g(y.metalnessMap.channel),roughnessMapUv:ve&&g(y.roughnessMap.channel),anisotropyMapUv:$&&g(y.anisotropyMap.channel),clearcoatMapUv:it&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(y.sheenRoughnessMap.channel),specularMapUv:ot&&g(y.specularMap.channel),specularColorMapUv:At&&g(y.specularColorMap.channel),specularIntensityMapUv:Ct&&g(y.specularIntensityMap.channel),transmissionMapUv:Lt&&g(y.transmissionMap.channel),thicknessMapUv:U&&g(y.thicknessMap.channel),alphaMapUv:j&&g(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ue||F),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Ft||j),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&ue===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ht,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:xt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Ft&&y.map.isVideoTexture===!0&&Vt.getTransfer(y.map.colorSpace)===Kt,decodeVideoTextureEmissive:$e&&y.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(y.emissiveMap.colorSpace)===Kt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ne,flipSided:y.side===qe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:nt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&y.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)A.push(P),A.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(p(A,y),E(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function p(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function E(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function T(y){let A=f[y.type],P;if(A){let R=Bn[A];P=Yh.clone(R.uniforms)}else P=y.uniforms;return P}function _(y,A){let P=h.get(A);return P!==void 0?++P.usedTimes:(P=new C_(i,A,y,s),l.push(P),h.set(A,P)),P}function M(y){if(--y.usedTimes===0){let A=l.indexOf(y);l[A]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:T,acquireProgram:_,releaseProgram:M,releaseShaderCache:b,programs:l,dispose:w}}function L_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function D_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,x,m,p){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[t]=E):(E.id=u.id,E.object=u,E.geometry=f,E.material=g,E.materialVariant=o(u),E.groupOrder=x,E.renderOrder=u.renderOrder,E.z=m,E.group=p),t++,E}function c(u,f,g,x,m,p,E){E.reversedDepth===!0&&(m=-m);let T=a(u,f,g,x,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function l(u,f,g,x,m,p){let E=a(u,f,g,x,m,p);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,f){e.length>1&&e.sort(u||D_),n.length>1&&n.sort(f||fu),s.length>1&&s.sort(f||fu)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function N_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new pu,i.set(n,[o])):s>=r.length?(o=new pu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function U_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Ut};break;case"SpotLight":e={position:new V,direction:new V,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function F_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var O_=0;function B_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function z_(i){let t=new U_,e=F_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let s=new V,r=new ie,o=new ie;function a(l){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,E=0,T=0,_=0,M=0,b=0,w=0,y=0,A=0,P=0;l.sort(B_);for(let L=0,D=l.length;L<D;L++){let I=l[L],O=I.color,W=I.intensity,X=I.distance,tt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===gi?tt=I.shadow.map.texture:tt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*W,d+=O.g*W,u+=O.b*W;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],W);P++}else if(I.isSunLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,et=e.get(I);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=tt;let St=K.getViewportCount();for(let xt=0;xt<St;xt++)n.sunShadowMatrix[x+xt]=K.getMatrix(xt),n.sunShadowCascade[x+xt]=K._cascadeData[xt];x+=St,g++}n.sun[f]=Y,f++}else if(I.isDirectionalLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,et=e.get(I);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=Y,m++}else if(I.isSpotLight){let Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(O).multiplyScalar(W),Y.distance=X,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[E]=Y;let K=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,K.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[E]=K.matrix,I.castShadow){let et=e.get(I);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,n.spotShadow[E]=et,n.spotShadowMap[E]=tt,w++}E++}else if(I.isRectAreaLight){let Y=t.get(I);Y.color.copy(O).multiplyScalar(W),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=Y,T++}else if(I.isPointLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let K=I.shadow,et=e.get(I);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,et.shadowCameraNear=K.camera.near,et.shadowCameraFar=K.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=tt,n.pointShadowMatrix[p]=I.shadow.matrix,b++}n.point[p]=Y,p++}else if(I.isHemisphereLight){let Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(W),Y.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[_]=Y,_++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==p||R.spotLength!==E||R.rectAreaLength!==T||R.hemiLength!==_||R.numSunShadows!==g||R.numDirectionalShadows!==M||R.numPointShadows!==b||R.numSpotShadows!==w||R.numSpotMaps!==y||R.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=E,n.rectArea.length=T,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,R.sunLength=f,R.directionalLength=m,R.pointLength=p,R.spotLength=E,R.rectAreaLength=T,R.hemiLength=_,R.numSunShadows=g,R.numDirectionalShadows=M,R.numPointShadows=b,R.numSpotShadows=w,R.numSpotMaps=y,R.numLightProbes=P,n.version=O_++)}function c(l,h){let d=0,u=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let E=0,T=l.length;E<T;E++){let _=l[E];if(_.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(_.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function mu(i){let t=new z_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function G_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new mu(i),t.set(s,[a])):r>=o.length?(a=new mu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,k_=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],W_=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],gu=new ie,or=new V,Bc=new V;function X_(i,t,e){let n=new Li,s=new kt,r=new kt,o=new ce,a=new no,c=new io,l={},h=e.maxTextureSize,d={[Nn]:qe,[qe]:Nn,[Ne]:Ne},u=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:V_,fragmentShader:H_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ve;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ee(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let p=this.type;this.render=function(b,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===hh&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);let A=i.getRenderTarget(),P=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Un),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=p!==this.type;D&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=b.length;I<O;I++){let W=b[I],X=W.shadow;if(X===void 0){Rt("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let tt=X.getFrameExtents();s.multiply(tt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,X.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||D===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===us){if(W.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ge(s.x,s.y,{format:gi,type:sn,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new hi(s.x,s.y,Mn),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=Pn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ce,X.map.depthTexture.magFilter=Ce}else W.isPointLight?(X.map=new ca(s.x),X.map.depthTexture=new to(s.x,yn)):(X.map=new Ge(s.x,s.y),X.map.depthTexture=new hi(s.x,s.y,yn)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=Pn,this.type===Js?(X.map.depthTexture.compareFunction=Y?sa:ia,X.map.depthTexture.minFilter=Ie,X.map.depthTexture.magFilter=Ie):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ce,X.map.depthTexture.magFilter=Ce);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let K=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();W.isPointLight!==!0&&X.updateMatrices(W,y);for(let et=0;et<K;et++){let St=X.getCamera(et);if(W.isPointLight){let xt=X.camera,jt=X.matrix,Ot=W.distance||xt.far;Ot!==xt.far&&(xt.far=Ot,xt.updateProjectionMatrix()),or.setFromMatrixPosition(W.matrixWorld),xt.position.copy(or),Bc.copy(xt.position),Bc.add(k_[et]),xt.up.copy(W_[et]),xt.lookAt(Bc),xt.updateMatrixWorld(),jt.makeTranslation(-or.x,-or.y,-or.z),gu.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(gu,xt.coordinateSystem,xt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,et),i.clear();else{et===0&&(i.setRenderTarget(X.map),i.clear());let xt=X.getViewport(et);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),L.viewport(o)}n=X.getFrustum(et),_(w,y,St,W,this.type)}X.isPointLightShadow!==!0&&this.type===us&&E(X,y),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,P,R)};function E(b,w){let y=t.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ge(s.x,s.y,{format:gi,type:sn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,y,u,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,y,f,x,null)}function T(b,w,y,A){let P=null,R=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)P=R;else if(P=y.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=P.uuid,D=w.uuid,I=l[L];I===void 0&&(I={},l[L]=I);let O=I[D];O===void 0&&(O=P.clone(),I[D]=O,w.addEventListener("dispose",M)),P=O}if(P.visible=w.visible,P.wireframe=w.wireframe,A===us?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let L=i.properties.get(P);L.light=y}return P}function _(b,w,y,A,P){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===us)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let D=t.update(b),I=b.material;if(Array.isArray(I)){let O=D.groups;for(let W=0,X=O.length;W<X;W++){let tt=O[W],Y=I[tt.materialIndex];if(Y&&Y.visible){let K=T(b,Y,A,P);b.onBeforeShadow(i,b,w,y,D,K,tt),i.renderBufferDirect(y,null,D,K,b,tt),b.onAfterShadow(i,b,w,y,D,K,tt)}}}else if(I.visible){let O=T(b,I,A,P);b.onBeforeShadow(i,b,w,y,D,O,null),i.renderBufferDirect(y,null,D,O,b,null),b.onAfterShadow(i,b,w,y,D,O,null)}}let L=b.children;for(let D=0,I=L.length;D<I;D++)_(L[D],w,y,A,P)}function M(b){b.target.removeEventListener("dispose",M);for(let y in l){let A=l[y],P=b.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function q_(i,t){function e(){let U=!1,at=new ce,j=null,ct=new ce(0,0,0,0);return{setMask:function(mt){j!==mt&&!U&&(i.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){U=mt},setClear:function(mt,nt,Tt,Mt,oe){oe===!0&&(mt*=Mt,nt*=Mt,Tt*=Mt),at.set(mt,nt,Tt,Mt),ct.equals(at)===!1&&(i.clearColor(mt,nt,Tt,Mt),ct.copy(at))},reset:function(){U=!1,j=null,ct.set(-1,0,0,0)}}}function n(){let U=!1,at=!1,j=null,ct=null,mt=null;return{setReversed:function(nt){if(at!==nt){let Tt=t.get("EXT_clip_control");nt?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),at=nt;let Mt=mt;mt=null,this.setClear(Mt)}},getReversed:function(){return at},setTest:function(nt){nt?q(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(nt){j!==nt&&!U&&(i.depthMask(nt),j=nt)},setFunc:function(nt){if(at&&(nt=Xh[nt]),ct!==nt){switch(nt){case Vr:i.depthFunc(i.NEVER);break;case Hr:i.depthFunc(i.ALWAYS);break;case kr:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case Wr:i.depthFunc(i.EQUAL);break;case Xr:i.depthFunc(i.GEQUAL);break;case qr:i.depthFunc(i.GREATER);break;case Yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=nt}},setLocked:function(nt){U=nt},setClear:function(nt){mt!==nt&&(mt=nt,at&&(nt=1-nt),i.clearDepth(nt))},reset:function(){U=!1,j=null,ct=null,mt=null,at=!1}}}function s(){let U=!1,at=null,j=null,ct=null,mt=null,nt=null,Tt=null,Mt=null,oe=null;return{setTest:function($t){U||($t?q(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function($t){at!==$t&&!U&&(i.stencilMask($t),at=$t)},setFunc:function($t,pn,Cn){(j!==$t||ct!==pn||mt!==Cn)&&(i.stencilFunc($t,pn,Cn),j=$t,ct=pn,mt=Cn)},setOp:function($t,pn,Cn){(nt!==$t||Tt!==pn||Mt!==Cn)&&(i.stencilOp($t,pn,Cn),nt=$t,Tt=pn,Mt=Cn)},setLocked:function($t){U=$t},setClear:function($t){oe!==$t&&(i.clearStencil($t),oe=$t)},reset:function(){U=!1,at=null,j=null,ct=null,mt=null,nt=null,Tt=null,Mt=null,oe=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,E=null,T=null,_=null,M=null,b=null,w=null,y=new Ut(0,0,0),A=0,P=!1,R=null,L=null,D=null,I=null,O=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,tt=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=tt>=1):Y.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=tt>=2);let K=null,et={},St=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),jt=new ce().fromArray(St),Ot=new ce().fromArray(xt);function Wt(U,at,j,ct){let mt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(U,nt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<j;Tt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(at+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return nt}let Z={};Z[i.TEXTURE_2D]=Wt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(is),Gt(!1),ue(ja),q(i.CULL_FACE),Yt(Un);function q(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ht(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function wt(U,at){return u[U]!==at?(i.bindFramebuffer(U,at),u[U]=at,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function lt(U,at){let j=g,ct=!1;if(U){j=f.get(at),j===void 0&&(j=[],f.set(at,j));let mt=U.textures;if(j.length!==mt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Tt=mt.length;nt<Tt;nt++)j[nt]=i.COLOR_ATTACHMENT0+nt;j.length=mt.length,ct=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ct=!0);ct&&i.drawBuffers(j)}function Ft(U){return x!==U?(i.useProgram(U),x=U,!0):!1}let Se={[Di]:i.FUNC_ADD,[dh]:i.FUNC_SUBTRACT,[fh]:i.FUNC_REVERSE_SUBTRACT};Se[ph]=i.MIN,Se[mh]=i.MAX;let Bt={[gh]:i.ZERO,[_h]:i.ONE,[xh]:i.SRC_COLOR,[nc]:i.SRC_ALPHA,[Eh]:i.SRC_ALPHA_SATURATE,[Sh]:i.DST_COLOR,[yh]:i.DST_ALPHA,[vh]:i.ONE_MINUS_SRC_COLOR,[ic]:i.ONE_MINUS_SRC_ALPHA,[bh]:i.ONE_MINUS_DST_COLOR,[Mh]:i.ONE_MINUS_DST_ALPHA,[Ah]:i.CONSTANT_COLOR,[Th]:i.ONE_MINUS_CONSTANT_COLOR,[wh]:i.CONSTANT_ALPHA,[Ch]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(U,at,j,ct,mt,nt,Tt,Mt,oe,$t){if(U===Un){m===!0&&(ht(i.BLEND),m=!1);return}if(m===!1&&(q(i.BLEND),m=!0),U!==uh){if(U!==p||$t!==P){if((E!==Di||M!==Di)&&(i.blendEquation(i.FUNC_ADD),E=Di,M=Di),$t)switch(U){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:It("WebGLState: Invalid blending: ",U);break}else switch(U){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tc:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",U);break}T=null,_=null,b=null,w=null,y.set(0,0,0),A=0,p=U,P=$t}return}mt=mt||at,nt=nt||j,Tt=Tt||ct,(at!==E||mt!==M)&&(i.blendEquationSeparate(Se[at],Se[mt]),E=at,M=mt),(j!==T||ct!==_||nt!==b||Tt!==w)&&(i.blendFuncSeparate(Bt[j],Bt[ct],Bt[nt],Bt[Tt]),T=j,_=ct,b=nt,w=Tt),(Mt.equals(y)===!1||oe!==A)&&(i.blendColor(Mt.r,Mt.g,Mt.b,oe),y.copy(Mt),A=oe),p=U,P=!1}function re(U,at){U.side===Ne?ht(i.CULL_FACE):q(i.CULL_FACE);let j=U.side===qe;at&&(j=!j),Gt(j),U.blending===ds&&U.transparent===!1?Yt(Un):Yt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let ct=U.stencilWrite;a.setTest(ct),ct&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),$e(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(U){R!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),R=U)}function ue(U){U!==ch?(q(i.CULL_FACE),U!==L&&(U===ja?i.cullFace(i.BACK):U===lh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),L=U}function Ae(U){U!==D&&(X&&i.lineWidth(U),D=U)}function $e(U,at,j){U?(q(i.POLYGON_OFFSET_FILL),(I!==at||O!==j)&&(I=at,O=j,o.getReversed()&&(at=-at),i.polygonOffset(at,j))):ht(i.POLYGON_OFFSET_FILL)}function me(U){U?q(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function ve(U){U===void 0&&(U=i.TEXTURE0+W-1),K!==U&&(i.activeTexture(U),K=U)}function F(U,at,j){j===void 0&&(K===null?j=i.TEXTURE0+W-1:j=K);let ct=et[j];ct===void 0&&(ct={type:void 0,texture:void 0},et[j]=ct),(ct.type!==U||ct.texture!==at)&&(K!==j&&(i.activeTexture(j),K=j),i.bindTexture(U,at||Z[U]),ct.type=U,ct.texture=at)}function Fe(){let U=et[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Qt(){try{i.compressedTexImage2D(...arguments)}catch(U){It("WebGLState:",U)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(U){It("WebGLState:",U)}}function v(){try{i.texSubImage2D(...arguments)}catch(U){It("WebGLState:",U)}}function B(){try{i.texSubImage3D(...arguments)}catch(U){It("WebGLState:",U)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(U){It("WebGLState:",U)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(U){It("WebGLState:",U)}}function it(){try{i.texStorage2D(...arguments)}catch(U){It("WebGLState:",U)}}function st(){try{i.texStorage3D(...arguments)}catch(U){It("WebGLState:",U)}}function J(){try{i.texImage2D(...arguments)}catch(U){It("WebGLState:",U)}}function Q(){try{i.texImage3D(...arguments)}catch(U){It("WebGLState:",U)}}function rt(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function Et(U,at){d[U]!==at&&(i.pixelStorei(U,at),d[U]=at)}function ut(U){jt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),jt.copy(U))}function ot(U){Ot.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ot.copy(U))}function At(U,at){let j=l.get(at);j===void 0&&(j=new WeakMap,l.set(at,j));let ct=j.get(U);ct===void 0&&(ct=i.getUniformBlockIndex(at,U.name),j.set(U,ct))}function Ct(U,at){let ct=l.get(at).get(U);c.get(at)!==ct&&(i.uniformBlockBinding(at,ct,U.__bindingPointIndex),c.set(at,ct))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,et={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,E=null,T=null,_=null,M=null,b=null,w=null,y=new Ut(0,0,0),A=0,P=!1,R=null,L=null,D=null,I=null,O=null,jt.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:ht,bindFramebuffer:wt,drawBuffers:lt,useProgram:Ft,setBlending:Yt,setMaterial:re,setFlipSided:Gt,setCullFace:ue,setLineWidth:Ae,setPolygonOffset:$e,setScissorTest:me,activeTexture:ve,bindTexture:F,unbindTexture:Fe,compressedTexImage2D:Qt,compressedTexImage3D:C,texImage2D:J,texImage3D:Q,pixelStorei:Et,getParameter:rt,updateUBOMapping:At,uniformBlockBinding:Ct,texStorage2D:it,texStorage3D:st,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:$,scissor:ut,viewport:ot,reset:Lt}}function Y_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new kt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return g?new OffscreenCanvas(C,v):zs("canvas")}function m(C,v,B){let H=1,$=Qt(C);if(($.width>B||$.height>B)&&(H=B/Math.max($.width,$.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let it=Math.floor(H*$.width),st=Math.floor(H*$.height);u===void 0&&(u=x(it,st));let J=v?x(it,st):u;return J.width=it,J.height=st,J.getContext("2d").drawImage(C,0,0,it,st),Rt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+it+"x"+st+")."),J}else return"data"in C&&Rt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function p(C){return C.generateMipmaps}function E(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,v,B,H,$,it=!1){if(C!==null){if(i[C]!==void 0)return i[C];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let st;H&&(st=t.get("EXT_texture_norm16"),st||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&st&&(J=st.R16_EXT),B===i.SHORT&&st&&(J=st.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),v===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&st&&(J=st.RG16_EXT),B===i.SHORT&&st&&(J=st.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&st&&(J=st.RGB16_EXT),B===i.SHORT&&st&&(J=st.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){let Q=it?Os:Vt.getTransfer($);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Q===Kt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&st&&(J=st.RGBA16_EXT),B===i.SHORT&&st&&(J=st.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(C,v){let B;return C?v===null||v===yn||v===ps?B=i.DEPTH24_STENCIL8:v===Mn?B=i.DEPTH32F_STENCIL8:v===fs&&(B=i.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===yn||v===ps?B=i.DEPTH_COMPONENT24:v===Mn?B=i.DEPTH_COMPONENT32F:v===fs&&(B=i.DEPTH_COMPONENT16),B}function b(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ce&&C.minFilter!==Ie?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){let v=C.target;v.removeEventListener("dispose",w),A(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function y(C){let v=C.target;v.removeEventListener("dispose",y),R(v)}function A(C){let v=n.get(C);if(v.__webglInit===void 0)return;let B=C.source,H=f.get(B);if(H){let $=H[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(C),Object.keys(H).length===0&&f.delete(B)}n.remove(C)}function P(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let B=C.source,H=f.get(B);delete H[v.__cacheKey],o.memory.textures--}function R(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let $=0;$<v.__webglFramebuffer[H].length;$++)i.deleteFramebuffer(v.__webglFramebuffer[H][$]);else i.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)i.deleteFramebuffer(v.__webglFramebuffer[H]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=C.textures;for(let H=0,$=B.length;H<$;H++){let it=n.get(B[H]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(B[H])}n.remove(C)}let L=0;function D(){L=0}function I(){return L}function O(C){L=C}function W(){let C=L;return C>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function X(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function tt(C,v){let B=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let H=C.image;if(H===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(B,C,v);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function Y(C,v){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){ht(B,C,v);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function K(C,v){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){ht(B,C,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function et(C,v){let B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){wt(B,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let St={[Ri]:i.REPEAT,[Je]:i.CLAMP_TO_EDGE,[Zr]:i.MIRRORED_REPEAT},xt={[Ce]:i.NEAREST,[Ph]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[Ie]:i.LINEAR,[yo]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},jt={[Uh]:i.NEVER,[Gh]:i.ALWAYS,[Fh]:i.LESS,[ia]:i.LEQUAL,[Oh]:i.EQUAL,[sa]:i.GEQUAL,[Bh]:i.GREATER,[zh]:i.NOTEQUAL};function Ot(C,v){if(v.type===Mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ie||v.magFilter===yo||v.magFilter===js||v.magFilter===Fn||v.minFilter===Ie||v.minFilter===yo||v.minFilter===js||v.minFilter===Fn)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,St[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,St[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,St[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,xt[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,xt[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,jt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ce||v.minFilter!==js&&v.minFilter!==Fn||v.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Wt(C,v){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));let H=v.source,$=f.get(H);$===void 0&&($={},f.set(H,$));let it=X(v);if(it!==C.__cacheKey){$[it]===void 0&&($[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),$[it].usedTimes++;let st=$[C.__cacheKey];st!==void 0&&($[C.__cacheKey].usedTimes--,st.usedTimes===0&&P(v)),C.__cacheKey=it,C.__webglTexture=$[it].texture}return B}function Z(C,v,B){return Math.floor(Math.floor(C/B)/v)}function q(C,v,B,H){let it=C.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,H,v.data);else{it.sort((Et,ut)=>Et.start-ut.start);let st=0;for(let Et=1;Et<it.length;Et++){let ut=it[st],ot=it[Et],At=ut.start+ut.count,Ct=Z(ot.start,v.width,4),Lt=Z(ut.start,v.width,4);ot.start<=At+1&&Ct===Lt&&Z(ot.start+ot.count-1,v.width,4)===Ct?ut.count=Math.max(ut.count,ot.start+ot.count-ut.start):(++st,it[st]=ot)}it.length=st+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Et=0,ut=it.length;Et<ut;Et++){let ot=it[Et],At=Math.floor(ot.start/4),Ct=Math.ceil(ot.count/4),Lt=At%v.width,U=Math.floor(At/v.width),at=Ct,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Lt,U,at,j,B,H,v.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function ht(C,v,B){let H=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=i.TEXTURE_3D);let $=Wt(C,v),it=v.source;e.bindTexture(H,C.__webglTexture,i.TEXTURE0+B);let st=n.get(it);if(it.version!==st.__version||$===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let j=Vt.getPrimaries(Vt.workingColorSpace),ct=v.colorSpace===Yn?null:Vt.getPrimaries(v.colorSpace),mt=v.colorSpace===Yn||j===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=m(v.image,!1,s.maxTextureSize);Q=Fe(v,Q);let rt=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),ut=_(v.internalFormat,rt,Et,v.normalized,v.colorSpace,v.isVideoTexture);Ot(H,v);let ot,At=v.mipmaps,Ct=v.isVideoTexture!==!0,Lt=st.__version===void 0||$===!0,U=it.dataReady,at=b(v,Q);if(v.isDepthTexture)ut=M(v.format===mi,v.type),Lt&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,ut,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,ut,Q.width,Q.height,0,rt,Et,null));else if(v.isDataTexture)if(At.length>0){Ct&&Lt&&e.texStorage2D(i.TEXTURE_2D,at,ut,At[0].width,At[0].height);for(let j=0,ct=At.length;j<ct;j++)ot=At[j],Ct?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ot.width,ot.height,rt,Et,ot.data):e.texImage2D(i.TEXTURE_2D,j,ut,ot.width,ot.height,0,rt,Et,ot.data);v.generateMipmaps=!1}else Ct?(Lt&&e.texStorage2D(i.TEXTURE_2D,at,ut,Q.width,Q.height),U&&q(v,Q,rt,Et)):e.texImage2D(i.TEXTURE_2D,0,ut,Q.width,Q.height,0,rt,Et,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ct&&Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,ut,At[0].width,At[0].height,Q.depth);for(let j=0,ct=At.length;j<ct;j++)if(ot=At[j],v.format!==dn)if(rt!==null)if(Ct){if(U)if(v.layerUpdates.size>0){let mt=wc(ot.width,ot.height,v.format,v.type);for(let nt of v.layerUpdates){let Tt=ot.data.subarray(nt*mt/ot.data.BYTES_PER_ELEMENT,(nt+1)*mt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,nt,ot.width,ot.height,1,rt,Tt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,Q.depth,rt,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ut,ot.width,ot.height,Q.depth,0,ot.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,Q.depth,rt,Et,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,ut,ot.width,ot.height,Q.depth,0,rt,Et,ot.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ct&&Lt&&e.texStorage2D(i.TEXTURE_2D,at,ut,At[0].width,At[0].height);for(let j=0,ct=At.length;j<ct;j++)ot=At[j],v.format!==dn?rt!==null?Ct?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ot.width,ot.height,rt,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,j,ut,ot.width,ot.height,0,ot.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ot.width,ot.height,rt,Et,ot.data):e.texImage2D(i.TEXTURE_2D,j,ut,ot.width,ot.height,0,rt,Et,ot.data)}else if(v.isDataArrayTexture)if(Ct){if(Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,ut,Q.width,Q.height,Q.depth),U)if(v.layerUpdates.size>0){let j=wc(Q.width,Q.height,v.format,v.type);for(let ct of v.layerUpdates){let mt=Q.data.subarray(ct*j/Q.data.BYTES_PER_ELEMENT,(ct+1)*j/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,Q.width,Q.height,1,rt,Et,mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,rt,Et,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,Q.width,Q.height,Q.depth,0,rt,Et,Q.data);else if(v.isData3DTexture)Ct?(Lt&&e.texStorage3D(i.TEXTURE_3D,at,ut,Q.width,Q.height,Q.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,rt,Et,Q.data)):e.texImage3D(i.TEXTURE_3D,0,ut,Q.width,Q.height,Q.depth,0,rt,Et,Q.data);else if(v.isFramebufferTexture){if(Lt)if(Ct)e.texStorage2D(i.TEXTURE_2D,at,ut,Q.width,Q.height);else{let j=Q.width,ct=Q.height;for(let mt=0;mt<at;mt++)e.texImage2D(i.TEXTURE_2D,mt,ut,j,ct,0,rt,Et,null),j>>=1,ct>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),d.add(v),j.onpaint=ct=>{let mt=ct.changedElements;for(let nt of d)mt.includes(nt.image)&&(nt.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let mt=i.RGBA,nt=i.RGBA,Tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,nt,Tt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(At.length>0){if(Ct&&Lt){let j=Qt(At[0]);e.texStorage2D(i.TEXTURE_2D,at,ut,j.width,j.height)}for(let j=0,ct=At.length;j<ct;j++)ot=At[j],Ct?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,rt,Et,ot):e.texImage2D(i.TEXTURE_2D,j,ut,rt,Et,ot);v.generateMipmaps=!1}else if(Ct){if(Lt){let j=Qt(Q);e.texStorage2D(i.TEXTURE_2D,at,ut,j.width,j.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,Et,Q)}else e.texImage2D(i.TEXTURE_2D,0,ut,rt,Et,Q);p(v)&&E(H),st.__version=it.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function wt(C,v,B){if(v.image.length!==6)return;let H=Wt(C,v),$=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let it=n.get($);if($.version!==it.__version||H===!0){e.activeTexture(i.TEXTURE0+B);let st=Vt.getPrimaries(Vt.workingColorSpace),J=v.colorSpace===Yn?null:Vt.getPrimaries(v.colorSpace),Q=v.colorSpace===Yn||st===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let rt=v.isCompressedTexture||v.image[0].isCompressedTexture,Et=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let nt=0;nt<6;nt++)!rt&&!Et?ut[nt]=m(v.image[nt],!0,s.maxCubemapSize):ut[nt]=Et?v.image[nt].image:v.image[nt],ut[nt]=Fe(v,ut[nt]);let ot=ut[0],At=r.convert(v.format,v.colorSpace),Ct=r.convert(v.type),Lt=_(v.internalFormat,At,Ct,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,at=it.__version===void 0||H===!0,j=$.dataReady,ct=b(v,ot);Ot(i.TEXTURE_CUBE_MAP,v);let mt;if(rt){U&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Lt,ot.width,ot.height);for(let nt=0;nt<6;nt++){mt=ut[nt].mipmaps;for(let Tt=0;Tt<mt.length;Tt++){let Mt=mt[Tt];v.format!==dn?At!==null?U?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,Mt.width,Mt.height,At,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,Lt,Mt.width,Mt.height,0,Mt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,Mt.width,Mt.height,At,Ct,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,Lt,Mt.width,Mt.height,0,At,Ct,Mt.data)}}}else{if(mt=v.mipmaps,U&&at){mt.length>0&&ct++;let nt=Qt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Lt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Et){U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ut[nt].width,ut[nt].height,At,Ct,ut[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Lt,ut[nt].width,ut[nt].height,0,At,Ct,ut[nt].data);for(let Tt=0;Tt<mt.length;Tt++){let oe=mt[Tt].image[nt].image;U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,oe.width,oe.height,At,Ct,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,Lt,oe.width,oe.height,0,At,Ct,oe.data)}}else{U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At,Ct,ut[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Lt,At,Ct,ut[nt]);for(let Tt=0;Tt<mt.length;Tt++){let Mt=mt[Tt];U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,At,Ct,Mt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,Lt,At,Ct,Mt.image[nt])}}}p(v)&&E(i.TEXTURE_CUBE_MAP),it.__version=$.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function lt(C,v,B,H,$,it){let st=r.convert(B.format,B.colorSpace),J=r.convert(B.type),Q=_(B.internalFormat,st,J,B.normalized,B.colorSpace),rt=n.get(v),Et=n.get(B);if(Et.__renderTarget=v,!rt.__hasExternalTextures){let ut=Math.max(1,v.width>>it),ot=Math.max(1,v.height>>it);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,it,Q,ut,ot,v.depth,0,st,J,null):e.texImage2D($,it,Q,ut,ot,0,st,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,$,Et.__webglTexture,0,me(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,$,Et.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(C,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let H=v.depthTexture,$=H&&H.isDepthTexture?H.type:null,it=M(v.stencilBuffer,$),st=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(v),it,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(v),it,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,it,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,C)}else{let H=v.textures;for(let $=0;$<H.length;$++){let it=H[$],st=r.convert(it.format,it.colorSpace),J=r.convert(it.type),Q=_(it.internalFormat,st,J,it.normalized,it.colorSpace);ve(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(v),Q,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(v),Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(C,v,B){let H=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,v.depthTexture);let rt=r.convert(v.depthTexture.format),Et=r.convert(v.depthTexture.type),ut;v.depthTexture.format===Pn?ut=i.DEPTH_COMPONENT24:v.depthTexture.format===mi&&(ut=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ut,v.width,v.height,0,rt,Et,null)}}else tt(v.depthTexture,0);let it=$.__webglTexture,st=me(v),J=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Q=v.depthTexture.format===mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Pn)ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,it,0);else if(v.depthTexture.format===mi)ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(C){let v=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let H=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",$)};H.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=H}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)Se(v.__webglFramebuffer[H],C,H);else{let H=C.texture.mipmaps;H&&H.length>0?Se(v.__webglFramebuffer[0],C,0):Se(v.__webglFramebuffer,C,0)}else if(B){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=i.createRenderbuffer(),Ft(v.__webglDepthbuffer[H],C,!1);else{let $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,it)}}else{let H=C.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ft(v.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(C,v,B){let H=n.get(C);v!==void 0&&lt(H.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Bt(C)}function re(C){let v=C.texture,B=n.get(C),H=n.get(v);C.addEventListener("dispose",y);let $=C.textures,it=C.isWebGLCubeRenderTarget===!0,st=$.length>1;if(st||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=v.version,o.memory.textures++),it){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let Q=0;Q<v.mipmaps.length;Q++)B.__webglFramebuffer[J][Q]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(st)for(let J=0,Q=$.length;J<Q;J++){let rt=n.get($[J]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ve(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){let Q=$[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let rt=r.convert(Q.format,Q.colorSpace),Et=r.convert(Q.type),ut=_(Q.internalFormat,rt,Et,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),ot=me(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ut,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)lt(B.__webglFramebuffer[J][Q],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else lt(B.__webglFramebuffer[J],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(v)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let J=0,Q=$.length;J<Q;J++){let rt=$[J],Et=n.get(rt),ut=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Et.__webglTexture),Ot(ut,rt),lt(B.__webglFramebuffer,C,rt,i.COLOR_ATTACHMENT0+J,ut,0),p(rt)&&E(ut)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,H.__webglTexture),Ot(J,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)lt(B.__webglFramebuffer[Q],C,v,i.COLOR_ATTACHMENT0,J,Q);else lt(B.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,J,0);p(v)&&E(J),e.unbindTexture()}C.depthBuffer&&Bt(C)}function Gt(C){let v=C.textures;for(let B=0,H=v.length;B<H;B++){let $=v[B];if(p($)){let it=T(C),st=n.get($).__webglTexture;e.bindTexture(it,st),E(it),e.unbindTexture()}}}let ue=[],Ae=[];function $e(C){if(C.samples>0){if(ve(C)===!1){let v=C.textures,B=C.width,H=C.height,$=i.COLOR_BUFFER_BIT,it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(C),J=v.length>1;if(J)for(let rt=0;rt<v.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<v.length;rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let Et=n.get(v[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,B,H,0,0,B,H,$,i.NEAREST),c===!0&&(ue.length=0,Ae.length=0,ue.push(i.COLOR_ATTACHMENT0+rt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ue.push(it),Ae.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let rt=0;rt<v.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let Et=n.get(v[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function me(C){return Math.min(s.maxSamples,C.samples)}function ve(C){let v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(C){let v=o.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function Fe(C,v){let B=C.colorSpace,H=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Fs&&B!==Yn&&(Vt.getTransfer(B)===Kt?(H!==dn||$!==nn)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",B)),v}function Qt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=D,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=tt,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=et,this.rebindTextures=Yt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Z_(i,t){function e(n,s=Yn){let r,o=Vt.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===So)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fc)return i.BYTE;if(n===pc)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===Mo)return i.INT;if(n===yn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===_c)return i.ALPHA;if(n===xc)return i.RGB;if(n===dn)return i.RGBA;if(n===Pn)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===vc)return i.RED;if(n===Eo)return i.RED_INTEGER;if(n===gi)return i.RG;if(n===Ao)return i.RG_INTEGER;if(n===To)return i.RGBA_INTEGER;if(n===Qs||n===tr||n===er||n===nr)if(o===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wo||n===Co||n===Ro||n===Io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Lo||n===Do||n===No||n===Uo||n===ir||n===Fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Lo)return o===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===No)return r.COMPRESSED_R11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ir)return r.COMPRESSED_RG11_EAC;if(n===Fo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oo||n===Bo||n===zo||n===Go||n===Vo||n===Ho||n===ko||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===$o||n===Jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Go)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ho)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ko)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===jo||n===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return o===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ta||n===ea||n===sr||n===na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var $_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Xs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new De({vertexShader:$_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yc=class extends Ln{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new qc,p={},E=e.getContextAttributes(),T=null,_=null,M=[],b=[],w=new kt,y=null,A=null,P=new we;P.viewport=new ce;let R=new we;R.viewport=new ce;let L=[P,R],D=new go,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let q=M[Z];return q===void 0&&(q=new cs,M[Z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Z){let q=M[Z];return q===void 0&&(q=new cs,M[Z]=q),q.getGripSpace()},this.getHand=function(Z){let q=M[Z];return q===void 0&&(q=new cs,M[Z]=q),q.getHandSpace()};function W(Z){let q=b.indexOf(Z.inputSource);if(q===-1)return;let ht=M[q];ht!==void 0&&(ht.update(Z.inputSource,Z.frame,l||o),ht.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",tt);for(let Z=0;Z<M.length;Z++){let q=b[Z];q!==null&&(b[Z]=null,M[Z].disconnect(q))}I=null,O=null,m.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(T),f=null,u=null,d=null,s=null,_=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),A!==null){let Z=A.camera;Z.fov=A.fov,Z.zoom=A.zoom,Z.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",tt),E.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,wt=null,lt=null;E.depth&&(lt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=E.stencil?mi:Pn,wt=E.stencil?ps:yn);let Ft={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Ge(u.textureWidth,u.textureHeight,{format:dn,type:nn,depthTexture:new hi(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ht={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ge(f.framebufferWidth,f.framebufferHeight,{format:dn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(Z){for(let q=0;q<Z.removed.length;q++){let ht=Z.removed[q],wt=b.indexOf(ht);wt>=0&&(b[wt]=null,M[wt].disconnect(ht))}for(let q=0;q<Z.added.length;q++){let ht=Z.added[q],wt=b.indexOf(ht);if(wt===-1){for(let Ft=0;Ft<M.length;Ft++)if(Ft>=b.length){b.push(ht),wt=Ft;break}else if(b[Ft]===null){b[Ft]=ht,wt=Ft;break}if(wt===-1)break}let lt=M[wt];lt&&lt.connect(ht)}}let Y=new V,K=new V;function et(Z,q,ht){Y.setFromMatrixPosition(q.matrixWorld),K.setFromMatrixPosition(ht.matrixWorld);let wt=Y.distanceTo(K),lt=q.projectionMatrix.elements,Ft=ht.projectionMatrix.elements,Se=lt[14]/(lt[10]-1),Bt=lt[14]/(lt[10]+1),Yt=(lt[9]+1)/lt[5],re=(lt[9]-1)/lt[5],Gt=(lt[8]-1)/lt[0],ue=(Ft[8]+1)/Ft[0],Ae=Se*Gt,$e=Se*ue,me=wt/(-Gt+ue),ve=me*-Gt;if(q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ve),Z.translateZ(me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),lt[10]===-1)Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let F=Se+me,Fe=Bt+me,Qt=Ae-ve,C=$e+(wt-ve),v=Yt*Bt/Fe*F,B=re*Bt/Fe*F;Z.projectionMatrix.makePerspective(Qt,C,v,B,F,Fe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function St(Z,q){q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let q=Z.near,ht=Z.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(ht=m.depthFar)),D.near=R.near=P.near=q,D.far=R.far=P.far=ht,(I!==D.near||O!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,O=D.far),D.layers.mask=Z.layers.mask|6,P.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;let wt=Z.parent,lt=D.cameras;St(D,wt);for(let Ft=0;Ft<lt.length;Ft++)St(lt[Ft],wt);lt.length===2?et(D,P,R):D.projectionMatrix.copy(P.projectionMatrix),A===null&&Z.isPerspectiveCamera&&(A={camera:Z,fov:Z.fov,zoom:Z.zoom}),xt(Z,D,wt)};function xt(Z,q,ht){ht===null?Z.matrix.copy(q.matrixWorld):(Z.matrix.copy(ht.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=rs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Z){return p[Z]};let jt=null;function Ot(Z,q){if(h=q.getViewerPose(l||o),g=q,h!==null){let ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let wt=!1;ht.length!==D.cameras.length&&(D.cameras.length=0,wt=!0);for(let Bt=0;Bt<ht.length;Bt++){let Yt=ht[Bt],re=null;if(f!==null)re=f.getViewport(Yt);else{let ue=d.getViewSubImage(u,Yt);re=ue.viewport,Bt===0&&(t.setRenderTargetTextures(_,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(_))}let Gt=L[Bt];Gt===void 0&&(Gt=new we,Gt.layers.enable(Bt),Gt.viewport=new ce,L[Bt]=Gt),Gt.matrix.fromArray(Yt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Yt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(re.x,re.y,re.width,re.height),Bt===0&&(D.matrix.copy(Gt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),wt===!0&&D.cameras.push(Gt)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Bt=d.getDepthInformation(ht[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,s.renderState)}if(lt&&lt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Bt=0;Bt<ht.length;Bt++){let Yt=ht[Bt].camera;if(Yt){let re=p[Yt];re||(re=new Xs,p[Yt]=re);let Gt=d.getCameraImage(Yt);re.sourceTexture=Gt}}}}for(let ht=0;ht<M.length;ht++){let wt=b[ht],lt=M[ht];wt!==null&&lt!==void 0&&lt.update(wt,q,l||o)}jt&&jt(Z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let Wt=new _u;Wt.setAnimationLoop(Ot),this.setAnimationLoop=function(Z){jt=Z},this.dispose=function(){}}},K_=new ie,bu=new Pt;bu.set(-1,0,0,0,1,0,0,0,1);function j_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ec(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,T,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),T=E.envMap,_=E.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){let b=M.program;n.uniformBlockBinding(_,b)}function l(_,M){let b=s[_.id];b===void 0&&(m(_),b=h(_),s[_.id]=b,_.addEventListener("dispose",E));let w=M.program;n.updateUBOMapping(_,w);let y=t.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let M=d();_.__bindingPointIndex=M;let b=i.createBuffer(),w=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let M=s[_.id],b=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,A=b.length;y<A;y++){let P=b[y];if(Array.isArray(P))for(let R=0,L=P.length;R<L;R++)f(P[R],y,R,w);else f(P,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,M,b,w){if(x(_,M,b,w)===!0){let y=_.__offset,A=_.value;if(Array.isArray(A)){let P=0;for(let R=0;R<A.length;R++){let L=A[R],D=p(L);g(L,_.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function g(_,M,b){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,b)}function x(_,M,b,w){let y=_.value,A=M+"_"+b;if(w[A]===void 0)return typeof y=="number"||typeof y=="boolean"?w[A]=y:ArrayBuffer.isView(y)?w[A]=y.slice():w[A]=y.clone(),!0;{let P=w[A];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return w[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function m(_){let M=_.uniforms,b=0,w=16;for(let A=0,P=M.length;A<P;A++){let R=Array.isArray(M[A])?M[A]:[M[A]];for(let L=0,D=R.length;L<D;L++){let I=R[L],O=Array.isArray(I.value)?I.value:[I.value];for(let W=0,X=O.length;W<X;W++){let tt=O[W],Y=p(tt),K=b%w,et=K%Y.boundary,St=K+et;b+=et,St!==0&&w-St<Y.storage&&(b+=w-St),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=Y.storage}}}let y=b%w;return y>0&&(b+=w-y),_.__size=b,_.__cache={},this}function p(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",_),M}function E(_){let M=_.target;M.removeEventListener("dispose",E);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function T(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:T}}var tx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function ex(){return On===null&&(On=new Qr(tx,16,16,gi,sn),On.name="DFG_LUT",On.minFilter=Ie,On.magFilter=Ie,On.wrapS=Je,On.wrapT=Je,On.generateMipmaps=!1,On.needsUpdate=!0),On}var la=class{constructor(t={}){let{canvas:e=Hh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=nn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,m=new Set([To,Ao,Eo]),p=new Set([nn,yn,fs,ps,So,bo]),E=new Uint32Array(4),T=new Int32Array(4),_=new V,M=null,b=null,w=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,R=!1,L=null,D=null,I=null,O=null;this._outputColorSpace=Re;let W=0,X=0,tt=null,Y=-1,K=null,et=new ce,St=new ce,xt=null,jt=new Ut(0),Ot=0,Wt=e.width,Z=e.height,q=1,ht=null,wt=null,lt=new ce(0,0,Wt,Z),Ft=new ce(0,0,Wt,Z),Se=!1,Bt=new Li,Yt=!1,re=!1,Gt=new ie,ue=new V,Ae=new ce,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function ve(){return tt===null?q:1}let F=n;function Fe(S,N){return e.getContext(S,N)}let Qt,C,v,B,H,$,it,st,J,Q,rt,Et,ut,ot,At,Ct,Lt,U,at,j,ct,mt,nt;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",oe,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",pn,!1),F===null){let N="webgl2";if(F=Fe(N,S),F===null)throw Fe(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Tt()}catch(S){throw e.removeEventListener("webglcontextlost",oe,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),It("WebGLRenderer: "+S.message),S}function Tt(){Qt=new c0(F),Qt.init(),ct=new Z_(F,Qt),C=new jg(F,Qt,t,ct),v=new q_(F,Qt),C.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),D=F.createFramebuffer(),I=F.createFramebuffer(),O=F.createFramebuffer(),B=new u0(F),H=new L_,$=new Y_(F,Qt,v,H,C,ct,B),it=new a0(P),st=new fp(F),mt=new Jg(F,st),J=new l0(F,st,B,mt),Q=new f0(F,J,st,mt,B),U=new d0(F,C,$),At=new Qg(H),rt=new P_(P,it,Qt,C,mt,At),Et=new j_(P,H),ut=new N_,ot=new G_(Qt),Lt=new $g(P,it,v,Q,g,c),Ct=new X_(P,Q,C),nt=new Q_(F,B,C,v),at=new Kg(F,Qt,B),j=new h0(F,Qt,B),B.programs=rt.programs,P.capabilities=C,P.extensions=Qt,P.properties=H,P.renderLists=ut,P.shadowMap=Ct,P.state=v,P.info=B}x!==nn&&(A=new m0(x,e.width,e.height,a,s,r));let Mt=new Yc(P,F);this.xr=Mt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=Qt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Qt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(Wt,Z,!1))},this.getSize=function(S){return S.set(Wt,Z)},this.setSize=function(S,N,k=!0){if(Mt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=S,Z=N,e.width=Math.floor(S*q),e.height=Math.floor(N*q),k===!0&&(e.style.width=S+"px",e.style.height=N+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Wt*q,Z*q).floor()},this.setDrawingBufferSize=function(S,N,k){Wt=S,Z=N,q=k,e.width=Math.floor(S*k),e.height=Math.floor(N*k),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(x===nn){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(lt)},this.setViewport=function(S,N,k,z){S.isVector4?lt.set(S.x,S.y,S.z,S.w):lt.set(S,N,k,z),v.viewport(et.copy(lt).multiplyScalar(q).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,N,k,z){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,N,k,z),v.scissor(St.copy(Ft).multiplyScalar(q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(S){v.setScissorTest(Se=S)},this.setOpaqueSort=function(S){ht=S},this.setTransparentSort=function(S){wt=S},this.getClearColor=function(S){return S.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,k=!0){let z=0;if(S){let G=!1;if(tt!==null){let pt=tt.texture.format;G=m.has(pt)}if(G){let pt=tt.texture.type,_t=p.has(pt),ft=Lt.getClearColor(),vt=Lt.getClearAlpha(),bt=ft.r,Dt=ft.g,zt=ft.b;_t?(E[0]=bt,E[1]=Dt,E[2]=zt,E[3]=vt,F.clearBufferuiv(F.COLOR,0,E)):(T[0]=bt,T[1]=Dt,T[2]=zt,T[3]=vt,F.clearBufferiv(F.COLOR,0,T))}else z|=F.COLOR_BUFFER_BIT}N&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){e.removeEventListener("webglcontextlost",oe,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Lt.dispose(),ut.dispose(),ot.dispose(),H.dispose(),it.dispose(),Q.dispose(),mt.dispose(),nt.dispose(),rt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Pl),Mt.removeEventListener("sessionend",Ll),bi.stop()};function oe(S){S.preventDefault(),Sc("WebGLRenderer: Context Lost."),R=!0}function $t(){Sc("WebGLRenderer: Context Restored."),R=!1;let S=B.autoReset,N=Ct.enabled,k=Ct.autoUpdate,z=Ct.needsUpdate,G=Ct.type;Tt(),B.autoReset=S,Ct.enabled=N,Ct.autoUpdate=k,Ct.needsUpdate=z,Ct.type=G}function pn(S){It("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Cn(S){let N=S.target;N.removeEventListener("dispose",Cn),lf(N)}function lf(S){hf(S),H.remove(S)}function hf(S){let N=H.get(S).programs;N!==void 0&&(N.forEach(function(k){rt.releaseProgram(k)}),S.isShaderMaterial&&rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,k,z,G,pt){N===null&&(N=$e);let _t=G.isMesh&&G.matrixWorld.determinantAffine()<0,ft=ff(S,N,k,z,G);v.setMaterial(z,_t);let vt=k.index,bt=1;if(z.wireframe===!0){if(vt=J.getWireframeAttribute(k),vt===void 0)return;bt=2}let Dt=k.drawRange,zt=k.attributes.position,yt=Dt.start*bt,Jt=(Dt.start+Dt.count)*bt;pt!==null&&(yt=Math.max(yt,pt.start*bt),Jt=Math.min(Jt,(pt.start+pt.count)*bt)),vt!==null?(yt=Math.max(yt,0),Jt=Math.min(Jt,vt.count)):zt!=null&&(yt=Math.max(yt,0),Jt=Math.min(Jt,zt.count));let ye=Jt-yt;if(ye<0||ye===1/0)return;mt.setup(G,z,ft,k,vt);let le,ne=at;if(vt!==null&&(le=st.get(vt),ne=j,ne.setIndex(le)),G.isMesh)z.wireframe===!0?(v.setLineWidth(z.wireframeLinewidth*ve()),ne.setMode(F.LINES)):ne.setMode(F.TRIANGLES);else if(G.isLine){let Oe=z.linewidth;Oe===void 0&&(Oe=1),v.setLineWidth(Oe*ve()),G.isLineSegments?ne.setMode(F.LINES):G.isLineLoop?ne.setMode(F.LINE_LOOP):ne.setMode(F.LINE_STRIP)}else G.isPoints?ne.setMode(F.POINTS):G.isSprite&&ne.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))ne.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Oe=G._multiDrawStarts,gt=G._multiDrawCounts,We=G._multiDrawCount,qt=vt?st.get(vt).bytesPerElement:1,an=H.get(z).currentProgram.getUniforms();for(let Rn=0;Rn<We;Rn++)an.setValue(F,"_gl_DrawID",Rn),ne.render(Oe[Rn]/qt,gt[Rn])}else if(G.isInstancedMesh)ne.renderInstances(yt,ye,G.count);else if(k.isInstancedBufferGeometry){let Oe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,gt=Math.min(k.instanceCount,Oe);ne.renderInstances(yt,ye,gt)}else ne.render(yt,ye)};function Il(S,N,k,z){L!==null&&S.isNodeMaterial&&L.setObject(z,S),Yt===!0&&At.setState(S,k,!1),S.transparent===!0&&S.side===Ne&&S.forceSinglePass===!1?(S.side=qe,S.needsUpdate=!0,vr(S,N,z),S.side=Nn,S.needsUpdate=!0,vr(S,N,z),S.side=Ne):vr(S,N,z)}this.compile=function(S,N,k=null){k===null&&(k=S),L!==null&&L.renderStart(S,N,k),b=ot.get(k),b.init(N),y.push(b),k.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),S!==k&&S.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),re=this.localClippingEnabled,Yt=At.init(this.clippingPlanes,re),Yt===!0&&At.setGlobalState(this.clippingPlanes,N),L!==null&&Ct.render(b.state.shadowsArray,k,N);let z=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pt=G.material;if(pt)if(Array.isArray(pt))for(let _t=0;_t<pt.length;_t++){let ft=pt[_t];Il(ft,k,N,G),z.add(ft)}else Il(pt,k,N,G),z.add(pt)}),b=y.pop(),L!==null&&L.renderEnd(),z},this.compileAsync=function(S,N,k=null){let z=this.compile(S,N,k);return new Promise(G=>{function pt(){if(z.forEach(function(_t){let vt=H.get(_t).currentProgram;(vt===void 0||vt.isReady())&&z.delete(_t)}),z.size===0){G(S);return}setTimeout(pt,10)}Qt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let ba=null;function uf(S){ba&&ba(S)}function Pl(){bi.stop()}function Ll(){bi.start()}let bi=new _u;bi.setAnimationLoop(uf),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(S){ba=S,Mt.setAnimationLoop(S),S===null?bi.stop():bi.start()},Mt.addEventListener("sessionstart",Pl),Mt.addEventListener("sessionend",Ll),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(S,N);let k=Mt.enabled===!0&&Mt.isPresenting===!0,z=A!==null&&(tt===null||k)&&A.begin(P,tt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(N),N=Mt.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,N,tt),b=ot.get(S,y.length),b.init(N),b.state.textureUnits=$.getTextureUnits(),y.push(b),Gt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Bt.setFromProjectionMatrix(Gt,xn,N.reversedDepth),re=this.localClippingEnabled,Yt=At.init(this.clippingPlanes,re),M=ut.get(S,w.length),M.init(),w.push(M),Mt.enabled===!0&&Mt.isPresenting===!0){let _t=P.xr.getDepthSensingMesh();_t!==null&&Ea(_t,N,-1/0,P.sortObjects)}Ea(S,N,0,P.sortObjects),M.finish(),L!==null&&L.updateLights(b.state.lightsArray),P.sortObjects===!0&&M.sort(ht,wt),me=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,me&&Lt.addToRenderList(M,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&At.beginShadows();let G=b.state.shadowsArray;if(Ct.render(G,S,N),Yt===!0&&At.endShadows(),(z&&A.hasRenderPass())===!1){let _t=M.opaque,ft=M.transmissive;if(b.setupLights(),N.isArrayCamera){let vt=N.cameras;if(ft.length>0)for(let bt=0,Dt=vt.length;bt<Dt;bt++){let zt=vt[bt];Nl(_t,ft,S,zt)}me&&Lt.render(S);for(let bt=0,Dt=vt.length;bt<Dt;bt++){let zt=vt[bt];Dl(M,S,zt,zt.viewport)}}else ft.length>0&&Nl(_t,ft,S,N),me&&Lt.render(S),Dl(M,S,N)}tt!==null&&X===0&&($.updateMultisampleRenderTarget(tt),$.updateRenderTargetMipmap(tt)),z&&A.end(P),S.isScene===!0&&S.onAfterRender(P,S,N),mt.resetDefaultState(),Y=-1,K=null,y.pop(),y.length>0?(b=y[y.length-1],$.setTextureUnits(b.state.textureUnits),Yt===!0&&At.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,L!==null&&L.renderEnd()};function Ea(S,N,k,z){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Bt)){z&&Ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Gt);let _t=Q.update(S),ft=S.material;ft.visible&&M.push(S,_t,ft,k,Ae.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Bt))){let _t=Q.update(S),ft=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ae.copy(S.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ae.copy(_t.boundingSphere.center)),Ae.applyMatrix4(S.matrixWorld).applyMatrix4(Gt)),Array.isArray(ft)){let vt=_t.groups;for(let bt=0,Dt=vt.length;bt<Dt;bt++){let zt=vt[bt],yt=ft[zt.materialIndex];yt&&yt.visible&&M.push(S,_t,yt,k,Ae.z,zt,N)}}else ft.visible&&M.push(S,_t,ft,k,Ae.z,null,N)}}let pt=S.children;for(let _t=0,ft=pt.length;_t<ft;_t++)Ea(pt[_t],N,k,z)}function Dl(S,N,k,z){let{opaque:G,transmissive:pt,transparent:_t}=S;b.setupLightsView(k),Yt===!0&&At.setGlobalState(P.clippingPlanes,k),z&&v.viewport(et.copy(z)),G.length>0&&xr(G,N,k),pt.length>0&&xr(pt,N,k),_t.length>0&&xr(_t,N,k),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Nl(S,N,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){let yt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new Ge(1,1,{generateMipmaps:!0,type:yt?sn:nn,minFilter:Fn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Vt.workingColorSpace})}let pt=b.state.transmissionRenderTarget[z.id],_t=z.viewport||et;pt.setSize(_t.z*P.transmissionResolutionScale,_t.w*P.transmissionResolutionScale);let ft=P.getRenderTarget(),vt=P.getActiveCubeFace(),bt=P.getActiveMipmapLevel();P.setRenderTarget(pt),P.getClearColor(jt),Ot=P.getClearAlpha(),Ot<1&&P.setClearColor(16777215,.5),P.clear(),me&&Lt.render(k);let Dt=P.toneMapping;P.toneMapping=vn;let zt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),Yt===!0&&At.setGlobalState(P.clippingPlanes,z),xr(S,k,z),$.updateMultisampleRenderTarget(pt),$.updateRenderTargetMipmap(pt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Jt=0,ye=N.length;Jt<ye;Jt++){let le=N[Jt],{object:ne,geometry:Oe,material:gt,group:We}=le;if(gt.side===Ne&&ne.layers.test(z.layers)){let qt=gt.side;gt.side=qe,gt.needsUpdate=!0,Ul(ne,k,z,Oe,gt,We),gt.side=qt,gt.needsUpdate=!0,yt=!0}}yt===!0&&($.updateMultisampleRenderTarget(pt),$.updateRenderTargetMipmap(pt))}P.setRenderTarget(ft,vt,bt),P.setClearColor(jt,Ot),zt!==void 0&&(z.viewport=zt),P.toneMapping=Dt}function xr(S,N,k){let z=N.isScene===!0?N.overrideMaterial:null;for(let G=0,pt=S.length;G<pt;G++){let _t=S[G],{object:ft,geometry:vt,group:bt}=_t,Dt=_t.material;Dt.allowOverride===!0&&z!==null&&(Dt=z),ft.layers.test(k.layers)&&Ul(ft,N,k,vt,Dt,bt)}}function Ul(S,N,k,z,G,pt){L!==null&&G.isNodeMaterial&&L.setObject(S,G),S.onBeforeRender(P,N,k,z,G,pt),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(P,N,k,z,S,pt),G.transparent===!0&&G.side===Ne&&G.forceSinglePass===!1?(G.side=qe,G.needsUpdate=!0,P.renderBufferDirect(k,N,z,G,S,pt),G.side=Nn,G.needsUpdate=!0,P.renderBufferDirect(k,N,z,G,S,pt),G.side=Ne):P.renderBufferDirect(k,N,z,G,S,pt),S.onAfterRender(P,N,k,z,G,pt)}function vr(S,N,k){N.isScene!==!0&&(N=$e);let z=H.get(S),G=b.state.lights,pt=b.state.shadowsArray,_t=G.state.version,ft=rt.getParameters(S,G.state,pt,N,k,b.state.lightProbeGridArray),vt=rt.getProgramCacheKey(ft),bt=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let Dt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=it.get(S.envMap||z.environment,Dt),z.envMapRotation=z.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,bt===void 0&&(S.addEventListener("dispose",Cn),bt=new Map,z.programs=bt);let zt=bt.get(vt);if(zt!==void 0){if(z.currentProgram===zt&&z.lightsStateVersion===_t)return Ol(S,ft),zt}else ft.uniforms=rt.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,k,ft),S.onBeforeCompile(ft,P),zt=rt.acquireProgram(ft,vt),bt.set(vt,zt),z.uniforms=ft.uniforms;let yt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(yt.clippingPlanes=At.uniform),Ol(S,ft),z.needsLights=mf(S),z.lightsStateVersion=_t,z.needsLights&&(yt.ambientLightColor.value=G.state.ambient,yt.lightProbe.value=G.state.probe,yt.sunLights.value=G.state.sun,yt.sunLightShadows.value=G.state.sunShadow,yt.directionalLights.value=G.state.directional,yt.directionalLightShadows.value=G.state.directionalShadow,yt.spotLights.value=G.state.spot,yt.spotLightShadows.value=G.state.spotShadow,yt.rectAreaLights.value=G.state.rectArea,yt.ltc_1.value=G.state.rectAreaLTC1,yt.ltc_2.value=G.state.rectAreaLTC2,yt.pointLights.value=G.state.point,yt.pointLightShadows.value=G.state.pointShadow,yt.hemisphereLights.value=G.state.hemi,yt.sunShadowMatrix.value=G.state.sunShadowMatrix,yt.sunShadowCascade.value=G.state.sunShadowCascade,yt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,yt.spotLightMatrix.value=G.state.spotLightMatrix,yt.spotLightMap.value=G.state.spotLightMap,yt.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=zt,z.uniformsList=null,zt}function Fl(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=xs.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Ol(S,N){let k=H.get(S);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function df(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;_.setFromMatrixPosition(N.matrixWorld);for(let k=0,z=S.length;k<z;k++){let G=S[k];if(G.texture!==null&&G.boundingBox.containsPoint(_))return G}return null}function ff(S,N,k,z,G){N.isScene!==!0&&(N=$e),$.resetTextureUnits();let pt=N.fog,_t=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,ft=tt===null?P.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Vt.workingColorSpace,vt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,bt=it.get(z.envMap||_t,vt),Dt=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,zt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),yt=!!k.morphAttributes.position,Jt=!!k.morphAttributes.normal,ye=!!k.morphAttributes.color,le=vn;z.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(le=P.toneMapping);let ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Oe=ne!==void 0?ne.length:0,gt=H.get(z),We=b.state.lights;if(Yt===!0&&(re===!0||S!==K)){let ae=S===K&&z.id===Y;At.setState(z,S,ae)}let qt=!1;z.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==We.state.version||gt.outputColorSpace!==ft||G.isBatchedMesh&&gt.batching===!1||!G.isBatchedMesh&&gt.batching===!0||G.isBatchedMesh&&gt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&gt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&gt.instancing===!1||!G.isInstancedMesh&&gt.instancing===!0||G.isSkinnedMesh&&gt.skinning===!1||!G.isSkinnedMesh&&gt.skinning===!0||G.isInstancedMesh&&gt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&gt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&gt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&gt.instancingMorph===!1&&G.morphTexture!==null||gt.envMap!==bt||z.fog===!0&&gt.fog!==pt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==At.numPlanes||gt.numIntersection!==At.numIntersection)||gt.vertexAlphas!==Dt||gt.vertexTangents!==zt||gt.morphTargets!==yt||gt.morphNormals!==Jt||gt.morphColors!==ye||gt.toneMapping!==le||gt.morphTargetsCount!==Oe||!!gt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(qt=!0):(qt=!0,gt.__version=z.version);let an=gt.currentProgram;qt===!0&&(an=vr(z,N,G),L&&z.isNodeMaterial&&L.onUpdateProgram(z,an,gt));let Rn=!1,jn=!1,Gi=!1,te=an.getUniforms(),_e=gt.uniforms;if(v.useProgram(an.program)&&(Rn=!0,jn=!0,Gi=!0),z.id!==Y&&(Y=z.id,jn=!0),gt.needsLights){let ae=df(b.state.lightProbeGridArray,G);gt.lightProbeGrid!==ae&&(gt.lightProbeGrid=ae,jn=!0)}if(Rn||K!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),te.setValue(F,"projectionMatrix",S.projectionMatrix),te.setValue(F,"viewMatrix",S.matrixWorldInverse);let ti=te.map.cameraPosition;ti!==void 0&&ti.setValue(F,ue.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&te.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&te.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),K!==S&&(K=S,jn=!0,Gi=!0)}if(gt.needsLights&&(We.state.sunShadowMap.length>0&&te.setValue(F,"sunShadowMap",We.state.sunShadowMap,$),We.state.directionalShadowMap.length>0&&te.setValue(F,"directionalShadowMap",We.state.directionalShadowMap,$),We.state.spotShadowMap.length>0&&te.setValue(F,"spotShadowMap",We.state.spotShadowMap,$),We.state.pointShadowMap.length>0&&te.setValue(F,"pointShadowMap",We.state.pointShadowMap,$)),G.isSkinnedMesh){te.setOptional(F,G,"bindMatrix"),te.setOptional(F,G,"bindMatrixInverse");let ae=G.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),te.setValue(F,"boneTexture",ae.boneTexture,$))}G.isBatchedMesh&&(te.setOptional(F,G,"batchingTexture"),te.setValue(F,"batchingTexture",G._matricesTexture,$),te.setOptional(F,G,"batchingIdTexture"),te.setValue(F,"batchingIdTexture",G._indirectTexture,$),te.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&te.setValue(F,"batchingColorTexture",G._colorsTexture,$));let Qn=k.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&U.update(G,k,an),(jn||gt.receiveShadow!==G.receiveShadow)&&(gt.receiveShadow=G.receiveShadow,te.setValue(F,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(_e.envMapIntensity.value=N.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=ex()),jn){if(te.setValue(F,"toneMappingExposure",P.toneMappingExposure),gt.needsLights&&pf(_e,Gi),pt&&z.fog===!0&&Et.refreshFogUniforms(_e,pt),Et.refreshMaterialUniforms(_e,z,q,Z,b.state.transmissionRenderTarget[S.id]),gt.needsLights&&gt.lightProbeGrid){let ae=gt.lightProbeGrid;_e.probesSH.value=ae.texture,_e.probesMin.value.copy(ae.boundingBox.min),_e.probesMax.value.copy(ae.boundingBox.max),_e.probesResolution.value.copy(ae.resolution)}xs.upload(F,Fl(gt),_e,$)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xs.upload(F,Fl(gt),_e,$),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&te.setValue(F,"center",G.center),te.setValue(F,"modelViewMatrix",G.modelViewMatrix),te.setValue(F,"normalMatrix",G.normalMatrix),te.setValue(F,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let ae=z.uniformsGroups;for(let ti=0,Vi=ae.length;ti<Vi;ti++){let zl=ae[ti];nt.update(zl,an),nt.bind(zl,an)}}return an}function pf(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function mf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(S,N,k){let z=H.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=N,H.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let k=H.get(S);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,k=0){tt=S,W=N,X=k;let z=null,G=!1,pt=!1;if(S){let ft=H.get(S);if(ft.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(F.FRAMEBUFFER,ft.__webglFramebuffer),et.copy(S.viewport),St.copy(S.scissor),xt=S.scissorTest,v.viewport(et),v.scissor(St),v.setScissorTest(xt),Y=-1;return}else if(ft.__webglFramebuffer===void 0)$.setupRenderTarget(S);else if(ft.__hasExternalTextures)$.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Dt=S.depthTexture;if(ft.__boundDepthTexture!==Dt){if(Dt!==null&&H.has(Dt)&&(S.width!==Dt.image.width||S.height!==Dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(S)}}let vt=S.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(pt=!0);let bt=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(bt[N])?z=bt[N][k]:z=bt[N],G=!0):S.samples>0&&$.useMultisampledRTT(S)===!1?z=H.get(S).__webglMultisampledFramebuffer:Array.isArray(bt)?z=bt[k]:z=bt,et.copy(S.viewport),St.copy(S.scissor),xt=S.scissorTest}else et.copy(lt).multiplyScalar(q).floor(),St.copy(Ft).multiplyScalar(q).floor(),xt=Se;if(k!==0&&(z=D),v.bindFramebuffer(F.FRAMEBUFFER,z)&&v.drawBuffers(S,z),v.viewport(et),v.scissor(St),v.setScissorTest(xt),G){let ft=H.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft.__webglTexture,k)}else if(pt){let ft=N;for(let vt=0;vt<S.textures.length;vt++){let bt=H.get(S.textures[vt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+vt,bt.__webglTexture,k,ft)}}else if(S!==null&&k!==0){let ft=H.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ft.__webglTexture,k)}Y=-1};function Bl(S){let N=H.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=C.textureFormatReadable(S.format),N.__typeReadable=C.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,k,z,G,pt,_t,ft=0){if(!(S&&S.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(vt=vt[_t]),vt){v.bindFramebuffer(F.FRAMEBUFFER,vt);try{let bt=S.textures[ft],Dt=bt.format,zt=bt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let yt=Bl(bt);if(yt.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-z&&k>=0&&k<=S.height-G&&F.readPixels(N,k,z,G,ct.convert(Dt),ct.convert(zt),pt)}finally{let bt=tt!==null?H.get(tt).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(S,N,k,z,G,pt,_t,ft=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(vt=vt[_t]),vt)if(N>=0&&N<=S.width-z&&k>=0&&k<=S.height-G){v.bindFramebuffer(F.FRAMEBUFFER,vt);let bt=S.textures[ft],Dt=bt.format,zt=bt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let yt=Bl(bt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Jt),F.bufferData(F.PIXEL_PACK_BUFFER,pt.byteLength,F.STREAM_READ),F.readPixels(N,k,z,G,ct.convert(Dt),ct.convert(zt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let ye=tt!==null?H.get(tt).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,ye);let le=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Wh(F,le,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Jt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Jt),F.deleteSync(le),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,k=0){let z=Math.pow(2,-k),G=Math.floor(S.image.width*z),pt=Math.floor(S.image.height*z),_t=N!==null?N.x:0,ft=N!==null?N.y:0;$.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,_t,ft,G,pt),v.unbindTexture()},this.copyTextureToTexture=function(S,N,k=null,z=null,G=0,pt=0){let _t,ft,vt,bt,Dt,zt,yt,Jt,ye,le=S.isCompressedTexture?S.mipmaps[pt]:S.image;if(k!==null)_t=k.max.x-k.min.x,ft=k.max.y-k.min.y,vt=k.isBox3?k.max.z-k.min.z:1,bt=k.min.x,Dt=k.min.y,zt=k.isBox3?k.min.z:0;else{let _e=Math.pow(2,-G);_t=Math.floor(le.width*_e),ft=Math.floor(le.height*_e),S.isDataArrayTexture?vt=le.depth:S.isData3DTexture?vt=Math.floor(le.depth*_e):vt=1,bt=0,Dt=0,zt=0}z!==null?(yt=z.x,Jt=z.y,ye=z.z):(yt=0,Jt=0,ye=0);let ne=ct.convert(N.format),Oe=ct.convert(N.type),gt;N.isData3DTexture?($.setTexture3D(N,0),gt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?($.setTexture2DArray(N,0),gt=F.TEXTURE_2D_ARRAY):($.setTexture2D(N,0),gt=F.TEXTURE_2D),v.activeTexture(F.TEXTURE0),v.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let We=v.getParameter(F.UNPACK_ROW_LENGTH),qt=v.getParameter(F.UNPACK_IMAGE_HEIGHT),an=v.getParameter(F.UNPACK_SKIP_PIXELS),Rn=v.getParameter(F.UNPACK_SKIP_ROWS),jn=v.getParameter(F.UNPACK_SKIP_IMAGES);v.pixelStorei(F.UNPACK_ROW_LENGTH,le.width),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,le.height),v.pixelStorei(F.UNPACK_SKIP_PIXELS,bt),v.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),v.pixelStorei(F.UNPACK_SKIP_IMAGES,zt);let Gi=S.isDataArrayTexture||S.isData3DTexture,te=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let _e=H.get(S),Qn=H.get(N),ae=H.get(_e.__renderTarget),ti=H.get(Qn.__renderTarget);v.bindFramebuffer(F.READ_FRAMEBUFFER,ae.__webglFramebuffer),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Vi=0;Vi<vt;Vi++)Gi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(S).__webglTexture,G,zt+Vi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(N).__webglTexture,pt,ye+Vi)),F.blitFramebuffer(bt,Dt,_t,ft,yt,Jt,_t,ft,F.DEPTH_BUFFER_BIT,F.NEAREST);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||H.has(S)){let _e=H.get(S),Qn=H.get(N);v.bindFramebuffer(F.READ_FRAMEBUFFER,I),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let ae=0;ae<vt;ae++)Gi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_e.__webglTexture,G,zt+ae):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_e.__webglTexture,G),te?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qn.__webglTexture,pt,ye+ae):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qn.__webglTexture,pt),G!==0?F.blitFramebuffer(bt,Dt,_t,ft,yt,Jt,_t,ft,F.COLOR_BUFFER_BIT,F.NEAREST):te?F.copyTexSubImage3D(gt,pt,yt,Jt,ye+ae,bt,Dt,_t,ft):F.copyTexSubImage2D(gt,pt,yt,Jt,bt,Dt,_t,ft);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else te?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(gt,pt,yt,Jt,ye,_t,ft,vt,ne,Oe,le.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(gt,pt,yt,Jt,ye,_t,ft,vt,ne,le.data):F.texSubImage3D(gt,pt,yt,Jt,ye,_t,ft,vt,ne,Oe,le):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pt,yt,Jt,_t,ft,ne,Oe,le.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pt,yt,Jt,le.width,le.height,ne,le.data):F.texSubImage2D(F.TEXTURE_2D,pt,yt,Jt,_t,ft,ne,Oe,le);v.pixelStorei(F.UNPACK_ROW_LENGTH,We),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt),v.pixelStorei(F.UNPACK_SKIP_PIXELS,an),v.pixelStorei(F.UNPACK_SKIP_ROWS,Rn),v.pixelStorei(F.UNPACK_SKIP_IMAGES,jn),pt===0&&N.generateMipmaps&&F.generateMipmap(gt),v.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&$.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?$.setTextureCube(S,0):S.isData3DTexture?$.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$.setTexture2DArray(S,0):$.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){W=0,X=0,tt=null,v.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}};var Eu="lobby";var Cu=2.4/2+1.2;function ys(i,t,e,n,s){return{id:i,start:t,direction:e,normal:n,length:s}}function Ru(i,t,e,n){if(!n)return[{id:i,from:t,to:e}];let s=Math.sign(e-t);return[{id:`${i}-1`,from:t,to:-s*Cu},{id:`${i}-2`,from:s*Cu,to:e}]}function _x(i){let{id:t,width:e,nearZ:n,farZ:s,doors:r}=i,o=e/2,a=[ys(`${t}:left`,{x:-o,z:n-.6},{x:0,z:-1},{x:1,z:0},n-s-2*.6)];for(let c of Ru(`${t}:far`,-o+.6,o-.6,r.far))a.push(ys(c.id,{x:c.from,z:s},{x:1,z:0},{x:0,z:1},c.to-c.from));a.push(ys(`${t}:right`,{x:o,z:s+.6},{x:0,z:1},{x:-1,z:0},n-s-2*.6));for(let c of Ru(`${t}:near`,o-.6,-o+.6,r.near))a.push(ys(c.id,{x:c.from,z:n},{x:-1,z:0},{x:0,z:-1},c.from-c.to));return a}function xx(i){return i.partitions.flatMap((t,e)=>{let n=t.nearZ-t.farZ-2*.6,s=.3/2;return[ys(`${i.id}:partition-${e}-west`,{x:t.x-s,z:t.farZ+.6},{x:0,z:1},{x:-1,z:0},n),ys(`${i.id}:partition-${e}-east`,{x:t.x+s,z:t.nearZ-.6},{x:0,z:-1},{x:1,z:0},n)]})}function vx(i,t,e,n){return[-t/4,t/4].slice(0,i).map(r=>({x:r,nearZ:e-2.5,farZ:n+2.5,height:3.4}))}function $c(i,t,e,n,s){let r=s-e,o={...i,width:t,length:e,nearZ:s,farZ:r,partitions:vx(n,t,s,r)};return o.segments=[..._x(o),...xx(o)].filter(a=>a.length>=.5),o}function Iu(i){return i.segments.filter(t=>t.id!==i.anchorSegmentId).reduce((t,e)=>t+e.length,0)}function yx(i,t){let e=i.requiredSpan*1.1;for(let n=5.5;n<=12;n+=.5){let s=Math.min(18,Math.ceil(n*1.45/.5)*.5),r=$c(i,n,s,0,t);if(Iu(r)>=e)return r}for(let n=1;n<=2;n+=1){let s=$c(i,12,18,n,t);if(Iu(s)>=e)return s}throw new Error(`Room "${i.id}" cannot hold ${e.toFixed(1)} m of hanging`)}function Mx(i,t){let e=Math.min(.42*i,1.45+t/2+2.2);return Math.max(3.6,e,2.2*t)}function Sx(i){let t=i.map(e=>({minX:-e.width/2+.3,maxX:e.width/2-.3,minZ:e.farZ+.3,maxZ:e.nearZ-.3}));return i.slice(1).forEach((e,n)=>{t.push({minX:-2.4/2+.3,maxX:2.4/2-.3,minZ:e.nearZ-.3,maxZ:i[n].farZ+.3})}),t}function bx(i){return i.flatMap(t=>t.partitions.map(e=>({minX:e.x-.3/2-.3,maxX:e.x+.3/2+.3,minZ:e.farZ-.3,maxZ:e.nearZ+.3})))}function Pu(i){let t=[],e=$c({id:Eu,isLobby:!0,doors:{near:!1,far:i.length>0}},10,9,0,0);return e.ceiling=6,t.push(e),i.forEach((n,s)=>{let r=s===i.length-1,o=t[t.length-1].farZ-.3,a={near:!0,far:!r},c=r?`${n.id}:far`:void 0,l=yx({...n,isLobby:!1,doors:a,anchorSegmentId:c},o);l.ceiling=Mx(l.width,n.tallestWork),t.push(l)}),{rooms:t,walkable:Sx(t),blocked:bx(t),spawn:{x:0,z:e.farZ+3,yaw:0}}}function Lu(i,t){let e=.75*(i+t)/2;return Math.min(1.5,Math.max(.6,e))}function Du(i){return i.slice(1).map((t,e)=>Lu(i[e].width,t.width))}function cr(i){return i.reduce((t,e)=>t+e,0)}function lr(i){return i.length===0?0:cr(i.map(t=>t.width))+cr(Du(i))+.31}function Cx(i,t){if(i.length===0)return[];if(i.length===1){let c=t/2;return[Math.min(c,t-.31-i[0].width/2)]}let e=Du(i),s=(t-lr(i))/i.length,r=e.map(c=>Math.min(2.2,Math.max(c,c+s))),o=cr(i.map(c=>c.width))+cr(r)+.31,a=(t-o)/2;return i.map((c,l)=>{let h=a+c.width/2;return a+=c.width+(r[l]??0),h})}function Rx(i,t){let n=cr(t.map(l=>l.length))/lr(i),s=t.map(()=>[]),r=0,o=0,a=t[0].length;i.forEach((l,h)=>{let d=(r+l.width/2)*n;for(;d>a&&o<t.length-1;)o+=1,a+=t[o].length;s[o].push(l);let u=i[h+1];r+=l.width+(u?Lu(l.width,u.width):0)});let c=l=>lr(s[l])>t[l].length;for(let l=0;l<s.length-1;l+=1)for(;c(l);)s[l+1].unshift(s[l].pop());for(let l=s.length-1;l>0&&c(l);l-=1){let h=s[l-1];for(;c(l);)if(h.push(s[l].shift()),c(l-1)){s[l].unshift(h.pop());break}}if(s.some((l,h)=>c(h)))throw new Error(`Hanging overflow: ${i.length} works do not fit this room`);return s}function Ix(i){let t=i.map((n,s)=>({work:n,index:s})).sort((n,s)=>s.work.width-n.work.width||n.index-s.index),e=[];return t.forEach(({work:n},s)=>{s%2===1?e.push(n):e.unshift(n)}),e}function Nu(i,t,e){let n=[],s=i,r=t;if(e){let o=i.find(c=>c.slug===e.slug),a=t.find(c=>c.id===e.segmentId);if(!o||!a)throw new Error(`Unknown anchor ${e.slug} on ${e.segmentId}`);n.push({slug:o.slug,segmentId:a.id,along:a.length/2}),s=i.filter(c=>c!==o),r=t.filter(c=>c!==a)}return s.length===0||Rx(s,r).forEach((o,a)=>{let c=r[a],l=Ix(o);Cx(l,c.length).forEach((h,d)=>{n.push({slug:l[d].slug,segmentId:c.id,along:h})})}),n}var Xx=45,qx=.8,Yx=1,Zx=1.3,$x=1.1;function Jx(i){return Math.round(i*2)/2}function Kx(i){return i<Xx?qx:i<100?Yx:Zx}function jx(i){let t=Jx(i*.06);return Math.min(9,Math.max(4.5,t))}function Vu(i,t,e){let n=Math.max(t,e),s=n>=100,r=s?3.5:2;if(i==="tray"){let o=Kx(n),a=.8+o;return{gap:.8*.01,rebate:0,depth:(1+r+1.3)*.01,canvasBack:1*.01,canvasFront:(1+r)*.01,raise:0,outerWidth:(e+2*a)*.01,outerHeight:(t+2*a)*.01}}if(i==="cassetta"){let o=jx(n),a=s?7:5.5,c=o-.5,l=a-$x;return{gap:0,rebate:.5*.01,depth:a*.01,canvasBack:(l-r)*.01,canvasFront:l*.01,raise:0,outerWidth:(e+2*c)*.01,outerHeight:(t+2*c)*.01}}if(i==="mat"){let o=Math.min(12,Math.max(6,Math.ceil(n*.2))),a=e+2*1.5,c=t+2*1.5;return{gap:0,rebate:0,depth:3*.01,canvasBack:1*.01,canvasFront:(1+.15)*.01,raise:1.5/2*.01,outerWidth:(a+2*(o+2))*.01,outerHeight:(c+2*(o+2)+1.5)*.01,mat:{face:2*.01,windowWidth:a*.01,windowHeight:c*.01,thickness:.28*.01}}}throw new Error(`Unknown frame geometry "${i}"`)}function ov(i){let t=new Map(i.frames.map(e=>[e.id,e]));return i.paintings.map(e=>{let n=t.get(e.frame);if(!n)throw new Error(`Painting "${e.slug}" has unknown frame "${e.frame}"`);let s=e.widthCm/e.panels,r=Vu(n.geometry,e.heightCm,s),o=e.panels*r.outerWidth+(e.panels-1)*.05,a=Array.from({length:e.panels},(c,l)=>({offset:-o/2+r.outerWidth/2+l*(r.outerWidth+.05),widthCm:s,imageFrom:l/e.panels,imageTo:(l+1)/e.panels}));return{painting:e,profile:n,frame:r,panels:a,slug:e.slug,width:o}})}function av(i){return i.map((t,e)=>({work:t,index:e})).sort((t,e)=>t.work.painting.year-e.work.painting.year||t.index-e.index).map(({work:t})=>t)}function cv(i,t){let{painting:e}=i,{painting:n}=t;return e.year===n.year&&e.heightCm===n.heightCm&&e.widthCm===n.widthCm&&Math.max(e.heightCm,e.widthCm)<=41}function lv(i){let t=[];for(let e of i){let n=t[t.length-1];n&&cv(n.members[n.members.length-1],e)?(n.members.push(e),n.width+=.15+e.width):t.push({slug:e.slug,width:e.width,members:[e]})}return t}function ku(i){return i.reduce((t,e)=>e.frame.outerHeight>t.frame.outerHeight?e:t)}function Wu(i,t){return{x:i.start.x+i.direction.x*t,z:i.start.z+i.direction.z*t}}function hv(i){let t=Math.tan(55*Math.PI/360),e=1.18*Math.max(i.frame.outerHeight/(2*t),i.width/(2*t*1.6))+i.frame.depth;return Math.max(1,e/.75)}function uv(i,t,e,n){let s=Math.max(...i.members.map(hv)),r=Wu(t,e+i.width/2+.15+.16*s/2),o=(i.members.length-1)/2,a=e-i.width/2;return i.members.map((c,l)=>{let h=Wu(t,a+c.width/2);return a+=c.width+.15,{...c,roomId:n,setId:i.members.length>1?i.slug:null,wallId:t.id,centre:{x:h.x,y:Math.max(1.45,c.frame.outerHeight/2+.6),z:h.z},normal:t.normal,right:t.direction,label:{x:r.x,y:1.35+(o-l)*(.1*s+.02),z:r.z,scale:s}}})}function qu(i){let t=ov(i),e=i.rooms.map(a=>({room:a,units:lv(av(t.filter(c=>c.painting.room===a.id)))})).filter(({units:a})=>a.length>0),n=new Map,s=e[e.length-1];if(s){let a=ku(s.units.flatMap(c=>c.members));n.set(s.room.id,s.units.find(c=>c.members.includes(a)))}let r=Pu(e.map(({room:a,units:c})=>({...a,requiredSpan:lr(c.filter(l=>l!==n.get(a.id))),tallestWork:ku(c.flatMap(l=>l.members)).frame.outerHeight}))),o=e.flatMap(({room:a,units:c})=>{let l=r.rooms.find(g=>g.id===a.id),h=n.get(a.id),d=new Map(l.segments.map(g=>[g.id,g])),u=new Map(c.map(g=>[g.slug,g])),f=h&&{slug:h.slug,segmentId:l.anchorSegmentId};return Nu(c,l.segments,f).flatMap(g=>uv(u.get(g.slug),d.get(g.segmentId),g.along,a.id).map(x=>({...x,wallPaint:a.wall})))});return{building:r,artworks:o}}var de=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function Zn(i,t,e){let n=.9;return i<1&&(n*=.88+.12*de(0,1,i)),i>2.2&&(n*=1-.1*de(2.2,t,i)),n*=.8+.2*de(0,.22,i),n*=.86+.14*de(0,.35,t-i),n*=.86+.14*de(0,.6,e),n}function Yu(i,t){return(.84+.1*t)*(.78+.22*de(0,.7,i))}function el(i){return .74*(.85+.15*de(0,.5,i))}var ke={front:.93,top:1,bottom:.6,side:.82};function Zu(i){return i**2.2}function rn(i){let t=i;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function on(i,t=i){let e=document.createElement("canvas");return e.width=i,e.height=t,{element:e,context:e.getContext("2d")}}var nl=256;function da(i,t,e,n){let s=on(nl),r=s.context.createImageData(nl,nl);for(let o=0;o<r.data.length;o+=4){let a=(e()-.5)*n,c=a>0?255:0;r.data[o]=c,r.data[o+1]=c,r.data[o+2]=c,r.data[o+3]=Math.abs(a)*2}s.context.putImageData(r,0,0),i.fillStyle=i.createPattern(s.element,"repeat"),i.fillRect(0,0,t[0],t[1])}var dv=12;function il(i,t,e,n,s){da(i,t,e,40*s);let r=Math.round(t[0]*t[1]/n**2*dv*s);for(let o=0;o<r;o+=1){let a=e()*t[0],c=e()*t[1],l=(.002+e()*.004)*n;for(let[h,d]of[[0,0],[-t[0],0],[0,-t[1]],[-t[0],-t[1]]])i.fillStyle=`rgba(96, 92, 86, ${.3*s})`,i.beginPath(),i.arc(a+h,c+d,l,0,Math.PI*2),i.fill(),i.fillStyle=`rgba(250, 248, 242, ${.25*s})`,i.fillRect(a+h-l,c+d+l*.6,l*2,.8)}}var Ue=(i,t=1)=>{let e=Math.round(i*255);return`rgba(${e}, ${e}, ${e}, ${t})`};function fv(){let{element:t,context:e}=on(1024),n=rn(7),s=1024/10;for(let r=0;r<10;r+=1){let o=r*s,a=-n()*1024;for(;a<1024;){let c=1024*(.6+n()*.4);e.fillStyle=Ue(.9+n()*.06);for(let l of[0,1024])e.fillRect(a+l,o,c,s);e.fillStyle=Ue(.55,.5),e.fillRect(a+c-1,o,1.5,s),a+=c}for(let c=0;c<26;c+=1){let l=o+n()*s,h=1+n()*3,d=1+Math.floor(n()*3);e.strokeStyle=n()>.5?Ue(.4,.06+n()*.06):Ue(1,.08),e.lineWidth=.6+n()*1.4,e.beginPath();for(let u=0;u<=1024;u+=16){let f=Math.sin(u/1024*d*Math.PI*2+r)*h;u===0?e.moveTo(u,l+f):e.lineTo(u,l+f)}e.stroke()}e.fillStyle=Ue(.45,.55),e.fillRect(0,o,1024,1.5)}return t}var pv=.6;function mv(){let{element:t,context:e}=on(512),n=rn(17);e.fillStyle=Ue(.9),e.fillRect(0,0,512,512);for(let s=0;s<14;s+=1){let r=n()*512,o=8+n()*30;e.fillStyle=Ue(n()>.5?1:.75,.06+n()*.05);for(let a of[-512,0,512])e.fillRect(0,r+a,512,o)}for(let s=0;s<150;s+=1){let r=n()*512,o=.5+n()*2.5,a=1+Math.floor(n()*2),c=n()*Math.PI*2;e.strokeStyle=Ue(.35,.08+n()*.14),e.lineWidth=.5+n()*1.1;for(let l of[-512,0,512]){e.beginPath();for(let h=0;h<=512;h+=8){let d=Math.sin(h/512*a*Math.PI*2+c)*o;h===0?e.moveTo(h,r+l+d):e.lineTo(h,r+l+d)}e.stroke()}}for(let s=0;s<260;s+=1)e.fillStyle=Ue(1,.12+n()*.12),e.fillRect(n()*512,n()*512,4+n()*14,1+n());return t}var $u=2.4;function gv(){let{element:t,context:e}=on(1024),n=rn(11),s=1024/$u,r=1.2*s,o=.6*s;e.fillStyle=Ue(.9),e.fillRect(0,0,1024,1024);let a=(h,d,u,f,g)=>{e.fillStyle=Ue(.4,.35),e.fillRect(h,d,g?2:u,g?f:2),e.fillStyle=Ue(1,.12),e.fillRect(g?h+2:h,g?d:d+2,g?1:u,g?f:1)},c=Math.round(1024/o),l=Math.round(1024/r);for(let h=0;h<c;h+=1){let d=h*o;for(let u=0;u<l;u+=1){let f=h%2*r/2+u*r,g=.86+n()*.08,x=f+n()*r,m=d+n()*o,p=n()>.5?1:.6;for(let E of[-1024,0]){let T=f+E;e.fillStyle=Ue(g),e.fillRect(T,d,r,o);let _=e.createRadialGradient(x+E,m,0,x+E,m,r*.7);_.addColorStop(0,Ue(p,.05)),_.addColorStop(1,Ue(.8,0)),e.fillStyle=_,e.fillRect(T,d,r,o),a(T,d,0,o,!0)}}a(0,d,1024,0,!1)}return il(e,[1024,1024],n,s,.5),t}function _v(){let{element:t,context:e}=on(256),n=rn(3),s=256/3;for(let r=0;r<3;r+=1)for(let o=0;o<3;o+=1)e.fillStyle=Ue(.96+n()*.04),e.fillRect(o*s,r*s,s,s),e.fillStyle=Ue(.8,.2),e.fillRect(o*s,r*s,s,1),e.fillRect(o*s,r*s,1,s);return t}function xv(){let{element:t,context:e}=on(64),n=e.createImageData(64,64),s=r=>de(0,1,Math.min(r+.5,64-r-.5)/(64/2));for(let r=0;r<64;r+=1)for(let o=0;o<64;o+=1){let a=Math.round(s(o)*s(r)*255),c=(r*64+o)*4;n.data.set([a,a,a,255],c)}return e.putImageData(n,0,0),t}function bn(i,t,e){let[n,s]=Array.isArray(t)?t:[t,t],r=new li(i);return r.wrapS=Ri,r.wrapT=Ri,r.repeat.set(1/n,1/s),r.colorSpace=Re,r.anisotropy=e,r.onUpdate=()=>{i.width=0,i.height=0},r}var _i={polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4},vv="#F4F4F2",yv=.01,Mv=.22;function Sv(){return new De({transparent:!0,depthWrite:!1,uniforms:{sheen:{value:new Ut(vv)},least:{value:yv},most:{value:Mv}},vertexShader:`
      varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      uniform vec3 sheen;
      uniform float least;
      uniform float most;
      varying vec3 vWorld;
      void main() {
        vec3 normal = normalize(cross(dFdx(vWorld), dFdy(vWorld)));
        float facing = abs(dot(normalize(vWorld - cameraPosition), normal));
        gl_FragColor = vec4(sheen, least + (most - least) * pow(1.0 - facing, 3.0));
        #include <colorspace_fragment>
      }
    `})}function Ju(i){let t=(n,s={})=>new Le({vertexColors:!0,map:n,side:Nn,dithering:!0,...s}),e=new li(xv());return{plain:t(null),plainOnTheWall:t(null,_i),oak:t(bn(fv(),2,i)),frameOak:t(bn(mv(),pv,i),_i),concrete:t(bn(gv(),$u,i)),gilt:t(bn(_v(),.24,i),_i),shadow:new Le({color:0,alphaMap:e,transparent:!0,opacity:.15,depthWrite:!1,..._i}),frameGlass:Sv()}}function En(){return{positions:[],uvs:[],colors:[],indices:[]}}var fa=new Ut;function fe(i){return fa.set(i),[fa.r,fa.g,fa.b]}function xe(i,t,e=[]){let n=[0,i,...e.filter(s=>s>0&&s<i)];for(let s=t;s<i;s+=t)n.push(s);return[...new Set(n.map(s=>Math.round(s*1e3)/1e3))].sort((s,r)=>s-r)}function An(i,t,e,n,s){i.positions.push(...t),i.uvs.push(...e);let r=Zu(s);return i.colors.push(n[0]*r,n[1]*r,n[2]*r),i.positions.length/3-1}function pe(i,{origin:t,uAxis:e,vAxis:n,uBreaks:s,vBreaks:r,albedo:o,light:a,skip:c,uvOffset:l=[0,0],swapUv:h=!1}){let d=i.positions.length/3;for(let f of r)for(let g of s){let x=t.map((E,T)=>E+e[T]*g+n[T]*f),m=g+l[0],p=f+l[1];An(i,x,h?[p,m]:[m,p],o,a?a(g,f):1)}let u=s.length;for(let f=0;f<r.length-1;f+=1)for(let g=0;g<u-1;g+=1){let x=(s[g]+s[g+1])/2,m=(r[f]+r[f+1])/2;if(c&&c(x,m))continue;let p=d+f*u+g,E=p+1,T=p+u+1,_=p+u;i.indices.push(p,E,T,p,T,_)}}function ur(i,{corners:t,uvs:e,albedo:n,lights:s}){let[r,o,a,c]=t.map((l,h)=>An(i,l,e[h],n,s[h]));i.indices.push(r,o,a,r,a,c)}var pa=(i,t)=>i.map(e=>e*t),bv=(...i)=>i.reduce((t,e)=>t.map((n,s)=>n+e[s]));function Ye(i,{origin:t,right:e,up:n,out:s,min:r,max:o,albedo:a,faces:c,grainAlongV:l=!1,uvOffset:h=[.05,.05]}){let d=(E,T,_)=>bv(t,pa(e,E),pa(n,T),pa(s,_)),u=o[0]-r[0],f=o[1]-r[1],g=o[2]-r[2],x=(E,T,_,M,b,w)=>pe(i,{origin:E,uAxis:T,vAxis:_,uBreaks:[0,M],vBreaks:[0,b],albedo:a,light:()=>w,uvOffset:h,swapUv:l}),m=pa(s,-1),p=new Set(c??["front","top","bottom","left","right"]);p.has("front")&&x(d(r[0],r[1],o[2]),e,n,u,f,ke.front),p.has("top")&&x(d(r[0],o[1],o[2]),e,m,u,g,ke.top),p.has("bottom")&&x(d(r[0],r[1],r[2]),e,s,u,g,ke.bottom),p.has("right")&&x(d(o[0],r[1],o[2]),m,n,g,f,ke.side),p.has("left")&&x(d(r[0],r[1],r[2]),s,n,g,f,ke.side)}function $n(i){let t=new Ve;return t.setAttribute("position",new ge(i.positions,3)),t.setAttribute("uv",new ge(i.uvs,2)),t.setAttribute("color",new ge(i.colors,3)),t.setIndex(new Ii(i.indices,1)),t.computeBoundingSphere(),t}function ma(i){return i.indices.length===0}var dr=1.8,fr=.9;function rl(i,t,e,{count:n,smallest:s,largest:r,colours:o}){for(let a=0;a<n;a+=1){let c=e()*t[0],l=e()*t[1],h=s+e()*(r-s),d=o[Math.floor(e()*o.length)];for(let u of[-t[0],0,t[0]])for(let f of[-t[1],0,t[1]]){let g=c+u,x=l+f;if(g+h<0||g-h>t[0]||x+h<0||x-h>t[1])continue;let m=i.createRadialGradient(g,x,0,g,x,h);m.addColorStop(0,d),m.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=m,i.fillRect(g-h,x-h,h*2,h*2)}}}function Ev(){let{element:t,context:e}=on(512),n=rn(31);return e.fillStyle="rgb(88, 108, 52)",e.fillRect(0,0,512,512),rl(e,[512,512],n,{count:900,smallest:6,largest:40,colours:["rgba(122, 140, 66, 0.5)","rgba(62, 82, 38, 0.45)","rgba(140, 150, 80, 0.35)"]}),da(e,[512,512],n,40),t}var xi=3,sl=284;function Av(){let i=Math.round(dr*sl),t=Math.round(fr*sl),e=[i*xi,t*xi],{element:n,context:s}=on(...e),r=rn(41);for(let o=0;o<xi;o+=1)for(let a=0;a<xi;a+=1){let c=a*i,l=o*t,h=198+Math.round(r()*14);s.fillStyle=`rgb(${h}, ${h-3}, ${h-9})`,s.fillRect(c,l,i,t);let d=s.createRadialGradient(c+r()*i,l+r()*t,0,c+i/2,l+t/2,i*.8);d.addColorStop(0,`rgba(${r()>.5?"232, 230, 224":"170, 166, 158"}, 0.12)`),d.addColorStop(1,"rgba(200, 196, 188, 0)"),s.fillStyle=d,s.fillRect(c,l,i,t)}rl(s,e,r,{count:260,smallest:30,largest:120,colours:["rgba(182, 178, 170, 0.04)","rgba(226, 224, 218, 0.05)"]}),il(s,e,r,sl,1);for(let o=0;o<40;o+=1){let a=r()*e[0],c=r()*e[1],l=e[1]*(.3+r()*.6),h=2+r()*6,d=s.createLinearGradient(0,c,0,c+l);d.addColorStop(0,"rgba(120, 116, 108, 0)"),d.addColorStop(.2,`rgba(120, 116, 108, ${.04+r()*.05})`),d.addColorStop(1,"rgba(120, 116, 108, 0)");for(let u of[-e[1],0])s.save(),s.translate(0,u),s.fillStyle=d,s.fillRect(a,c,h,l),s.restore()}for(let o=0;o<xi;o+=1)for(let a=0;a<xi;a+=1){let c=a*i,l=o*t;s.fillStyle="rgba(118, 114, 106, 0.15)",s.fillRect(c,l,i,1.5),s.fillRect(c,l,1.5,t),s.fillStyle="rgba(255, 255, 255, 0.25)",s.fillRect(c,l+1.5,i,1),s.fillRect(c+1.5,l,1,t);for(let h of[1/6,1/2,5/6])for(let d of[1/4,3/4]){let u=c+h*i,f=l+d*t;s.fillStyle="rgba(150, 146, 138, 0.5)",s.beginPath(),s.arc(u,f,7,0,Math.PI*2),s.fill(),s.fillStyle="rgb(84, 81, 76)",s.beginPath(),s.arc(u,f,4.5,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(240, 238, 232, 0.7)",s.lineWidth=1.2,s.beginPath(),s.arc(u,f,5,Math.PI*.15,Math.PI*.85),s.stroke()}}return n}var Tv=.5;function wv(){let{element:t,context:e}=on(512),n=rn(83);e.fillStyle="rgb(236, 236, 232)",e.fillRect(0,0,512,512),rl(e,[512,512],n,{count:120,smallest:20,largest:90,colours:["rgba(150, 150, 146, 0.12)","rgba(240, 240, 236, 0.12)","rgba(170, 176, 140, 0.12)"]}),da(e,[512,512],n,120);for(let s=0;s<5e3;s+=1){let r=n()>.45;e.fillStyle=r?`rgba(60, 60, 58, ${.2+n()*.4})`:`rgba(255, 255, 250, ${.2+n()*.4})`;let o=1+n()*2.5,a=n()*512,c=n()*512;for(let[l,h]of[[0,0],[-512,0],[0,-512],[-512,-512]])e.fillRect(a+l,c+h,o,o*(.6+n()*.8))}for(let s=0;s<140;s+=1){let r=n()*512,o=n()*512,a=1.2+n()*2.5;e.fillStyle="rgba(70, 68, 64, 0.55)",e.beginPath(),e.arc(r,o,a,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255, 255, 250, 0.4)",e.lineWidth=.8,e.beginPath(),e.arc(r,o,a+.4,Math.PI*.15,Math.PI*.85),e.stroke()}return t}function Cv(){let{element:e,context:n}=on(1024,256),s=rn(61);for(let[r,o,a]of[[70,26,"150, 168, 160"],[110,22,"118, 138, 122"]]){for(let c=0;c<o;c+=1){let l=s()*1024,h=50+s()*60,d=r+h*.6+s()*20;for(let u of[-1024,0,1024]){let f=n.createRadialGradient(l+u,d,h*.35,l+u,d,h);f.addColorStop(0,`rgba(${a}, 0.9)`),f.addColorStop(1,`rgba(${a}, 0)`),n.fillStyle=f,n.fillRect(l+u-h,d-h,h*2,h*2)}}n.fillStyle=`rgba(${a}, 0.9)`,n.fillRect(0,r+90,1024,256)}return e}function Rv(i){let t=bn(Cv(),1,i);return t.wrapT=Je,t}function Ku(i){let t=(e,n={})=>new Le({vertexColors:!0,map:e,side:Ne,...n});return{solid:t(null),stone:t(bn(wv(),Tv,i)),moss:t(bn(Ev(),2,i)),concrete:t(bn(Av(),[dr*xi,fr*xi],i)),woods:t(Rv(i),{transparent:!0,depthWrite:!1}),glass:new Le({color:14674406,transparent:!0,opacity:.06,depthWrite:!1,side:Ne})}}var ju=["#7E9450","#8FA45A","#6F8846","#9AAE6A"],Iv="#B4B46A",Pv="#C8CDB6",Lv="#8C9A58",Dv=["#5E7A35","#6E8A3C","#7F9846","#55702F","#688A40","#7A9040"],Nv=["#A8A055","#B9A76A"],Uv=.06,ol=8,ga=.012,Qu=1.1,Fv=.05,Ov=.5,Bv=2,zv=1.3,td=.15,al=.33,cl=3,_a=.15,Tn=(i,t)=>i.map((e,n)=>e+t[n]),zn=(i,t)=>i.map(e=>e*t),ll=([i,t,e],[n,s,r])=>[t*r-e*s,e*n-i*r,i*s-t*n],Gv=(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2];function pr(i){return zn(i,1/Math.hypot(...i))}var Vv=pr([.35,-.45,1]),ed=pr([.35,-.45,0]),nd=.25,Hv=.2,kv=.12,Wv=7,id=[.7,.4];function rd({count:i,fromU:t,toU:e,near:n,far:s,stones:r,next:o}){let a=Array.from({length:Math.max(2,Math.round(i/Wv))},()=>[t+o()*(e-t),n+o()*(s-n)]),c=()=>(o()+o()+o()-1.5)*1.4,l=[];for(;l.length<i;){let[h,d]=a[Math.floor(o()*a.length)],u=h+c()*id[0],f=d+c()*id[1],g=u<t||u>e||f<n||f>s,x=l.some(E=>Math.hypot(E.u-u,E.fromGlass-f)<kv),m=r.some(E=>Math.hypot(E.u-u,E.fromGlass-f)<E.radius+.25);if(g||x||m)continue;let p=o();p<nd?l.push({u,fromGlass:f,height:7.5+o()*2,radius:.05+o()*.03}):p<nd+Hv?l.push({u,fromGlass:f,height:3.5+o()*2,radius:.018+o()*.012}):l.push({u,fromGlass:f,height:5.5+o()*3.5,radius:.02+o()**2*.03})}return l}function od(i,t,e,n,s){let r=([a,c,l])=>l>n.wallHeight||a>_a&&a<t.length-_a&&c>_a&&c<n.depth-_a,o=([a,c,l],h,d)=>An(i,t.point(a,c,l),[0,0],h,d);for(let a of e){let c=[a.u,a.fromGlass,t.groundAt(a.u,a.fromGlass)],l=Math.PI+(s()-.5)*3,h=[Math.sin(l),Math.cos(l)].map(p=>p*(.2+.8*s())*zv),d=(n.wallHeight/a.height)**2;r([a.u+h[0]*d,a.fromGlass+h[1]*d,0])||(h[0]=-h[0]);let{centreAt:u,radiusAt:f,nodes:g}=Xv(o,i,c,a,h,s),x=1-.22*de(n.depth-1.5,n.depth-.2,a.fromGlass),m=s()*Math.PI*2;for(let p of g){if(p<a.height*al)continue;m+=Math.PI+(s()-.5)*.8;let T=(.45+.7*(1-(p-a.height*al)/(a.height*(1-al))))*(.7+s()*.6);for(let[_,M]of[[-.3,1],[.3,.6]]){let b=m+_,w=Tn(u(p),[Math.cos(b)*f(p),Math.sin(b)*f(p),.01]);qv(o,i,{start:w,heading:b,length:T*M,shade:x,fits:r},s)}}}}function Xv(i,t,[e,n,s],{height:r,radius:o},a,c){let l=fe(ju[Math.floor(c()*ju.length)]),[h,d]=[Iv,Pv].map(fe),u=[c()*td,c()*td],f=c()*Math.PI*2,g=T=>{let _=T/r,M=_**2,b=Math.sin(_*Math.PI*1.5+f)*_;return[e+a[0]*M+u[0]*b,n+a[1]*M+u[1]*b,s+T]},x=T=>o*(1-Ov*(T/r)**Bv),m=(T,{proud:_=1,tone:M=0,brightness:b=1}={})=>{let w=T/r,y=g(T),P=l.map((D,I)=>D+(h[I]-D)*w*.6).map((D,I)=>D+(d[I]-D)*M),R=x(T)*_,L=(.6+.4*de(0,5,T))*b;return Array.from({length:ol},(D,I)=>{let O=I/ol*Math.PI*2,W=Math.cos(O)*ed[0]+Math.sin(O)*ed[1];return i([y[0]+Math.cos(O)*R,y[1]+Math.sin(O)*R,y[2]],P,L*(.74+.26*W))})},p=[],E=[m(0)];for(let T=.25+c()*.15;T<r;T+=.28+c()*.1)p.push(T),E.push(m(T-Fv),m(T-ga,{tone:.55}),m(T-ga/2,{proud:Qu,tone:.3,brightness:1.12}),m(T+ga/2,{proud:Qu,brightness:1.12}),m(T+ga));return E.push(m(r)),ad(t,E,ol),{centreAt:g,radiusAt:x,nodes:p}}function ad(i,t,e){for(let n=0;n<t.length-1;n+=1){let[s,r]=[t[n],t[n+1]];for(let o=0;o<e;o+=1){let a=(o+1)%e;i.indices.push(s[o],r[o],r[a],s[o],r[a],s[a])}}}var cd=i=>.55+.45*de(1.5,7,i),hl=.8,ul=1.1,dl=4;function qv(i,t,{start:e,heading:n,length:s,shade:r,fits:o},a){let c=[Math.cos(n),Math.sin(n),0],l=(g,x)=>{let m=hl-ul*(g/x),p=(Math.sin(hl)-Math.sin(m))*x/ul,E=(Math.cos(m)-Math.cos(hl))*x/ul;return Tn(e,[c[0]*p,c[1]*p,E])},h=s;for(;h>.15&&!o(l(h,h));)h*=.85;if(!o(l(h,h)))return;let d=Array.from({length:dl+1},(g,x)=>l(h*x/dl,h)),u=fe(Lv),f=d.map((g,x)=>{let m=.004*(1-.6*(x/dl));return Array.from({length:cl},(p,E)=>{let T=E/cl*Math.PI*2,_=Tn(zn([-c[1],c[0],0],Math.cos(T)*m),[0,0,Math.sin(T)*m]);return i(Tn(g,_),u,cd(g[2])*r*.9)})});ad(t,f,cl);for(let g=h*(.3+a()*.15);g<h;g+=.07+a()*.05)sd(i,t,{at:l(g,h),out:c,count:2+Math.floor(a()*3),shade:r,fits:o},a);sd(i,t,{at:l(h,h),out:c,count:4+Math.floor(a()*4),shade:r,fits:o},a)}function sd(i,t,{at:e,out:n,count:s,shade:r,fits:o},a){let c=[-n[1],n[0],0];for(let l=0;l<s;l+=1){let h=(s===1?0:(l/(s-1)-.5)*2.2)+(a()-.5)*.5,d=.25+a()*.6,u=Tn(zn(n,Math.cos(h)),zn(c,Math.sin(h))),f=pr([u[0]*Math.cos(d),u[1]*Math.cos(d),-Math.sin(d)]),g=.12+a()*.1;o(Tn(e,zn(f,g)))&&Kv(i,t,{base:e,direction:f,length:g,roll:(a()-.5)*.8,shade:r},a)}}var Yv=[[0,.2],[.3,1],[.65,.75],[1,0]],Zv=.13,$v=.25,Jv=.35;function Kv(i,t,{base:e,direction:n,length:s,roll:r,shade:o},a){let c=a()<Uv?Nv:Dv,l=fe(c[Math.floor(a()*c.length)]),h=pr(ll(n,[0,0,1])),d=Tn(zn(h,Math.cos(r)),zn(ll(h,n),Math.sin(r))),u=pr(ll(d,n)),f=Math.abs(Gv(u,Vv)),g=cd(e[2])*o*(.72+.28*f)*(.92+a()*.16),x=Yv.map(([m,p])=>{let E=Tn(Tn(e,zn(n,m*s)),[0,0,-Jv*s*m*m]),T=p*Zv*s*.5,_=M=>Tn(Tn(E,zn(d,M*T)),zn(u,$v*T));return[i(_(-1),l,g*.94),i(E,l.map(M=>M*1.15),g),i(_(1),l,g*.94)]});for(let m=0;m<x.length-1;m+=1){let[p,E]=[x[m],x[m+1]];t.indices.push(p[0],p[1],E[1],p[0],E[1],E[0]),t.indices.push(p[1],p[2],E[2],p[1],E[2],E[1])}}var jv=.6,Qv=.04,ty=2048,ey=4,ny=20,iy=.003,fl=new Set,sy={mirrorPosition:new V,cameraPosition:new V,normal:new V,rotation:new ie,view:new V,lookAt:new V,aim:new V,plane:new tn,clip:new ce,q:new ce};function ld(i,t){let e=new Ge(1,1,{type:sn,samples:ey}),n=new ie,s=new we,r=new De({transparent:!0,depthWrite:!0,side:Ne,uniforms:{reflection:{value:e.texture},textureMatrix:{value:n},maxSheen:{value:jv},leastSheen:{value:Qv}},vertexShader:`
      uniform mat4 textureMatrix;
      varying vec4 vReflection;
      varying vec3 vWorld;
      void main() {
        vReflection = textureMatrix * vec4(position, 1.0);
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      uniform sampler2D reflection;
      uniform float maxSheen;
      uniform float leastSheen;
      varying vec4 vReflection;
      varying vec3 vWorld;
      void main() {
        vec3 view = normalize(vWorld - cameraPosition);
        vec3 normal = normalize(cross(dFdx(vWorld), dFdy(vWorld)));
        float facing = abs(dot(view, normal));
        // Schlick's curve, eased from the fifth power so the sheen already
        // shows at the angles a visitor looks at the glass from.
        float fresnel = 0.04 + 0.96 * pow(1.0 - facing, 2.5);
        vec3 reflected = texture2DProj(reflection, vReflection).rgb;
        gl_FragColor = vec4(reflected, leastSheen + (maxSheen - leastSheen) * fresnel);
        #include <colorspace_fragment>
      }
    `}),o=new ee(new qn(i,t),r);o.raycast=()=>{},fl.add(o);let a=new kt;return o.onBeforeRender=(c,l,h)=>{c.getDrawingBufferSize(a);let d=Math.min(1,ty/Math.max(a.x,a.y)),[u,f]=[Math.round(a.x*d),Math.round(a.y*d)];(e.width!==u||e.height!==f)&&e.setSize(u,f);let{mirrorPosition:g,cameraPosition:x,normal:m,rotation:p,view:E,lookAt:T,aim:_,plane:M,clip:b,q:w}=sy;if(g.setFromMatrixPosition(o.matrixWorld),x.setFromMatrixPosition(h.matrixWorld),p.extractRotation(o.matrixWorld),m.set(0,0,1).applyMatrix4(p),E.subVectors(g,x),E.dot(m)>0||E.length()>ny)return;E.reflect(m).negate().add(g),p.extractRotation(h.matrixWorld),T.set(0,0,-1).applyMatrix4(p).add(x),_.subVectors(g,T).reflect(m).negate().add(g),s.position.copy(E),s.up.set(0,1,0).applyMatrix4(p).reflect(m),s.lookAt(_),s.far=h.far,s.updateMatrixWorld(),s.projectionMatrix.copy(h.projectionMatrix),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(s.projectionMatrix).multiply(s.matrixWorldInverse).multiply(o.matrixWorld),M.setFromNormalAndCoplanarPoint(m,g).applyMatrix4(s.matrixWorldInverse),b.set(M.normal.x,M.normal.y,M.normal.z,M.constant);let y=s.projectionMatrix.elements;w.set((Math.sign(b.x)+y[8])/y[0],(Math.sign(b.y)+y[9])/y[5],-1,(1+y[10])/y[14]),b.multiplyScalar(2/b.dot(w)),y[2]=b.x,y[6]=b.y,y[10]=b.z+1-iy,y[14]=b.w,fl.forEach(P=>{P.visible=!1});let A=c.getRenderTarget();c.setRenderTarget(e),c.state.buffers.depth.setMask(!0),c.clear(),c.render(l,s),c.setRenderTarget(A),fl.forEach(P=>{P.visible=!0})},o}var wn=4.5,vd=4.8,Es=-.12,ry=3,hd=.01,xa=.03,pl=.045,Ts=.03,ud=.9,oy="#3E3F40",ay="#5F8F88",yd="#1F3B39",cy=["#6E6B63","#7D7A70","#5E5C56","#78796A"],ly=.03,dd=.035,fd=.22,pd=.08,hy=12,md=[28,9],uy=4,As=[0,1,0],mr=[1,1,1],dy={count:32,fromU:.4,near:2.7,far:4.3},fy={count:12,fromU:6,near:2.6,far:4.3},py=[{u:6.3,fromGlass:2,radius:.5,height:.55,sink:.12},{u:6.95,fromGlass:2.8,radius:.34,height:.3,sink:.08},{u:5.7,fromGlass:2.9,radius:.24,height:.15,sink:.06}],my=[...[[1.6,1.2],[2.5,1.7],[3.5,1.4],[4.4,1.9]].map(([i,t])=>({u:i,fromGlass:t,radius:.24,height:.07})),{u:5.2,fromGlass:3.2,radius:.5,height:.6,sink:.1}];function Oi(i){return{from:ud,to:i.length-ud,height:i.ceiling}}var gy=.8;function _y(i,t,e){let n=Math.min(i,e-i,wn-t,t);return(.5+.5*(.55*Math.sin(i*1.9+.7)*Math.sin(t*1.6+1.1)+.3*Math.sin(i*3.3-t*2.2+2.4)+.15*Math.sin(i*.9+t*4.1)))*de(0,gy,n)}var xy=[.35,1,-.45];function vy(i,t,e){let s=(i(t+.05,e)-i(t-.05,e))/.1,r=(i(t,e+.05)-i(t,e-.05))/(2*.05),[o,a,c]=xy;return(-s*o+a-r*c)/Math.hypot(s,1,r)/a}function gd(i,t,e){let n=t*(i.width/2+.3);return{side:t,length:i.length,point:(s,r,o)=>[n+t*r,o,i.nearZ-s],groundAt:(s,r)=>Es+_y(s,r,i.length)*e,along:[0,0,-1],outward:[t,0,0]}}function Md(i,t){let{from:e,to:n}=Oi(t),s=n-e,r=Math.max(1,Math.round(s/ry)),[o,a]=[oy,ay].map(fe);for(let c of[-1,1]){let l=c*(t.width/2+.3),h=f=>({origin:[l,0,f],right:[0,0,c],up:As,out:[-c,0,0]}),[d,u]=[Ts-xa/2,Ts+xa/2];for(let f=1;f<r;f+=1){let g={...h(t.nearZ-e-f*s/r),min:[-hd/2,0,d],max:[hd/2,t.ceiling,u]};Ye(i,{...g,albedo:o,faces:["front"]}),Ye(i,{...g,albedo:a,faces:["left","right"]})}}}var yy=[[1,0],[1.02,.22],[.92,.5],[.72,.76],[.42,.94],[0,1]],My=[[1,0],[1,.55],[.9,.92],[.62,1],[0,1]],bs=16;function Sy(i,[t,e,n],{radius:s,height:r,sink:o=ly},a,c){let l=[2,3,5].map(f=>({count:f,phase:c()*Math.PI*2,amount:.04+c()*.04})),h=(f,g)=>1+l.reduce((x,m)=>x+m.amount*Math.sin(m.count*f+m.phase+g*1.7),0),d=cy.map(fe),u=a.map(([f,g],x)=>{let m=a[Math.max(0,x-1)],p=a[Math.min(a.length-1,x+1)],E=(m[0]-p[0])*s,T=(p[1]-m[1])*r,_=E/Math.hypot(E,T),M=de(0,.35,g),b=g*r+(1-f)*s,w=Array.from({length:bs},()=>({tone:d[Math.floor(c()*d.length)],shade:.96+c()*.08})),y=A=>{let P=A/bs*Math.PI*2,R=f*s*h(P,g),{tone:L,shade:D}=w[A%bs],I=(.5+.42*_)*(.72+.28*M)*D;return An(i,[t+Math.cos(P)*R,e-o+g*(r+o),n+Math.sin(P)*R],[P*s,b],L,I)};return f===0?new Array(bs+1).fill(y(0)):Array.from({length:bs+1},(A,P)=>y(P))});for(let f=0;f<u.length-1;f+=1){let[g,x]=[u[f],u[f+1]];for(let m=0;m<bs;m+=1){let p=m+1;i.indices.push(g[m],x[m],x[p],g[m],x[p],g[p])}}}var by=.2,_d=1.4;function Ey(i,t,e,n){let{point:s,length:r}=t,o=Math.round(r/pd),a=Math.round(wn/pd),c=(f,g)=>.5+.25*Math.sin(f*6.1+1.3)*Math.sin(g*5.3+.4)+.15*Math.sin(f*11.7+g*4.1)+.1*Math.sin(f*2.9-g*9.7+2),l=(f,g)=>Math.max(0,...n.map(x=>1-de(_d*.4,_d,Math.hypot(f-x.u,g-x.fromGlass)))),h=(f,g)=>Math.min(1,...e.map(x=>de(x.radius*.9,x.radius+.3,Math.hypot(f-x.u,g-x.fromGlass)))),d=(f,g)=>c(f,g)*de(0,.3,Math.min(f,r-f,wn-g,g))*h(f,g),u=i.positions.length/3;for(let f=0;f<=a;f+=1)for(let g=0;g<=o;g+=1){let x=g/o*r,m=f/a*wn,p=h(x,m),E=d(x,m),T=(.8+.2*de(0,1.2,Math.min(x,r-x,wn-m)))*(.76+.38*E)*(.85+.15*p)*vy(t.groundAt,x,m)*(1-by*l(x,m));An(i,s(x,m,t.groundAt(x,m)+E*dd),[x,m],mr,T)}for(let f=0;f<a;f+=1)for(let g=0;g<o;g+=1){let x=u+f*(o+1)+g,m=x+o+2;i.indices.push(x,x+1,m,x,m,m-1)}return(f,g)=>t.groundAt(f,g)+d(f,g)*dd}var vi=.012;function xd(i,{origin:t,uAxis:e,vAxis:n,into:s,width:r,height:o,light:a}){let c=(_,M)=>{let b=[];for(let w=M;w<_-M/2;w+=M)b.push(w);return b},[l,h]=[[r,dr],[o,fr]].map(([_,M])=>_/Math.max(1,Math.round(_/M))),[d,u]=[c(r,l),c(o,h)],f=_=>_.flatMap(M=>[M-vi,M,M+vi]),g=xe(r,.75,[...f(d),vi,r-vi]),x=xe(o,.6,[...f(u),o-vi]),m=(_,M)=>_===0||_===r||M===0||M===o,p=(_,M)=>M.reduce((b,w)=>Math.abs(_-w)<Math.abs(b)?_-w:b,1/0),E=_=>Math.max(0,1-Math.abs(_)/vi),T=i.positions.length/3;for(let _ of x)for(let M of g){let[b,w]=[p(M,d),p(_,u)],y=m(M,_)?0:Math.max(E(b),E(w))*vi,A=(1-.1*E(w))*(1-.08*E(b))*(Math.abs(w)===vi?w<0?1.05:.97:1),P=t.map((R,L)=>R+e[L]*M+n[L]*_+s[L]*y);An(i,P,[M*(dr/l),_*(fr/h)],mr,a(M,_)*A)}for(let _=0;_<x.length-1;_+=1)for(let M=0;M<g.length-1;M+=1){let b=T+_*g.length+M,w=b+g.length+1;i.indices.push(b,b+1,w,b,w,w-1)}}function Ay(i,t){let{point:e,along:n,outward:s,length:r}=t,o=vd-Es,a=(c,l)=>(.7+.28*de(0,o,l))*(.84+.16*de(0,1.2,c));xd(i,{origin:e(0,wn,Es),uAxis:n,vAxis:As,into:s,width:r,height:o,light:(c,l)=>a(Math.min(c,r-c),l)});for(let[c,l]of[[0,n.map(h=>-h)],[r,n]])xd(i,{origin:e(c,0,Es),uAxis:s,vAxis:As,into:l,width:wn,height:o,light:(h,d)=>a(wn-h,d)});pe(i,{origin:e(0,0,Es),uAxis:n,vAxis:As,albedo:mr,uBreaks:[0,r],vBreaks:[0,-Es],light:()=>.66})}var Ty={length:.13,width:.017,colours:["#B9A56A","#C8B37C","#A48E5A","#8E8A50","#D2C08E","#7E7A46"]},wy=1.8;function Cy(i,t,e,{count:n,culms:s,stones:r,next:o}){let a=Ty,c=a.colours.map(fe);for(let l=0;l<n;l+=1){let h=s[Math.floor(o()*s.length)],d=o()*Math.PI*2,u=wy*o()**1.2,f=h.u+Math.cos(d)*u,g=h.fromGlass+Math.sin(d)*u;if(f<.15||f>t.length-.15||g<.15||g>wn-.15||r.some(A=>Math.hypot(f-A.u,g-A.fromGlass)<A.radius*1.1))continue;let x=o()*Math.PI,[m,p]=[Math.cos(x),Math.sin(x)],E=a.length*(.7+o()*.6),[T,_]=[c[Math.floor(o()*c.length)],c[Math.floor(o()*c.length)]],M=o(),b=T.map((A,P)=>A+(_[P]-A)*M),w=.78+o()*.3,y=[[.5,0],[-.17,.5],[-.5,0],[-.17,-.5]].map(([A,P])=>{let R=f+m*A*E-p*P*a.width,L=g+p*A*E+m*P*a.width;return An(i,t.point(R,L,e(R,L)+.004),[0,0],b,w)});i.indices.push(y[0],y[1],y[2],y[0],y[2],y[3])}}function Ry(i,t){let n=Math.round((t.length+50)/md[0]);pe(i,{origin:t.point(-25,wn+hy,uy),uAxis:t.along.map(s=>s*(t.length+50)/n),vAxis:As.map(s=>s*md[1]),uBreaks:[0,n],vBreaks:[0,1],albedo:mr,light:()=>.95})}function Iy(i,t,e){let{from:n,to:s}=Oi(t);pe(i,{origin:e.point(n,-Ts-xa/2,0),uAxis:e.along,vAxis:As,albedo:mr,uBreaks:[0,s-n],vBreaks:[0,t.ceiling]})}function Py(i,t){let{from:e,to:n}=Oi(i),s=ld(n-e,i.ceiling);return s.position.set(...t.point((e+n)/2,-Ts+xa/2,i.ceiling/2)),s.rotation.y=-t.side*Math.PI/2,s}function Sd(i,t){let e=rn(71),n=Ku(t),s=Object.fromEntries(Object.keys(n).map(d=>[d,En()])),r=[gd(i,-1,fd),gd(i,1,fd)],o=(d,{u,fromGlass:f})=>d.point(u,f,d.groundAt(u,f)),[a,c]=r,l={depth:wn,wallHeight:vd};for(let[d,u,f]of[[a,py,{...dy,toU:i.length-.4}],[c,my,{...fy,toU:i.length-.4}]]){let g=rd({...f,stones:u,next:e}),x=Ey(s.moss,d,u,g);for(let m of u)Sy(s.stone,o(d,m),m,m.height<m.radius*.5?My:yy,e);od(s.solid,d,g,l,e),Cy(s.solid,d,x,{count:g.length*90,culms:g,stones:u,next:e})}for(let d of r)Ay(s.concrete,d),Ry(s.woods,d),Iy(s.glass,i,d);return[...Object.entries(s).map(([d,u])=>{let f=new ee($n(u),n[d]);return f.name=d,d!=="glass"&&(f.raycast=()=>{}),f}),...r.map(d=>Py(i,d))]}var bd=60,Jn=[24,8],Ed=-.1;function Ly(){let{element:e,context:n}=on(1024,256),s=rn(67),r=n.createLinearGradient(0,0,0,256);r.addColorStop(0,"rgb(150, 182, 210)"),r.addColorStop(.6,"rgb(196, 214, 228)"),r.addColorStop(1,"rgb(226, 232, 234)"),n.fillStyle=r,n.fillRect(0,0,1024,256);for(let o=0;o<46;o+=1){let a=s(),c=256*(.15+a*.75),l=1-a*.6,h=s()*1024;for(let d=0;d<7;d+=1){let u=(10+s()*22)*l,f=h+(s()-.5)*70*l,g=c-s()*u*.6;for(let x of[-1024,0,1024]){let m=n.createRadialGradient(f+x,g,0,f+x,g,u);m.addColorStop(0,`rgba(255, 255, 255, ${.5*l+.2})`),m.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=m,n.fillRect(f+x-u,g-u,u*2,u*2)}}}return e}function Dy(){let i=[],t=[],e=[];for(let s=0;s<=Jn[1];s+=1){let r=Ed+s/Jn[1]*(Math.PI/2-Ed);for(let o=0;o<=Jn[0];o+=1){let a=o/Jn[0]*Math.PI*2,c=Math.cos(r)*bd;i.push(Math.cos(a)*c,Math.sin(r)*bd,Math.sin(a)*c),t.push(o/Jn[0],Math.max(0,r)/(Math.PI/2))}}for(let s=0;s<Jn[1];s+=1)for(let r=0;r<Jn[0];r+=1){let o=s*(Jn[0]+1)+r,a=o+Jn[0]+2;e.push(o,o+1,a,o,a,a-1)}let n=new Ve;return n.setAttribute("position",new ge(i,3)),n.setAttribute("uv",new ge(t,2)),n.setIndex(e),n}function Ad(i){let t=bn(Ly(),1,i);t.wrapT=Je;let e=new ee(Dy(),new Le({map:t,side:Ne,depthWrite:!1}));return e.renderOrder=-1,e.frustumCulled=!1,e.raycast=()=>{},e.onBeforeRender=(n,s,r)=>{e.matrixWorld.setPosition(r.matrixWorld.elements[12],r.matrixWorld.elements[13],r.matrixWorld.elements[14])},e}var Ny="#F4F2EE",Pd="#F6F5F2",Uy="#F4F4F2",Ld="#B09B7E",Fy="#BCB8B0",wd=.022,Cd=.004,zi=[0,1,0],yi=.08,Kn=.012,Oy=1.18,By=1.06,zy=.5,ml=4;function Gy(i,t){let e=[.06,.22,.5,1,1.6,2.2,i-.35,i-.1,...t.map(n=>n.height)];return xe(i,1,e)}var Rd={inner:1,outer:-1,square:0};function _l({surfaces:i,albedo:t},{origin:e,uAxis:n,length:s,ceiling:r,openings:o,ends:a=["inner","inner"]}){let c=[-n[2],0,n[0]],l=c.map(x=>-x),h=(x,m,p=0)=>e.map((E,T)=>E+n[T]*x+c[T]*m+zi[T]*p),d=(x,m)=>Zn(m,r,Math.min(Math.max(x,0),s-x)),u=(x,m,p,E)=>{let T=x+Rd[p]*Kn,_=m-Rd[E]*Kn,M=_-T;pe(i,{origin:h(T,Kn),uAxis:n,vAxis:zi,albedo:t,uBreaks:xe(M,.25,[.15,.35,M-.15,M-.35]),vBreaks:[0,yi],uvOffset:[T,0],light:(w,y)=>d(T+w,y)});let b=w=>d(w,yi)*By;ur(i,{corners:[h(T,Kn,yi),h(_,Kn,yi),h(m,0,yi),h(x,0,yi)],uvs:[[T,0],[_,0],[m,Kn],[x,Kn]],albedo:t,lights:[b(T),b(_),b(m),b(x)]});for(let[w,y,A,P]of[[p,x,h(x,0),c],[E,m,h(m,Kn),l]])w==="square"&&pe(i,{origin:A,uAxis:P,vAxis:zi,albedo:t,uBreaks:[0,Kn],vBreaks:[0,yi],light:(R,L)=>d(y,L)*ke.side})},f=0,g=a[0];for(let x of o)u(f,x.from,g,"outer"),f=x.to,g="outer";u(f,s,g,a[1])}var Ze=.004,ws=(i,t,e)=>i+(t-i)*(1-de(0,Ze,e)),gl=i=>i.flatMap(t=>[t-Ze,t,t+Ze]),ya=(i,t)=>Zn(i,t,1/0),xl=.7,Dd=i=>(Zn(3,i,1/0)+xl)/2,Nd=.95,Ud=i=>(Zn(i,i,1/0)+Nd)/2;function Mi(i,{origin:t,uAxis:e,length:n,ceiling:s,albedo:r,skirting:o,openings:a=[],ends:c,freeTop:l=!1}){o&&_l(o,{origin:t,uAxis:e,length:n,ceiling:s,openings:a,ends:c});let h=[0,n].filter((f,g)=>c?.[g]==="outer"),d=[0,n].filter((f,g)=>c?.[g]!=="outer"),u=(f,g)=>[...h.map(x=>[Math.abs(f-x),ya(g,s)]),...a.flatMap(x=>{let m=Math.min(Math.abs(f-x.from),Math.abs(f-x.to)),p=f>x.from&&f<x.to;return[[g<x.height?m:1/0,ya(g,s)],[p&&x.height<s?Math.abs(g-x.height):1/0,Dd(s)]]}),[l?s-g:1/0,Ud(s)]].reduce((x,m)=>m[0]<x[0]?m:x,[1/0,0]);pe(i,{origin:t,uAxis:e,vAxis:zi,albedo:r,uBreaks:xe(n,.5,[.15,.35,n-.15,n-.35,...gl(h),...a.flatMap(({from:f,to:g})=>gl([f,g]))]),vBreaks:xe(s,1,[...Gy(s,a),...gl(a.map(f=>f.height)),...l?[s-Ze]:[]]),skip:(f,g)=>a.some(x=>f>x.from&&f<x.to&&g<x.height),light:(f,g)=>{let[x,m]=u(f,g),p=Zn(g,s,Math.min(...d.map(E=>Math.abs(f-E))));return ws(p,m,x)}})}var Id=i=>[{from:i/2-2.4/2,to:i/2+2.4/2,height:3}];function Vy(i,t,e,n){let s=t.width/2,{length:r}=t,o={ceiling:t.ceiling,albedo:e,skirting:n},a=t.isLobby?[Oi(t)]:[];Mi(i,{...o,origin:[-s,0,t.nearZ],uAxis:[0,0,-1],length:r,openings:a}),Mi(i,{...o,origin:[-s,0,t.farZ],uAxis:[1,0,0],length:t.width,openings:t.doors.far?Id(t.width):[]}),Mi(i,{...o,origin:[s,0,t.farZ],uAxis:[0,0,1],length:r,openings:a}),Mi(i,{...o,origin:[s,0,t.nearZ],uAxis:[-1,0,0],length:t.width,openings:t.doors.near?Id(t.width):[]})}function Hy(i,t,e,n){for(let s of t.partitions){let r=s.x-.3/2,o=s.x+.3/2,a=s.nearZ-s.farZ,c={ceiling:s.height,albedo:e,skirting:n,ends:["outer","outer"],freeTop:!0};Mi(i,{...c,origin:[r,0,s.farZ],uAxis:[0,0,1],length:a}),Mi(i,{...c,origin:[o,0,s.nearZ],uAxis:[0,0,-1],length:a}),Mi(i,{...c,origin:[r,0,s.nearZ],uAxis:[1,0,0],length:.3}),Mi(i,{...c,origin:[o,0,s.farZ],uAxis:[-1,0,0],length:.3}),pe(i,{origin:[r,s.height,s.nearZ],uAxis:[1,0,0],vAxis:[0,0,-1],uBreaks:xe(.3,1,[Ze,.3-Ze]),vBreaks:xe(a,1,[Ze,a-Ze]),albedo:e,light:(l,h)=>ws(Nd,Ud(s.height),Math.min(l,.3-l,h,a-h))})}}function ky(i,t){let e=t.width*.6,{length:n}=t,s=n*.6,r=(t.width-e)/2,o=(n-s)/2,a=(l,h)=>l>r&&l<r+e&&h>o&&h<o+s,c=[-t.width/2,t.ceiling,t.farZ];pe(i,{origin:c,uAxis:[1,0,0],vAxis:[0,0,1],albedo:fe(Pd),uBreaks:xe(t.width,1,[.25,.5,t.width-.5,t.width-.25,r,r+e]),vBreaks:xe(n,1,[.25,.5,n-.5,n-.25,o,o+s]),skip:a,light:(l,h)=>el(Math.min(l,t.width-l,h,n-h))}),pe(i,{origin:[c[0]+r,t.ceiling,t.farZ+o],uAxis:[1,0,0],vAxis:[0,0,1],albedo:fe(Uy),uBreaks:[0,e],vBreaks:[0,s]})}function Wy(i){let t=i.width/2,e=2.4/2,n=[];for(let[s,r,o]of[[i.nearZ,i.doors.near,i.nearZ+.3],[i.farZ,i.doors.far,i.farZ-.3]]){if(!r){n.push([-t,s,t,s]);continue}n.push([-t,s,-e,s],[e,s,t,s],[-e,s,-e,o],[e,s,e,o])}for(let s of[-t,t])if(i.isLobby){let r=Oi(i);n.push([s,i.nearZ,s,i.nearZ-r.from],[s,i.nearZ-r.to,s,i.farZ])}else n.push([s,i.nearZ,s,i.farZ]);for(let s of i.partitions){let r=s.x-.3/2,o=s.x+.3/2;n.push([r,s.nearZ,r,s.farZ],[o,s.nearZ,o,s.farZ],[r,s.nearZ,o,s.nearZ],[r,s.farZ,o,s.farZ])}return n}function Xy(i,t,e){return i.reduce((n,[s,r,o,a])=>{let c=o-s,l=a-r,h=Math.max(0,Math.min(1,((t-s)*c+(e-r)*l)/(c*c+l*l)));return Math.min(n,Math.hypot(t-(s+h*c),e-(r+h*l)))},1/0)}function vl(i,t){return[-t,-i]}function yl(i){let t=Wy(i),e=Math.hypot(i.width,i.length)/2,n=(i.nearZ+i.farZ)/2;return(s,r)=>Yu(Xy(t,s,r),Math.max(0,1-Math.hypot(s,r-n)/e))}var va=[.1,.25,.45,.7];function qy(i,t,e){let{length:n,width:s}=t,r=yl(t),o=[(s-2.4)/2,(s+2.4)/2];pe(i,{origin:[s/2,0,t.nearZ],uAxis:[0,0,-1],vAxis:[-1,0,0],albedo:e,uvOffset:vl(s/2,t.nearZ),uBreaks:xe(n,.5,va.flatMap(a=>[a,n-a])),vBreaks:xe(s,.5,[...va.flatMap(a=>[a,s-a]),...o.flatMap(a=>[a,...va.flatMap(c=>[a-c,a+c])])]),light:(a,c)=>r(s/2-c,t.nearZ-a)})}function Yy({walls:i,floor:t,room:e,wallAlbedo:n,floorAlbedo:s,skirting:r,fromLobby:o}){let a=e.nearZ+.3,c=xe(.3,1,[Ze,.3-Ze]),l=E=>Math.min(E,.3-E),h=(E,T)=>pe(i,{origin:E,uAxis:T,vAxis:zi,uBreaks:c,vBreaks:xe(3,1,[.06,.22,3-Ze]),albedo:n,light:(_,M)=>{let b=Zn(M,ml,.3),w=3-M;return w<l(_)?ws(b,(b+xl)/2,w):ws(b,ya(M,e.ceiling),l(_))}});h([-2.4/2,0,a],[0,0,-1]),h([2.4/2,0,e.nearZ],[0,0,1]);let d=o?"square":"outer",u={length:.3,ceiling:ml,openings:[]};_l(r,{...u,origin:[-2.4/2,0,a],uAxis:[0,0,-1],ends:[d,"outer"]}),_l(r,{...u,origin:[2.4/2,0,e.nearZ],uAxis:[0,0,1],ends:["outer",d]}),pe(i,{origin:[-2.4/2,3,e.nearZ],uAxis:[1,0,0],vAxis:[0,0,1],uBreaks:xe(2.4,1,[Ze,2.4-Ze]),vBreaks:c,albedo:n,light:(E,T)=>ws(xl,Dd(e.ceiling),Math.min(l(T),E,2.4-E))});let f={origin:[2.4/2,0,a],uAxis:[0,0,-1],vAxis:[-1,0,0],vBreaks:[0,2.4]},g=yl(e);if(pe(t,{...f,vBreaks:xe(2.4,.5,va.flatMap(E=>[E,2.4-E])),uBreaks:[0,.3/2,.3],albedo:s,uvOffset:vl(2.4/2,a),light:(E,T)=>g(2.4/2-T,a-E)}),!o)return;let x=r.albedo,m=Zn(yi/2,ml,.3/2);pe(t,{...f,origin:[2.4/2,Cd,a],swapUv:!0,uBreaks:[0,wd],albedo:x,light:()=>m});let p={vAxis:zi,uBreaks:[0,2.4],vBreaks:[0,Cd],albedo:x,light:()=>m*ke.side};pe(t,{...p,origin:[-2.4/2,0,a],uAxis:[1,0,0]}),pe(t,{...p,origin:[2.4/2,0,a-wd],uAxis:[-1,0,0]})}function Zy({walls:i,floor:t,room:e,wallAlbedo:n,floorAlbedo:s}){let{from:r,to:o}=Oi(e),a=e.width/2,[c,l]=[e.nearZ-r,e.nearZ-o],h=fe(yd),d=yl(e);for(let u of[-1,1]){let f=u*(a+.3-Ts),g=(p,E,T)=>{let _=[f-pl/2,f+pl/2].map(M=>(M-p)*E).sort((M,b)=>M-b);[[0,_[0],!1],[_[0],_[1],!0],[_[1],.3,!1]].forEach(([M,b,w])=>T(M,b-M,w))},[x,m]=u>0?[a+.3,a]:[-a,-a-.3];for(let[p,E,T]of[[x,-1,c],[m,1,l]])g(p,E,(_,M,b)=>{let w=y=>Math.abs(Math.abs(p+E*(_+y))-a);pe(i,{origin:[p+E*_,0,T],uAxis:[E,0,0],vAxis:zi,uBreaks:xe(M,1,[Ze,M-Ze]),vBreaks:xe(e.ceiling,1,[.06,.22]),albedo:b?h:n,light:(y,A)=>ws(Zn(A,e.ceiling,.3),ya(A,e.ceiling),w(y))})});g(m,1,(p,E,T)=>pe(i,{origin:[m+p,e.ceiling,l],uAxis:[1,0,0],vAxis:[0,0,1],uBreaks:[0,E],vBreaks:[0,o-r],albedo:T?h:fe(Pd),light:()=>el(0)})),g(x,-1,(p,E,T)=>pe(t,{origin:[x-p,0,c],uAxis:[0,0,-1],vAxis:[-1,0,0],uvOffset:vl(x-p,c),uBreaks:xe(o-r,.5),vBreaks:[0,E],albedo:T?h:s,light:(_,M)=>d(x-p-M,c-_)}))}}var $y=([i,t,e])=>.2126*i+.7152*t+.0722*e;function Jy(i,{walls:t,floor:e,wallAlbedo:n}){return i.isLobby?null:$y(n)>zy?{surfaces:e,albedo:fe(Ld).map(s=>s*Oy)}:{surfaces:t,albedo:n}}function Fd(i,t,e){let n=new ln,s=[];for(let[r,o]of i.rooms.entries()){let a=En(),c=En(),l=fe(o.isLobby?Ny:o.wall),h=fe(o.isLobby?Fy:Ld),d=Jy(o,{walls:a,floor:c,wallAlbedo:l});if(Vy(a,o,l,d),Hy(a,o,l,d),ky(a,o),qy(c,o,h),o.doors.near){let f=!!i.rooms[r-1]?.isLobby;Yy({walls:a,floor:c,room:o,wallAlbedo:l,floorAlbedo:h,skirting:d,fromLobby:f})}o.isLobby&&(Zy({walls:a,floor:c,room:o,wallAlbedo:l,floorAlbedo:h}),Md(a,o),n.add(...Sd(o,e)));let u=new ee($n(c),o.isLobby?t.concrete:t.oak);s.push(u),n.add(new ee($n(a),t.plain),u)}return n.add(Ad(e)),{group:n,floors:s}}var Ky=.35,jy=1,Qy=2.5,tM=.8,eM=.1;function Cs(i){return Math.atan2(i.x,i.z)}function Sl(i){let{centre:t,right:e,label:n}=i;return(n.x-t.x)*e.x+(n.z-t.z)*e.z+.16*n.scale/2}function bl(i,t,e){let{frame:n,centre:s,normal:r,right:o}=i,a=-i.width/2,c=e>=jy?Sl(i):i.width/2,l=c-a,h=(a+c)/2,d=Math.tan(t/2),u=d*e,f=Math.max(Ky,1.18*Math.max(n.outerHeight/(2*d),l/(2*u)))+n.depth;return{x:s.x+o.x*h+r.x*f,z:s.z+o.z*h+r.z*f,y:s.y,yaw:Cs(r),pitch:0}}function Od(i,t){let{centre:e,normal:n}=i;for(let s=Qy;s>tM;s-=eM){let r=e.x+n.x*s,o=e.z+n.z*s;if(t(r,o))return{x:r,z:o,y:1.6,yaw:Cs(n),pitch:0}}throw new Error(`No floor in front of "${i.slug}"`)}var nM="#E9E4D8",iM="#2A2724",sM="#8C8883",rM="#EFEBE2",oM="#E2DDD2",aM="#FDFBF6",cM={side:.002,top:-5e-4,bottom:.005,softness:.004,standOff:3e-4},lM=5e-4,hM=1.3,uM=.45,dM=.5,fM=.3,Vd=.002,pM=5e-4,mM=.008,Bd=.01,zd=.008,gM=.006;function _M(i){return{origin:[i.centre.x,i.centre.y,i.centre.z],right:[i.right.x,0,i.right.z],up:[0,1,0],out:[i.normal.x,0,i.normal.z]}}function Ma(i,t){let e=_M(i);return{...e,origin:e.origin.map((n,s)=>n+e.right[s]*t.offset)}}var xM=.95,vM=.004,yM=1.16,MM=.93,SM=(i,t,e)=>i.map((n,s)=>n+(t[s]-n)*e);function bM(i,{origin:t,right:e,up:n,out:s},{inner:r,outer:o,toW:a,albedo:c}){let l=([x,m])=>t.map((p,E)=>p+e[E]*x+n[E]*m+s[E]*a),[h,d]=r.map(x=>x/2),[u,f]=o.map(x=>x/2);[{outerEdge:[[-u,f],[u,f]],innerEdge:[[-h,d],[h,d]],alongV:!1},{outerEdge:[[-u,-f],[u,-f]],innerEdge:[[-h,-d],[h,-d]],alongV:!1},{outerEdge:[[-u,-f],[-u,f]],innerEdge:[[-h,-d],[-h,d]],alongV:!0},{outerEdge:[[u,-f],[u,f]],innerEdge:[[h,-d],[h,d]],alongV:!0}].forEach(({outerEdge:x,innerEdge:m,alongV:p},E)=>{let T=E*.37,_=([y,A])=>p?[A+T,y]:[y+T,A],M=ke.front*(p?xM:1),b=p?u-h:f-d,w=x.map((y,A)=>SM(y,m[A],Math.min(.3,vM/b)));for(let[y,A,P,R]of[[x,w,M*yM,M],[w,m,M,M*MM]]){let L=[y[0],y[1],A[1],A[0]],D=[P,P,R,R];L.reduce((O,[W,X],tt)=>{let[Y,K]=L[(tt+1)%4];return O+W*K-Y*X},0)<0&&(L=L.reverse(),D=D.reverse()),ur(i,{corners:L.map(l),uvs:L.map(_),albedo:c,lights:D})}})}function gr(i,t,{inner:e,outer:n,fromW:s,toW:r,albedo:o}){let[a,c]=e,[l,h]=n,d=-l/2,u=-h/2,[f,g]=[a/2,c/2];Ye(i,{...t,albedo:o,faces:["top","left","right"],min:[d,g,s],max:[-d,-u,r]}),Ye(i,{...t,albedo:o,faces:["bottom","left","right"],min:[d,u,s],max:[-d,-g,r]}),Ye(i,{...t,albedo:o,faces:["bottom"],min:[-f,g,s],max:[f,g,r]}),Ye(i,{...t,albedo:o,faces:["top"],min:[-f,-g,s],max:[f,-g,r]}),Ye(i,{...t,albedo:o,faces:["left","right"],grainAlongV:!0,min:[d,-g,s],max:[-f,g,r]}),Ye(i,{...t,albedo:o,faces:["left","right"],grainAlongV:!0,min:[f,-g,s],max:[-d,g,r]}),bM(i,t,{inner:e,outer:n,toW:r,albedo:o})}function EM(i,t,e,n,s){let r=Ma(e,n),{painting:o,frame:a}=e,c=n.widthCm*.01,l=o.heightCm*.01,h=c+2*a.gap,d=l+2*a.gap;Ye(t,{...r,albedo:fe(iM),faces:["front"],min:[-h/2,-d/2,0],max:[h/2,d/2,a.canvasBack]}),Ye(t,{...r,albedo:fe(nM),faces:["top","bottom","left","right"],min:[-c/2,-l/2,a.canvasBack],max:[c/2,l/2,a.canvasFront]}),gr(i,r,{inner:[h,d],outer:[a.outerWidth,a.outerHeight],fromW:0,toW:a.depth,albedo:s})}function AM(i,t,e,n){let s=Ma(t,e),{painting:r,frame:o}=t,a=e.widthCm*.01-2*o.rebate,c=r.heightCm*.01-2*o.rebate,l=[o.outerWidth,o.outerHeight],h=o.depth-mM;gr(i,s,{inner:[a,c],outer:l,fromW:0,toW:h,albedo:n}),gr(i,s,{inner:[o.outerWidth-2*Bd,o.outerHeight-2*Bd],outer:l,fromW:h,toW:o.depth,albedo:n});let d=[a+2*zd,c+2*zd];gr(i,s,{inner:[a,c],outer:d,fromW:h,toW:h+gM,albedo:n})}function TM(i,t,e,n,s,r,o){let a=Ma(s,r),{painting:c,frame:l}=s,{face:h,windowWidth:d,windowHeight:u,thickness:f}=l.mat,g=l.canvasBack,x=g+f,m=[l.outerWidth-2*h,l.outerHeight-2*h],[p,E]=m.map(I=>I/2),T=d/2,[_,M]=[l.raise-u/2,l.raise+u/2],b=fe(rM);Ye(t,{...a,albedo:fe(oM),faces:["front"],min:[-T,_,0],max:[T,M,g]});let w={...a,origin:a.origin.map((I,O)=>I+a.up[O]*l.raise+a.out[O]*g)};wM(n,w,r.widthCm*.01,c.heightCm*.01,cM);for(let[I,O]of[[[-p,M+f],[p,E]],[[-p,-E],[p,_-f]],[[-p,_-f],[-T-f,M+f]],[[T+f,_-f],[p,M+f]]])Ye(t,{...a,albedo:b,faces:["front"],min:[...I,0],max:[...O,x]});let y=[-T,_,T,M],A=[-T-f,_-f,T+f,M+f],P=([I,O,W,X],tt)=>[[I,X],[I,O],[W,O],[W,X]][tt%4],R=I=>(ke.front+I)/2,L=[ke.front,ke.top,ke.front,R(ke.bottom)],D=([I,O,W])=>a.origin.map((X,tt)=>X+a.right[tt]*I+a.up[tt]*O+a.out[tt]*W);L.forEach((I,O)=>{let W=[[...P(y,O),g],[...P(A,O),x],[...P(A,O+1),x],[...P(y,O+1),g]];ur(t,{corners:W.map(D),uvs:W.map(()=>[0,0]),albedo:fe(aM),lights:[I,I,I,I]})}),gr(i,a,{inner:m,outer:[l.outerWidth,l.outerHeight],fromW:0,toW:l.depth,albedo:o}),Ye(e,{...a,albedo:[1,1,1],faces:["front"],min:[-p,-E,0],max:[p,E,x+lM]})}function wM(i,{origin:t,right:e,up:n,out:s},r,o,{side:a,top:c,bottom:l,softness:h,standOff:d=Vd}){let u=r+2*a,f=o+c+l,g=t.map((M,b)=>M-e[b]*u/2-n[b]*(o/2+l)+s[b]*d),x=(M,b)=>{let w=Math.min(b,M/2);return{edge:w,breaks:[0,w,M-w,M]}},m=(M,b,w)=>M<=w?M/w*.5:M>=b-w?1-(b-M)/w*.5:.5,p=x(u,h),E=x(f,h),T=i.uvs.length;pe(i,{origin:g,uAxis:e,vAxis:n,uBreaks:p.breaks,vBreaks:E.breaks,albedo:[1,1,1],uvOffset:[0,0]});let _=i.uvs;for(let M=T;M<_.length;M+=2)_[M]=m(_[M],u,p.edge),_[M+1]=m(_[M+1],f,E.edge)}var Gd=8;function CM(i,{origin:t,right:e,up:n,out:s},r,o,a){let c=hM*a,l=dM*a,h=fM*c,d=r/2,u=-o/2,f=p=>c*(1-uM*p**2),g=Array.from({length:Gd+1},(p,E)=>[-1+2*E/Gd,l,.5]),x=[[-1,0,0],...g,[1,0,1]],m=i.positions.length/3;for(let p of[0,1,2])for(let[E,T,_]of x){let M=Math.sign(E)||1,b=Math.abs(E)===1,w=(p===2&&b?h:0)+(b?T:0),y=E*d-M*w,A=Math.min(1,Math.abs(y)/d),P=[u+c,u,u-f(A)][p],R=t.map((L,D)=>L+e[D]*y+n[D]*P+s[D]*Vd);An(i,R,[_,[1,.5,0][p]],[1,1,1],1)}for(let p=0;p<2;p+=1)for(let E=0;E<x.length-1;E+=1){let T=m+p*x.length+E,_=T+x.length+1;i.indices.push(T,_,T+1,T,_-1,_)}}function Hd(i,t){let e=new ln,n=En(),s=En(),r=En(),o=En(),a=En();for(let c of i){let{profile:l}=c,h=l.id.startsWith("gilt")?r:s,d=fe(l.color);for(let u of c.panels)l.geometry==="tray"?EM(h,n,c,u,d):l.geometry==="mat"?TM(h,n,a,o,c,u,d):AM(h,c,u,d),CM(o,Ma(c,u),c.frame.outerWidth,c.frame.outerHeight,c.frame.depth)}ma(o)||e.add(new ee($n(o),t.shadow));for(let[c,l]of[[n,t.plainOnTheWall],[s,t.frameOak],[r,t.gilt]])ma(c)||e.add(new ee($n(c),l));return ma(a)||e.add(new ee($n(a),t.frameGlass)),e}function RM(i){let t=i.painting.heightCm*.01,e=[],n=[],s=[];i.panels.forEach((o,a)=>{let c=o.offset-o.widthCm*.01/2,l=o.offset+o.widthCm*.01/2;e.push(c,-t/2,0,l,-t/2,0,l,t/2,0,c,t/2,0),n.push(o.imageFrom,1,o.imageTo,1,o.imageTo,0,o.imageFrom,0);let h=a*4;s.push(h,h+1,h+2,h,h+2,h+3)});let r=new Ve;return r.setAttribute("position",new ge(e,3)),r.setAttribute("uv",new ge(n,2)),r.setIndex(s),r.computeBoundingSphere(),r}function kd(i){let t=new ln,e=i.map(n=>{let s=new Le({color:sM,..._i}),r=new ee(RM(n),s),o=n.frame.canvasFront+pM;return r.position.set(n.centre.x+n.normal.x*o,n.centre.y+n.frame.raise,n.centre.z+n.normal.z*o),r.rotation.y=Cs(n.normal),r.userData.artwork=n,t.add(r),r});return{group:t,meshes:e}}var Wd=4e3,_r=40,LM=1.35,DM=.3,NM=2,Xd=5e-4,UM=.01,Al='"Roboto Condensed", Helvetica, sans-serif',FM="#2B2926",OM="#F3F0EA",BM=.3,zM=["ja","ko","zh"];function GM(i){let[t,e,n]=[1,3,5].map(s=>{let r=parseInt(i.slice(s,s+2),16)/255;return r<=.04045?r/12.92:((r+.055)/1.055)**2.4});return .2126*t+.7152*e+.0722*n}function VM(i,t,e){let n=a=>i.measureText(a).width<=e,s=t.split(" ").flatMap((a,c)=>{let l=c===0?a:` ${a}`;return n(a)?[l]:[...l]}),r=[],o="";for(let a of s){let c=o+a;o&&!n(c)?(r.push(o),o=a.trimStart()):o=c}return o&&r.push(o),r}function HM(i,t){let e=document.createElement("canvas");e.width=Math.round(.16*Wd),e.height=Math.round(.1*Wd);let n=e.getContext("2d");n.fillStyle="#FFFFFF",n.textBaseline="top";let s=_r*LM,r=`400 ${_r}px ${Al}`,o=`${t} 400 ${_r}px ${Al}`;n.font=o;let a=VM(n,`${i.title},`,e.width),c=n.measureText(a[a.length-1]).width;n.font=r;let l=` ${i.year}`,h=c+n.measureText(l).width<=e.width,d=0;n.font=o;for(let f of a)n.fillText(f,0,d),d+=s;n.font=r,h?n.fillText(l,c,d-s):(n.fillText(l.trimStart(),0,d),d+=s),d+=_r*DM;for(let f of[i.media,i.dimensions,i.location])n.fillText(f,0,d),d+=s;let u=new li(e);return u.premultiplyAlpha=!0,u}function kM(i){return Math.min(1,Math.max(0,(5-i)/2))}function qd(i){let t=!1,e=i.map(({painting:o})=>`${o.title} ${o.media} ${o.location}`).join(" "),n=zM.some(o=>document.documentElement.lang.startsWith(o))?"normal":"italic";Promise.all([`${n} 400`,"400"].map(o=>document.fonts.load(`${o} ${_r}px ${Al}`,e))).catch(o=>console.error("[gallery] label font failed to load",o)).then(()=>{t=!0});let s=i.map(o=>{let a=GM(o.wallPaint)<BM?OM:FM,c=new Le({color:a,transparent:!0,depthWrite:!1,visible:!1,opacity:0,..._i}),{scale:l}=o.label,h=new ee(new qn(.16*l,.1*l),c);return h.position.set(o.label.x+o.normal.x*Xd,o.label.y,o.label.z+o.normal.z*Xd),h.rotation.y=Cs(o.normal),{artwork:o,mesh:h}});function r(o,a){if(!t)return!1;let c=!1,l=0;for(let{artwork:h,mesh:d}of s){let u=d.position.distanceTo(o)/(a*h.label.scale),f=d.material;!f.alphaMap&&u<5&&l<NM?(f.alphaMap=HM(h.painting,n),f.needsUpdate=!0,l+=1):f.alphaMap&&u>8&&(f.alphaMap.dispose(),f.alphaMap=null,f.needsUpdate=!0);let g=f.alphaMap?kM(u):0,x=g>0;(Math.abs(g-f.opacity)>UM||x!==f.visible)&&(f.opacity=g,f.visible=x,c=!0)}return c}return{meshes:s.map(o=>o.mesh),update:r}}function Yd(i,t,e){return t>=i.minX&&t<=i.maxX&&e>=i.minZ&&e<=i.maxZ}function Si(i,t,e){return i.walkable.some(n=>Yd(n,t,e))&&!i.blocked.some(n=>Yd(n,t,e))}function Jd(i,t,e){let{x:n,z:s}=t;return Si(i,e.x,s)&&(n=e.x),Si(i,n,e.z)&&(s=e.z),{x:n,z:s}}function Zd(i,t,e){let n=0,s=1;for(let[r,o,a,c]of[[t.x,e.x,i.minX,i.maxX],[t.z,e.z,i.minZ,i.maxZ]]){let l=o-r;if(l===0){if(r<a||r>c)return null;continue}let[h,d]=[(a-r)/l,(c-r)/l].sort((u,f)=>u-f);if(n=Math.max(n,h),s=Math.min(s,d),n>s)return null}return[n,s]}function $d(i,t,e){if(i.blocked.some(r=>Zd(r,t,e)))return!1;let n=i.walkable.map(r=>Zd(r,t,e)).filter(Boolean).sort((r,o)=>r[0]-o[0]),s=0;for(let[r,o]of n){if(r>s+1e-9)return!1;s=Math.max(s,o)}return s>=1-1e-9}var Tl=new WeakMap;function WM(i){if(Tl.has(i))return Tl.get(i);let t=Math.min(...i.walkable.map(h=>h.minX)),e=Math.min(...i.walkable.map(h=>h.minZ)),n=Math.ceil((Math.max(...i.walkable.map(h=>h.maxX))-t)/.2)+1,s=Math.ceil((Math.max(...i.walkable.map(h=>h.maxZ))-e)/.2)+1,r=h=>({x:t+h%n*.2,z:e+Math.floor(h/n)*.2}),o=Array.from({length:n*s},(h,d)=>{let{x:u,z:f}=r(d);return Si(i,u,f)}),l={centre:r,nearest:({x:h,z:d})=>{let u=-1,f=1/0;return o.forEach((g,x)=>{if(!g)return;let m=r(x),p=(m.x-h)**2+(m.z-d)**2;p<f&&([u,f]=[x,p])}),u},neighbours:h=>{let d=h%n;return[d>0?h-1:-1,d<n-1?h+1:-1,h-n,h+n].filter(u=>u>=0&&u<o.length&&o[u])}};return Tl.set(i,l),l}function XM(i,t,e){let n=new Map([[t,-1]]),s=[t];for(let r=0;r<s.length;r+=1){let o=s[r];if(o===e){let a=[];for(let c=e;c!==-1;c=n.get(c))a.unshift(c);return a}for(let a of i.neighbours(o))n.has(a)||(n.set(a,o),s.push(a))}return null}function wl(i,t,e){if($d(i,t,e))return[e];let n=WM(i),s=XM(n,n.nearest(t),n.nearest(e));if(!s)return[e];let r=s.map(n.centre);Si(i,e.x,e.z)?r[r.length-1]=e:r.push(e);let o=Si(i,t.x,t.z),a=o?[]:[r[0]],c=o?-1:0,l=o?t:r[0];for(;c<r.length-1;){let h=c+1;for(let d=r.length-1;d>h;d-=1)if($d(i,l,r[d])){h=d;break}l=r[h],a.push(l),c=h}return a}var jd=20,tS=0,eS={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA"],right:["KeyD"],turnLeft:["ArrowLeft"],turnRight:["ArrowRight"]},nS=i=>i<.5?2*i*i:1-(-2*i+2)**2/2;function iS(i,t){return Math.atan2(Math.sin(t-i),Math.cos(t-i))}function sS(i){let t=0;for(let e=1;e<i.length;e+=1)t+=Math.hypot(i[e].x-i[e-1].x,i[e].z-i[e-1].z);return t}function rS(i,t){let e=t;for(let n=1;n<i.length;n+=1){let s=i[n-1],r=i[n],o=Math.hypot(r.x-s.x,r.z-s.z);if(e<=o&&o>0){let a=e/o;return{x:s.x+(r.x-s.x)*a,z:s.z+(r.z-s.z)*a}}e-=o}return i[i.length-1]}function Qd({canvas:i,camera:t,plan:e,pick:n,onFocusChange:s,zoom:r}){let o={x:e.spawn.x,z:e.spawn.z,y:1.6,yaw:e.spawn.yaw,pitch:0},a=new Set,c=window.matchMedia("(prefers-reduced-motion: reduce)"),l=null,h=null,d=null,u=!1,f=!1;function g(R,{path:L=[R]}={}){let D=[{x:o.x,z:o.z},...L],I=sS(D),O=c.matches?0:Math.min(2,.35+I*.18);l={points:D,distance:I,seconds:O,elapsed:0,from:{...o},to:{y:R.y??o.y,yaw:R.yaw??o.yaw,pitch:R.pitch??o.pitch}}}function x(R){l=null,Object.assign(o,R),u=!0}function m(R,{instant:L=!1}={}){if(h===R)return;r.reset();let D=bl(R,Ke.degToRad(t.fov),t.aspect);h=R,s(R),L?x(D):g(D,{path:wl(e,o,D)})}function p(){if(h){if(l){f=!0;return}r.reset(),x(bl(h,Ke.degToRad(t.fov),t.aspect))}}function E(){if(!h)return;let R=Od(h,(L,D)=>Si(e,L,D));h=null,r.reset(),s(null),g(R)}function T(R,L){let{centre:D,normal:I,right:O,frame:W,label:X,width:tt}=h,Y=o.x-D.x,K=o.z-D.z,et=Y*I.x+K*I.z,St=2*et*Math.tan(Ke.degToRad(t.fov)/2)/i.clientHeight,xt=Ke.clamp(Y*O.x+K*O.z-R*St,-tt/2,Sl(h));o.x=D.x+O.x*xt+I.x*et,o.z=D.z+O.z*xt+I.z*et,o.y=Ke.clamp(o.y+L*St,Math.min(D.y-W.outerHeight/2,X.y-.1*X.scale/2),D.y+W.outerHeight/2)}function _(R){for(let L=0;L<=jd;L+=1){let D=L/jd,I=R.x+(o.x-R.x)*D,O=R.z+(o.z-R.z)*D;if(Si(e,I,O))return{x:I,z:O}}return null}function M(R,L){if(l)return;if(h){E();return}let D=n(R,L);if(D?.kind==="painting"&&m(D.artwork),D?.kind==="floor"){let I=_(D.point);I&&g(I,{path:wl(e,o,I)})}}i.addEventListener("pointerdown",R=>{d||R.button!==tS||(d={id:R.pointerId,x:R.clientX,y:R.clientY,time:performance.now(),isDrag:!1,moved:!1},i.setPointerCapture(R.pointerId))}),i.addEventListener("pointermove",R=>{if(!d||R.pointerId!==d.id)return;let L=R.clientX-d.x,D=R.clientY-d.y;if(r.isPinching()){d.isDrag=!0,d.x=R.clientX,d.y=R.clientY;return}if(!d.isDrag&&Math.hypot(L,D)>8&&(d.isDrag=!0,i.classList.add("is-dragging")),!d.isDrag||(d.x=R.clientX,d.y=R.clientY,l))return;if(d.moved=!0,h){T(L,D);return}let I=.0042/r.level();o.yaw+=L*I,o.pitch=Math.max(-.6,Math.min(.6,o.pitch+D*I))});let b=(R,L)=>{if(!d||R.pointerId!==d.id)return;let D=!L&&!d.isDrag&&performance.now()-d.time<450;d=null,i.classList.remove("is-dragging"),D&&M(R.clientX,R.clientY)};i.addEventListener("pointerup",R=>b(R,!1)),i.addEventListener("pointercancel",R=>b(R,!0)),window.addEventListener("keydown",R=>{if(!R.target.closest?.("#header")){if(R.metaKey||R.ctrlKey||R.altKey){a.clear();return}R.code==="Escape"&&E(),a.add(R.code)}}),window.addEventListener("keyup",R=>a.delete(R.code)),window.addEventListener("blur",()=>a.clear());let w=R=>eS[R].some(L=>a.has(L));function y(R){let L=(w("forward")?1:0)-(w("back")?1:0),D=(w("right")?1:0)-(w("left")?1:0),I=(w("turnLeft")?1:0)-(w("turnRight")?1:0);if(!L&&!D&&!I)return!1;o.yaw+=I*1.6*R;let O=1.4*R/(L&&D?Math.SQRT2:1),W=Math.sin(o.yaw),X=Math.cos(o.yaw),tt={x:o.x-W*L*O+X*D*O,z:o.z-X*L*O-W*D*O};return Object.assign(o,Jd(e,o,tt)),!0}function A(R){l.elapsed+=R;let L=l.seconds===0?1:Math.min(1,l.elapsed/l.seconds),D=nS(L);Object.assign(o,rS(l.points,l.distance*D)),o.y=l.from.y+(l.to.y-l.from.y)*D,o.yaw=l.from.yaw+iS(l.from.yaw,l.to.yaw)*D,o.pitch=l.from.pitch+(l.to.pitch-l.from.pitch)*D,L===1&&(l=null,f&&(f=!1,p()))}function P(R){let L=!1;return l?(A(R),L=!0):h||(L=y(R)),(d?.moved||u)&&(d&&(d.moved=!1),u=!1,L=!0),L&&(t.position.set(o.x,o.y,o.z),t.rotation.set(o.pitch,o.yaw,0,"YXZ")),L}return t.position.set(o.x,o.y,o.z),t.rotation.set(o.pitch,o.yaw,0,"YXZ"),{update:P,focus:m,unfocus:E,refit:p,focusedSlug:()=>h?.slug??null}}var hS=["small","medium","large"],Cl=2,tf=16/3,uS=.2,dS=.3,fS=.2,Sa=new V,ef=new Li,pS=new ie;function nf({renderer:i,paintingMeshes:t,anisotropy:e,isInSight:n,onError:s,onFirstView:r}){let o=t.map(_=>({mesh:_,artwork:_.userData.artwork,textures:{},placeholder:_.material.color.getHex(),queued:new Set,loading:new Map,failures:new Map,wanted:new Set(["small"]),priority:0}));for(let _ of o)_.mesh.updateWorldMatrix(!0,!1);let a;function c(){a&&(a=a.filter(_=>!_.textures.small&&(_.failures.get("small")??0)<Cl),!(a.length>0)&&(a=null,r()))}let l=({entry:_,tier:M})=>M==="small"&&!!a?.includes(_),h=[],d=[],u=0,f=0;function g(_){let M=[...hS].reverse().find(y=>_.wanted.has(y)&&_.textures[y]),b=M?_.textures[M]:null,w=_.mesh.material;return w.map===b?!1:(w.map=b,w.color.set(b?16777215:_.placeholder),w.needsUpdate=!0,!0)}function x(_,M){_.loading.get(M)?.abort(),_.loading.delete(M);let b=_.textures[M];b&&(f-=b.image.width*b.image.height*tf,delete _.textures[M],g(_),b.dispose(),b.image.close())}function m(){for(h.sort((_,M)=>l(M)-l(_)||M.entry.priority-_.entry.priority);u<2&&h.length>0;){let{entry:_,tier:M}=h.shift();if(_.queued.delete(M),!_.wanted.has(M)||_.textures[M]||_.loading.has(M))continue;let b=new AbortController;_.loading.set(M,b),u+=1,fetch(_.artwork.painting.textures[M],{signal:b.signal}).then(w=>{if(!w.ok)throw new Error(`HTTP ${w.status}`);return w.blob()}).then(w=>createImageBitmap(w)).then(w=>d.push({entry:_,tier:M,bitmap:w,controller:b})).catch(w=>{if(b.signal.aborted)return;_.loading.delete(M);let y=(_.failures.get(M)??0)+1;_.failures.set(M,y),y===Cl&&(s(`texture ${_.artwork.slug} ${M}: ${w.message}`),c())}).finally(()=>{u-=1,m()})}}function p(_,M){_.wanted.add(M);let b=(_.failures.get(M)??0)>=Cl;_.textures[M]||_.loading.has(M)||_.queued.has(M)||b||(_.queued.add(M),h.push({entry:_,tier:M}))}function E(){let _=d.shift();if(!_)return!1;let{entry:M,tier:b,bitmap:w,controller:y}=_;if(M.loading.get(b)!==y||!M.wanted.has(b))return w.close(),!1;M.loading.delete(b);let A=new Pe(w);A.flipY=!1,A.colorSpace=Re,A.anisotropy=e,A.minFilter=Fn,A.needsUpdate=!0,i.initTexture(A),f+=w.width*w.height*tf,M.textures[b]=A;let P=g(M);return c(),P}function T(_,M,b){_.getWorldDirection(Sa),a===void 0&&(_.updateMatrixWorld(),ef.setFromProjectionMatrix(pS.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse)),a=o.filter(A=>ef.intersectsObject(A.mesh)&&n(A.artwork.centre)));for(let A of o){let{centre:P}=A.artwork,R=P.x-_.position.x,L=P.y-_.position.y,D=P.z-_.position.z,I=Math.max(uS,Math.hypot(R,L,D)),O=(R*Sa.x+L*Sa.y+D*Sa.z)/I,W=A.artwork.painting.heightCm*.01/I*M;A.priority=O>dS?W:W*fS}let w=[...o].sort((A,P)=>P.priority-A.priority),y=new Set(w.filter(A=>A.priority>=(A.textures.medium?150:200)).slice(0,8));for(let A of o){let P=A.artwork.slug===b;y.has(A)||P?p(A,"medium"):A.wanted.delete("medium")&&x(A,"medium"),P?p(A,"large"):A.wanted.delete("large")&&x(A,"large"),p(A,"small")}c(),m()}return{update:T,applyOne:E,residentBytes:()=>f}}function sf(i,t){return i.length?i[Math.min(i.length-1,Math.floor(i.length*t))]:0}function rf({renderer:i,residentBytes:t}){let e=document.createElement("div");e.style.cssText="position:fixed;left:8px;bottom:8px;z-index:20;padding:8px 10px;background:rgba(0,0,0,.72);color:#fff;font:12px/1.5 ui-monospace,monospace;border-radius:4px;text-align:left;";let n=document.createElement("pre");n.style.margin="0",e.append(n),document.body.append(e);let s=[],r=0,o=0;function a(c){let l=c-r;if(r=c,l<100&&(s.push(l),s.length>120&&s.shift()),c-o<500)return;o=c;let h=[...s].sort((f,g)=>f-g),{render:d,memory:u}=i.info;n.textContent=[`frame p50 ${sf(h,.5).toFixed(1)} ms  p90 ${sf(h,.9).toFixed(1)} ms`,`draws ${d.calls}  triangles ${d.triangles}`,`textures ${u.textures}  paintings ${(t()/1048576).toFixed(0)} MB`,`pixel ratio ${i.getPixelRatio()}`].join(`
`)}return{frameRendered:a}}function of({artworks:i,navigation:t}){let e=new Map(i.map(l=>[l.slug,l])),n=[...document.querySelectorAll("#header .languages a")];n.forEach(l=>{l.dataset.base=l.getAttribute("href")});function s(){try{return decodeURIComponent(location.hash.slice(1))}catch{return""}}function r(){n.forEach(l=>{l.href=l.dataset.base+location.hash})}function o(){history.replaceState(null,"",location.pathname+location.search),r()}function a(){let l=e.get(s());l?t.focus(l,{instant:!0}):location.hash&&o(),r()}window.addEventListener("popstate",()=>{let l=e.get(s());l?t.focus(l):t.unfocus(),r()});function c(l){l&&s()!==l.slug?(history.pushState({focus:l.slug},"",`#${l.slug}`),r()):!l&&e.has(s())&&(history.state?.focus?history.back():o())}return{arrive:a,focusChanged:c}}function af(i,t){let e=new Map,n=0;function s(){let[o,a]=[...e.values()];return Math.hypot(o.x-a.x,o.y-a.y)}i.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&(e.set(o.pointerId,{x:o.clientX,y:o.clientY}),e.size===2&&(n=s()))}),i.addEventListener("pointermove",o=>{if(!e.has(o.pointerId)||(e.set(o.pointerId,{x:o.clientX,y:o.clientY}),e.size!==2))return;let a=s();n>0&&a>0&&t(a/n),n=a});let r=o=>{e.delete(o.pointerId),e.size<2&&(n=0)};return i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),i.addEventListener("wheel",o=>{o.preventDefault(),t(Math.exp(-o.deltaY*.0015))},{passive:!1}),i.addEventListener("gesturestart",o=>o.preventDefault()),{isPinching:()=>e.size>=2}}var bS="#DCE4E9",ES=.1,AS=120,TS=.1,wS=.05,cf=()=>document.dispatchEvent(new Event("page-ready"));function Rl(i){console.error(`[gallery] ${i}`),typeof umami<"u"&&umami.track("gallery_error",{kind:i.split(" ")[0]})}function CS(i){let t=Ke.degToRad(70),e=Ke.radToDeg(2*Math.atan(Math.tan(t/2)/i));return Math.min(90,Math.max(55,e))}function RS(){let i=document.getElementById("gallery-canvas"),t=JSON.parse(document.getElementById("gallery-data").textContent),{building:e,artworks:n}=qu(t),s=new la({canvas:i,antialias:!0,powerPreference:"high-performance"});document.documentElement.classList.add("gallery-is-3d");let r=window.matchMedia("(pointer: coarse)").matches;s.setPixelRatio(Math.min(window.devicePixelRatio,r?1.5:2));let o=Math.min(8,s.capabilities.getMaxAnisotropy()),a=new Vs;a.background=new Ut(bS);let c=new we(55,1,ES,AS),l=Ju(o),h=Fd(e,l,o),d=kd(n),u=qd(n);a.add(h.group,d.group,Hd(n,l),...u.meshes);let f=!0,g=()=>{f=!0},x=document.getElementById("gallery-hint"),m=(r?x.dataset.touch:x.dataset.pointer).split(`
`),p=x.querySelectorAll("span");if(m.length!==p.length)throw new Error(`gallery hint has ${m.length} lines for ${p.length} gestures`);m.forEach((q,ht)=>{p[ht].textContent=q});let E=!1,T=!1,_=()=>{x.hidden=E||T},M=()=>{T||(E=!0,_())};_(),i.addEventListener("pointerdown",M),i.addEventListener("wheel",M,{passive:!0}),window.addEventListener("keydown",M);let b=new $s,w=new kt,y=h.group.children.filter(q=>!h.floors.includes(q));function A(q,ht){let wt=i.getBoundingClientRect();w.set((q-wt.left)/wt.width*2-1,-((ht-wt.top)/wt.height)*2+1),b.setFromCamera(w,c);let[lt]=b.intersectObjects([...d.meshes,...h.floors,...y],!1);return lt?lt.object.userData.artwork?{kind:"painting",artwork:lt.object.userData.artwork}:h.floors.includes(lt.object)?{kind:"floor",point:{x:lt.point.x,z:lt.point.z}}:null:null}let P=new V;function R(q){P.subVectors(q,c.position);let ht=P.length();b.set(c.position,P.normalize()),b.far=ht-wS;let wt=b.intersectObjects(y,!1).length>0;return b.far=1/0,!wt}let L=55,D=1,I=1;function O(){let q=Ke.degToRad(L)/2;c.fov=Ke.radToDeg(2*Math.atan(Math.tan(q)/D)),c.updateProjectionMatrix(),I=i.clientHeight*s.getPixelRatio()/(2*Math.tan(Ke.degToRad(c.fov)/2)),g()}function W(q){D=Ke.clamp(q,1,4),O()}let X=af(i,q=>W(D*q)),tt={level:()=>D,reset:()=>W(1),isPinching:X.isPinching},Y=null,K=Qd({canvas:i,camera:c,plan:e,pick:A,zoom:tt,onFocusChange:q=>{T=!!q,_(),g(),Y?.focusChanged(q)}}),et=nf({renderer:s,paintingMeshes:d.meshes,anisotropy:o,isInSight:R,onError:Rl,onFirstView:cf});function St(){let q=i.clientWidth,ht=i.clientHeight;s.setSize(q,ht,!1),c.aspect=q/ht,L=CS(c.aspect),O(),K.refit()}new ResizeObserver(St).observe(i),St(),Y=of({artworks:n,navigation:K}),Y.arrive();let xt=new URLSearchParams(location.search).has("debug")&&rf({renderer:s,residentBytes:et.residentBytes}),jt=document.getElementById("gallery-reload");jt.addEventListener("click",()=>location.reload()),i.addEventListener("webglcontextlost",q=>{q.preventDefault(),jt.hidden=!1,Rl("context-lost")});let Ot=performance.now(),Wt=-1/0;function Z(q){let ht=Math.min(TS,(q-Ot)/1e3);Ot=q;let wt=K.update(ht),lt=q-Wt>200;wt&&g(),lt&&(Wt=q,et.update(c,I,K.focusedSlug())),(wt||lt)&&u.update(c.position,D)&&g(),et.applyOne()&&g(),f&&(f=!1,s.render(a,c),xt&&xt.frameRendered(q)),requestAnimationFrame(Z)}requestAnimationFrame(Z)}try{RS()}catch(i){document.documentElement.classList.remove("gallery-is-3d"),document.getElementById("gallery-hint").hidden=!0,Rl(`start ${i.message}`),cf()}
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
