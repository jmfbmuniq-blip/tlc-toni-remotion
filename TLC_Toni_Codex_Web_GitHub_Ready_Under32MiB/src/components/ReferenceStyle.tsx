import React from 'react';
import {AbsoluteFill, Img, OffthreadVideo, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {TLCBrand} from '../config/tlcBrand';
import {referenceBeats, type ReferenceBeat} from '../data/referenceBeats';

const P=TLCBrand.colors.primary;
const D=TLCBrand.colors.secondary;
const S=TLCBrand.colors.accent;
const FONT='Inter, Arial, Helvetica, sans-serif';
const video=staticFile('assets/toni.mp4');
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;

const Kinetic:React.FC<{beat:ReferenceBeat;local:number;duration:number;dark?:boolean;smaller?:boolean;}> = ({beat,local,duration,dark=false,smaller=false})=>{
 const phrases=beat.words?.length?beat.words:[beat.headline];
 const i=Math.min(phrases.length-1,Math.floor(Math.max(0,local)/Math.max(1,(duration-1)/phrases.length)));
 const start=Math.floor(i*(duration-1)/phrases.length);
 const f=local-start;
 const text=phrases[i]||'';
 const alpha=interpolate(f,[0,5],[0,1],clamp);
 const jump=interpolate(f,[0,9],[28,0],clamp);
 const blur=interpolate(f,[0,8],[13,0],clamp);
 const large=(text.length<=12?112:text.length<=23?86:64)*(smaller?0.72:1);
 const highlighted=beat.accent&&text.toUpperCase().includes(beat.accent.toUpperCase());
 return <div style={{position:'relative',width:'100%',padding:'0 20px',boxSizing:'border-box',textAlign:'center',opacity:alpha,transform:`translateY(${jump}px) scale(${interpolate(f,[0,10],[1.06,1],clamp)})`,filter:`blur(${blur}px)`,fontFamily:FONT,fontWeight:900,letterSpacing:-large*.045,fontSize:large,lineHeight:.97,color:highlighted?(dark?S:D):(dark?P:D),overflowWrap:'break-word'}}>{text}</div>;
};
const SubtleLine:React.FC<{f:number;width?:number}> = ({f,width=200})=><div style={{height:7,width:width*interpolate(f,[5,20],[0,1],clamp),borderRadius:4,background:S,margin:'30px auto 0'}}/>;
const VideoCard:React.FC<{x?:number;y?:number;w?:number;h?:number;radius?:number;}> = ({x=74,y=320,w=932,h=1225,radius=32})=><div style={{position:'absolute',left:x,top:y,width:w,height:h,borderRadius:radius,overflow:'hidden',boxShadow:'0 24px 44px rgba(43,43,43,.18),0 5px 12px rgba(43,43,43,.1)',background:D}}><OffthreadVideo src={video} muted style={{height:'100%',width:'100%',objectFit:'cover',objectPosition:'50% 45%'}}/></div>;
const Toast:React.FC<{text:string;left?:number;top?:number}> = ({text,left=120,top=1320})=><div style={{position:'absolute',top,left,fontSize:41,fontWeight:800,fontFamily:FONT,background:P,color:D,padding:'17px 35px',borderRadius:18,boxShadow:'0 12px 24px rgba(43,43,43,.17)'}}>{text}</div>;
const ModeCard:React.FC<{beat:ReferenceBeat;local:number;duration:number;}> = ({beat,local,duration})=><AbsoluteFill style={{background:P}}>
 <VideoCard x={80} y={218} w={920} h={1360}/>
 <div style={{position:'absolute',top:1340,left:90,width:900,display:'flex',justifyContent:'center',alignItems:'center',minHeight:185,padding:16,boxSizing:'border-box'}}><div style={{background:'rgba(250,246,240,.95)',borderRadius:16,padding:'25px 20px',width:'100%',boxSizing:'border-box'}}><Kinetic beat={beat} local={local} duration={duration} smaller/></div></div>
 </AbsoluteFill>;
const ModePage:React.FC<{beat:ReferenceBeat;local:number;duration:number;}> = ({beat,local,duration})=>{
 const huge=beat.headline.slice(0,18).toUpperCase();
 return <AbsoluteFill style={{background:P,alignItems:'center',justifyContent:'center'}}>
  <div style={{position:'absolute',top:125,left:-22,width:1250,fontFamily:FONT,fontSize:182,fontWeight:950,letterSpacing:-13,lineHeight:.93,color:'rgba(43,43,43,.065)',overflow:'hidden'}}>{huge}<div>{huge}</div></div>
  <div style={{width:'100%',zIndex:2,padding:'0 30px',boxSizing:'border-box'}}><Kinetic beat={beat} local={local} duration={duration}/><SubtleLine f={local}/></div>
  {beat.kicker&&<div style={{position:'absolute',bottom:285,width:850,textAlign:'center',fontFamily:FONT,fontSize:27,letterSpacing:3,fontWeight:700,color:D,opacity:.65}}>{beat.kicker}</div>}
 </AbsoluteFill>;
};
const ModeDark:React.FC<{beat:ReferenceBeat;local:number;duration:number}> = ({beat,local,duration})=><AbsoluteFill style={{background:D,alignItems:'center',justifyContent:'center'}}>
 <div style={{position:'absolute',left:70,top:230,fontFamily:FONT,fontSize:25,letterSpacing:7,fontWeight:800,color:S}}>TLC / WELLNESS NOTES</div>
 <Kinetic beat={beat} local={local} duration={duration} dark/>
 <SubtleLine f={local} width={255}/>
 </AbsoluteFill>;
const ModeFull:React.FC<{beat:ReferenceBeat;local:number;duration:number;graphicsOnly:boolean}> = ({beat,local,duration,graphicsOnly})=><AbsoluteFill style={{pointerEvents:'none'}}>
 {beat.headline&&<div style={{position:'absolute',top:1185,left:65,width:950,boxSizing:'border-box',padding:'25px 10px'}}><div style={{filter:'drop-shadow(0 3px 8px rgba(0,0,0,.45))'}}><Kinetic beat={beat} local={local} duration={duration} dark smaller/></div></div>}
 </AbsoluteFill>;
const ModeSplit:React.FC<{beat:ReferenceBeat;local:number;duration:number}> = ({beat,local,duration})=><AbsoluteFill style={{background:P}}>
 <div style={{position:'absolute',top:295,left:58,width:510,height:1270,overflow:'hidden',borderRadius:28,boxShadow:'0 24px 50px rgba(0,0,0,.17)'}}><OffthreadVideo src={video} muted style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
 <div style={{position:'absolute',right:24,top:370,width:490,height:960,display:'flex',alignItems:'center'}}><Kinetic beat={beat} local={local} duration={duration} smaller/></div>
 <div style={{position:'absolute',right:83,top:1430,width:350,height:8,borderRadius:4,background:S}}/>
 </AbsoluteFill>;
const ModeTriptych:React.FC<{beat:ReferenceBeat;local:number;duration:number}> = ({beat,local,duration})=><AbsoluteFill style={{background:P}}>
 {[0,1,2].map(i=><div key={i} style={{position:'absolute',left:43+i*335,top:440+(i===1?-75:0),width:320,height:1040,overflow:'hidden',borderRadius:28,background:D,boxShadow:'0 17px 37px rgba(43,43,43,.19)',opacity:i===1?1:.78,transform:`translateY(${Math.sin(i+1)*Math.max(0,22-local/2)}px)`}}><OffthreadVideo src={video} muted style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:i===0?'47% center':i===2?'53% center':'center'}}/></div>)}
 <div style={{position:'absolute',top:1410,left:74,width:930,borderRadius:20,background:D,padding:'27px 10px',boxSizing:'border-box'}}><Kinetic beat={beat} local={local} duration={duration} dark smaller/></div>
 </AbsoluteFill>;
const ModeToggle:React.FC<{beat:ReferenceBeat;local:number;duration:number}> = ({beat,local,duration})=>{
 const offset=interpolate(local,[0,25],[0,95],clamp);
 return <AbsoluteFill style={{background:P,justifyContent:'center',alignItems:'center'}}>
  <div style={{fontFamily:FONT,fontSize:39,fontWeight:800,letterSpacing:2,color:D,marginBottom:115}}>APPETITE</div>
  <div style={{width:240,height:126,borderRadius:65,background:S,position:'relative',boxShadow:'0 12px 35px rgba(139,158,137,.23)'}}><div style={{position:'absolute',left:12+offset,top:13,width:101,height:101,borderRadius:'50%',background:P,boxShadow:'0 5px 10px rgba(0,0,0,.15)'}}/></div>
  <div style={{marginTop:100,width:870}}><Kinetic beat={beat} local={local} duration={duration} smaller/></div>
  <div style={{position:'absolute',bottom:260,color:D,fontSize:30,fontFamily:FONT,fontWeight:650,opacity:.7}}>WHAT YOU EAT STILL MATTERS</div>
 </AbsoluteFill>;
};
const ModeNutrients:React.FC<{local:number;duration:number}> = ({local,duration})=><AbsoluteFill style={{background:P,padding:'300px 100px 320px',boxSizing:'border-box',justifyContent:'center'}}>
 <div style={{fontFamily:FONT,fontWeight:900,fontSize:87,color:D,lineHeight:1,letterSpacing:-4,marginBottom:62}}>NUTRIENTS<br/>MATTER<span style={{color:S}}>.</span></div>
 <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:22}}>{['IRON','FIBER','B12','VITAMIN D'].map((x,i)=>{const a=interpolate(local,[i*15,i*15+10],[0,1],clamp);return <div key={x} style={{height:177,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:FONT,fontSize:50,fontWeight:900,letterSpacing:-1.5,background:'white',border:`3px solid ${S}`,borderRadius:22,color:D,opacity:a,transform:`translateY(${(1-a)*36}px)`,boxShadow:'0 10px 22px rgba(43,43,43,.08)'}}>{x}</div>})}</div>
 </AbsoluteFill>;
const ModePlate:React.FC<{beat:ReferenceBeat;local:number;duration:number}> = ({beat,local,duration})=>{
 const dots=['#527D58','#C4695B','#DB9D5E','#E0C267','#9975AA'];
 const circles=dots.map((c,i)=>{
  const a=interpolate(local,[i*13,i*13+10],[0,1],clamp);
  const angle=i*Math.PI*2/5-Math.PI/2;
  return <div key={i} style={{position:'absolute',width:115,height:115,borderRadius:'50%',background:c,left:228+Math.cos(angle)*150,top:228+Math.sin(angle)*150,opacity:a,transform:`scale(${0.7+0.3*a})`}}/>;
 });
 return <AbsoluteFill style={{background:P,justifyContent:'center',alignItems:'center'}}>
  <div style={{position:'relative',width:570,height:570,border:`13px solid ${D}`,borderRadius:'50%',boxShadow:'0 22px 48px rgba(0,0,0,.1)',marginBottom:90,transform:`scale(${interpolate(local,[0,22],[.87,1],clamp)})`}}>
   <div style={{position:'absolute',inset:38,border:`4px solid ${S}`,borderRadius:'50%'}}/>
   {circles}
  </div>
  <div style={{width:950}}><Kinetic beat={beat} local={local} duration={duration} smaller/></div>
 </AbsoluteFill>;
};
const ModeEnd:React.FC<{local:number}> = ({local})=><AbsoluteFill style={{background:D,justifyContent:'center',alignItems:'center'}}>
 <div style={{fontFamily:FONT,fontWeight:700,color:P,fontSize:33,letterSpacing:5,marginBottom:35,opacity:interpolate(local,[0,8],[0,1],clamp)}}>TLC BOUTIQUE WELLNESS</div>
 <div style={{width:610,height:370,display:'flex',alignItems:'center',justifyContent:'center'}}><Img src={staticFile('assets/logo.webp')} style={{width:600,objectFit:'contain'}}/></div>
 <div style={{fontFamily:FONT,color:P,fontSize:54,fontWeight:900,textAlign:'center',marginTop:28}}>READ THE FULL BLOG</div>
 <div style={{fontFamily:FONT,color:S,fontSize:42,fontWeight:850,letterSpacing:2,marginTop:10}}>LINK IN BIO</div>
 </AbsoluteFill>;

export const ReferenceStyle:React.FC<{graphicsOnly:boolean}> = ({graphicsOnly})=>{
 const globalFrame=useCurrentFrame();
 const {fps}=useVideoConfig();
 const sec=globalFrame/fps;
 const beat=referenceBeats.find(b=>sec>=b.start && sec<b.end);
 if(!beat)return null;
 const local=globalFrame-Math.round(beat.start*fps);
 const duration=Math.max(1,Math.round((beat.end-beat.start)*fps));
 const content=(()=>{
  switch(beat.mode){
   case 'full':return <ModeFull beat={beat} local={local} duration={duration} graphicsOnly={graphicsOnly}/>;
   case 'page':return <ModePage beat={beat} local={local} duration={duration}/>;
   case 'card':return <ModeCard beat={beat} local={local} duration={duration}/>;
   case 'split':return <ModeSplit beat={beat} local={local} duration={duration}/>;
   case 'triptych':return <ModeTriptych beat={beat} local={local} duration={duration}/>;
   case 'toggle':return <ModeToggle beat={beat} local={local} duration={duration}/>;
   case 'dark':return <ModeDark beat={beat} local={local} duration={duration}/>;
   case 'nutrients':return <ModeNutrients local={local} duration={duration}/>;
   case 'plate':return <ModePlate beat={beat} local={local} duration={duration}/>;
   case 'end':return <ModeEnd local={local}/>;
  }
 })();
 if(graphicsOnly){
  // Transparent graphics-only export: video mattes and full-frame editorial backgrounds
  // require final composite. This mode exposes graphics atop alpha for reusable overlays.
  if(beat.mode==='full'||beat.mode==='page'||beat.mode==='dark'||beat.mode==='card')
   return <AbsoluteFill style={{background:'transparent',justifyContent:'center',alignItems:'center'}}><div style={{width:900}}><Kinetic beat={beat} local={local} duration={duration} smaller/></div></AbsoluteFill>;
  return null;
 }
 return <AbsoluteFill>{content}</AbsoluteFill>;
};
