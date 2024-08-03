import React from 'react';

const SectionTitle = ({children, className, pageTitle}) => {
    return (
        <div>
            <h1 className={` ${pageTitle ? 'text-[32px]': 'lg:text-5xl md:text-4xl text-2xl'} text-heading font-dela lg:leading-[70px] tracking-tight ${className}`}>{children}</h1>
        </div>
    );
};

export default SectionTitle;