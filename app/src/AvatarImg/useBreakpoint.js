import useMediaQuery from '@mui/material/useMediaQuery';

export const useBreakpoint = (query) => {
    return useMediaQuery(query);
}
