import * as React from 'react';
import WithAuthentication from './WithAuthentication';

interface Props {
    message: string;
}

class Message extends React.PureComponent<Props> {
    render() {
        return <div>{this.props.message}</div>;
    }
}

export default WithAuthentication<Props>(Message);