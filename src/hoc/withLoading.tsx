import React from 'react'

interface WithLoadingProps {
    loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>): React.FC<P & WithLoadingProps> => ({ loading, ...props }: WithLoadingProps) => {
    return (
        loading ? <div>Loading...</div> : <Component {...props as P} />
    )
}

export default withLoading