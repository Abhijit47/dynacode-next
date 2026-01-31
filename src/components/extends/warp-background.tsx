'use client';

import { motion } from 'motion/react';
import React, { HTMLAttributes, useId, useMemo } from 'react';

import { cn } from '@/lib/utils';

interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  perspective?: number;
  beamsPerSide?: number;
  beamSize?: number;
  beamDelayMax?: number;
  beamDelayMin?: number;
  beamDuration?: number;
  gridColor?: string;
}

const hashString = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return hash >>> 0;
};

const hashToUnit = (value: string) => {
  const hash = hashString(value);
  return (hash % 100000) / 100000;
};

type BeamProps = {
  width: string | number;
  x: string | number;
  delay: number;
  duration: number;
};

function Beam(props: BeamProps) {
  const { width, x, delay, duration } = props;

  const beamId = useId();
  const { hue, ar } = useMemo(() => {
    const seedBase = `${beamId}-${x}-${width}-${delay}-${duration}`;
    return {
      hue: Math.floor(hashToUnit(`${seedBase}-hue`) * 360),
      ar: Math.floor(hashToUnit(`${seedBase}-ar`) * 10) + 1,
    };
  }, [beamId, x, width, delay, duration]);

  return (
    <motion.div
      style={
        {
          '--x': `${x}`,
          '--width': `${width}`,
          '--aspect-ratio': `${ar}`,
          '--background': `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
        } as React.CSSProperties
      }
      className={`absolute top-0 left-(--x) aspect-[1/var(--aspect-ratio)] w-(--width) [background:var(--background)]`}
      initial={{ y: '100cqmax', x: '-50%' }}
      animate={{ y: '-100%', x: '-50%' }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

const WarpBackground: React.FC<WarpBackgroundProps> = ({
  children,
  perspective = 100,
  className,
  beamsPerSide = 3,
  beamSize = 5,
  beamDelayMax = 3,
  beamDelayMin = 0,
  beamDuration = 3,
  gridColor = 'var(--border)',
  ...props
}) => {
  const warpId = useId();
  const baseSeed = useMemo(() => {
    return `${warpId}-${beamsPerSide}-${beamSize}-${beamDelayMin}-${beamDelayMax}`;
  }, [warpId, beamsPerSide, beamSize, beamDelayMin, beamDelayMax]);

  const generateBeams = useMemo(() => {
    const cellsPerSide = Math.floor(100 / beamSize);
    const step = cellsPerSide / beamsPerSide;

    return (side: string) => {
      const beams = [] as Array<{ x: number; delay: number }>;
      for (let i = 0; i < beamsPerSide; i++) {
        const x = Math.floor(i * step);
        const delaySeed = `${baseSeed}-${side}-${i}-delay`;
        const delay =
          hashToUnit(delaySeed) * (beamDelayMax - beamDelayMin) + beamDelayMin;
        beams.push({ x, delay });
      }
      return beams;
    };
  }, [baseSeed, beamsPerSide, beamSize, beamDelayMax, beamDelayMin]);

  const topBeams = useMemo(() => generateBeams('top'), [generateBeams]);
  const rightBeams = useMemo(() => generateBeams('right'), [generateBeams]);
  const bottomBeams = useMemo(() => generateBeams('bottom'), [generateBeams]);
  const leftBeams = useMemo(() => generateBeams('left'), [generateBeams]);

  const commonClasses =
    '@container h-[100cqmax] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d';

  const topSideClasses =
    'absolute z-20 origin-[50%_0%] transform-[rotateX(-90deg)] w-[100cqi]';

  const bottomSideClass =
    'absolute top-full origin-[50%_0%] transform-[rotateX(-90deg)] w-[100cqi]';

  const leftSideClass =
    'absolute top-0 left-0 origin-[0%_0%] transform-[rotate(90deg)_rotateX(-90deg)] w-[100cqh]';

  const rightSideClass =
    'absolute top-0 right-0 origin-[100%_0%] transform-[rotate(-90deg)_rotateX(-90deg)] w-[100cqh]';

  return (
    <div className={cn('relative shadow-none p-20', className)} {...props}>
      <div
        style={
          {
            '--perspective': `${perspective}px`,
            '--grid-color': gridColor,
            '--beam-size': `${beamSize}%`,
          } as React.CSSProperties
        }
        className={
          '@container-[size] pointer-events-none absolute top-0 left-0 size-full overflow-hidden [clipPath:inset(0)] perspective-(--perspective) transform-3d'
        }>
        {/* top side */}
        <div className={cn(commonClasses, topSideClasses)}>
          {topBeams.map((beam, index) => (
            <Beam
              key={`top-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
            />
          ))}
        </div>
        {/* bottom side */}
        <div className={cn(commonClasses, bottomSideClass)}>
          {bottomBeams.map((beam, index) => (
            <Beam
              key={`bottom-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
            />
          ))}
        </div>
        {/* left side */}
        <div className={cn(commonClasses, leftSideClass)}>
          {leftBeams.map((beam, index) => (
            <Beam
              key={`left-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
            />
          ))}
        </div>
        {/* right side */}
        <div className={cn(commonClasses, rightSideClass)}>
          {rightBeams.map((beam, index) => (
            <Beam
              key={`right-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
            />
          ))}
        </div>
      </div>
      <div className='relative w-full h-full'>{children}</div>
    </div>
  );
};

export default WarpBackground;
