import React from 'react';
import Reveal from '../Reveal';

const SectionHeader = ({ tag, title, subtitle, className = "mb-10 sm:mb-14" }) => (
  <div className={`text-center max-w-2xl mx-auto ${className}`}>
    {tag && (
      <Reveal as="span" className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider">
        {tag}
      </Reveal>
    )}
    <Reveal as="h2" delay={0.05} className="section-title">
      {title}
    </Reveal>
    {subtitle && (
      <Reveal as="p" delay={0.1} className="section-subtitle">
        {subtitle}
      </Reveal>
    )}
  </div>
);

export default SectionHeader;
