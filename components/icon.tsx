
import React from "react";

interface IconProps {
    classNames: string
}
export default class Icon extends React.Component<IconProps> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return(

        <svg className={this.props.classNames}  width="9.58px" height="9.58px" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.68697 0.312951C7.88223 0.508213 7.88223 0.824795 7.68697 1.02006L1.0203 7.68672C0.825039 7.88199 0.508457 7.88199 0.313195 7.68672C0.117932 7.49146 0.117932 7.17488 0.313195 6.97962L6.97986 0.312951C7.17512 0.117688 7.49171 0.117688 7.68697 0.312951Z" fill="white"/>
            <path d="M0.833415 0.666504C0.833415 0.390362 1.05727 0.166504 1.33341 0.166504H7.33342C7.60956 0.166504 7.83342 0.390362 7.83342 0.666504V6.6665C7.83342 6.94265 7.60956 7.1665 7.33342 7.1665C7.05727 7.1665 6.83342 6.94265 6.83342 6.6665V1.1665H1.33341C1.05727 1.1665 0.833415 0.942646 0.833415 0.666504Z" fill="white"/>
        </svg>
    );
    }
}
