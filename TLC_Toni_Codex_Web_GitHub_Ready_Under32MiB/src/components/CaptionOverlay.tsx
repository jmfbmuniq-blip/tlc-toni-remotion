import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {captions} from '../data/captions';
import {TLCBrand as b} from '../config/tlcBrand';

export const CaptionOverlay: React.FC = () => {
 const frame=useCurrentFrame(); const time=frame / b.video.fps;
 const cue=captions.find(c=>time>=c.start && time<Math.min(c.end, b.video.durationFrames/30));
 if(!cue) return null;
 const local=frame-Math.round(cue.start*30);
 const opacity=interpolate(local,[0,5],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <div style={{position:'absolute',left:b.caption.x,top:b.caption.y,width:b.caption.width,display:'flex',justifyContent:'center',opacity,zIndex:20}}>
   <div style={{borderRadius:17,padding:'12px 22px',background:'rgba(250,246,240,0.92)',border:`1px solid rgba(43,43,43,0.12)`,boxShadow:'0 7px 28px rgba(43,43,43,0.13)',color:b.colors.secondary,fontFamily:b.fonts.body,fontWeight:700,fontSize:42,lineHeight:1.2,textAlign:'center',maxWidth:880}}>{cue.text}</div>
 </div>;
};
