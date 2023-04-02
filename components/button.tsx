import React, {ReactNode} from "react";

interface IconProps {
    children: ReactNode,
    href: string
}
export default class Button extends React.Component<IconProps> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return(
           <a href={this.props.href} className={"overflow-hidden transition-all h-[68px] md:h-20 duration-300 ease-in-out flex group items-center bg-blue-500 hover:bg-[#00D990] focus:bg-[#00AE73] pl-6 py-1.5 pr-1.5 md:pl-8 md:py-2 md:pr-2 hover:py-0 hover:pr-0 rounded-[56px]"}>
               <span className={`z-10 md:mr-[20px] mr-[12px]  group-hover:-mr-4 md:group-hover:-mr-2 transition-all duration-300 italic text-lg md:text-2xl leading-[28px] md:leading-[32px] font-display`}>{this.props.children}</span>
               <div className={"right-0 rounded-full bg-[#00D990] h-[56px] w-[56px] md:h-[64px] md:w-[64px] group-hover:h-20 group-hover:w-20 flex justify-center items-center transition-all duration-300 group-focus:bg-[#00AE73]"}>
                   <svg className={"w-[20px] h-[20px] md:w-[26.5px] md:h-[26.5px] group-hover:w-[16.52px] group-hover:h-[16.52px] md:group-hover:w-[23.12px] md:group-hover:h-[23.12px] ease-in-out transition-all duration-300"} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M26.7072 0.292922C27.0977 0.683446 27.0977 1.31661 26.7072 1.70714L12.0405 16.3738C11.65 16.7643 11.0168 16.7643 10.6263 16.3738C10.2358 15.9833 10.2358 15.3501 10.6263 14.9596L25.293 0.292922C25.6835 -0.0976027 26.3167 -0.0976027 26.7072 0.292922Z" fill="white"/>
                       <path d="M26.7072 0.292922C26.9814 0.567079 27.0723 0.975004 26.9406 1.33967L18.274 25.3397C18.2646 25.3657 18.2541 25.3914 18.2425 25.4166C18.1042 25.7184 17.8823 25.974 17.6029 26.1533C17.3236 26.3326 16.9987 26.4279 16.6668 26.4279C16.3349 26.4279 16.0099 26.3326 15.7306 26.1533C15.457 25.9777 15.2385 25.7289 15.0997 25.4353L10.5881 16.4121L1.56485 11.9004C1.27123 11.7616 1.02237 11.5431 0.846817 11.2695C0.667557 10.9902 0.572266 10.6653 0.572266 10.3334C0.572266 10.0015 0.667557 9.67653 0.846817 9.3972C1.02608 9.11787 1.28176 8.89587 1.5835 8.7576C1.6087 8.74605 1.63437 8.73556 1.66045 8.72614L25.6604 0.0594743C26.0251 -0.0722117 26.433 0.018764 26.7072 0.292922ZM2.98476 10.3743L11.7806 14.7723C11.9742 14.869 12.1311 15.026 12.2279 15.2195L16.6258 24.0154L24.3359 2.66417L2.98476 10.3743Z" fill="white"/>
                   </svg>
               </div>
           </a>
        );
    }
}
