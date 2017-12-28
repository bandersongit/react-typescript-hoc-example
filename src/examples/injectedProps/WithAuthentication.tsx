import * as React from 'react';

export interface WithAuthentication {
    isLoggedIn: boolean;
}

export default function<T>(Component: React.ComponentType<T>) : React.ComponentClass<T & WithAuthentication> {
    return class extends React.PureComponent<T & WithAuthentication>{
        static displayName = `WithSubscription${Component.displayName || Component.name || "Component"}`

        render() {
            return this.props.isLoggedIn
                ? <Component {...this.props} />
                : null;
        }
    };
}