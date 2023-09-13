import { RefObject, useEffect } from 'react';

export function useClickAway(ref: RefObject<HTMLElement>, onClickAway: () => void) {
    useEffect(() => {
        const handleClickAway = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickAway();
            }
        };

        document.addEventListener('mousedown', handleClickAway);
        
        return () => {
            document.removeEventListener('mousedown', handleClickAway);
        };
    }, [ref, onClickAway]);
}