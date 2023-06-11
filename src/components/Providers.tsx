"use client"
import {FC, ReactNode} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {MessagesProvider} from "@/context/messages";

interface ProviderProps{
    children: ReactNode
}
const Provider : FC<ProviderProps> = ({children}) => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <MessagesProvider>
                {children}
            </MessagesProvider>

        </QueryClientProvider>
    );
};

export default Provider ;



