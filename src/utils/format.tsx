import React from 'react';

function splitLines(text: string): string[] {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0);
}

function isBullet(line: string): boolean {
  return /^([-•–]|\d+\.)\s+/.test(line);
}

function isWarning(line: string): boolean {
  return /(সতর্ক|জরুরি|সতর্কতা|Warning|Emergency)/i.test(line);
}

export function renderFormatted(text: string): JSX.Element {
  const lines = splitLines(text);
  const bulletItems: string[] = [];
  const normalLines: string[] = [];

  for (const line of lines) {
    if (isBullet(line)) {
      bulletItems.push(line.replace(/^([-•–]|\d+\.)\s+/, ''));
    } else {
      normalLines.push(line);
    }
  }

  // If there are no explicit bullets, try to create bullets from sentences (except the first line)
  let autoBullets: string[] = [];
  if (bulletItems.length === 0 && normalLines.length > 1) {
    autoBullets = normalLines.slice(1).flatMap(l => l.split(/(?<=[.!?।])\s+/).filter(s => s.trim().length > 0));
  }

  const title = normalLines.length > 0 ? normalLines[0] : undefined;
  const paragraphs = normalLines.length > 1 ? [normalLines[1]] : [];

  const warnings = lines.filter(isWarning);

  return (
    <div className="space-y-3">
      {title && (
        <div className="font-semibold text-gray-900">
          {title}
        </div>
      )}

      {paragraphs.length > 0 && (
        <div className="text-sm text-gray-700 leading-relaxed">
          {paragraphs.join(' ')}
        </div>
      )}

      {(bulletItems.length > 0 || autoBullets.length > 0) && (
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
          {(bulletItems.length > 0 ? bulletItems : autoBullets).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      {warnings.length > 0 && (
        <div className="space-y-2">
          {warnings.map((w, i) => (
            <div key={i} className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg p-2">
              {w}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


