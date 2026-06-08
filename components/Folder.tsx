import React, { useState } from 'react';

interface FolderProps {
  color?: string;
  items?: React.ReactNode[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder: React.FC<FolderProps> = ({ color = '#5227FF', items = [], className = '' }) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.1;
    const offsetY = (e.clientY - centerY) * 0.1;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle: React.CSSProperties = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  } as React.CSSProperties;

  const getOpenTransform = (index: number) => {
    if (index === 0) return 'translate(-110%, -60%) rotate(-12deg)';
    if (index === 1) return 'translate(10%, -60%) rotate(12deg)';
    if (index === 2) return 'translate(-50%, -90%) rotate(4deg)';
    return '';
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className={`group relative transition-all duration-300 ease-in-out cursor-pointer ${
          !open ? 'hover:-translate-y-2' : ''
        }`}
        style={{
          ...folderStyle,
          transform: open ? 'translateY(-10px)' : undefined
        }}
        onClick={handleClick}
      >
        {/* Main Folder Body - Increased size from 100x80 to 180x140 */}
        <div
          className="relative w-[180px] h-[140px] rounded-tl-0 rounded-tr-[15px] rounded-br-[15px] rounded-bl-[15px]"
          style={{ backgroundColor: folderBackColor }}
        >
          {/* Tab */}
          <span
            className="absolute z-0 bottom-[99%] left-0 w-[50px] h-[15px] rounded-tl-[8px] rounded-tr-[15px] rounded-bl-0 rounded-br-0"
            style={{ backgroundColor: folderBackColor }}
          ></span>
          
          {papers.map((item, i) => {
            let sizeClasses = '';
            if (i === 0) sizeClasses = 'w-[75%] h-[85%]';
            if (i === 1) sizeClasses = 'w-[85%] h-[85%]';
            if (i === 2) sizeClasses = 'w-[95%] h-[85%]';

            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={e => handlePaperMouseMove(e, i)}
                onMouseLeave={e => handlePaperMouseLeave(e, i)}
                className={`absolute z-20 bottom-[10%] left-1/2 transition-all duration-500 ease-in-out ${
                  !open ? 'transform -translate-x-1/2 translate-y-[5%] group-hover:translate-y-0' : 'hover:scale-105'
                } ${sizeClasses}`}
                style={{
                  ...(!open ? {} : { transform: transformStyle }),
                  backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                  borderRadius: '12px',
                  boxShadow: open ? '0 10px 30px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {item}
              </div>
            );
          })}
          
          {/* Front Flap Left */}
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-500 ease-in-out ${
              !open ? 'group-hover:[transform:skew(12deg)_scaleY(0.5)]' : ''
            }`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 15px 15px 15px',
              ...(open && { transform: 'skew(12deg) scaleY(0.5)' })
            }}
          ></div>
          
          {/* Front Flap Right */}
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-500 ease-in-out ${
              !open ? 'group-hover:[transform:skew(-12deg)_scaleY(0.5)]' : ''
            }`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 15px 15px 15px',
              ...(open && { transform: 'skew(-12deg) scaleY(0.5)' })
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
