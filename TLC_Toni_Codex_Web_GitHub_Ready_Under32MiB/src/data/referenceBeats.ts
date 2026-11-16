// High-impact editorial cut plan inspired by the USER-SUPPLIED example, adapted to TLC.
// Visual beat cuts are editorial choices; dialogue times are tied to the original 1112.srt.
export type Mode = 'full'|'page'|'card'|'split'|'triptych'|'toggle'|'dark'|'nutrients'|'plate'|'end';
export type ReferenceBeat = {
  start:number; end:number; mode:Mode; headline:string;
  kicker?:string; words?:string[]; accent?:string; labels?:string[];
  showCaptions?:boolean;
};
export const referenceBeats:ReferenceBeat[] = [
 {start:0,end:1.05,mode:'full',headline:'YOUR GLP-1',words:['YOUR GLP-1','FOOD NOISE'],accent:'GLP-1',showCaptions:false},
 {start:1.05,end:2.166,mode:'page',headline:'FOOD NOISE',kicker:'WHEN THE NOISE GETS QUIETER',words:['FOOD','NOISE'],accent:'NOISE',showCaptions:false},
 {start:2.166,end:3.9,mode:'card',headline:"DON'T QUIET YOUR NUTRITION",words:["DON'T QUIET","YOUR NUTRITION"],accent:'NUTRITION',showCaptions:false},
 {start:3.9,end:6.466,mode:'card',headline:'WHY PEOPLE TAKE GLP-1',words:['GLP-1','FOOD NOISE'],accent:'GLP-1',showCaptions:false},
 {start:6.466,end:10.6,mode:'toggle',headline:'TURN DOWN THE APPETITE',kicker:'A DIFFERENT RELATIONSHIP WITH HUNGER',words:['INFLAMMATION','APPETITE'],accent:'APPETITE',showCaptions:false},
 {start:10.6,end:10.866,mode:'full',headline:'',showCaptions:false},
 {start:10.866,end:13.833,mode:'card',headline:'APPETITE CHANGES',words:['APPETITE','CHANGES'],accent:'CHANGES',showCaptions:false},
 {start:13.833,end:16.1,mode:'split',headline:'BODY NEEDS STAY',words:['YOUR BODY','STILL NEEDS','NUTRITION'],accent:'NUTRITION',showCaptions:false},
 {start:16.1,end:19.666,mode:'triptych',headline:'SKIPPING MEALS',words:['NOT HUNGRY','SKIPPING MEALS'],accent:'MEALS',showCaptions:false},
 {start:19.666,end:22.666,mode:'card',headline:'LITTLE BIT OF HUNGER',words:['THE LITTLE','HUNGER','YOU HAVE'],accent:'HUNGER',showCaptions:false},
 {start:22.666,end:25.066,mode:'page',headline:'CHIPS OR DESSERTS',words:['CHIPS','OR','DESSERTS'],accent:'DESSERTS',showCaptions:false},
 {start:25.066,end:25.233,mode:'full',headline:'',showCaptions:false},
 {start:25.233,end:29.1,mode:'dark',headline:'LOSE WEIGHT AND STILL BE UNDERNOURISHED',words:['LOSE WEIGHT','AND STILL BE','UNDERNOURISHED'],accent:'UNDERNOURISHED',showCaptions:false},
 {start:29.1,end:29.233,mode:'full',headline:'',showCaptions:false},
 {start:29.233,end:31.566,mode:'card',headline:'LOW PROTEIN. MUSCLE LOSS.',words:['LOW PROTEIN','MUSCLE LOSS'],accent:'MUSCLE LOSS',showCaptions:false},
 {start:31.566,end:31.833,mode:'full',headline:'',showCaptions:false},
 {start:31.833,end:36.7,mode:'nutrients',headline:'NUTRIENTS MATTER',labels:['IRON','FIBER','B12','VITAMIN D'],accent:'NUTRIENTS',showCaptions:false},
 {start:36.7,end:40.833,mode:'dark',headline:'FATIGUE. BRAIN FOG. CONSTIPATION.',words:['FATIGUE','BRAIN FOG','CONSTIPATION'],accent:'BRAIN FOG',showCaptions:false},
 {start:40.833,end:44.7,mode:'card',headline:'EVEN HAIR LOSS',words:['EVEN','HAIR LOSS','WHEN EATING LESS'],accent:'HAIR LOSS',showCaptions:false},
 {start:44.7,end:44.833,mode:'full',headline:'',showCaptions:false},
 {start:44.833,end:48.466,mode:'page',headline:'EVERY BITE COUNTS',words:['EVERY BITE','COUNTS','PROTEIN FIRST'],accent:'PROTEIN FIRST',showCaptions:false},
 {start:48.466,end:48.633,mode:'full',headline:'',showCaptions:false},
 {start:48.633,end:53.133,mode:'plate',headline:'EAT THE RAINBOW',words:['SOMETHING','COLOURFUL','THEN YOUR TREAT'],accent:'COLOURFUL',showCaptions:false},
 {start:53.133,end:53.366,mode:'full',headline:'',showCaptions:false},
 {start:53.366,end:54.966,mode:'full',headline:'YOUR PRESCRIPTION IS A TOOL',words:['YOUR PRESCRIPTION','IS A TOOL'],accent:'TOOL',showCaptions:false},
 {start:54.966,end:58.05,mode:'page',headline:'FOOD IS STILL MEDICINE',words:['FOOD IS STILL','MEDICINE'],accent:'MEDICINE',showCaptions:false},
 {start:58.05,end:59.8,mode:'end',headline:'READ THE FULL BLOG',kicker:'LINK IN BIO',showCaptions:false},
];
