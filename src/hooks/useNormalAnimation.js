import { useEffect } from 'react';

export function useNormalAnimation(ref) {
    useEffect(() => {
        const profile = ref.current;
        if (!profile) return;

        profile.classList.add('pre-enter');
        const enterTimeout = setTimeout(() => {
            profile.classList.add('on-enter');
        }, 450);

        return () => {
            clearTimeout(enterTimeout);
            profile.classList.remove('pre-enter', 'on-enter');
        };
    }, [ref]);
}