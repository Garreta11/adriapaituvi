"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react';

const transition = { duration: 3, ease: [0.43, 0.13, 0.23, 0.96] };

export const PageWrapper = ( {children} ) => {

    return(
        <AnimatePresence mode="wait">
            <div>
                {children}
            </div>
        </AnimatePresence>
    )
}