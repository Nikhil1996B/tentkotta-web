import { useEffect, useState } from 'react';

export const useMediaQuery = (query) => {
    const mediaMatch = window.matchMedia('(max-width: 768px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        window.addEventListener(mediaMatch, handler);
        return () => window.removeEventListener(mediaMatch, handler);
    });
    return matches;
};