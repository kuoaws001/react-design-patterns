// HOC(高階組件) 可以接收一個或多個參數，參數可以是 component ，並且最後 return 一個新的 component
// HOC 最好是能遵循 functional programming (FP)的原則，設計成 pure 沒有其他副作用的元件

import React, { Component } from 'react'

interface WithLoadingProps {
    loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>): React.FC<P & WithLoadingProps> => ({ loading, ...props }: WithLoadingProps) => {
    return (
        loading ? <div>Loading...</div> : <Component {...props as P} />
    )
}

export default withLoading