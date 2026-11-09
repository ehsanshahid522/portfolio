import {useRef} from 'react';
import {motion,useMotionValue,useSpring,useReducedMotion,useScroll,useTransform} from 'framer-motion';
export function Artwork({project,onSelect}){
 const reduced=useReducedMotion();const x=useMotionValue(0),y=useMotionValue(0);const rx=useSpring(y,{stiffness:160,damping:24}),ry=useSpring(x,{stiffness:160,damping:24});
 function move(e){if(reduced||e.pointerType!=='mouse')return;const r=e.currentTarget.getBoundingClientRect();x.set(((e.clientX-r.left)/r.width-.5)*7);y.set(-((e.clientY-r.top)/r.height-.5)*7)}
 return <div className="artwork-perspective"><motion.button className="project-image" onClick={()=>onSelect(project)} aria-label={`Explore ${project.name} project and concept artwork`} onPointerMove={move} onPointerLeave={()=>{x.set(0);y.set(0)}} style={{rotateX:reduced?0:rx,rotateY:reduced?0:ry}}><img src={project.image} alt={`${project.name} — original concept mockup poster`} loading="lazy" width="1536" height="1024"/><span className="artwork-shine"/><span className="project-open" aria-hidden="true">↗</span></motion.button></div>
}
export function HeroStage({children}){const ref=useRef(null),reduced=useReducedMotion();const {scrollYProgress}=useScroll({target:ref,offset:['start start','end start']});const y=useTransform(scrollYProgress,[0,1],[0,90]);return <motion.div ref={ref} className="hero-stage" style={{y:reduced?0:y}}>{children}<div className="orbit orbit-one" aria-hidden="true"/><div className="orbit orbit-two" aria-hidden="true"/></motion.div>}
export function StudioRibbon(){return <div className="studio-ribbon" aria-hidden="true"><div>{[0,1].map(i=><span key={i}>THOUGHTFUL CODE <b>✦</b> HUMAN EXPERIENCES <b>✦</b> CURIOUS BY DESIGN <b>✦</b> BUILT TO MATTER <b>✦</b> </span>)}</div></div>}
