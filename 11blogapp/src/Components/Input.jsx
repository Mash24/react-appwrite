import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
   label,
   type = 'text',
   className = "",
   ...props}, 
   ref){
        const id = useId();
        return (
            <div className='w-full' >
                {label && (
                    <label htmlFor={id}>
                        className = 'inline-block mb-1 text-sm font-medium text-gray-900 dark:text-white'
                        {label}
                    </label>
                )}
                <input 
                type="text"
                ref={ref}
                {...props}
                id={id}
                />
            </div>
        )
   })


export default Input