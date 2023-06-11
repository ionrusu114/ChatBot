import {FC} from "react";
interface ContentProps {
    url: string,
    title: string,
    subtitle: string,
    text: string
}
const Content : FC<ContentProps> = ({url,title,subtitle,text}) => {
    return (
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img
                            className="h-48 w-full object-cover md:h-full md:w-60"
                            src={url}
                            alt="Modern building architecture"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            {title}
                        </div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            {subtitle}
                        </a>
                        <p className="mt-2 text-slate-500">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default Content ;
