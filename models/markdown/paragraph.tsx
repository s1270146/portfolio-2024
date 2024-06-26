import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export const P = ({
    node,
    children
}:ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement> & ExtraProps) => {
    return <>{children}</>;
}