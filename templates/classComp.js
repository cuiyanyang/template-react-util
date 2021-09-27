const indexFile = (fileName) => {
    return `import ${fileName} from './${fileName}';

export default ${fileName};
`;
}

const CompFile = fileName => {
    return `import React, { PureComponent } from 'react';
import styles from './${fileName}.less';

class ${fileName} extends PureComponent{

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={styles.root}>
                内容
            </div>
        );
    };
};

export default ${fileName};
`
}

const CompLessFile = () => {
    return `.root {

}
`
}

module.exports = {
    indexFile,
    CompFile,
    CompLessFile
}
